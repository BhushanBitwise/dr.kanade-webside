import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, MapPin, Leaf } from "lucide-react";

const locations = [
  { name: "Baner", slug: "baner" },
  { name: "Shivajinagar", slug: "shivajinagar" },
  { name: "Karve Nagar", slug: "karve-nagar" },
  { name: "Kothrud", slug: "kothrud" },
  { name: "Wakad", slug: "wakad" },
  { name: "Hinjewadi", slug: "hinjawadi" },
  { name: "Aundh", slug: "aundh" },
  { name: "Bavdhan", slug: "bavdhan" },
  { name: "Katraj", slug: "katraj" },
  { name: "Bibwewadi", slug: "bibwewadi" },
  { name: "Hadapsar", slug: "hadapsar" },
  { name: "Viman Nagar", slug: "viman-nagar" },
  { name: "Pimple Saudagar", slug: "pimple-saudagar" },
  { name: "Pimpri-Chinchwad", slug: "pimpri-chinchwad" },
  { name: "Kondhwa", slug: "kondhwa" },
];

const BASE_PATH = "/homeopathy-clinic-in-pune";
const navLinkClass = "text-sm font-medium text-stone-700 transition-colors duration-200 hover:text-emerald-800";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const closeMenus = () => { setMobileOpen(false); setLocationsOpen(false); };

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-[#faf9f5]/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8" aria-label="Main navigation">
        <Link to="/" onClick={closeMenus} className="brand flex min-w-0 items-center gap-3" aria-label="Dr. Kanade's Homeopathic Clinic">
          <span className="brand-mark">
            <Leaf size={22} />
          </span>
          <span className="brand-copy">
            <strong>Dr. Kanade's</strong>
            <small>HOMEOPATHIC CLINIC IN PUNE</small>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <Link to="/" className={navLinkClass}>Home</Link>
          <Link to="/about" className={navLinkClass}>About</Link>
          <Link to="/treatments" className={navLinkClass}>Treatments</Link>
          <Link to="/approach" className={navLinkClass}>Our Approach</Link>
          <Link to="/gallery" className={navLinkClass}>Gallery</Link>
          <div className="group relative">
            <button type="button" className={`flex items-center gap-1.5 ${navLinkClass}`} aria-haspopup="true">
              Locations <ChevronDown size={15} className="transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-stone-200 bg-[#faf9f5] p-3 shadow-xl shadow-stone-900/10">
                <div className="mb-2 px-3 py-2">
                  <p className="font-serif text-lg text-stone-900">Areas We Serve</p>
                  <p className="mt-1 text-xs text-stone-500">Explore clinic information across Pune</p>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {locations.map((location) => (
                    <Link
                      key={location.slug}
                      to={`${BASE_PATH}/${location.slug}`}
                      className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs text-stone-700 transition-colors hover:bg-emerald-900/5 hover:text-emerald-900"
                    >
                      <MapPin size={13} className="shrink-0 text-emerald-800" />
                      {location.name}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/locations"
                  className="mt-2 flex items-center justify-center rounded-xl bg-emerald-900 px-4 py-3 text-xs font-medium text-white transition-colors hover:bg-emerald-800"
                >
                  Explore All Locations
                </Link>
              </div>
            </div>
          </div>
          <Link to="/contact" className={navLinkClass}>Contact</Link>
          <Link to="/booking" className="nav-appointment">Book Appointment</Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 text-stone-800 lg:hidden"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-stone-200 bg-[#faf9f5] px-5 pb-6 pt-3 lg:hidden">
          <div className="flex flex-col">
            {[["Home", "/"], ["About", "/about"], ["Treatments", "/treatments"], ["Our Approach", "/approach"], ["Gallery", "/gallery"]].map(([label, link]) => (
              <Link key={label} to={link} onClick={closeMenus} className="border-b border-stone-200/70 py-3.5 text-sm text-stone-700">
                {label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setLocationsOpen((open) => !open)}
              className="flex items-center justify-between border-b border-stone-200/70 py-3.5 text-left text-sm font-medium text-emerald-900"
              aria-expanded={locationsOpen}
            >
              <span className="flex items-center gap-2"><MapPin size={16} />Locations</span>
              <ChevronDown size={17} className={locationsOpen ? "rotate-180" : ""} />
            </button>
            {locationsOpen && (
              <div className="grid grid-cols-2 gap-2 bg-emerald-900/[0.03] p-3">
                {locations.map((location) => (
                  <Link
                    key={location.slug}
                    to={`${BASE_PATH}/${location.slug}`}
                    onClick={closeMenus}
                    className="rounded-lg border border-stone-200/70 bg-white/70 px-3 py-3 text-xs text-stone-700 hover:text-emerald-900"
                  >
                    {location.name}
                  </Link>
                ))}
                <Link
                  to="/locations"
                  onClick={closeMenus}
                  className="col-span-2 rounded-lg bg-emerald-900 px-3 py-3 text-center text-xs font-medium text-white"
                >
                  Explore All Locations
                </Link>
              </div>
            )}
            <Link to="/contact" onClick={closeMenus} className="border-b border-stone-200/70 py-3.5 text-sm text-stone-700">Contact</Link>
            <Link
              to="/booking"
              onClick={closeMenus}
              className="mt-4 rounded-full bg-emerald-900 px-5 py-3.5 text-center text-sm font-medium text-white"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
