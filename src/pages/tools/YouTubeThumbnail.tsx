import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Image, Youtube } from 'lucide-react';

const YouTubeThumbnail = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGetThumbnail = async () => {
    if (!url) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold gradient-text mb-4">YouTube Thumbnail Downloader</h1>
          <p className="text-xl text-muted-foreground">Download high-quality thumbnails from any YouTube video</p>
        </div>

        <Card className="glass-card mb-8 animate-scale-in">
          <CardHeader className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
              <Image className="w-10 h-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Get YouTube Thumbnails</CardTitle>
            <CardDescription>
              Extract thumbnails in various sizes from YouTube videos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-4">
              <Input
                type="url"
                placeholder="https://www.youtube.com/watch?v=..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={handleGetThumbnail}
                disabled={!url || isLoading}
                className="btn-futuristic bg-gradient-to-r from-primary to-primary-glow"
              >
                {isLoading ? (
                  <>Loading...</>
                ) : (
                  <>
                    <Image className="w-4 h-4 mr-2" />
                    Get Thumbnail
                  </>
                )}
              </Button>
            </div>

            {isLoading && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Extracting thumbnails...</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <Youtube className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Multiple Sizes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Get thumbnails in small, medium, large, and HD sizes</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Download className="w-8 h-8 text-primary mb-2" />
              <CardTitle>One-Click Download</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Download thumbnails instantly with a single click</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Image className="w-8 h-8 text-primary mb-2" />
              <CardTitle>High Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Get original quality thumbnails without compression</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default YouTubeThumbnail;