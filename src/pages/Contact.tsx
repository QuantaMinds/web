import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Send } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedDataTypes, setSelectedDataTypes] = useState<string[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDataTypeChange = (dataType: string, checked: boolean) => {
    if (checked) {
      setSelectedDataTypes(prev => [...prev, dataType]);
    } else {
      setSelectedDataTypes(prev => prev.filter(type => type !== dataType));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current!);
      formData.append('industry', selectedIndustry);
      formData.append('data_types', selectedDataTypes.join(', '));

      const res = await fetch("https://formsubmit.co/ajax/dhanush@quantamind.co", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        formRef.current?.reset();
        setSelectedIndustry('');
        setSelectedDataTypes([]);
        toast({
          title: "Application submitted successfully!",
          description: "Thank you for joining our Private AI Pilot Program. We'll be in touch soon.",
        });
        navigate("/thank-you");
      } else {
        toast({
          title: "Submission failed",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Unable to submit the form. Please try again later.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const dataTypes = [
    "Text Documents (e.g., reports, contracts, emails)",
    "Images or Video",
    "Structured Data (e.g., spreadsheets, database records)",
    "Sensor / Machine Data (e.g., ECG, equipment logs)",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pt-20 sm:pt-24 pb-8 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Join the Private AI Pilot Program
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Be among the first to experience secure, private AI solutions tailored for your industry.
            </p>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-lg border border-white/10 shadow-lg">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-4 sm:p-6 lg:p-8 space-y-6"
            >
              {/* Hidden FormSubmit fields */}
              <input type="hidden" name="_cc" value="Chirag.v.k2@gmail.com,aanyasampath1703@gmail.com" />
              <input type="hidden" name="_subject" value="New Private AI Pilot Program Application" />
              <input type="hidden" name="_template" value="table" />

              {/* Company Name */}
              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input id="company" name="company" required placeholder="Your company name" />
              </div>

              {/* Your Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Your Name *</Label>
                <Input id="name" name="name" required placeholder="Your full name" />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <Input id="email" name="email" type="email" required placeholder="your@email.com" />
              </div>

              {/* Industry */}
              <div className="space-y-2">
                <Label>What is your industry? *</Label>
                <Select onValueChange={setSelectedIndustry}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="legal">Legal</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="government">Government</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Challenge */}
              <div className="space-y-2">
                <Label htmlFor="challenge">Main Challenge *</Label>
                <p className="text-sm text-muted-foreground mb-1">
                  (e.g., "Securely analyze contracts" or "Predict machine failures.")
                </p>
                <Textarea
                  id="challenge"
                  name="challenge"
                  required
                  placeholder="Describe your main challenge..."
                  className="min-h-[120px]"
                />
              </div>

              {/* Data Types */}
              <div className="space-y-2">
                <Label>What type of data would the AI need to work with? *</Label>
                <p className="text-sm text-muted-foreground">(Select all that apply)</p>
                <div className="space-y-3">
                  {dataTypes.map((dataType) => (
                    <div key={dataType} className="flex items-start gap-3">
                      <Checkbox
                        id={dataType}
                        checked={selectedDataTypes.includes(dataType)}
                        onCheckedChange={(checked) => handleDataTypeChange(dataType, checked as boolean)}
                      />
                      <Label htmlFor={dataType} className="text-sm cursor-pointer">
                        {dataType}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Privacy Reason */}
              <div className="space-y-2">
                <Label htmlFor="privacy_reason">Why is a private, offline solution important?</Label>
                <Textarea
                  id="privacy_reason"
                  name="privacy_reason"
                  placeholder="Explain why privacy matters for your use case..."
                  className="min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-quantminds-grey hover:bg-quantminds-grey/90 text-white"
                  disabled={isSubmitting || !selectedIndustry || selectedDataTypes.length === 0}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="animate-spin h-4 w-4 border-2 border-white/30 border-t-white rounded-full" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" /> Submit Application
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Back to Homepage */}
          <div className="text-center mt-8">
            <Link to="/">
              <Button variant="outline">Back to Homepage</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
