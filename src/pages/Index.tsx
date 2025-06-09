
import HeroSection from '@/components/HeroSection';
import SummarySection from '@/components/SummarySection';
import PracticalInfo from '@/components/PracticalInfo';
import TicketReservation from '@/components/TicketReservation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-rubik w-full overflow-x-hidden">
      <HeroSection />
      <SummarySection />
      <PracticalInfo />
      <TicketReservation />
      <Footer />
    </div>
  );
};

export default Index;
