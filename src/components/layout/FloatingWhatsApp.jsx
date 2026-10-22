import { MessageCircle } from "lucide-react";
import { clinic } from "../../data/site";

const WHATSAPP_URL = `https://wa.me/${String(clinic.whatsapp || clinic.phone).replace(/\D/g, "")}`;

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      className="floating-whatsapp"
      target="_blank"
      rel="noreferrer"
      aria-label="Contact the clinic on WhatsApp"
    >
      <MessageCircle size={23} />
    </a>
  );
}
