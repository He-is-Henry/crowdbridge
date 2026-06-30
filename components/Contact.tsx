'use client';

import { useState, FormEvent } from 'react';
import styles from './Contact.module.css';

const WHATSAPP_NUMBER = '2349026649124';
const PHONE_DISPLAY = '+234 902 664 9124';

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Placeholder: logs the submission for now.
    // Swap this with a real submit (e.g. to Formspree or an email API) later.
    console.log('CrowdBridge contact form submission:', data);

    setTimeout(() => {
      setSubmitting(false);
      setShowSuccess(true);
      e.currentTarget.reset();
    }, 600);
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <p className="eyebrow">Get in touch</p>
        <h2 className={`display ${styles.heading}`}>
          Let&apos;s fill your<br />next event.
        </h2>

        <div className={styles.layout}>

          <div className={styles.direct}>
            <p className={styles.directLabel}>Talk to us directly</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsapp}
            >
              Chat on WhatsApp
            </a>
            <a href={`tel:+${WHATSAPP_NUMBER}`} className={styles.call}>
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.directLabel}>Or fill the form below</p>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Tell us about your event</label>
              <textarea id="message" name="message" rows={4} required />
            </div>
            <button type="submit" className={styles.submit} disabled={submitting}>
              {submitting ? 'Sending…' : 'Send message'}
            </button>
          </form>

        </div>
      </div>

      {showSuccess && (
        <div className={styles.modalOverlay} onClick={() => setShowSuccess(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <p className={styles.modalTitle}>Message sent</p>
            <p className={styles.modalBody}>
              Thanks for reaching out. CrowdBridge will get back to you shortly.
            </p>
            <button className={styles.modalClose} onClick={() => setShowSuccess(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
