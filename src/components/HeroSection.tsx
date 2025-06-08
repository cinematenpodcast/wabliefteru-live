import { Calendar, MapPin, Clock } from 'lucide-react';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('/lovable-uploads/999532ba-0f90-4260-b7a9-fb10839d8481.png')`
    }} />
      
      {/* Stone texture overlay */}
      <div className="absolute inset-0 stone-texture opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          
          <h1 className="text-6xl md:text-8xl font-bold text-cathedral-cream mb-6 animate-cathedral-glow">
            WABLIEFTERU?
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-cathedral-gold mb-8">
            LIVE!
          </h2>
        </div>
        
        <div className="bg-cathedral-charcoal/80 backdrop-blur-sm rounded-lg p-8 mx-auto max-w-2xl border border-cathedral-gold/30">
          <div className="grid md:grid-cols-3 gap-6 text-cathedral-cream">
            <div className="flex flex-col items-center">
              <Calendar className="w-8 h-8 text-cathedral-gold mb-2" />
              <span className="text-2xl font-bold">26</span>
              <span className="text-lg">SEP</span>
              <span className="text-lg">2025</span>
            </div>
            
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-cathedral-gold mb-2" />
              <span className="text-lg font-medium">20:00</span>
              <span className="text-sm text-cathedral-gold">Doors Open</span>
            </div>
            
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-cathedral-gold mb-2" />
              <span className="text-lg font-medium">Kerkske</span>
              <span className="text-lg font-medium">Kappelen</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <a href="#tickets" className="inline-block bg-cathedral-gold text-cathedral-charcoal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cathedral-gold/90 transition-all duration-300 hover:scale-105 shadow-lg">
            Reserve Your Seat
          </a>
        </div>
      </div>
      
      {/* Decorative arches */}
      <div className="absolute bottom-0 left-0 right-0 h-32 cathedral-arch bg-cathedral-stone/20" />
    </section>;
};
export default HeroSection;