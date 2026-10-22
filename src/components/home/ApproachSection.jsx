import { motion } from "framer-motion";
import { CheckCircle2, Heart, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function ApproachSection() {
  const steps = [
    {
      number: "01",
      title: "We listen first",
      description:
        "Share your concerns, experiences and expectations in a supportive consultation.",
    },
    {
      number: "02",
      title: "We understand your needs",
      description:
        "Discuss your health history and the information relevant to your consultation.",
    },
    {
      number: "03",
      title: "We discuss your options",
      description:
        "Understand the proposed approach, its limitations and when other medical care may be needed.",
    },
  ];

  return (
    <section className="section approach-section" id="approach">
      <div className="container">
        <SectionHeading
          eyebrow="OUR APPROACH"
          title={
            <>
              A calmer, clearer
              <br />
              <em>consultation experience.</em>
            </>
          }
          description="Good communication helps you understand your care options and make decisions that are right for you."
        />

        <div className="approach-grid">
          {steps.map((step) => (
            <motion.article
              key={step.number}
              className="approach-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="approach-number">{step.number}</span>
              <div className="approach-icon">
                {step.number === "01" && <MessageCircle size={24} />}
                {step.number === "02" && <Heart size={24} />}
                {step.number === "03" && <CheckCircle2 size={24} />}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
