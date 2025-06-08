
import { MapPin, Car, Train, Clock } from 'lucide-react';

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
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                <a 
                  href="https://maps.app.goo.gl/gKSdBceNP6EQUAoa7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-cathedral-gold hover:text-cathedral-gold/80 underline"
                >
                  Bekijk op Google Maps
                </a>
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
          
          {/* Planning */}
          <div className="bg-cathedral-charcoal/40 backdrop-blur-sm p-6 rounded-lg border border-cathedral-gold/20">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-cathedral-gold mr-3" />
              <h3 className="text-xl font-semibold text-cathedral-cream">Tijdschema</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-cathedral-gold/80 text-sm">
                Specifieke startuur en duurtijd volgen later nog maar we richten op een start rond 20u!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;
