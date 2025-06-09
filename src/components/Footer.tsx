
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cathedral-charcoal relative">
      <div className="stone-texture absolute inset-0 opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Social Media Section */}
        <div className="py-12 flex justify-center">
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/wabliefteru_podcast/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-cathedral-gold/20 rounded-full flex items-center justify-center text-cathedral-gold hover:bg-cathedral-gold/30 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://www.facebook.com/wabliefteru" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-cathedral-gold/20 rounded-full flex items-center justify-center text-cathedral-gold hover:bg-cathedral-gold/30 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="https://www.youtube.com/@wabliefteru_podcast" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-cathedral-gold/20 rounded-full flex items-center justify-center text-cathedral-gold hover:bg-cathedral-gold/30 transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a 
              href="https://twitter.com/wabliefteru" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-cathedral-gold/20 rounded-full flex items-center justify-center text-cathedral-gold hover:bg-cathedral-gold/30 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-cathedral-gold/20 py-6">
          <div className="text-center">
            <p className="text-cathedral-gold/80 text-sm mb-4">
              Wabliefteru? Podcast © 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
