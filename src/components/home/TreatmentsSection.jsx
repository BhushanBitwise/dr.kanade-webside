import { Link } from "react-router-dom";
import { ArrowUpRight, Leaf } from "lucide-react";
import { treatments } from "../../data/site";
import SectionHeading from "./SectionHeading";
import HorizontalScroller from "../common/HorizontalScroller";

export default function TreatmentsSection() {
  return (
    <section className="section treatments-section" id="treatments">
      <div className="container">
        <SectionHeading
          eyebrow="HOW WE CAN HELP"
          title={
            <>
              Care that considers
              <br />
              <em>the whole person.</em>
            </>
          }
          description="Explore the consultation options available at our clinic. Your individual needs and treatment suitability are discussed during your consultation."
        />

        <HorizontalScroller
          className="treatments-scroller-wrap"
          itemClassName="treatment-scroller-item"
        >
          {treatments.map((treatment, index) => (
            <article
              className="treatment-card"
              key={treatment.title || treatment.name || index}
            >
              <span className="treatment-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="treatment-icon">
                <Leaf size={25} strokeWidth={1.4} />
              </div>

              <h3>{treatment.title || treatment.name}</h3>

              <p>
                {treatment.description ||
                  treatment.desc ||
                  "Discuss your concerns with the clinic to understand the available consultation options."}
              </p>

              <Link to="/booking" className="treatment-link">
                Ask about this <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </HorizontalScroller>
      </div>
    </section>
  );
}
