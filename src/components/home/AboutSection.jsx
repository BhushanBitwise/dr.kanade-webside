import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="about-image-placeholder doctor-image-frame">
            <img
              src="/images/doctor/Dr-Pranita.webp"
              alt="Dr. Pranita Kanade"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="about-side-note">
            <span className="about-note-icon">
              <Heart size={20} />
            </span>
            <span>
              <strong>Care starts with you</strong>
              <small>Your concerns deserve attention.</small>
            </span>
          </div>
        </motion.div>

        <div className="about-content">
          <SectionHeading
            eyebrow="A LITTLE ABOUT US"
            title={
              <>
                Healthcare should feel
                <br />
                <em>personal.</em>
              </>
            }
            description="Every person has a different story. We believe your concerns, experiences and expectations should be heard before discussing a care plan."
          />

          <p className="body-copy">
            At Dr. Kanade's Homeopathic Clinic, our aim is to create a
            welcoming environment where you can discuss your health concerns
            and understand the options available to you.
          </p>

          <p className="body-copy">
            We value clear communication, individual attention and a
            thoughtful consultation experience. Our focus is on helping you
            make informed decisions about your healthcare.
          </p>

          <Link to="/about" className="text-link">
            Get to know our clinic <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
