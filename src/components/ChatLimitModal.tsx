import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Link } from 'react-router-dom';

interface ChatLimitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatLimitModal: React.FC<ChatLimitModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Chat Limit Reached</DialogTitle>
          <DialogDescription>
            You've reached your limit of 3 free chat interactions. To continue using our advanced AI tools, please contact our sales team for pricing and enterprise features.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button asChild>
            <Link to="/contact">Contact Sales</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatLimitModal;