import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation, Link } from "react-router-dom";
import {
  Send,
  FileText,
  ArrowLeft,
  Upload,
  MessageCircle,
  Trash2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import ChatLimitModal from "@/components/ChatLimitModal";
import EnterpriseUpsell from "@/components/product/EnterpriseUpsell";
import { chatApi } from "@/services/apiService";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
  highlights?: Array<{ page: number; text: string }>;
}

interface queryResponse {
  response: string;
}

interface ChatSession {
  id: string;
  name: string;
  documents: Array<{ name: string; size: number }>;
  messages: Message[];
  timestamp: Date;
}

interface DocumentChatProps {
  toolName: string;
  toolIcon: React.ComponentType<{ className?: string }>;
  backPath: string;
  mockResponses: { [key: string]: string };
  suggestedQuestions: string[];
}

const DocumentChat: React.FC<DocumentChatProps> = ({
  toolName,
  toolIcon: ToolIcon,
  backPath,
  mockResponses,
  suggestedQuestions,
}) => {
  const location = useLocation();
  const { user, chatCount, incrementChatCount } = useAuth();
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showUpsell, setShowUpsell] = useState(false);
  const [showChatLimit, setShowChatLimit] = useState(false);
  const [questionsAsked, setQuestionsAsked] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const activeSession = sessions.find((s) => s.id === activeSessionId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeSession?.messages]);

  useEffect(() => {
    // If navigated from upload with a file, create initial session
    if (location.state?.filename && sessions.length === 0) {
      createNewSession([
        { name: location.state.filename, size: location.state.size || 0 },
      ]);
    }
  }, [location.state]);

  const createNewSession = (
    documents: Array<{ name: string; size: number }>
  ) => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      name: documents[0]?.name || "New Chat",
      documents,
      messages: [
        {
          id: "1",
          text: `I've analyzed your document${
            documents.length > 1 ? "s" : ""
          } "${documents
            .map((d) => d.name)
            .join(
              ", "
            )}". I can help you extract key information. What would you like to know?`,
          sender: "ai",
          timestamp: new Date(),
        },
      ],
      timestamp: new Date(),
    };

    setSessions((prev) => [newSession, ...prev]);
    setActiveSessionId(newSession.id);
    setQuestionsAsked(0);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    const validFiles = files.filter((file) => {
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a PDF file.`,
          variant: "destructive",
        });
        return false;
      }
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: `${file.name} is larger than 10MB.`,
          variant: "destructive",
        });
        return false;
      }
      return true;
    });

    if (validFiles.length > 0) {
      const documentData = validFiles.map((file) => ({
        name: file.name,
        size: file.size,
      }));
      createNewSession(documentData);
      toast({
        title: "Files uploaded successfully!",
        description: `${validFiles.length} document${
          validFiles.length > 1 ? "s" : ""
        } ready for analysis.`,
      });
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !activeSession) return;

    // Check if user has reached chat limit
    if (chatCount >= 3) {
      setShowChatLimit(true);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setSessions((prev) =>
      prev.map((session) =>
        session.id === activeSessionId
          ? { ...session, messages: [...session.messages, userMessage] }
          : session
      )
    );
    setInputValue("");
    setIsTyping(true);

    // Increment chat count for authenticated users
    incrementChatCount();

    const query: string = inputValue.toLowerCase();
    const res: queryResponse = await chatApi.sendMessage(
      { user_input: query, collection_name: "lease_split" }, // Adjust as needed
      true // <-- ensure cookies are sent
    );
    let response = res?.response;

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: response,
      sender: "ai",
      timestamp: new Date(),
      highlights: [{ page: 1, text: "Section 2.1" }],
    };

    setSessions((prev) =>
      prev.map((session) =>
        session.id === activeSessionId
          ? { ...session, messages: [...session.messages, aiMessage] }
          : session
      )
    );
    setIsTyping(false);

    const newQuestionCount = questionsAsked + 1;
    setQuestionsAsked(newQuestionCount);

    if (newQuestionCount >= 3) {
      setTimeout(() => setShowUpsell(true), 2000);
    }
  };

  const handleQuestionClick = (question: string) => {
    setInputValue(question);
  };

  const deleteSession = (sessionId: string) => {
    setSessions((prev) => prev.filter((s) => s.id !== sessionId));
    if (activeSessionId === sessionId) {
      setActiveSessionId(null);
      setQuestionsAsked(0);
    }
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-80 bg-black/20 backdrop-blur-sm border-r border-white/10 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-white/10">
          <Link
            to={backPath}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Product Tools
          </Link>
          <div className="flex items-center gap-3">
            <ToolIcon className="w-6 h-6 text-quantminds-grey" />
            <h1 className="font-semibold">{toolName}</h1>
          </div>
        </div>

        {/* Upload Area */}
        <div className="p-4 border-b border-white/10">
          <div
            className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300 cursor-pointer ${
              dragActive
                ? "border-quantminds-grey bg-quantminds-grey/10"
                : "border-white/20 hover:border-white/40"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              multiple
              onChange={handleFileInput}
              className="hidden"
            />
            <Upload className="w-8 h-8 mx-auto mb-2 text-quantminds-grey" />
            <p className="text-sm font-medium">Upload Documents</p>
            <p className="text-xs text-muted-foreground">
              PDF files only, max 10MB
            </p>
          </div>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">
              Chat History
            </h3>
            <div className="space-y-2">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  className={`p-3 rounded-lg cursor-pointer transition-all group ${
                    activeSessionId === session.id
                      ? "bg-quantminds-grey/20 border border-quantminds-grey/30"
                      : "bg-black/10 hover:bg-black/20 border border-transparent"
                  }`}
                  onClick={() => setActiveSessionId(session.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <MessageCircle className="w-4 h-4 text-quantminds-grey flex-shrink-0" />
                        <p className="text-sm font-medium truncate">
                          {session.name}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {session.documents.length} document
                        {session.documents.length > 1 ? "s" : ""}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {session.timestamp.toLocaleDateString()}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 h-6 w-6"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteSession(session.id);
                      }}
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {activeSession ? (
          <>
            {/* Chat Header */}
            <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-quantminds-grey" />
                  <div>
                    <h2 className="font-semibold">{activeSession.name}</h2>
                    <p className="text-xs text-muted-foreground">
                      {activeSession.documents.map((d) => d.name).join(", ")}
                    </p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Questions: {chatCount}/3 (Free Tier)
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {activeSession.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-quantminds-grey text-white"
                        : "bg-black/20 backdrop-blur-sm border border-white/10"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-quantminds-grey rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-quantminds-grey rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-quantminds-grey rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {activeSession.messages.length === 1 && (
              <div className="p-4 border-t border-white/10">
                <p className="text-sm text-muted-foreground mb-3">
                  Suggested questions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question) => (
                    <Button
                      key={question}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuestionClick(question)}
                      className="text-xs"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about your documents..."
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  disabled={isTyping || chatCount >= 3}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isTyping || !inputValue.trim() || chatCount >= 3}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              {chatCount >= 3 && (
                <p className="text-xs text-muted-foreground mt-2">
                  Free tier limit reached. Contact sales for unlimited access.
                </p>
              )}
            </div>
          </>
        ) : (
          // Empty state
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <ToolIcon className="w-16 h-16 mx-auto mb-4 text-quantminds-grey/50" />
              <h3 className="text-xl font-semibold mb-2">Start a New Chat</h3>
              <p className="text-muted-foreground mb-4">
                Upload documents to begin analyzing with AI
              </p>
              <Button onClick={() => fileInputRef.current?.click()}>
                <Upload className="w-4 h-4 mr-2" />
                Upload Documents
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Enterprise Upsell Modal */}
      {showUpsell && <EnterpriseUpsell onClose={() => setShowUpsell(false)} />}

      {/* Chat Limit Modal */}
      <ChatLimitModal
        isOpen={showChatLimit}
        onClose={() => setShowChatLimit(false)}
      />
    </div>
  );
};

export default DocumentChat;
