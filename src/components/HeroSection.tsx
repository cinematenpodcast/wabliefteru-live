import { Calendar, MapPin, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <>
      {/* Header Image Section - Full viewport height */}
      <section className="relative h-screen md:h-screen overflow-hidden w-full hero-section-mobile z-10">
        <div 
          className="absolute inset-0 bg-center bg-no-repeat w-full h-full hero-bg" 
          style={{
            backgroundImage: `url('/images/Header_image.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%'
          }} 
        />

        
        {/* Gradient overlay for bottom half of section */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#2c2c2c] via-[#2c2c2c]/70 to-transparent" />
        

        
        {/* Title overlay */}
        <div className="absolute bottom-40 sm:bottom-16 left-0 right-0 z-20 text-center px-2 sm:px-4 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-cathedral-cream mb-2 animate-cathedral-glow font-rubik-mono leading-tight hero-main-title">
            WABLIEFTERU?
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-cathedral-gold hero-sub-title">
            LIVE!
          </h2>
        </div>
      </section>

      {/* Content Section - "In nomine Podcasti, et Microphoni, et Spiritus Improvisandi." */}
      <section className="-mt-16 pt-16 pb-4 md:py-8 md:mt-0 bg-cathedral-charcoal relative z-0">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-cathedral-cream mb-6 content-title">
              In nomine Podcasti, et Microphoni, et Spiritus Improvisandi.
            </h2>
            <p className="text-xl text-cathedral-gold max-w-3xl mx-auto leading-relaxed">
              Op de dag des Heeren, <strong>vrijdag 26 september 2025</strong>, zal de eerste Live-Voorstelling van Wabliefteru? plaatsvinden, op gewijde grond: <strong>'t Kerkske, te Kapellen.</strong>
              <br /><br />
              Een avond van bezinning, verbazing en verwondering.
              Een rite van het absurde, in eerbiedige stilte 
              die telkens onderbroken zal worden door luid gelach en mogelijk licht gemompel van "Wabliefteru?"
              En het beste? Deze onvergetelijke ervaring is <strong>volledig gratis!</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
