import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";
import { galleryData } from "../data/galleryData";
import SeoHead from "../components/common/SeoHead";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const categories = ["All", "Clinic", "Consultation", "Philosophy", "Methodology"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <>
      <SeoHead
        title="Clinic Gallery | Dr. Kanade's Homeopathic Clinic, Katraj, Pune"
        description="Explore photographs of Dr. Kanade's Homeopathic Clinic in Katraj, Pune. View our comforting consultation rooms, treatment environment, and clinical care moments."
      />

      <div className="gallery-page">
        {/* Gallery Hero Header */}
        <header className="gallery-header-section">
          <div className="container">
            <span className="eyebrow">
              <Leaf size={14} style={{ display: "inline-block", marginRight: 6, verticalAlign: "middle" }} />
              CLINIC ENVIRONMENT & MOMENTS
            </span>

            <h1>
              Our healing
              <br />
              <em>environment.</em>
            </h1>

            <p className="gallery-intro">
              A glimpse into our clinic environment, consultation spaces, and the reassuring
              atmosphere we create for patients at Dr. Kanade's Homeopathic Clinic in Katraj, Pune.
            </p>

            {/* Filter Tabs */}
            <div className="gallery-filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`gallery-filter-btn ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === "All" ? "All Moments" : cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Gallery Grid */}
        <section className="section gallery-full-section">
          <div className="container">
            <div className="gallery-grid">
              {filteredItems.map((item, index) => (
                <motion.figure
                  className="gallery-card"
                  key={item.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.05 }}
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

            {/* Bottom Consultation CTA */}
            <div className="gallery-cta-card">
              <div className="gallery-cta-content">
                <span className="eyebrow" style={{ color: "#c4d3bb" }}>EXPERIENCE OUR CLINIC</span>
                <h2>
                  Would you like to visit <em>in Katraj?</em>
                </h2>
                <p>
                  Experience a quiet, attentive consultation where your health concerns are heard
                  with time, compassion, and precision.
                </p>
              </div>

              <Link to="/booking" className="button button-primary" style={{ background: "#fffefa", color: "#173f32", borderColor: "#fffefa" }}>
                Book Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
