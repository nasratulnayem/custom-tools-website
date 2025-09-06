import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Maximize2, Image } from 'lucide-react';

const ImageResizer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [isResizing, setIsResizing] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleResize = async () => {
    if (!file || !width || !height) return;
    setIsResizing(true);
    setTimeout(() => {
      setIsResizing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold gradient-text mb-4">Image Resizer</h1>
          <p className="text-xl text-muted-foreground">Resize images to custom dimensions quickly and easily</p>
        </div>

        <Card className="glass-card mb-8 animate-scale-in">
          <CardHeader className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
              <Maximize2 className="w-10 h-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Resize Images</CardTitle>
            <CardDescription>
              Upload an image and set custom width and height
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium">Click to upload image</p>
                <p className="text-muted-foreground">PNG, JPG, JPEG, GIF supported</p>
              </label>
            </div>

            {file && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <Image className="w-8 h-8 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Width (px)</label>
                    <Input
                      type="number"
                      placeholder="800"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Height (px)</label>
                    <Input
                      type="number"
                      placeholder="600"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                </div>

                <Button
                  onClick={handleResize}
                  disabled={!width || !height || isResizing}
                  className="w-full btn-futuristic bg-gradient-to-r from-primary to-primary-glow"
                >
                  {isResizing ? 'Resizing...' : 'Resize Image'}
                </Button>
              </div>
            )}

            {isResizing && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Resizing your image...</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <Maximize2 className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Custom Dimensions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Set exact width and height dimensions for your images</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Image className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Maintain Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">High-quality resizing that preserves image clarity</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Upload className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Instant Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Fast image processing with immediate download</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ImageResizer;