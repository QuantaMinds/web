// src/components/ChatBot.tsx
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import { toast } from "sonner";
import { chatApi } from "@/services/apiService";
interface ChatMessage {
  text: string;
  sender: "user" | "bot";
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen((o) => !o);

  const sendMessageApi = async (e: React.FormEvent) => {
    alert("Sending message to API...");
    e.preventDefault();
    const userText = input.trim();
    if (!userText) return;

    setMessages((prev) => [...prev, { text: userText, sender: "user" }]);
    setInput("");
    setIsLoading(true);

    try {
      const res: string = await chatApi.sendMessage(
        userText,
        "lease_split" // Adjust as needed
      );
      const data: string = res;

      if (!res) {
        throw new Error("Server error");
      }

      setMessages((prev) => [...prev, { text: data, sender: "bot" }]);
    } catch (err: unknown) {
      let message =
        "I'm having trouble connecting right now. Please try again later.";
      if (err instanceof Error) {
        console.error("Error sending message:", err);
        message = err.message;
      } else {
        console.error("Non-Error thrown:", err);
      }
      toast.error(message);
      setMessages((prev) => [
        ...prev,
        {
          text: "I'm having trouble connecting right now. Please try again later.",
          sender: "bot",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const scheduleMeeting = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/schedule-meeting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          summary: "Free Consultation",
          description: "Scheduled via chat",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Server error");
      }

      toast.success("Meeting request submitted successfully!");
      setMessages((prev) => [...prev, { text: data.message, sender: "bot" }]);
    } catch (err: unknown) {
      let message = "Couldn't schedule your meeting. Please try again later.";
      if (err instanceof Error) {
        console.error("Error scheduling meeting:", err);
        message = err.message;
      } else {
        console.error("Non-Error thrown:", err);
      }
      toast.error(message);
      setMessages((prev) => [
        ...prev,
        {
          text: "Couldn't schedule your meeting. Please try again later.",
          sender: "bot",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <Card className="w-80 md:w-96 shadow-xl flex flex-col h-96 border border-quantminds-purple/30 animate-scale-in">
          <div className="flex justify-between items-center p-4 border-b bg-gradient-to-r from-quantminds-purple/90 to-quantminds-blue/90 text-white rounded-t-lg">
            <h3 className="font-semibold">QuantaMind Chat</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleChat}
              className="text-white hover:bg-white/20"
            >
              <X size={18} />
            </Button>
          </div>

          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-quantminds-purple/80 text-white rounded-tr-none"
                      : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t">
            <form onSubmit={sendMessageApi} className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-grow"
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading}
                className="bg-quantminds-purple hover:bg-quantminds-purple/90"
              >
                {isLoading ? (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <Send size={18} />
                )}
              </Button>
            </form>
            <div className="mt-3 text-center">
              <button
                onClick={scheduleMeeting}
                className="text-xs text-quantminds-purple hover:underline"
                disabled={isLoading}
              >
                Schedule a demo meeting
              </button>
            </div>
          </div>
        </Card>
      ) : (
        <Button
          onClick={toggleChat}
          className="rounded-full h-14 w-14 bg-gradient-to-r from-quantminds-purple to-quantminds-blue hover:opacity-90 shadow-lg flex items-center justify-center animate-bounce-subtle"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatBot;
