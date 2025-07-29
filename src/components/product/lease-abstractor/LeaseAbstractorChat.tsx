
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation, Link } from 'react-router-dom';
import { Send, FileText, ArrowLeft, ExternalLink } from 'lucide-react';
import EnterpriseUpsell from '@/components/product/EnterpriseUpsell';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  highlights?: Array<{ page: number; text: string }>;
}

const LeaseAbstractorChat = () => {
  const location = useLocation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showUpsell, setShowUpsell] = useState(false);
  const [questionsAsked, setQuestionsAsked] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const filename = location.state?.filename || 'lease-agreement.pdf';

  // Mock AI responses
  const mockResponses: { [key: string]: string } = {
    'lease start': 'The lease commencement date is January 1, 2024, as specified in Section 2.1 of the agreement.',
    'rent': 'The base rent is $15,000 per month, with annual increases of 3% as outlined in the rent schedule.',
    'term': 'This is a 5-year lease term, commencing January 1, 2024 and ending December 31, 2028.',
    'tenant': 'The tenant is ABC Corporation, a Delaware corporation, as defined in the lease preamble.',
    'square feet': 'The leased premises consists of approximately 5,500 square feet of office space on the 3rd floor.',
    'default': 'I found several key details in your lease. The lease runs from January 1, 2024 to December 31, 2028, with base rent of $15,000/month and 3% annual increases. Would you like me to extract any specific information?'
  };

  const suggestedQuestions = [
    "What is the lease start date?",
    "What's the monthly rent amount?",
    "How long is the lease term?",
    "Who is the tenant?",
    "What's the square footage?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initial AI greeting
    const initialMessage: Message = {
      id: '1',
      text: `I've analyzed your lease document "${filename}". I can help you extract key information like dates, rent amounts, tenant details, and more. What would you like to know?`,
      sender: 'ai',
      timestamp: new Date()
    };
    setMessages([initialMessage]);
  }, [filename]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const query = inputValue.toLowerCase();
      let response = mockResponses.default;
      
      for (const [key, value] of Object.entries(mockResponses)) {
        if (query.includes(key)) {
          response = value;
          break;
        }
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'ai',
        timestamp: new Date(),
        highlights: [{ page: 1, text: 'Section 2.1' }]
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
      
      const newQuestionCount = questionsAsked + 1;
      setQuestionsAsked(newQuestionCount);
      
      // Show upsell after 3 questions
      if (newQuestionCount >= 3) {
        setTimeout(() => setShowUpsell(true), 2000);
      }
    }, 1500);
  };

  const handleQuestionClick = (question: string) => {
    setInputValue(question);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/product/lease-abstractor" className="text-muted-foreground hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-quantminds-grey" />
              <div>
                <h1 className="font-semibold">{filename}</h1>
                <p className="text-xs text-muted-foreground">Lease Analysis Active</p>
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Questions: {questionsAsked}/3 (Free Tier)
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* PDF Viewer Panel */}
        <div className="w-1/2 bg-black/10 border-r border-white/10 p-4">
          <Card className="h-full bg-white/5 border-white/10">
            <CardContent className="p-0 h-full">
              <div className="h-full flex items-center justify-center bg-gray-100 rounded">
                <div className="text-center text-gray-600">
                  <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-lg font-medium">PDF Viewer</p>
                  <p className="text-sm">Document: {filename}</p>
                  <p className="text-xs mt-2 text-gray-500">
                    (In production, this would show the actual PDF with highlighted sections)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chat Panel */}
        <div className="w-1/2 flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-quantminds-grey text-white'
                      : 'bg-black/20 backdrop-blur-sm border border-white/10'
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
                    <div className="w-2 h-2 bg-quantminds-grey rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-quantminds-grey rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-white/10">
              <p className="text-sm text-muted-foreground mb-3">Suggested questions:</p>
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
                placeholder="Ask about your lease..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isTyping || questionsAsked >= 3}
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={isTyping || !inputValue.trim() || questionsAsked >= 3}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            {questionsAsked >= 3 && (
              <p className="text-xs text-muted-foreground mt-2">
                Free tier limit reached. Upgrade for unlimited questions.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Enterprise Upsell Modal */}
      {showUpsell && <EnterpriseUpsell onClose={() => setShowUpsell(false)} />}
    </div>
  );
};

export default LeaseAbstractorChat;
