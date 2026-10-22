import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowUpRight, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { workshopsData } from "../../data/workshopData";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function WorkshopSection() {
  return (
    <section className="section workshop-section" id="workshops">
      <div className="container">
        <SectionHeading
          eyebrow="COMMUNITY & EDUCATION"
          title={
            <>
              Featured Recent
              <br />
              <em>Workshops.</em>
            </>
          }
          description="Glimpses from our recent health awareness workshops and community events in Pune, dedicated to spreading the knowledge of holistic well-being and preventive care."
        />

        <div className="workshop-grid">
          {workshopsData.map((workshop, index) => (
            <motion.article
              className="workshop-card"
              key={workshop.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="workshop-image-box">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  loading="lazy"
                  decoding="async"
                />
                <span className="workshop-badge">
                  <Sparkles size={12} /> {workshop.category}
                </span>
              </div>

              <div className="workshop-body">
                <div className="workshop-meta">
                  <span>
                    <MapPin size={13} /> {workshop.date}
                  </span>
                  <span>
                    <Users size={13} /> {workshop.subtitle}
                  </span>
                </div>

                <h3>{workshop.title}</h3>

                <p>{workshop.description}</p>

                <div className="workshop-highlights">
                  {workshop.highlights.map((item) => (
                    <span className="highlight-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <Link to="/booking" className="text-link workshop-link">
                  Ask about upcoming sessions <ArrowUpRight size={15} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
