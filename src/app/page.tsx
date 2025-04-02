import Hero from "./landing/heroSection";
import FeaturesSection from "./landing/features";
import Testimonials from "./landing/testimonials";
import AboutUs from "./landing/about";
import CTA from "./landing/CTA";
export default function Home() {
  return (
    <>
        <Hero />
        <AboutUs />
        <FeaturesSection />
        <Testimonials />
        <CTA />
    </>
  );
}
