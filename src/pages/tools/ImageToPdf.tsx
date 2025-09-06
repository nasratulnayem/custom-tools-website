import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, Image } from 'lucide-react';

const ImageToPdf = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isConverting, setIsConverting] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(selectedFiles);
  };

  const handleConvert = async () => {
    if (files.length === 0) return;
    setIsConverting(true);
    setTimeout(() => {
      setIsConverting(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold gradient-text mb-4">Image to PDF Converter</h1>
          <p className="text-xl text-muted-foreground">Convert multiple images into a single PDF document</p>
        </div>

        <Card className="glass-card mb-8 animate-scale-in">
          <CardHeader className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
              <FileText className="w-10 h-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Convert Images to PDF</CardTitle>
            <CardDescription>
              Upload multiple images and combine them into a PDF
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
                <p className="text-muted-foreground">PNG, JPG, JPEG supported</p>
              </label>
            </div>

            {files.length > 0 && (
              <div className="space-y-4">
                <p className="font-medium">Selected files:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {files.map((file, index) => (
                    <div key={index} className="text-center p-4 border rounded-lg">
                      <Image className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm truncate">{file.name}</p>
                    </div>
                  ))}
                </div>
                <Button
                  onClick={handleConvert}
                  disabled={isConverting}
                  className="w-full btn-futuristic bg-gradient-to-r from-primary to-primary-glow"
                >
                  {isConverting ? 'Converting...' : 'Convert to PDF'}
                </Button>
              </div>
            )}

            {isConverting && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Converting images to PDF...</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <Image className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Multiple Images</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Combine multiple images into a single PDF document</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-2" />
              <CardTitle>High Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Maintain image quality during conversion process</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Upload className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Easy Upload</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Drag and drop or click to upload multiple images at once</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ImageToPdf;