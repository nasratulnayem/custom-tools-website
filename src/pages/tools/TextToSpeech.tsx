import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Volume2 } from 'lucide-react';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!text.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold gradient-text mb-4">Text to Speech</h1>
          <p className="text-xl text-muted-foreground">Convert your text into natural-sounding speech</p>
        </div>

        <Card className="glass-card mb-8 animate-scale-in">
          <CardHeader className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
              <Volume2 className="w-10 h-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Generate Speech from Text</CardTitle>
            <CardDescription>
              Enter your text and convert it to high-quality audio
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Textarea
              placeholder="Enter your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[200px] resize-none"
            />

            <Button
              onClick={handleGenerate}
              disabled={!text.trim() || isGenerating}
              className="w-full btn-futuristic bg-gradient-to-r from-primary to-primary-glow"
            >
              {isGenerating ? (
                <>Generating...</>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Generate Speech
                </>
              )}
            </Button>

            {isGenerating && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Converting text to speech...</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <Volume2 className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Natural Voices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Choose from multiple realistic AI-generated voices</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Play className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Multiple Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Support for dozens of languages and accents</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Download className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Download Audio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Download generated speech as MP3 or WAV files</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeech;