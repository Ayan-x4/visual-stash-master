import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Download, 
  Youtube, 
  Instagram, 
  Loader2, 
  Play, 
  Image as ImageIcon,
  Music,
  Video,
  FileImage
} from 'lucide-react';

interface MediaInfo {
  id: string;
  title: string;
  thumbnail: string;
  duration?: string;
  views?: string;
  platform: 'youtube' | 'instagram';
  type: 'video' | 'image' | 'carousel';
  downloadOptions: {
    quality: string;
    format: string;
    size: string;
  }[];
}

export const MediaDownloader = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mediaInfo, setMediaInfo] = useState<MediaInfo | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const { toast } = useToast();

  const detectPlatform = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return 'youtube';
    }
    if (url.includes('instagram.com')) {
      return 'instagram';
    }
    return null;
  };

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    const platform = detectPlatform(url);
    if (!platform) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid YouTube or Instagram URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock data based on platform
      const mockData: MediaInfo = platform === 'youtube' ? {
        id: '1',
        title: 'Amazing Tech Tutorial - Complete Guide 2024',
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
        duration: '12:34',
        views: '1.2M views',
        platform: 'youtube',
        type: 'video',
        downloadOptions: [
          { quality: '1080p', format: 'MP4', size: '245 MB' },
          { quality: '720p', format: 'MP4', size: '156 MB' },
          { quality: '480p', format: 'MP4', size: '98 MB' },
          { quality: 'Audio Only', format: 'MP3', size: '12 MB' },
        ]
      } : {
        id: '2',
        title: 'Beautiful Nature Photography Collection',
        thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400',
        platform: 'instagram',
        type: 'carousel',
        downloadOptions: [
          { quality: 'Original', format: 'JPG', size: '2.3 MB' },
          { quality: 'High', format: 'JPG', size: '1.8 MB' },
          { quality: 'Medium', format: 'JPG', size: '890 KB' },
        ]
      };

      setMediaInfo(mockData);
      setSelectedOption(mockData.downloadOptions[0].quality);
      setIsLoading(false);
      
      toast({
        title: "Media detected!",
        description: `Found ${platform} ${mockData.type}. Choose your download options below.`,
      });
    }, 2000);
  };

  const handleDownload = () => {
    if (!selectedOption || !mediaInfo) return;

    toast({
      title: "Download started!",
      description: `Downloading ${mediaInfo.title} in ${selectedOption} quality.`,
    });

    // Simulate download
    setTimeout(() => {
      toast({
        title: "Download complete!",
        description: "Your file has been saved to your downloads folder.",
      });
    }, 3000);
  };

  const getPlatformIcon = (platform: 'youtube' | 'instagram') => {
    return platform === 'youtube' ? 
      <Youtube className="w-5 h-5" /> : 
      <Instagram className="w-5 h-5" />;
  };

  const getTypeIcon = (type: 'video' | 'image' | 'carousel') => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'image': return <ImageIcon className="w-4 h-4" />;
      case 'carousel': return <FileImage className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* URL Input */}
      <Card className="glass-card p-6">
        <form onSubmit={handleUrlSubmit} className="space-y-4">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Paste Media URL</h2>
            <p className="text-muted-foreground">
              Support for YouTube and Instagram videos, photos, and carousels
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Input
              type="url"
              placeholder="https://youtube.com/watch?v=... or https://instagram.com/p/..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              disabled={isLoading || !url.trim()}
              className="bg-gradient-primary hover:opacity-90 min-w-[120px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Fetching...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Fetch Media
                </>
              )}
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Youtube className="w-3 h-3" />
              <span>YouTube</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Instagram className="w-3 h-3" />
              <span>Instagram</span>
            </Badge>
          </div>
        </form>
      </Card>

      {/* Media Preview & Download Options */}
      {mediaInfo && (
        <Card className="glass-card p-6 animate-fade-in">
          <div className="space-y-6">
            {/* Media Info */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="relative group cursor-pointer">
                  <img
                    src={mediaInfo.thumbnail}
                    alt={mediaInfo.title}
                    className="w-full md:w-48 h-32 object-cover rounded-lg"
                  />
                  {mediaInfo.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg group-hover:bg-black/50 transition-colors">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  )}
                  {mediaInfo.duration && (
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {mediaInfo.duration}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold line-clamp-2">{mediaInfo.title}</h3>
                  <div className="flex items-center space-x-2 ml-4">
                    <Badge variant="outline" className="flex items-center space-x-1">
                      {getPlatformIcon(mediaInfo.platform)}
                      <span className="capitalize">{mediaInfo.platform}</span>
                    </Badge>
                    <Badge variant="outline" className="flex items-center space-x-1">
                      {getTypeIcon(mediaInfo.type)}
                      <span className="capitalize">{mediaInfo.type}</span>
                    </Badge>
                  </div>
                </div>
                
                {mediaInfo.views && (
                  <p className="text-muted-foreground text-sm">{mediaInfo.views}</p>
                )}

                {/* Download Options */}
                <div className="space-y-4">
                  <h4 className="font-medium">Choose Quality:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {mediaInfo.downloadOptions.map((option) => (
                      <div
                        key={option.quality}
                        className={`p-3 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                          selectedOption === option.quality
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedOption(option.quality)}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{option.quality}</span>
                          {option.format === 'MP3' && <Music className="w-4 h-4 text-primary" />}
                          {option.format === 'MP4' && <Video className="w-4 h-4 text-primary" />}
                          {option.format === 'JPG' && <ImageIcon className="w-4 h-4 text-primary" />}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          <div>{option.format}</div>
                          <div>{option.size}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="flex justify-center">
              <Button
                onClick={handleDownload}
                disabled={!selectedOption}
                className="bg-gradient-primary hover:opacity-90 px-8 py-3 text-lg animate-glow"
              >
                <Download className="w-5 h-5 mr-2" />
                Download {selectedOption}
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};