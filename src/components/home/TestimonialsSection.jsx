import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../../data/site";
import SectionHeading from "./SectionHeading";

export default function TestimonialsSection() {
  if (!testimonials?.length) return null;

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="PATIENT EXPERIENCES"
          title={
            <>
              Stories from our
              <br />
              <em>community.</em>
            </>
          }
          description="Read feedback shared by patients. Individual experiences vary, and testimonials are not a guarantee of treatment outcomes."
        />

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className="testimonial-card"
              key={testimonial.name || testimonial.author || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="testimonial-stars" aria-label="Patient review">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={15} fill="currentColor" />
                ))}
              </div>

              <p>
                “
                {testimonial.text ||
                  testimonial.message ||
                  testimonial.review ||
                  ""}
                ”
              </p>

              <div className="testimonial-author">
                <span className="testimonial-avatar">
                  {(testimonial.name || testimonial.author || "P")
                    .charAt(0)
                    .toUpperCase()}
                </span>

                <span>
                  <strong>
                    {testimonial.name || testimonial.author || "Clinic visitor"}
                  </strong>
                  <small>Patient feedback</small>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
