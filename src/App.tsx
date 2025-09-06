import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import YouTubeToMp3 from "./pages/tools/YouTubeToMp3";
import YouTubeToMp4 from "./pages/tools/YouTubeToMp4";
import YouTubeThumbnail from "./pages/tools/YouTubeThumbnail";
import ImageToPdf from "./pages/tools/ImageToPdf";
import PdfToWord from "./pages/tools/PdfToWord";
import PdfToJpg from "./pages/tools/PdfToJpg";
import TextToSpeech from "./pages/tools/TextToSpeech";
import SpeechToText from "./pages/tools/SpeechToText";
import ImageCompressor from "./pages/tools/ImageCompressor";
import ImageResizer from "./pages/tools/ImageResizer";
import PasswordGenerator from "./pages/tools/PasswordGenerator";
import QrGenerator from "./pages/tools/QrGenerator";
import UnitConverter from "./pages/tools/UnitConverter";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* YouTube Tools */}
              <Route path="/youtube-to-mp3" element={<YouTubeToMp3 />} />
              <Route path="/youtube-to-mp4" element={<YouTubeToMp4 />} />
              <Route path="/youtube-thumbnail" element={<YouTubeThumbnail />} />
              
              {/* File Converters */}
              <Route path="/image-to-pdf" element={<ImageToPdf />} />
              <Route path="/pdf-to-word" element={<PdfToWord />} />
              <Route path="/pdf-to-jpg" element={<PdfToJpg />} />
              
              {/* Text & Speech Tools */}
              <Route path="/text-to-speech" element={<TextToSpeech />} />
              <Route path="/speech-to-text" element={<SpeechToText />} />
              
              {/* Image Tools */}
              <Route path="/image-compressor" element={<ImageCompressor />} />
              <Route path="/image-resizer" element={<ImageResizer />} />
              
              {/* Utility Tools */}
              <Route path="/password-generator" element={<PasswordGenerator />} />
              <Route path="/qr-generator" element={<QrGenerator />} />
              <Route path="/unit-converter" element={<UnitConverter />} />
              
              {/* Other Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
