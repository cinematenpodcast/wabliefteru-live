import { Calendar, MapPin } from 'lucide-react';

const SummarySection = () => {
  const scrollToTickets = () => {
    const ticketsSection = document.getElementById('tickets');
    if (ticketsSection) {
      ticketsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative bg-cathedral-charcoal py-8">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
      
        <div className="bg-cathedral-charcoal/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 mx-auto max-w-2xl border border-cathedral-gold/30">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 text-cathedral-cream">
            <div className="flex flex-col items-center">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-cathedral-gold mb-2" />
              <span className="text-sm sm:text-base text-cathedral-cream">Vrijdag</span>
              <span className="text-xl sm:text-2xl font-bold">26/09</span>
              <span className="text-base sm:text-lg">2025</span>
            </div>
            
            <div className="flex flex-col items-center">
              <img src="/images/tickets-ticket-svgrepo-com.svg" className="w-6 h-6 sm:w-8 sm:h-8 mb-2" alt="Ticket" />
              <span className="text-base sm:text-lg font-medium text-cathedral-cream">Inkom</span>
              <span className="text-xs sm:text-sm text-cathedral-cream font-bold">GRATIS</span>
            </div>
            
            <a 
              href="https://maps.app.goo.gl/gKSdBceNP6EQUAoa7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-cathedral-gold transition-colors cursor-pointer group"
            >
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-cathedral-gold mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-base sm:text-lg font-medium group-hover:text-cathedral-gold">Kerkske</span>
              <span className="text-base sm:text-lg font-medium group-hover:text-cathedral-gold">Kapellen</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12">
          <button 
            onClick={scrollToTickets}
            className="inline-block bg-cathedral-gold text-cathedral-charcoal px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-cathedral-gold/90 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg transform"
          >
            Reserveer tickets
          </button>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
