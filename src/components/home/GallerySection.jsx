import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { galleryData } from "../../data/galleryData";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function GallerySection() {
  // Show 6 curated photos on the homepage
  const previewItems = galleryData.slice(0, 6);

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <SectionHeading
          eyebrow="CLINIC ENVIRONMENT"
          title={
            <>
              A glimpse into our
              <br />
              <em>healing spaces.</em>
            </>
          }
          description="Take a walk through our Katraj clinic environment, calm consultation spaces, and the reassuring atmosphere we create for every patient."
        />

        <div className="gallery-grid">
          {previewItems.map((item, index) => (
            <motion.figure
              className="gallery-card"
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="gallery-image-frame">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
                <span className="gallery-tag">{item.tag}</span>
              </div>
              <figcaption className="gallery-caption">
                <strong>{item.title}</strong>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="gallery-footer-action">
          <Link to="/gallery" className="button button-outline">
            View Complete Clinic Gallery <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
