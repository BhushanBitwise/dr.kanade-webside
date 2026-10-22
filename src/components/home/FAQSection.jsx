import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { clinic } from "../../data/site";

const WHATSAPP_URL = `https://wa.me/${String(clinic.whatsapp || clinic.phone).replace(/\D/g, "")}`;

export default function FAQSection() {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      question: "How can I book a consultation?",
      answer:
        "Use the appointment form or contact the clinic by phone or WhatsApp. Please confirm the available date and time directly with the clinic.",
    },
    {
      question: "What should I bring to my consultation?",
      answer:
        "Bring relevant medical records, current medication details and any questions you would like to discuss with the practitioner.",
    },
    {
      question: "Can I visit without an appointment?",
      answer:
        "Please contact the clinic before visiting to confirm availability and avoid an unnecessary wait.",
    },
    {
      question: "Is homeopathy a replacement for conventional medical care?",
      answer:
        "Homeopathy has not been shown to be effective for treating health conditions beyond placebo. Do not delay or stop evidence-based treatment. Discuss medical decisions with a qualified healthcare professional.",
    },
  ];

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid">
        <div className="faq-intro">
          <span className="eyebrow">GOOD TO KNOW</span>
          <h2>
            A few things
            <br />
            <em>you may wonder.</em>
          </h2>
          <p>
            Have another question? Contact the clinic for information about
            appointments, timings and visiting arrangements.
          </p>

          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-link">
            Ask us a question <ArrowRight size={17} />
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = activeFaq === index;

            return (
              <article className={`faq-item ${isOpen ? "faq-item-open" : ""}`} key={item.question}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setActiveFaq(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={19} />
                </button>

                {isOpen && <p className="faq-answer">{item.answer}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
