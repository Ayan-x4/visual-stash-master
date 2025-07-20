import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy, Download, Search, Settings } from 'lucide-react';

const steps = [
  {
    step: 1,
    icon: Copy,
    title: 'Copy URL',
    description: 'Copy the link of the video or photo you want to download from YouTube or Instagram.',
    details: 'Simply go to the video or post, copy the URL from your browser\'s address bar.',
  },
  {
    step: 2,
    icon: Search,
    title: 'Paste & Analyze',
    description: 'Paste the URL into our downloader and let us analyze the media content.',
    details: 'Our system will automatically detect the platform and fetch all available media information.',
  },
  {
    step: 3,
    icon: Settings,
    title: 'Choose Quality',
    description: 'Select your preferred quality and format from the available options.',
    details: 'We offer multiple quality options including HD, audio-only, and original resolutions.',
  },
  {
    step: 4,
    icon: Download,
    title: 'Download',
    description: 'Click download and save the media to your device instantly.',
    details: 'Your download will start immediately and be saved to your default downloads folder.',
  },
];

const platforms = [
  {
    name: 'YouTube',
    features: ['Videos up to 4K quality', 'Audio extraction (MP3)', 'Playlists support', 'Shorts support'],
    color: 'red-500',
  },
  {
    name: 'Instagram',
    features: ['Photos & Videos', 'Stories download', 'Reels support', 'Carousel posts'],
    color: 'pink-500',
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">How It Works</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download your favorite content in just 4 simple steps. It's fast, easy, and completely free.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step) => (
            <Card key={step.step} className="glass-card p-6 text-center hover-lift">
              <div className="space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  <p className="text-xs text-muted-foreground">{step.details}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Supported Platforms */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Supported Platforms</h2>
            <p className="text-muted-foreground">
              We support the most popular social media platforms with comprehensive features.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {platforms.map((platform) => (
              <Card key={platform.name} className="glass-card p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-${platform.color} rounded-lg flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">
                        {platform.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold">{platform.name}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {platform.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="justify-center py-2">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Get answers to the most common questions about MediaSaver.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                q: 'Is MediaSaver free to use?',
                a: 'Yes! MediaSaver is completely free to use with no hidden charges or subscription fees.',
              },
              {
                q: 'What quality options are available?',
                a: 'We offer multiple quality options from 480p to 4K for videos, and original resolution for images.',
              },
              {
                q: 'Is it safe to use MediaSaver?',
                a: 'Absolutely! We don\'t store your downloads or personal information. Everything is processed securely.',
              },
              {
                q: 'Can I download private content?',
                a: 'No, MediaSaver only works with publicly available content that respects platform terms of service.',
              },
            ].map((faq, index) => (
              <Card key={index} className="glass-card p-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">{faq.q}</h4>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}