import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "10 Best Practices for File Conversion",
    excerpt: "Learn how to convert files efficiently while maintaining quality and security.",
    author: "FutureTools Team",
    date: "December 15, 2024",
    readTime: "5 min read",
  },
  {
    title: "YouTube Content Creation: Tools and Tips",
    excerpt: "Everything you need to know about creating engaging YouTube content.",
    author: "Content Creator",
    date: "December 10, 2024",
    readTime: "8 min read",
  },
  {
    title: "The Future of Digital Productivity Tools",
    excerpt: "Exploring trends and innovations in digital productivity applications.",
    author: "Tech Analyst",
    date: "December 5, 2024",
    readTime: "6 min read",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold gradient-text mb-4">Blog & Tutorials</h1>
          <p className="text-xl text-muted-foreground">Learn tips, tricks, and best practices for using digital tools</p>
        </div>

        <div className="grid gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="glass-card animate-scale-in hover:scale-[1.02] transition-transform duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </div>
                  <Button className="btn-futuristic bg-gradient-to-r from-primary to-primary-glow">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl">Stay Updated</CardTitle>
              <CardDescription>
                Subscribe to our newsletter for the latest tips and tool updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
                />
                <Button className="btn-futuristic bg-gradient-to-r from-primary to-primary-glow">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;