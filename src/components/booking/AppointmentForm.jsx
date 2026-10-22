import { useState } from "react";
import { ArrowUpRight, CalendarDays, MessageCircle } from "lucide-react";
import { clinic } from "../../data/siteData";

const initialForm = {
  name: "",
  phone: "",
  date: "",
  time: "",
  mode: "Clinic consultation",
  message: "",
};

export default function AppointmentForm() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
    setError("");
  };

  const submit = (event) => {
    event.preventDefault();

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 13) {
      setError("Please enter a valid contact number.");
      return;
    }

    const number = String(clinic.whatsapp || clinic.phone).replace(/\D/g, "");

    const message = [
      "Hello, I would like to enquire about an appointment at Dr. Kanade's Homeopathic Clinic.",
      `Name: ${form.name.trim()}`,
      `Contact: ${form.phone.trim()}`,
      `Preferred date: ${form.date || "Flexible"}`,
      `Preferred time: ${form.time || "Flexible"}`,
      `Consultation preference: ${form.mode}`,
      form.message.trim() ? `Enquiry: ${form.message.trim()}` : "",
      "Please confirm availability. I understand this is an enquiry, not a confirmed booking.",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  return (
    <form className="appointment-form" onSubmit={submit}>
      <div className="form-field">
        <label htmlFor="appointment-name">Your name *</label>
        <input
          id="appointment-name"
          name="name"
          autoComplete="name"
          value={form.name}
          onChange={update}
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="appointment-phone">Contact number *</label>
        <input
          id="appointment-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={form.phone}
          onChange={update}
          placeholder="Your mobile number"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="appointment-date">Preferred date</label>
        <div className="input-with-icon">
          <input
            id="appointment-date"
            name="date"
            type="date"
            min={minDate}
            value={form.date}
            onChange={update}
          />
          <CalendarDays size={17} />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="appointment-time">Preferred time</label>
        <select
          id="appointment-time"
          name="time"
          value={form.time}
          onChange={update}
        >
          <option value="">Flexible / ask the clinic</option>
          <option value="10 AM–11 AM">10 AM–11 AM</option>
          <option value="11 AM–12 PM">11 AM–12 PM</option>
          <option value="12 PM–1 PM">12 PM–1 PM</option>
          <option value="6 PM–7 PM">6 PM–7 PM</option>
          <option value="7 PM–8 PM">7 PM–8 PM</option>
          <option value="8 PM–9 PM">8 PM–9 PM</option>
        </select>
        <small className="field-hint">
          These are preference options, not confirmed slots. The clinic will confirm availability.
        </small>
      </div>

      <div className="form-field">
        <label htmlFor="appointment-mode">Consultation preference</label>
        <select
          id="appointment-mode"
          name="mode"
          value={form.mode}
          onChange={update}
        >
          <option value="Clinic consultation">Clinic consultation (Katraj)</option>
          <option value="Online consultation enquiry">Online video consultation</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="appointment-message">Additional message (optional)</label>
        <textarea
          id="appointment-message"
          name="message"
          rows={3}
          maxLength={500}
          value={form.message}
          onChange={update}
          placeholder="How can the clinic help with your enquiry?"
        />
      </div>

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="button button-dark appointment-submit"
      >
        <MessageCircle size={17} />
        Continue on WhatsApp
        <ArrowUpRight size={16} />
      </button>

      <p className="form-privacy-note">
        This opens WhatsApp with your enquiry. Your appointment is confirmed once the clinic responds.
      </p>
    </form>
  );
}
