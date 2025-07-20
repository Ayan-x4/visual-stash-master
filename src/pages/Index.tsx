import { MediaDownloader } from '@/components/MediaDownloader';
import { FeatureCard } from '@/components/FeatureCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Shield, 
  Zap, 
  Heart, 
  Youtube, 
  Instagram,
  ChevronDown,
  Play,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Download videos and photos in seconds with our optimized servers.',
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'No malware, no ads, no tracking. Your privacy is our priority.',
  },
  {
    icon: Heart,
    title: 'Always Free',
    description: 'Unlimited downloads without any hidden costs or subscriptions.',
  },
  {
    icon: Download,
    title: 'High Quality',
    description: 'Download in original quality up to 4K resolution and lossless audio.',
  },
];

const Index = () => {
  const scrollToDownloader = () => {
    document.getElementById('downloader')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Hero Badges */}
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="flex items-center space-x-1">
                <Youtube className="w-3 h-3" />
                <span>YouTube</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-1">
                <Instagram className="w-3 h-3" />
                <span>Instagram</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-1">
                <Sparkles className="w-3 h-3" />
                <span>Free Forever</span>
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Download Your Favorite{' '}
                <span className="gradient-text">Social Media</span>{' '}
                Content
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Save videos, photos, and audio from YouTube and Instagram in high quality. 
                Fast, free, and secure - no registration required.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 px-8 py-4 text-lg animate-glow"
                onClick={scrollToDownloader}
              >
                <Download className="w-5 h-5 mr-2" />
                Start Downloading
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                See How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">10M+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">500K+</div>
                <div className="text-sm text-muted-foreground">Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground">Free</div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-8">
              <ChevronDown 
                className="w-6 h-6 mx-auto text-muted-foreground animate-bounce cursor-pointer" 
                onClick={scrollToDownloader}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Downloader Section */}
      <div id="downloader" className="py-16">
        <div className="container mx-auto px-4">
          <MediaDownloader />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose MediaSaver?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've built the most reliable and user-friendly social media downloader.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground">
              Join millions of users who trust MediaSaver for their downloading needs.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 px-8 py-4 text-lg"
              onClick={scrollToDownloader}
            >
              <Download className="w-5 h-5 mr-2" />
              Start Downloading Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
