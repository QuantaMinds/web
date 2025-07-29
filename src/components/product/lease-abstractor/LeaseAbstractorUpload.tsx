import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from 'react-router-dom';
import { Upload, FileText, ArrowLeft, AlertTriangle } from 'lucide-react';

const LeaseAbstractorUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

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
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFile = async (file: File) => {
    if (file.type !== 'application/pdf') {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file.",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 10MB.",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    
    // Simulate upload and processing
    setTimeout(() => {
      toast({
        title: "Upload successful!",
        description: "Your lease is being processed...",
      });
      
      // Navigate to chat interface with mock data
      navigate('/product/lease-abstractor/analyze', { 
        state: { 
          filename: file.name,
          size: file.size 
        }
      });
    }, 2000);
  };

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link to="/product" className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Product Tools
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-quantminds-grey/20 flex items-center justify-center">
            <FileText className="w-10 h-10 text-quantminds-grey" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Lease Abstractor
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Extract key terms, dates, and conditions from your commercial lease agreements in seconds.
          </p>
        </div>

        {/* Critical Disclaimer */}
        <Card className="bg-amber-900/20 backdrop-blur-sm border-amber-500/30 mb-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-400 mt-1" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-amber-300">
                  For Demonstration Purposes Only
                </h3>
                <p className="text-amber-100/90 leading-relaxed">
                  <strong>Please do not upload any sensitive or confidential documents to this public tool.</strong>
                </p>
                <p className="text-amber-100/80 leading-relaxed">
                  This demo shows you the power of our AI. To analyze your real, mission-critical documents with complete privacy and control, contact us to deploy the Enterprise version inside your own secure, offline environment (On-Prem, VPC, or Air-Gapped).
                </p>
                <div className="pt-2">
                  <Link to="/contact">
                    <Button variant="outline" className="bg-amber-400/10 border-amber-400/30 text-amber-300 hover:bg-amber-400/20 hover:border-amber-400/50">
                      Contact Us for Enterprise
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upload Card */}
        <Card className="bg-black/20 backdrop-blur-sm border-white/10 mb-8">
          <CardHeader className="text-center">
            <CardTitle>Upload Your Lease Document</CardTitle>
            <CardDescription>
              Drag and drop your PDF lease agreement below or click to browse
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div
              className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
                dragActive
                  ? 'border-quantminds-grey bg-quantminds-grey/10'
                  : 'border-white/20 hover:border-white/40'
              } ${uploading ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => !uploading && document.getElementById('fileInput')?.click()}
            >
              <input
                type="file"
                id="fileInput"
                accept=".pdf"
                onChange={handleFileInput}
                className="hidden"
                disabled={uploading}
              />
              
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-quantminds-grey/20 flex items-center justify-center">
                  <Upload className={`w-8 h-8 ${uploading ? 'animate-bounce' : ''} text-quantminds-grey`} />
                </div>
                
                <div>
                  <p className="text-lg font-medium mb-2">
                    {uploading ? 'Processing your document...' : 'Drop your PDF lease here'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {uploading ? 'This may take a few moments' : 'or click to browse files'}
                  </p>
                </div>
                
                {!uploading && (
                  <Button variant="outline" className="mt-4">
                    Browse Files
                  </Button>
                )}
                
                {uploading && (
                  <div className="w-full bg-white/10 rounded-full h-2 mt-4">
                    <div className="bg-quantminds-grey h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Policy Link */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            By uploading, you agree to our{' '}
            <Link to="/privacy-policy" className="text-quantminds-grey hover:text-quantminds-grey/80 underline">
              Privacy Policy
            </Link>
            {' '}and{' '}
            <Link to="/terms-of-service" className="text-quantminds-grey hover:text-quantminds-grey/80 underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeaseAbstractorUpload;
