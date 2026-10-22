import { puneLocalities } from "../../data/site";
import LocalityCard from "./LocalityCard";
import HorizontalScroller from "../common/HorizontalScroller";

export default function LocalityDirectory() {
  return (
    <section
      id="pune-locations"
      className="locality-directory section-wrap section-pad"
    >
      <div className="section-heading">
        <p className="eyebrow">EXPLORE PUNE</p>

        <h2>
          Find clinic information <em>by locality.</em>
        </h2>

        <p className="locality-intro">
          Explore consultation information for different
          areas of Pune. The clinic's listed physical
          location is in Katraj; these pages do not
          represent separate branches.
        </p>
      </div>

      <HorizontalScroller
        className="locality-scroller-wrap"
        itemClassName="locality-scroller-item"
      >
        {puneLocalities.map((area) => (
          <LocalityCard key={area.slug} area={area} />
        ))}
      </HorizontalScroller>
    </section>
  );
}
