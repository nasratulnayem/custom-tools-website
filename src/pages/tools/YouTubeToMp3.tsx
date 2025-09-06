import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Youtube, Music } from 'lucide-react';

const YouTubeToMp3 = () => {
  const [url, setUrl] = useState('');
  const [isConverting, setIsConverting] = useState(false);

  const handleConvert = async () => {
    if (!url) return;
    setIsConverting(true);
    // Simulate conversion process
    setTimeout(() => {
      setIsConverting(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold gradient-text mb-4">YouTube to MP3</h1>
          <p className="text-xl text-muted-foreground">Convert YouTube videos to high-quality MP3 audio files</p>
        </div>

        <Card className="glass-card mb-8 animate-scale-in">
          <CardHeader className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
              <Music className="w-10 h-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Convert YouTube to MP3</CardTitle>
            <CardDescription>
              Paste your YouTube URL below and convert it to MP3 format
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
                  <>Converting...</>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Convert
                  </>
                )}
              </Button>
            </div>

            {isConverting && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Converting your video to MP3...</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <Youtube className="w-8 h-8 text-primary mb-2" />
              <CardTitle>High Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Get the best audio quality with our advanced conversion technology</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Download className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Fast Conversion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Convert your videos in seconds with our optimized servers</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Music className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Multiple Formats</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Support for various audio qualities and formats</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default YouTubeToMp3;