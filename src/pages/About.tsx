import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FeatureCard } from '@/components/FeatureCard';
import { 
  Shield, 
  Zap, 
  Heart, 
  Users, 
  Award, 
  Globe,
  Download,
  Star
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Advanced algorithms ensure the fastest possible download speeds with optimal performance.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'We prioritize your privacy. No data collection, no tracking, no storage of your downloads.',
  },
  {
    icon: Globe,
    title: 'Universal Access',
    description: 'Works on all devices and browsers. No software installation required.',
  },
  {
    icon: Heart,
    title: 'User-Focused',
    description: 'Designed with love for content creators and social media enthusiasts.',
  },
];

const stats = [
  { number: '10M+', label: 'Downloads' },
  { number: '500K+', label: 'Happy Users' },
  { number: '99.9%', label: 'Uptime' },
  { number: '24/7', label: 'Support' },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-20">
          <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center animate-float">
            <Download className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">About MediaSaver</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate about making social media content accessible. MediaSaver was created to provide 
            a simple, fast, and secure way to download and preserve your favorite videos and photos.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card p-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="space-y-12 mb-20">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Why Choose MediaSaver?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've built MediaSaver with the latest technology to provide the best user experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                In today's digital age, social media content is more valuable than ever. From educational 
                videos to inspiring photos, there's so much content worth preserving and sharing.
              </p>
              <p>
                MediaSaver bridges the gap between content consumption and content preservation, giving 
                users the power to save what matters most to them.
              </p>
              <p>
                We believe in responsible downloading that respects creators' rights and platform 
                guidelines while empowering users with the tools they need.
              </p>
            </div>
          </div>

          <Card className="glass-card p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold">Our Commitment</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Quality First</div>
                    <div className="text-sm text-muted-foreground">
                      We ensure the highest quality downloads with no compression or quality loss.
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Community Driven</div>
                    <div className="text-sm text-muted-foreground">
                      Our features are developed based on user feedback and community needs.
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Privacy Protected</div>
                    <div className="text-sm text-muted-foreground">
                      Your privacy is our priority. We don't track, store, or share your data.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Technology Stack */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Built with Modern Technology</h2>
            <p className="text-muted-foreground">
              We use cutting-edge technologies to deliver a fast, reliable, and secure experience.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 
              'Python', 'yt-dlp', 'Cloud Infrastructure', 'SSL Security'
            ].map((tech) => (
              <Badge key={tech} variant="secondary" className="px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}