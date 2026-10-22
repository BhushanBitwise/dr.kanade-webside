import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "../../data/site";
import SectionHeading from "./SectionHeading";

export default function LocationSection({ interactiveMap = false }) {
  const mapQuery = encodeURIComponent(clinic.address);
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    "Dr. Kanade's Homeopathic Clinic, Row House No. 9, Bharti Vidyapeeth, Katraj, Pune, Maharashtra 411046"
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="section location-section" id="contact">
      <div className="container location-grid">
        <div className="location-content">
          <SectionHeading
            eyebrow="VISIT OUR CLINIC"
            title={
              <>
                A welcoming space
                <br />
                in <em>Pune.</em>
              </>
            }
            description="Contact the clinic to confirm appointment availability and consultation timings before visiting."
          />

          <div className="location-detail">
            <span className="location-detail-icon">
              <MapPin size={20} />
            </span>
            <div>
              <strong>Clinic address</strong>
              <p>{clinic.address}</p>
            </div>
          </div>

          <div className="location-detail">
            <span className="location-detail-icon">
              <Clock size={20} />
            </span>
            <div>
              <strong>Consultation hours</strong>
              <p>{clinic.hours}</p>
            </div>
          </div>

          <div className="location-detail">
            <span className="location-detail-icon">
              <Phone size={20} />
            </span>
            <div>
              <strong>Call the clinic</strong>
              <a href={`tel:+${clinic.phone}`}>
                {clinic.phoneDisplay || clinic.phone}
              </a>
            </div>
          </div>

          <a
            className="button button-primary"
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noreferrer"
          >
            Get Directions <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="location-map-card">
          {interactiveMap ? (
            <div className="location-map-iframe-wrap">
              <iframe
                title="Dr. Kanade's Homeopathic Clinic Google Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : (
            <div className="location-map-art">
              <span className="map-art-circle map-art-circle-one" />
              <span className="map-art-circle map-art-circle-two" />
              <span className="map-art-circle map-art-circle-three" />

              <div className="map-pin">
                <MapPin size={30} />
              </div>

              <div className="map-label">
                <strong>Dr. Kanade's Homeopathic Clinic</strong>
                <small>Katraj, Pune</small>
              </div>
            </div>
          )}

          <div className="map-card-footer">
            <span>
              <MapPin size={17} /> Dr. Kanade's Homeopathic Clinic, Katraj, Pune
            </span>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Open clinic location in Google Maps"
            >
              Open in Google Maps <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
