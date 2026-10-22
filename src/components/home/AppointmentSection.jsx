import { CheckCircle2, MessageCircle, ArrowUpRight } from "lucide-react";
import { clinic } from "../../data/site";
import AppointmentForm from "../AppointmentForm";

const WHATSAPP_URL = `https://wa.me/${String(clinic.whatsapp || clinic.phone).replace(/\D/g, "")}`;

export default function AppointmentSection() {
  return (
    <section className="section appointment-section" id="appointment">
      <div className="container appointment-grid">
        <div className="appointment-content">
          <span className="eyebrow">LET'S START A CONVERSATION</span>

          <h2>
            Make time for
            <br />
            <em>your wellbeing.</em>
          </h2>

          <p>
            Have questions or want to arrange a consultation? Contact the
            clinic to discuss availability and the next steps.
          </p>

          <div className="appointment-benefit">
            <CheckCircle2 size={19} />
            <span>Personal attention to your concerns</span>
          </div>

          <div className="appointment-benefit">
            <CheckCircle2 size={19} />
            <span>Clear communication about your options</span>
          </div>

          <a
            className="appointment-whatsapp"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={19} />
            Contact us on WhatsApp
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="appointment-form-card">
          <div className="appointment-form-heading">
            <span className="eyebrow">GET IN TOUCH</span>
            <h3>Request an appointment</h3>
            <p>Share your details and the clinic can follow up with you.</p>
          </div>

          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}
