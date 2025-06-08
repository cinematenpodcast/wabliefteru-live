
import { MapPin, Car, Train, Coffee, Clock } from 'lucide-react';

const PracticalInfo = () => {
  return (
    <section className="py-20 bg-cathedral-burgundy/20 relative">
      <div className="stone-texture absolute inset-0 opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cathedral-cream mb-6">
            Practical Information
          </h2>
          <p className="text-xl text-cathedral-gold max-w-2xl mx-auto">
            Everything you need to know for your visit to this sacred recording session.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Location & Access */}
          <div className="space-y-8">
            <div className="bg-cathedral-charcoal/40 backdrop-blur-sm p-8 rounded-lg border border-cathedral-gold/20">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-cathedral-gold mr-3" />
                <h3 className="text-2xl font-semibold text-cathedral-cream">Location</h3>
              </div>
              <p className="text-cathedral-gold/80 mb-4">
                Kerkske Kappelen<br />
                Historic Cathedral<br />
                Kappelen, Belgium
              </p>
              <p className="text-sm text-cathedral-gold/60">
                A beautifully preserved medieval cathedral with exceptional acoustics, 
                perfect for our special recording session.
              </p>
            </div>
            
            <div className="bg-cathedral-charcoal/40 backdrop-blur-sm p-8 rounded-lg border border-cathedral-gold/20">
              <div className="flex items-center mb-4">
                <Car className="w-6 h-6 text-cathedral-gold mr-3" />
                <h3 className="text-2xl font-semibold text-cathedral-cream">Getting There</h3>
              </div>
              <div className="space-y-3 text-cathedral-gold/80">
                <div className="flex items-start">
                  <Car className="w-4 h-4 mt-1 mr-2 text-cathedral-gold" />
                  <span className="text-sm">Free parking available in cathedral courtyard</span>
                </div>
                <div className="flex items-start">
                  <Train className="w-4 h-4 mt-1 mr-2 text-cathedral-gold" />
                  <span className="text-sm">15-minute walk from Kappelen Station</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Schedule & Amenities */}
          <div className="space-y-8">
            <div className="bg-cathedral-charcoal/40 backdrop-blur-sm p-8 rounded-lg border border-cathedral-gold/20">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-cathedral-gold mr-3" />
                <h3 className="text-2xl font-semibold text-cathedral-cream">Schedule</h3>
              </div>
              <div className="space-y-3 text-cathedral-gold/80">
                <div className="flex justify-between">
                  <span>Doors Open</span>
                  <span className="font-medium">19:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Welcome & Seating</span>
                  <span className="font-medium">19:45</span>
                </div>
                <div className="flex justify-between">
                  <span>Recording Begins</span>
                  <span className="font-medium">20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Intermission</span>
                  <span className="font-medium">21:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Event Ends</span>
                  <span className="font-medium">22:30</span>
                </div>
              </div>
            </div>
            
            <div className="bg-cathedral-charcoal/40 backdrop-blur-sm p-8 rounded-lg border border-cathedral-gold/20">
              <div className="flex items-center mb-4">
                <Coffee className="w-6 h-6 text-cathedral-gold mr-3" />
                <h3 className="text-2xl font-semibold text-cathedral-cream">Amenities</h3>
              </div>
              <div className="space-y-3 text-cathedral-gold/80">
                <div className="flex items-start">
                  <Coffee className="w-4 h-4 mt-1 mr-2 text-cathedral-gold" />
                  <span className="text-sm">Complimentary refreshments during intermission</span>
                </div>
                <div className="flex items-start">
                  <span className="w-4 h-4 mt-1 mr-2 text-cathedral-gold">🎧</span>
                  <span className="text-sm">Wireless headphones provided for optimal audio</span>
                </div>
                <div className="flex items-start">
                  <span className="w-4 h-4 mt-1 mr-2 text-cathedral-gold">📱</span>
                  <span className="text-sm">Silent mode required during recording</span>
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
