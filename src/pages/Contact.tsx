import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  MessageCircle, 
  Send, 
  Twitter, 
  Github,
  HelpCircle,
  Bug,
  Lightbulb
} from 'lucide-react';

const contactOptions = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get help with technical issues or general questions',
    action: 'support@mediasaver.app',
    color: 'primary',
  },
  {
    icon: Twitter,
    title: 'Twitter',
    description: 'Follow us for updates and quick support',
    action: '@mediasaver',
    color: 'secondary',
  },
  {
    icon: Github,
    title: 'GitHub',
    description: 'Report bugs or contribute to our project',
    action: 'github.com/mediasaver',
    color: 'accent',
  },
];

const issueTypes = [
  { icon: Bug, label: 'Bug Report', value: 'bug' },
  { icon: Lightbulb, label: 'Feature Request', value: 'feature' },
  { icon: HelpCircle, label: 'General Question', value: 'question' },
  { icon: MessageCircle, label: 'Feedback', value: 'feedback' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'question',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        type: 'question',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions, feedback, or need support? We're here to help and would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Options */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">How to Reach Us</h2>
            
            {contactOptions.map((option) => (
              <Card key={option.title} className="glass-card p-6 hover-lift cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-${option.color} flex items-center justify-center flex-shrink-0`}>
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{option.title}</h3>
                    <p className="text-muted-foreground text-sm">{option.description}</p>
                    <p className="text-primary text-sm font-medium">{option.action}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* FAQ Link */}
            <Card className="glass-card p-6 border-dashed">
              <div className="text-center space-y-3">
                <HelpCircle className="w-8 h-8 mx-auto text-primary" />
                <h3 className="font-semibold">Frequently Asked Questions</h3>
                <p className="text-muted-foreground text-sm">
                  Check our FAQ section for quick answers to common questions.
                </p>
                <Button variant="outline" size="sm">
                  View FAQ
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Send us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                {/* Issue Type Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">What can we help you with?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {issueTypes.map((type) => (
                      <div
                        key={type.value}
                        className={`p-3 border rounded-lg cursor-pointer transition-all hover:border-primary/50 ${
                          formData.type === type.value
                            ? 'border-primary bg-primary/5'
                            : 'border-border'
                        }`}
                        onClick={() => handleInputChange('type', type.value)}
                      >
                        <div className="flex items-center space-x-2">
                          <type.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{type.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name *</label>
                    <Input
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject *</label>
                  <Input
                    placeholder="Brief description of your inquiry"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message *</label>
                  <Textarea
                    placeholder="Please provide as much detail as possible..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Response Time Info */}
        <div className="mt-12 text-center">
          <Card className="glass-card p-6 max-w-2xl mx-auto">
            <div className="space-y-3">
              <h3 className="font-semibold">Response Times</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-medium text-primary">General Inquiries</div>
                  <div className="text-muted-foreground">Within 24 hours</div>
                </div>
                <div>
                  <div className="font-medium text-primary">Technical Support</div>
                  <div className="text-muted-foreground">Within 12 hours</div>
                </div>
                <div>
                  <div className="font-medium text-primary">Bug Reports</div>
                  <div className="text-muted-foreground">Within 6 hours</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}