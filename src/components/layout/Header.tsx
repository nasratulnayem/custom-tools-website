import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface MenuItem {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

const menuItems: MenuItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'YouTube Tools',
    href: '/youtube-tools',
    submenu: [
      { name: 'YouTube to MP3', href: '/youtube-to-mp3' },
      { name: 'YouTube to MP4', href: '/youtube-to-mp4' },
      { name: 'Thumbnail Downloader', href: '/youtube-thumbnail' },
    ],
  },
  {
    name: 'File Converters',
    href: '/file-converters',
    submenu: [
      { name: 'Image to PDF', href: '/image-to-pdf' },
      { name: 'PDF to Word', href: '/pdf-to-word' },
      { name: 'PDF to JPG', href: '/pdf-to-jpg' },
    ],
  },
  {
    name: 'Text & Speech',
    href: '/text-speech',
    submenu: [
      { name: 'Text to Speech', href: '/text-to-speech' },
      { name: 'Speech to Text', href: '/speech-to-text' },
    ],
  },
  {
    name: 'Image Tools',
    href: '/image-tools',
    submenu: [
      { name: 'Image Compressor', href: '/image-compressor' },
      { name: 'Image Resizer', href: '/image-resizer' },
    ],
  },
  {
    name: 'Utility Tools',
    href: '/utility-tools',
    submenu: [
      { name: 'Password Generator', href: '/password-generator' },
      { name: 'QR Code Generator', href: '/qr-generator' },
      { name: 'Unit Converter', href: '/unit-converter' },
    ],
  },
  {
    name: 'More',
    href: '/more',
    submenu: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="font-bold text-xl gradient-text">FutureTools</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              item.submenu ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="h-10 px-4 hover:bg-primary/10 transition-all duration-300 group"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="w-56 glass-card border-border/50"
                    align="start"
                  >
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link 
                          to={subItem.href}
                          className="w-full hover:bg-primary/10 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={item.name} to={item.href}>
                  <Button 
                    variant="ghost" 
                    className="h-10 px-4 hover:bg-primary/10 transition-all duration-300"
                  >
                    {item.name}
                  </Button>
                </Link>
              )
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 hover:bg-primary/10 transition-all duration-300 glow"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden w-9 h-9 hover:bg-primary/10 transition-all duration-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-slide-up">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div className="space-y-1">
                      <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
                        {item.name}
                      </div>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-6 py-2 text-sm hover:bg-primary/10 rounded-md transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-4 py-2 text-sm hover:bg-primary/10 rounded-md transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;