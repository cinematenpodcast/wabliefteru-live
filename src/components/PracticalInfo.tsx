
import { MapPin, Car, Train, Coffee, Clock } from 'lucide-react';

const PracticalInfo = () => {
  return (
    <section className="py-20 bg-cathedral-burgundy/20 relative">
      <div className="stone-texture absolute inset-0 opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cathedral-cream mb-6">
            Praktische Informatie
          </h2>
          <p className="text-xl text-cathedral-gold max-w-2xl mx-auto">
            Alles wat je moet weten voor je bezoek aan deze bijzondere opnamesessie.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Locatie & Toegang */}
          <div className="bg-cathedral-charcoal/40 backdrop-blur-sm p-6 rounded-lg border border-cathedral-gold/20">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-cathedral-gold mr-3" />
              <h3 className="text-xl font-semibold text-cathedral-cream">Locatie & Bereikbaarheid</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-cathedral-gold/80 mb-2">
                  <strong>Kerkske Kappelen</strong><br />
                  Historische Kathedraal<br />
                  Kappelen, België
                </p>
                <p className="text-sm text-cathedral-gold/60">
                  Een prachtig bewaard gebleven middeleeuwse kathedraal met uitzonderlijke akoestiek.
                </p>
              </div>
              
              <div className="space-y-2 text-cathedral-gold/80 text-sm">
                <div className="flex items-center">
                  <Car className="w-4 h-4 mr-2 text-cathedral-gold" />
                  <span>Gratis parkeren in kathedraalplein</span>
                </div>
                <div className="flex items-center">
                  <Train className="w-4 h-4 mr-2 text-cathedral-gold" />
                  <span>15 minuten lopen van Station Kappelen</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Planning & Voorzieningen */}
          <div className="bg-cathedral-charcoal/40 backdrop-blur-sm p-6 rounded-lg border border-cathedral-gold/20">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-cathedral-gold mr-3" />
              <h3 className="text-xl font-semibold text-cathedral-cream">Planning & Voorzieningen</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-cathedral-gold font-medium mb-2">Tijdschema</h4>
                <div className="space-y-1 text-cathedral-gold/80 text-sm">
                  <div className="flex justify-between">
                    <span>Deuren open</span>
                    <span className="font-medium">19:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Welkom & plaatsing</span>
                    <span className="font-medium">19:45</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Opname start</span>
                    <span className="font-medium">20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pauze</span>
                    <span className="font-medium">21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Einde</span>
                    <span className="font-medium">22:30</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-cathedral-gold font-medium mb-2">Voorzieningen</h4>
                <div className="space-y-1 text-cathedral-gold/80 text-sm">
                  <div className="flex items-center">
                    <Coffee className="w-3 h-3 mr-2 text-cathedral-gold" />
                    <span>Gratis versnaperingen tijdens pauze</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 mr-2 text-cathedral-gold">🎧</span>
                    <span>Draadloze koptelefoons beschikbaar</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 mr-2 text-cathedral-gold">📱</span>
                    <span>Stille modus verplicht tijdens opname</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;
