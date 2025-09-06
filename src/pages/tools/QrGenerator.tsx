import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode, Download, Link } from 'lucide-react';

const QrGenerator = () => {
  const [text, setText] = useState('');
  const [qrGenerated, setQrGenerated] = useState(false);

  const generateQR = () => {
    if (!text.trim()) return;
    setQrGenerated(true);
  };

  const downloadQR = () => {
    // QR download logic would go here
    console.log('Downloading QR code...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold gradient-text mb-4">QR Code Generator</h1>
          <p className="text-xl text-muted-foreground">Create QR codes for text, URLs, and more</p>
        </div>

        <Card className="glass-card mb-8 animate-scale-in">
          <CardHeader className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
              <QrCode className="w-10 h-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Generate QR Code</CardTitle>
            <CardDescription>
              Enter text or URL to create a QR code
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Text or URL
                </label>
                <Textarea
                  placeholder="Enter text, URL, or any content..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <Button
                onClick={generateQR}
                disabled={!text.trim()}
                className="w-full btn-futuristic bg-gradient-to-r from-primary to-primary-glow"
              >
                <QrCode className="w-4 h-4 mr-2" />
                Generate QR Code
              </Button>
            </div>

            {qrGenerated && (
              <div className="space-y-4 text-center">
                <div className="w-64 h-64 bg-white border rounded-lg mx-auto flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded flex items-center justify-center">
                    <QrCode className="w-32 h-32 text-primary" />
                  </div>
                </div>
                <Button
                  onClick={downloadQR}
                  variant="outline"
                  className="w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download QR Code
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <QrCode className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Multiple Formats</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Generate QR codes for text, URLs, contact info, and more</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Download className="w-8 h-8 text-primary mb-2" />
              <CardTitle>High Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Download QR codes in PNG, SVG, and other formats</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Link className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Instant Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Create QR codes instantly with real-time preview</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QrGenerator;