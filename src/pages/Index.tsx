import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Youtube, 
  FileText, 
  Volume2, 
  Image, 
  Shield, 
  QrCode,
  Download,
  Zap,
  ArrowRight,
  Star
} from 'lucide-react';

const toolCategories = [
  {
    title: 'YouTube Tools',
    description: 'Download and convert YouTube content',
    icon: Youtube,
    tools: [
      { name: 'YouTube to MP3', href: '/youtube-to-mp3', description: 'Convert videos to audio' },
      { name: 'YouTube to MP4', href: '/youtube-to-mp4', description: 'Download videos in HD' },
      { name: 'Thumbnail Downloader', href: '/youtube-thumbnail', description: 'Extract thumbnails' },
    ]
  },
  {
    title: 'File Converters',
    description: 'Convert between different file formats',
    icon: FileText,
    tools: [
      { name: 'Image to PDF', href: '/image-to-pdf', description: 'Combine images into PDF' },
      { name: 'PDF to Word', href: '/pdf-to-word', description: 'Edit PDFs as Word docs' },
      { name: 'PDF to JPG', href: '/pdf-to-jpg', description: 'Extract images from PDFs' },
    ]
  },
  {
    title: 'Text & Speech',
    description: 'AI-powered text and voice tools',
    icon: Volume2,
    tools: [
      { name: 'Text to Speech', href: '/text-to-speech', description: 'Natural voice synthesis' },
      { name: 'Speech to Text', href: '/speech-to-text', description: 'Accurate transcription' },
    ]
  },
  {
    title: 'Image Tools',
    description: 'Optimize and edit your images',
    icon: Image,
    tools: [
      { name: 'Image Compressor', href: '/image-compressor', description: 'Reduce file sizes' },
      { name: 'Image Resizer', href: '/image-resizer', description: 'Custom dimensions' },
    ]
  },
  {
    title: 'Utility Tools',
    description: 'Essential productivity utilities',
    icon: Shield,
    tools: [
      { name: 'Password Generator', href: '/password-generator', description: 'Secure passwords' },
      { name: 'QR Code Generator', href: '/qr-generator', description: 'Create QR codes' },
      { name: 'Unit Converter', href: '/unit-converter', description: 'Convert measurements' },
    ]
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 animate-float">
              Future<span className="text-primary">Tools</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your ultimate collection of free, fast, and secure digital tools. 
              Convert, compress, generate, and optimize - all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-futuristic bg-gradient-to-r from-primary to-primary-glow glow text-lg px-8 py-6"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Using Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-card border-primary/30 hover:bg-primary/10 text-lg px-8 py-6"
                asChild
              >
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-scale-in">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">15+</div>
              <div className="text-muted-foreground">Free Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-muted-foreground">Secure</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">0s</div>
              <div className="text-muted-foreground">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">∞</div>
              <div className="text-muted-foreground">Usage Limit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Explore Our Tools</h2>
            <p className="text-xl text-muted-foreground">
              Professional-grade tools for all your digital needs
            </p>
          </div>

          <div className="grid gap-8">
            {toolCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="glass-card hover:scale-[1.02] transition-all duration-500 animate-scale-in">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center glow">
                      <category.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                      <CardDescription className="text-lg">{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {category.tools.map((tool, toolIndex) => (
                      <Link key={toolIndex} to={tool.href}>
                        <Card className="h-full hover:bg-primary/5 transition-all duration-300 border-border/50 hover:border-primary/30 group">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              {tool.name}
                            </CardTitle>
                            <CardDescription>
                              {tool.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it now <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Why Choose FutureTools?</h2>
            <p className="text-xl text-muted-foreground">
              Built for speed, security, and simplicity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card text-center hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Process files in seconds with our optimized algorithms and powerful servers
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card text-center hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">100% Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your files are processed securely and automatically deleted after conversion
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card text-center hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Always Free</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No hidden fees, no subscriptions. All tools are completely free to use
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-3xl gradient-text mb-4">Ready to Get Started?</CardTitle>
              <CardDescription className="text-lg">
                Join thousands of users who trust FutureTools for their digital needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                size="lg" 
                className="btn-futuristic bg-gradient-to-r from-primary to-primary-glow glow text-lg px-8 py-6"
              >
                <Download className="w-5 h-5 mr-2" />
                Start Using Tools Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
