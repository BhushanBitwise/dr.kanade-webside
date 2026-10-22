import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { galleryData } from "../../data/galleryData";
import HorizontalScroller from "../common/HorizontalScroller";

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

        <HorizontalScroller
          className="gallery-scroller-wrap"
          itemClassName="gallery-scroller-item"
        >
          {previewItems.map((item) => (
            <figure className="gallery-card" key={item.id}>
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
            </figure>
          ))}
        </HorizontalScroller>

        <div className="gallery-footer-action">
          <Link to="/gallery" className="button button-outline">
            View Complete Clinic Gallery <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
