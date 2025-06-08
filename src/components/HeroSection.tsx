
import { Calendar, MapPin, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Large header photo space */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-cathedral-stone/30" />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('/lovable-uploads/999532ba-0f90-4260-b7a9-fb10839d8481.png')`
        }} 
      />
      
      {/* Stone texture overlay */}
      <div className="absolute inset-0 stone-texture opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-cathedral-cream mb-6 animate-cathedral-glow font-rubik-mono leading-tight">
            WABLIEFTERU?
          </h1>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-semibold text-cathedral-gold mb-8">
            LIVE!
          </h2>
        </div>
        
        <div className="bg-cathedral-charcoal/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 mx-auto max-w-2xl border border-cathedral-gold/30">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-cathedral-cream">
            <div className="flex flex-col items-center">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-cathedral-gold mb-2" />
              <span className="text-sm sm:text-base text-cathedral-gold">Vrijdag</span>
              <span className="text-xl sm:text-2xl font-bold">26</span>
              <span className="text-base sm:text-lg">SEP</span>
              <span className="text-base sm:text-lg">2025</span>
            </div>
            
            <div className="flex flex-col items-center">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-cathedral-gold mb-2" />
              <span className="text-base sm:text-lg font-medium">20:00</span>
              <span className="text-xs sm:text-sm text-cathedral-gold">Deuren Open</span>
            </div>
            
            <a 
              href="https://maps.app.goo.gl/gKSdBceNP6EQUAoa7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-cathedral-gold transition-colors cursor-pointer group"
            >
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-cathedral-gold mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-base sm:text-lg font-medium group-hover:text-cathedral-gold">Kerkske</span>
              <span className="text-base sm:text-lg font-medium group-hover:text-cathedral-gold">Kappelen</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12">
          <a href="#tickets" className="inline-block bg-cathedral-gold text-cathedral-charcoal px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-cathedral-gold/90 transition-all duration-300 hover:scale-105 shadow-lg">
            Reserveer Je Plaats
          </a>
        </div>
      </div>
      
      {/* Decorative arches */}
      <div className="absolute bottom-0 left-0 right-0 h-32 cathedral-arch bg-cathedral-stone/20" />
    </section>
  );
};

export default HeroSection;
