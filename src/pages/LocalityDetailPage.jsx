import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Leaf,
  MapPin,
  MessageCircle,
  Navigation,
  CheckCircle2,
} from "lucide-react";
import SeoHead from "../components/common/SeoHead";
import { localitiesData } from "../data/localitiesData";
import { clinic } from "../data/siteData";

const BASE_PATH = "/homeopathy-clinic-in-pune";

function whatsappUrl(message) {
  const phone = String(clinic.whatsapp || clinic.phone).replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export default function LocalityDetailPage({ slug: propSlug }) {
  const { slug: routeSlug } = useParams();
  const slug = propSlug || routeSlug;

  const area = localitiesData.find(
    (item) => item.slug === slug
  );

  if (!area) {
    return (
      <main className="section-wrap section-pad min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 mb-3">Locality page not found</h1>
        <p className="text-stone-600 text-sm max-w-md mb-6">
          We could not locate the specific locality page you requested. You can explore all our Pune locality guides below.
        </p>
        <Link className="button button-dark" to="/locations">
          Explore All Pune Localities <ArrowRight size={16} />
        </Link>
      </main>
    );
  }

  const enquiry = [
    "Hello Dr. Pranita Kanade,",
    "I would like to enquire about a homeopathic consultation.",
    `I am travelling / contacting from ${area.name}, Pune.`,
    "Please share appointment availability, consultation process, and clinic directions.",
  ].join(" ");

  const mapUrl = clinic.googleMapsUrl;

  const otherAreas = localitiesData
    .filter((item) => item.slug !== area.slug)
    .slice(0, 8);

  return (
    <>
      <SeoHead
        title={`Homeopathy Clinic in Pune / ${area.name} | Dr. Pranita Kanade`}
        description={`Consultation information for patients from ${area.name}, Pune seeking personalized classical homeopathic care at Dr. Pranita Kanade's clinic in Katraj.`}
      />

      <div className="locality-page">
        {/* Breadcrumb */}
        <div className="locality-breadcrumb section-wrap">
          <Link to="/">
            <ArrowLeft size={15} /> Home
          </Link>
          <span>/</span>
          <Link to="/locations">Pune locations</Link>
          <span>/</span>
          <span className="font-semibold text-stone-900">{area.name}</span>
        </div>

        {/* Hero Section */}
        <section className="locality-hero section-wrap">
          <div className="locality-hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              HOMEOPATHIC CARE · PUNE
            </p>

            <h1>
              Homeopathy clinic in Pune / <em>{area.name}</em>
            </h1>

            <p className="lead">
              Looking for thoughtful, individualized homeopathy consultation from {area.name}, Pune?
              Dr. Pranita Kanade (MD Homoeopathy) provides comprehensive constitutional care for chronic conditions,
              allergies, skin disorders, and hormonal wellness from our Katraj clinic.
            </p>

            <div className="locality-actions">
              <a
                className="button button-dark"
                href={whatsappUrl(enquiry)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={17} />
                Enquire from {area.name} on WhatsApp
                <ArrowUpRight size={16} />
              </a>

              <Link className="button button-light border border-stone-300" to="/booking">
                Book Visit <ArrowRight size={15} />
              </Link>
            </div>

            <div className="locality-meta">
              <span>
                <MapPin size={16} />
                Clinic located in Katraj, Pune
              </span>
              <span>
                <Clock3 size={16} />
                {clinic.hours}
              </span>
            </div>
          </div>

          {/* Side Info Panel */}
          <aside className="locality-hero-panel rounded-2xl shadow-sm">
            <span className="locality-panel-mark">
              <Leaf size={27} />
            </span>

            <p className="eyebrow">CONSULTATION NOTE</p>

            <h2>
              Visiting from <em>{area.name}?</em>
            </h2>

            <p>
              {area.summary ||
                `Our primary clinic is situated in Katraj, Pune. Patients from ${area.name} can easily schedule morning or evening consultation slots.`}
            </p>

            {area.distance && (
              <div className="mt-4 p-3 bg-white/70 rounded-xl border border-stone-200/80 text-xs text-stone-700">
                <strong>Commute:</strong> {area.distance}
                {area.commuteAdvice && (
                  <p className="mt-1 text-stone-500">{area.commuteAdvice}</p>
                )}
              </div>
            )}

            <div className="mt-6 flex flex-col gap-2">
              <a className="text-link text-xs font-semibold" href={`tel:${clinic.phone}`}>
                Call {clinic.phoneDisplay} →
              </a>
              <Link className="text-link text-xs font-semibold" to="/booking">
                Online Video Consultation Request →
              </Link>
            </div>
          </aside>
        </section>

        {/* Locality Details Section */}
        <section className="locality-details section-wrap section-pad rounded-3xl my-6">
          <div>
            <p className="eyebrow">CONSULTATION PROCESS</p>
            <h2>
              Personalised care for <em>long-term health.</em>
            </h2>
            <p>
              Rather than managing recurring symptoms in isolation, classical homeopathy evaluates your complete physical constitution, emotional temperament, and chronic medical history.
            </p>
          </div>

          <div className="locality-detail-list">
            <div>
              <CalendarDays size={20} />
              <span>
                <strong>Dedicated, Unhurried Consultation</strong>
                <small>
                  Up to 45 minutes for initial consultations to thoroughly review past treatments, blood tests, and life factors.
                </small>
              </span>
            </div>

            <div>
              <Leaf size={20} />
              <span>
                <strong>Chronic Conditions Treated</strong>
                <small>
                  Eczema, Psoriasis, Allergic Rhinitis, Asthma, Thyroid disorders, PCOS, Migraine, and recurrent gastrointestinal sensitivity.
                </small>
              </span>
            </div>

            <div>
              <Navigation size={20} />
              <span>
                <strong>Accessible Location in Katraj</strong>
                <small>
                  Easily accessible from {area.name} via direct Pune arterial roads and bypass corridors. Ample local parking available.
                </small>
              </span>
            </div>
          </div>
        </section>

        {/* Visit Card */}
        <div className="section-wrap pb-10">
          <div className="locality-visit-card rounded-2xl shadow-sm">
            <span className="locality-card-icon">
              <MapPin size={22} />
            </span>
            <div>
              <h3>Visit the Katraj clinic</h3>
              <p>{clinic.address}</p>
              <p className="text-stone-500 text-xs mt-0.5">Hours: {clinic.hours} (Sunday Closed)</p>
            </div>
            <a
              className="button button-dark"
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps Directions <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Banner CTA */}
        <div className="section-wrap pb-16">
          <div className="locality-cta rounded-3xl shadow-lg">
            <div>
              <p className="eyebrow">MAKE AN APPOINTMENT</p>
              <h2>
                Consult Dr. Pranita Kanade <em>today.</em>
              </h2>
              <p>
                Have questions before scheduling? Connect with our clinic desk on WhatsApp to confirm timings and availability.
              </p>
            </div>
            <a
              className="button-light rounded-full px-8 font-bold"
              href={whatsappUrl(enquiry)}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Enquiry <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Other Localities */}
        <section className="locality-other-areas section-wrap">
          <div className="mb-6">
            <p className="eyebrow">AREAS NEAR {area.name.toUpperCase()}</p>
            <h3 className="font-serif text-2xl text-stone-900 font-normal">Other Pune areas we regularly serve</h3>
          </div>

          <div className="locality-other-links">
            {otherAreas.map((item) => (
              <Link key={item.slug} to={`${BASE_PATH}/${item.slug}`}>
                <span>{item.name}</span>
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/locations" className="text-link text-xs font-semibold">
              View all 18+ Pune localities directory →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
