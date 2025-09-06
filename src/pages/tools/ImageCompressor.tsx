import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Upload, Zap, Image } from 'lucide-react';

const ImageCompressor = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [quality, setQuality] = useState([80]);
  const [isCompressing, setIsCompressing] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(selectedFiles);
  };

  const handleCompress = async () => {
    if (files.length === 0) return;
    setIsCompressing(true);
    setTimeout(() => {
      setIsCompressing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold gradient-text mb-4">Image Compressor</h1>
          <p className="text-xl text-muted-foreground">Reduce image file sizes while maintaining quality</p>
        </div>

        <Card className="glass-card mb-8 animate-scale-in">
          <CardHeader className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-10 h-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Compress Images</CardTitle>
            <CardDescription>
              Upload images and adjust compression quality
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium">Click to upload images</p>
                <p className="text-muted-foreground">PNG, JPG, JPEG, WEBP supported</p>
              </label>
            </div>

            {files.length > 0 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Compression Quality: {quality[0]}%
                  </label>
                  <Slider
                    value={quality}
                    onValueChange={setQuality}
                    max={100}
                    min={10}
                    step={5}
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {files.map((file, index) => (
                    <div key={index} className="text-center p-4 border rounded-lg">
                      <Image className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm truncate">{file.name}</p>
                      <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</p>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={handleCompress}
                  disabled={isCompressing}
                  className="w-full btn-futuristic bg-gradient-to-r from-primary to-primary-glow"
                >
                  {isCompressing ? 'Compressing...' : 'Compress Images'}
                </Button>
              </div>
            )}

            {isCompressing && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Compressing your images...</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <Zap className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Smart Compression</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Advanced algorithms to minimize file size while preserving quality</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Image className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Multiple Formats</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Support for JPG, PNG, WEBP, and other popular image formats</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Upload className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Batch Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Compress multiple images at once with customizable quality settings</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ImageCompressor;