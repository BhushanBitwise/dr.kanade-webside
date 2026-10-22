import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function PhilosophySection() {
  return (
    <section className="philosophy-section">
      <div className="container philosophy-inner">
        <motion.div
          className="philosophy-mark"
          initial={{ opacity: 0, rotate: -15 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Leaf size={52} strokeWidth={1} />
        </motion.div>

        <span className="eyebrow">OUR PHILOSOPHY</span>

        <h2>
          “Good care begins
          <br />
          with <em>being heard.</em>”
        </h2>

        <p>
          Your questions matter. We encourage open conversations so you can
          understand your options and participate in decisions about your
          health.
        </p>
      </div>
    </section>
  );
}
