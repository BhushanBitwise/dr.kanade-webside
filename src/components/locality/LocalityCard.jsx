import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight } from "lucide-react";

const BASE_PATH = "/homeopathy-clinic-in-pune";

export default function LocalityCard({ area }) {
  return (
    <Link
      className="locality-card"
      to={`${BASE_PATH}/${area.slug}`}
      key={area.slug}
    >
      <span className="locality-card-icon">
        <MapPin size={19} />
      </span>

      <span>
        <strong>
          Homeopathy clinic in Pune / {area.name}
        </strong>
        <small>
          Locality information · Appointment enquiries
        </small>
      </span>

      <ArrowUpRight size={17} />
    </Link>
  );
}
