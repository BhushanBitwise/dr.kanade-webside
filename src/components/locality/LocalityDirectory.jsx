import { puneLocalities } from "../../data/site";
import LocalityCard from "./LocalityCard";

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

      <div className="locality-grid">
        {puneLocalities.map((area) => (
          <LocalityCard key={area.slug} area={area} />
        ))}
      </div>
    </section>
  );
}
