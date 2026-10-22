import SeoHead from "../components/common/SeoHead";
import LocationSection from "../components/home/LocationSection";
import AppointmentSection from "../components/home/AppointmentSection";

export default function ContactPage() {
  return (
    <>
      <SeoHead
        title="Contact & Clinic Location | Dr. Kanade's Homeopathic Clinic, Katraj, Pune"
        description="Visit Dr. Kanade's Homeopathic Clinic in Katraj, Pune. View interactive Google Maps directions, clinic timings, direct phone numbers, and request your consultation."
      />
      <div className="page-view contact-page-view">
        <LocationSection interactiveMap={true} />
        <AppointmentSection />
      </div>
    </>
  );
}
