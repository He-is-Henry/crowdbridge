'use client';

import { useState, FormEvent } from 'react';
import styles from './Contact.module.css';

const WHATSAPP_NUMBER = '2349026649124';
const PHONE_DISPLAY = '+234 902 664 9124';

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch('https://formspree.io/f/xqevyqqy', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setShowSuccess(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try WhatsApp instead.');
      }
    } catch {
      alert('Something went wrong. Please try WhatsApp instead.');
    } finally {
      setSubmitting(false);
    }
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
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Tell us about your event</label>
              <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} required />
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
