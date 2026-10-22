import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Heart, Leaf, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          <motion.div variants={fadeUp} className="hero-kicker">
            <span className="hero-kicker-icon">
              <Leaf size={15} />
            </span>
            A MORE PERSONAL APPROACH TO WELLNESS
          </motion.div>

          <motion.h1 variants={fadeUp}>
            Your journey to
            <br />
            better health,
            <br />
            <em>naturally.</em>
          </motion.h1>

          <motion.p variants={fadeUp} className="hero-description">
            Thoughtful homeopathic care that puts you first. Take the time to
            understand your health, explore your options, and find a care
            approach tailored to your needs.
          </motion.p>

          <motion.div variants={fadeUp} className="hero-actions">
            <Link to="/booking" className="button button-primary">
              Book a Consultation <ArrowRight size={17} />
            </Link>

            <Link to="/approach" className="button button-outline">
              Discover Our Approach
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="hero-note">
            <span className="hero-note-icon">
              <Heart size={17} />
            </span>
            <span>
              <strong>Care that listens.</strong>
              <small>Time, attention and a personalised experience.</small>
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-image-frame">
            <div className="hero-image-placeholder">
              <img
                src="/images/hero.png"
                alt="Botanical-inspired homeopathic clinic"
                className="hero-background-image"
                fetchPriority="high"
              />

              <div className="hero-image-decoration">
                <Leaf size={62} strokeWidth={1} />
                <span>Rooted in care</span>
              </div>
            </div>

            <div className="hero-image-caption">
              <span className="caption-icon">
                <Sparkles size={18} />
              </span>
              <span>
                <strong>Your health, your story.</strong>
                <small>Care that begins with listening.</small>
              </span>
            </div>
          </div>

          <div className="hero-floating-leaf hero-floating-leaf-one">
            <Leaf size={30} />
          </div>

          <div className="hero-floating-leaf hero-floating-leaf-two">
            <Sparkles size={22} />
          </div>
        </motion.div>
      </div>

      <Link to="/about" className="hero-scroll" aria-label="Explore about us">
        <ArrowDown size={17} />
      </Link>
    </section>
  );
}
