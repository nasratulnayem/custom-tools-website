import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Mic, FileText } from 'lucide-react';

const SpeechToText = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isTranscribing, setIsTranscribing] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleTranscribe = async () => {
    if (!file) return;
    setIsTranscribing(true);
    setTimeout(() => {
      setIsTranscribing(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold gradient-text mb-4">Speech to Text</h1>
          <p className="text-xl text-muted-foreground">Convert audio recordings to accurate text transcriptions</p>
        </div>

        <Card className="glass-card mb-8 animate-scale-in">
          <CardHeader className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
              <Mic className="w-10 h-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Transcribe Audio to Text</CardTitle>
            <CardDescription>
              Upload your audio file and get accurate text transcription
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="hidden"
                id="audio-upload"
              />
              <label htmlFor="audio-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium">Click to upload audio file</p>
                <p className="text-muted-foreground">MP3, WAV, M4A, and other formats supported</p>
              </label>
            </div>

            {file && (
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <Mic className="w-8 h-8 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <Button
                  onClick={handleTranscribe}
                  disabled={isTranscribing}
                  className="w-full btn-futuristic bg-gradient-to-r from-primary to-primary-glow"
                >
                  {isTranscribing ? 'Transcribing...' : 'Start Transcription'}
                </Button>
              </div>
            )}

            {isTranscribing && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Transcribing your audio file...</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <Mic className="w-8 h-8 text-primary mb-2" />
              <CardTitle>High Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">AI-powered transcription with industry-leading accuracy</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Multiple Formats</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Support for various audio formats and file sizes</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Upload className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Fast Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Quick transcription with real-time progress updates</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SpeechToText;