import { useState, useCallback } from 'react';
import { toast } from 'sonner';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T>() {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(async (
    apiCall: () => Promise<T>,
    options?: {
      showSuccessToast?: boolean;
      successMessage?: string;
      showErrorToast?: boolean;
      onSuccess?: (data: T) => void;
      onError?: (error: string) => void;
    }
  ) => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const result = await apiCall();
      setState({ data: result, loading: false, error: null });

      if (options?.showSuccessToast) {
        toast.success(options.successMessage || 'Operation successful');
      }

      options?.onSuccess?.(result);
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setState(prev => ({ ...prev, loading: false, error: errorMessage }));

      if (options?.showErrorToast !== false) {
        toast.error(errorMessage);
      }

      options?.onError?.(errorMessage);
      throw error;
    }
  }, []);

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return {
    ...state,
    execute,
    reset,
  };
}