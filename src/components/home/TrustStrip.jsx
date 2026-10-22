import { Heart, Leaf, ShieldCheck, MessageCircle } from "lucide-react";

export default function TrustStrip() {
  const items = [
    { icon: <Heart size={20} />, title: "Patient-centred care" },
    { icon: <Leaf size={20} />, title: "Individual attention" },
    { icon: <ShieldCheck size={20} />, title: "Informed decisions" },
    { icon: <MessageCircle size={20} />, title: "Open communication" },
  ];

  return (
    <section className="trust-strip">
      <div className="container trust-grid">
        {items.map((item) => (
          <div className="trust-item" key={item.title}>
            <span className="trust-icon">{item.icon}</span>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
