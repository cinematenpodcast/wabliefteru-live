
import { Mic, Users, Music } from 'lucide-react';

const SummarySection = () => {
  return (
    <section className="py-20 bg-cathedral-charcoal/95 relative">
      <div className="stone-texture absolute inset-0 opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cathedral-cream mb-6">
            A Sacred Recording Experience
          </h2>
          <p className="text-xl text-cathedral-gold max-w-3xl mx-auto leading-relaxed">
            Join us for an extraordinary live recording of the WABLIEFTERU? podcast in the magnificent 
            setting of Kerkske Kappelen. Experience the perfect blend of intimate conversation 
            and cathedral acoustics.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 bg-cathedral-stone/10 rounded-lg border border-cathedral-gold/20 hover:border-cathedral-gold/40 transition-all duration-300">
            <div className="w-16 h-16 bg-cathedral-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mic className="w-8 h-8 text-cathedral-gold" />
            </div>
            <h3 className="text-2xl font-semibold text-cathedral-cream mb-4">Live Recording</h3>
            <p className="text-cathedral-gold/80">
              Be part of podcast history as we record a special episode in this stunning cathedral setting.
            </p>
          </div>
          
          <div className="text-center p-8 bg-cathedral-stone/10 rounded-lg border border-cathedral-gold/20 hover:border-cathedral-gold/40 transition-all duration-300">
            <div className="w-16 h-16 bg-cathedral-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-cathedral-gold" />
            </div>
            <h3 className="text-2xl font-semibold text-cathedral-cream mb-4">Intimate Gathering</h3>
            <p className="text-cathedral-gold/80">
              Limited seating ensures an intimate experience where every guest feels part of the conversation.
            </p>
          </div>
          
          <div className="text-center p-8 bg-cathedral-stone/10 rounded-lg border border-cathedral-gold/20 hover:border-cathedral-gold/40 transition-all duration-300">
            <div className="w-16 h-16 bg-cathedral-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Music className="w-8 h-8 text-cathedral-gold" />
            </div>
            <h3 className="text-2xl font-semibold text-cathedral-cream mb-4">Cathedral Acoustics</h3>
            <p className="text-cathedral-gold/80">
              Experience the unique ambiance and natural reverb that only a cathedral can provide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
