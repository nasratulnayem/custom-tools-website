import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold gradient-text mb-4">About FutureTools</h1>
          <p className="text-xl text-muted-foreground">Your one-stop solution for digital productivity</p>
        </div>

        <div className="grid gap-8">
          <Card className="glass-card animate-scale-in">
            <CardHeader className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
                <Target className="w-10 h-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center text-lg">
                To provide powerful, easy-to-use digital tools that help people work more efficiently and creatively. 
                We believe technology should simplify your life, not complicate it.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Who We Are</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We are a passionate team of developers and designers dedicated to creating 
                  innovative solutions for everyday digital challenges. Our expertise spans 
                  across multimedia processing, document conversion, and utility applications.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <Heart className="w-8 h-8 text-primary mb-2" />
                <CardTitle>What We Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Privacy, speed, and reliability are at the core of everything we build. 
                  We process your files securely and never store personal data longer than necessary. 
                  Your trust is our most valuable asset.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Why Choose FutureTools?</CardTitle>
              <CardDescription>
                Here's what makes us different
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Free & Fast</h3>
                  <p className="text-muted-foreground">All tools are completely free with lightning-fast processing</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Privacy First</h3>
                  <p className="text-muted-foreground">Your files are processed securely and deleted after use</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">No Registration</h3>
                  <p className="text-muted-foreground">Use all tools instantly without creating an account</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;