
import { Mic, Users, Music } from 'lucide-react';

const SummarySection = () => {
  return (
    <section className="py-20 bg-cathedral-charcoal/95 relative">
      <div className="stone-texture absolute inset-0 opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cathedral-cream mb-6">
            Een Bijzondere Opname-Ervaring
          </h2>
          <p className="text-xl text-cathedral-gold max-w-3xl mx-auto leading-relaxed">
            Wees bij deze buitengewone live-opname van de WABLIEFTERU? podcast in de 
            prachtige omgeving van Kerkske Kappelen. Ervaar de perfecte combinatie van 
            intieme gesprekken en kathedraal-akoestiek.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-cathedral-charcoal/40 backdrop-blur-sm p-6 rounded-lg border border-cathedral-gold/20 text-center">
            <div className="flex justify-center mb-4">
              <Mic className="w-12 h-12 text-cathedral-gold" />
            </div>
            <h3 className="text-xl font-semibold text-cathedral-cream mb-3">Live Opname</h3>
            <p className="text-cathedral-gold/80">
              Wees getuige van een authentieke podcast-opname in een historische setting
            </p>
          </div>
          
          <div className="bg-cathedral-charcoal/40 backdrop-blur-sm p-6 rounded-lg border border-cathedral-gold/20 text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-cathedral-gold" />
            </div>
            <h3 className="text-xl font-semibold text-cathedral-cream mb-3">Intieme Sfeer</h3>
            <p className="text-cathedral-gold/80">
              Beperkt aantal plaatsen voor een persoonlijke en exclusieve ervaring
            </p>
          </div>
          
          <div className="bg-cathedral-charcoal/40 backdrop-blur-sm p-6 rounded-lg border border-cathedral-gold/20 text-center">
            <div className="flex justify-center mb-4">
              <Music className="w-12 h-12 text-cathedral-gold" />
            </div>
            <h3 className="text-xl font-semibold text-cathedral-cream mb-3">Perfecte Akoestiek</h3>
            <p className="text-cathedral-gold/80">
              Geniet van de uitzonderlijke natuurlijke akoestiek van deze historische ruimte
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
