import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Analytics from "../components/Analytics";
import Community from "../components/Community";
import Integration from "../components/Integration";
import TrustedBy from "../components/TrustedBy";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Analytics />
      <Community />
      <Integration />
      <TrustedBy />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
