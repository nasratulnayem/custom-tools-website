import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, File } from 'lucide-react';

const PdfToWord = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleConvert = async () => {
    if (!file) return;
    setIsConverting(true);
    setTimeout(() => {
      setIsConverting(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold gradient-text mb-4">PDF to Word Converter</h1>
          <p className="text-xl text-muted-foreground">Convert PDF documents to editable Word files</p>
        </div>

        <Card className="glass-card mb-8 animate-scale-in">
          <CardHeader className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
              <File className="w-10 h-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Convert PDF to Word</CardTitle>
            <CardDescription>
              Upload your PDF and get an editable Word document
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                className="hidden"
                id="pdf-upload"
              />
              <label htmlFor="pdf-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium">Click to upload PDF</p>
                <p className="text-muted-foreground">Only PDF files are supported</p>
              </label>
            </div>

            {file && (
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <FileText className="w-8 h-8 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <Button
                  onClick={handleConvert}
                  disabled={isConverting}
                  className="w-full btn-futuristic bg-gradient-to-r from-primary to-primary-glow"
                >
                  {isConverting ? 'Converting...' : 'Convert to Word'}
                </Button>
              </div>
            )}

            {isConverting && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Converting PDF to Word document...</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Preserve Formatting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Maintain original layout, fonts, and formatting</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <File className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Editable Output</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Get fully editable Word documents (.docx format)</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Upload className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Secure Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Your files are processed securely and deleted after conversion</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PdfToWord;