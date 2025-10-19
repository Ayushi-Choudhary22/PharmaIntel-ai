import { useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import WorkflowSection from '../components/WorkflowSection';
import PricingSection from '../components/PricingSection';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <HeroSection opacity={opacity} />
      <FeaturesSection />
      <WorkflowSection />
      <PricingSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
