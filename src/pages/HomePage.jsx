import HeroSection from "../components/home/HeroSection";
import TrustStrip from "../components/home/TrustStrip";
import AboutSection from "../components/home/AboutSection";
// import BookingWizard from "../components/booking/BookingWizard";
import TreatmentsSection from "../components/home/TreatmentsSection";
import ApproachSection from "../components/home/ApproachSection";
import PhilosophySection from "../components/home/PhilosophySection";
import WorkshopSection from "../components/home/WorkshopSection";
import GallerySection from "../components/home/GallerySection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import LocalitySection from "../components/home/LocalitySection";
import LocationSection from "../components/home/LocationSection";
import AppointmentSection from "../components/home/AppointmentSection";
import FAQSection from "../components/home/FAQSection";
import SeoHead from "../components/common/SeoHead";

export default function HomePage() {
  return (
    <>
      <SeoHead
        title="Dr. Kanade's Homeopathic Clinic | Katraj, Pune"
        description="Thoughtful, personalised homeopathic care under Dr. Pranita Kanade (MD Homoeopathy) in Katraj, Pune. Specialising in chronic skin, hormonal, allergy, and digestive health."
      />
      <div className="home-page">
        <HeroSection />
        <TrustStrip />
        <AboutSection />
        {/* <BookingWizard /> */}
        <TreatmentsSection />
        <ApproachSection />
        <PhilosophySection />
        <WorkshopSection />
        <GallerySection />
        <TestimonialsSection />
        <LocalitySection />
        <LocationSection />
        <AppointmentSection />
        <FAQSection />
      </div>
    </>
  );
}
