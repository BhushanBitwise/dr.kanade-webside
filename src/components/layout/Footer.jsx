import { Link } from "react-router-dom";
import { ArrowUpRight, Leaf } from "lucide-react";
import { clinic } from "../../data/site";

const WHATSAPP_URL = `https://wa.me/${String(clinic.whatsapp || clinic.phone).replace(/\D/g, "")}`;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link to="/" className="brand" aria-label="Clinic homepage">
            <span className="brand-mark">
              <Leaf size={23} />
            </span>

            <span className="brand-copy">
              <strong>Dr. Kanade's</strong>
              <small>HOMEOPATHIC CLINIC</small>
            </span>
          </Link>

          <p>
            A welcoming place for thoughtful conversations about your health
            and care options.
          </p>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <Link to="/about">About the clinic</Link>
          <Link to="/treatments">Consultation options</Link>
          <Link to="/approach">Our approach</Link>
          <Link to="/gallery">Clinic gallery</Link>
          <Link to="/booking">Appointments</Link>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <a href={`tel:+${clinic.phone}`}>
            {clinic.phoneDisplay || clinic.phone}
          </a>
          <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
          <Link to="/contact">Clinic location</Link>
        </div>

        <div className="footer-column">
          <h4>Clinic hours</h4>
          <p>{clinic.hours}</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            WhatsApp us <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} Dr. Kanade's Homeopathic Clinic. All
          rights reserved.
        </p>
        <p>
          Homeopathy is not a substitute for evidence-based medical care.
          Individual health decisions should be discussed with a qualified
          healthcare professional.
        </p>
      </div>
    </footer>
  );
}
