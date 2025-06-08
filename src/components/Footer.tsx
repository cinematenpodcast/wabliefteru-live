
import { Heart, Mail, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cathedral-charcoal py-16 relative">
      <div className="stone-texture absolute inset-0 opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-cathedral-cream mb-4">WABLIEFTERU?</h3>
            <p className="text-cathedral-gold/80 text-sm leading-relaxed">
              A podcast that dares to ask the questions that matter, 
              recorded in the most beautiful spaces our world has to offer.
            </p>
          </div>
          
          {/* Contact */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-cathedral-cream mb-4">Get in Touch</h4>
            <div className="space-y-2">
              <a 
                href="mailto:hello@wabliefteru.be" 
                className="flex items-center justify-center text-cathedral-gold/80 hover:text-cathedral-gold transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                hello@wabliefteru.be
              </a>
              <p className="text-cathedral-gold/60 text-sm">
                For press inquiries and collaborations
              </p>
            </div>
          </div>
          
          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-cathedral-cream mb-4">Follow Our Journey</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-cathedral-gold/20 rounded-full flex items-center justify-center text-cathedral-gold hover:bg-cathedral-gold/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-cathedral-gold/20 rounded-full flex items-center justify-center text-cathedral-gold hover:bg-cathedral-gold/30 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-cathedral-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cathedral-gold/60 text-sm">
              © 2025 WABLIEFTERU? Podcast. All rights reserved.
            </p>
            <div className="flex items-center text-cathedral-gold/60 text-sm">
              Made with <Heart className="w-4 h-4 mx-1 text-cathedral-gold" /> for curious minds
            </div>
          </div>
        </div>
        
        {/* Special thanks */}
        <div className="mt-8 text-center">
          <p className="text-cathedral-gold/60 text-sm">
            Special thanks to Kerkske Kappelen for hosting this sacred recording session
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
