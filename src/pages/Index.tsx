import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MatchesSection from '@/components/MatchesSection';
import FaceScanSection from '@/components/FaceScanSection';
import TicketsSection from '@/components/TicketsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MatchesSection />
      <FaceScanSection />
      <TicketsSection />
      <Footer />
    </div>
  );
};

export default Index;
