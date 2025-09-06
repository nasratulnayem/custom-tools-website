import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Youtube, Video } from 'lucide-react';

const YouTubeToMp4 = () => {
  const [url, setUrl] = useState('');
  const [isConverting, setIsConverting] = useState(false);

  const handleConvert = async () => {
    if (!url) return;
    setIsConverting(true);
    setTimeout(() => {
      setIsConverting(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold gradient-text mb-4">YouTube to MP4</h1>
          <p className="text-xl text-muted-foreground">Download YouTube videos in high-quality MP4 format</p>
        </div>

        <Card className="glass-card mb-8 animate-scale-in">
          <CardHeader className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
              <Video className="w-10 h-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Download YouTube Videos</CardTitle>
            <CardDescription>
              Enter YouTube URL to download in MP4 format
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
                onClick={handleConvert}
                disabled={!url || isConverting}
                className="btn-futuristic bg-gradient-to-r from-primary to-primary-glow"
              >
                {isConverting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </>
                )}
              </Button>
            </div>

            {isConverting && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Processing your video download...</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <Youtube className="w-8 h-8 text-primary mb-2" />
              <CardTitle>HD Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Download videos in up to 4K resolution with crystal clear quality</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Download className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Fast Download</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Lightning-fast downloads with our optimized servers</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Video className="w-8 h-8 text-primary mb-2" />
              <CardTitle>All Formats</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Support for multiple video qualities and formats</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default YouTubeToMp4;