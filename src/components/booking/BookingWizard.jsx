import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  Video,
} from "lucide-react";
import "../../styles/booking.css";
import { clinic } from "../../data/siteData";

const WHATSAPP_NUMBER = String(clinic.whatsapp || clinic.phone).replace(/\D/g, "");

const consultationTypes = [
  {
    id: "initial",
    title: "Initial Consultation",
    description: "For a first visit to the clinic (Comprehensive 45 min evaluation)",
  },
  {
    id: "followup",
    title: "Follow-up Consultation",
    description: "For an existing patient tracking ongoing recovery",
  },
  {
    id: "online",
    title: "Online Video Consultation",
    description: "Remote video appointment for patients outside Katraj/Pune",
  },
];

const timeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
];

const initialForm = {
  consultationType: "initial",
  date: "",
  time: "",
  name: "",
  phone: "",
  email: "",
  message: "",
};

function getTodayLocal() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  const minDate = getTodayLocal();

  const selectedConsultation = useMemo(
    () =>
      consultationTypes.find(
        (item) => item.id === form.consultationType
      ),
    [form.consultationType]
  );

  const update = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
  };

  const dateIsValid = (dateValue) => {
    if (!dateValue || dateValue < minDate) return false;
    const selectedDate = new Date(`${dateValue}T12:00:00`);
    return selectedDate.getDay() !== 0; // Sundays closed
  };

  const continueStep = () => {
    setError("");

    if (step === 1 && !form.consultationType) {
      setError("Please select a consultation type.");
      return;
    }

    if (step === 2) {
      if (!dateIsValid(form.date)) {
        setError("Please select a valid date. Note: The clinic is closed on Sundays.");
        return;
      }

      if (!form.time) {
        setError("Please select a preferred consultation time.");
        return;
      }
    }

    if (step === 3) {
      if (form.name.trim().length < 2) {
        setError("Please enter your full name.");
        return;
      }

      const digits = form.phone.replace(/\D/g, "");
      if (digits.length < 10 || digits.length > 13) {
        setError("Please enter a valid 10-digit mobile number.");
        return;
      }

      if (
        form.email &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
      ) {
        setError("Please enter a valid email address.");
        return;
      }
    }

    setStep((current) => Math.min(current + 1, 4));
  };

  const submitRequest = () => {
    if (!dateIsValid(form.date) || !form.time || !form.name.trim()) {
      setError("Please review your appointment details.");
      return;
    }

    const message = [
      "Hello Dr. Pranita Kanade's Clinic,",
      "",
      "I would like to request a consultation appointment.",
      "",
      `Consultation Type: ${selectedConsultation?.title}`,
      `Preferred Date: ${form.date}`,
      `Preferred Time: ${form.time}`,
      `Patient Name: ${form.name.trim()}`,
      `Contact Phone: ${form.phone.trim()}`,
      `Email: ${form.email.trim() || "Not provided"}`,
      `Consultation Mode: ${
        form.consultationType === "online"
          ? "Online Video Consultation"
          : "In-Person Clinic Visit (Katraj)"
      }`,
      `Health Concern Note: ${form.message.trim() || "None"}`,
      "",
      "Please confirm availability for this slot.",
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="appointment" className="booking-section">
      <div className="booking-container">
        <div className="booking-intro">
          <span className="booking-eyebrow">
            <span className="booking-eyebrow-line" />
            YOUR WELLNESS, YOUR TIME
          </span>

          <h2>
            Let's make time
            <br />
            for <em>your health.</em>
          </h2>

          <p>
            Choose your preferred consultation, date and time.
            Our Katraj clinic will confirm your appointment request promptly.
          </p>

          <div className="booking-info">
            <span className="booking-info-icon">
              <Clock3 size={19} />
            </span>
            <span>
              <strong>Clinic hours</strong>
              <small>{clinic.hours}</small>
            </span>
          </div>

          <div className="booking-info">
            <span className="booking-info-icon">
              <MapPin size={19} />
            </span>
            <span>
              <strong>In-person appointments</strong>
              <small>Row House No. 9, Bharti Vidyapeeth, Katraj, Pune</small>
            </span>
          </div>

          <div className="booking-info">
            <span className="booking-info-icon">
              <Video size={19} />
            </span>
            <span>
              <strong>Prefer an online consultation?</strong>
              <small>Video consultations available for remote & long-distance patients.</small>
            </span>
          </div>
        </div>

        <div className="booking-card">
          <div className="booking-card-header">
            <div>
              <span className="booking-step-label">
                APPOINTMENT REQUEST
              </span>
              <h3>
                {step === 1 && "Choose your consultation"}
                {step === 2 && "Pick your preferred time"}
                {step === 3 && "Your contact details"}
                {step === 4 && "Review your request"}
              </h3>
            </div>

            <span className="booking-step-count">
              0{step} <span>/ 04</span>
            </span>
          </div>

          <div
            className="booking-progress"
            role="progressbar"
            aria-label="Booking progress"
            aria-valuemin={1}
            aria-valuemax={4}
            aria-valuenow={step}
          >
            <span style={{ width: `${(step / 4) * 100}%` }} />
          </div>

          {step === 1 && (
            <div className="booking-step-content">
              <p className="booking-field-label">
                What type of consultation do you need?
              </p>

              <div className="booking-type-list">
                {consultationTypes.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => update("consultationType", item.id)}
                    className={`booking-type-option ${
                      form.consultationType === item.id
                        ? "is-selected"
                        : ""
                    }`}
                    aria-pressed={form.consultationType === item.id}
                  >
                    <span className="booking-radio">
                      {form.consultationType === item.id && (
                        <Check size={13} />
                      )}
                    </span>

                    <span className="booking-type-copy">
                      <strong>{item.title}</strong>
                      <small>{item.description}</small>
                    </span>

                    {item.id === "online" ? (
                      <Video size={19} />
                    ) : (
                      <CalendarDays size={19} />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="booking-step-content">
              <label className="booking-field-label" htmlFor="booking-date">
                Preferred date
              </label>

              <input
                id="booking-date"
                className="booking-input"
                type="date"
                min={minDate}
                value={form.date}
                onChange={(event) => {
                  update("date", event.target.value);
                  update("time", "");
                }}
                required
              />

              <p className="booking-helper">
                Sunday is closed. Availability is confirmed by the clinic.
              </p>

              <p className="booking-field-label booking-time-label">
                Preferred time
              </p>

              <div className="booking-time-grid">
                {timeSlots.map((time) => (
                  <button
                    type="button"
                    key={time}
                    className={`booking-time-option ${
                      form.time === time ? "is-selected" : ""
                    }`}
                    onClick={() => update("time", time)}
                    aria-pressed={form.time === time}
                  >
                    {time}
                  </button>
                ))}
              </div>

              <p className="booking-helper">
                Times indicated are preferred slots. The clinic will confirm your final schedule.
              </p>
            </div>
          )}

          {step === 3 && (
            <div className="booking-step-content">
              <div className="booking-form-grid">
                <label className="booking-field">
                  Full name <span>*</span>
                  <input
                    className="booking-input"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(event) => update("name", event.target.value)}
                    maxLength={100}
                    required
                  />
                </label>

                <label className="booking-field">
                  Phone number <span>*</span>
                  <input
                    className="booking-input"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="Your contact number"
                    value={form.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    maxLength={18}
                    required
                  />
                </label>

                <label className="booking-field booking-field-full">
                  Email address
                  <input
                    className="booking-input"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com (optional)"
                    value={form.email}
                    onChange={(event) => update("email", event.target.value)}
                    maxLength={254}
                  />
                </label>

                <label className="booking-field booking-field-full">
                  Anything you'd like us to know?
                  <textarea
                    className="booking-input booking-textarea"
                    placeholder="Briefly state your concern (e.g. Skin, Thyroid, Allergy, Migraine)"
                    value={form.message}
                    onChange={(event) => update("message", event.target.value)}
                    maxLength={1000}
                    rows={3}
                  />
                </label>
              </div>

              <p className="booking-helper">
                Please avoid sharing sensitive emergency medical details in this initial request form.
              </p>
            </div>
          )}

          {step === 4 && (
            <div className="booking-step-content">
              <div className="booking-review">
                <div className="booking-review-row">
                  <span>Consultation</span>
                  <strong>{selectedConsultation?.title}</strong>
                </div>

                <div className="booking-review-row">
                  <span>Date</span>
                  <strong>{form.date}</strong>
                </div>

                <div className="booking-review-row">
                  <span>Preferred time</span>
                  <strong>{form.time}</strong>
                </div>

                <div className="booking-review-row">
                  <span>Patient Name</span>
                  <strong>{form.name}</strong>
                </div>

                <div className="booking-review-row">
                  <span>Phone</span>
                  <strong>{form.phone}</strong>
                </div>

                <div className="booking-review-row">
                  <span>Mode</span>
                  <strong>
                    {form.consultationType === "online"
                      ? "Online Video Consultation"
                      : "In-Person Clinic Visit (Katraj)"}
                  </strong>
                </div>
              </div>

              <p className="booking-confirmation-note">
                This sends your appointment details directly to Dr. Kanade's clinic via WhatsApp.
                Your consultation is finalized once the clinic staff replies with confirmation.
              </p>
            </div>
          )}

          {error && (
            <p className="booking-error" role="alert">
              {error}
            </p>
          )}

          <div className="booking-actions">
            {step > 1 ? (
              <button
                type="button"
                className="booking-back-button"
                onClick={() => {
                  setError("");
                  setStep((current) => current - 1);
                }}
              >
                <ArrowLeft size={16} />
                Back
              </button>
            ) : (
              <span />
            )}

            {step < 4 ? (
              <button
                type="button"
                className="booking-next-button"
                onClick={continueStep}
              >
                Continue
                <ArrowRight size={17} />
              </button>
            ) : (
              <button
                type="button"
                className="booking-next-button"
                onClick={submitRequest}
              >
                Send Request via WhatsApp
                <ArrowRight size={17} />
              </button>
            )}
          </div>

          <p className="booking-privacy">
            Your details are kept strictly confidential and only used to respond to this appointment request.
          </p>
        </div>
      </div>
    </section>
  );
}
