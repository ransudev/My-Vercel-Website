"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import Button from "../../components/ui/Button";
import { socialLinks, contactInfo } from "../../data/socials";

type FieldName = "name" | "email" | "message";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState<Record<FieldName, boolean>>({ name: false, email: false, message: false });

  const errors: Record<FieldName, string> = {
    name: formData.name.trim() ? "" : "Add your name so I know who is writing.",
    email: EMAIL_PATTERN.test(formData.email) ? "" : "Use a complete email address, such as name@example.com.",
    message: formData.message.trim().length >= 10 ? "" : "Add at least 10 characters so I understand the request.",
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleBlur = (field: FieldName) => {
    setTouched((current) => ({ ...current, [field]: true }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (Object.values(errors).some(Boolean)) return;

    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="page contact-page">
      <header className="page-intro">
        <h1 className="page-title">Contact</h1>
        <p className="page-lede">A project, a question, or a useful conversation—send the details directly.</p>
      </header>

      <div className="contact-split">
        <section className="contact-panel" aria-labelledby="contact-form-title" data-reveal="group">
          <h2 id="contact-form-title">Write a message</h2>
          <form onSubmit={handleSubmit} noValidate className="contact-form">
            <div className="field" data-state={touched.name ? (errors.name ? "error" : "success") : undefined}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} onBlur={() => handleBlur("name")} aria-invalid={touched.name && Boolean(errors.name)} aria-describedby="name-help" required />
              <p id="name-help" className="field__help" aria-live="polite">{touched.name && errors.name ? errors.name : "How should I address you?"}</p>
            </div>

            <div className="field" data-state={touched.email ? (errors.email ? "error" : "success") : undefined}>
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} onBlur={() => handleBlur("email")} aria-invalid={touched.email && Boolean(errors.email)} aria-describedby="email-help" required placeholder="name@example.com" />
              <p id="email-help" className="field__help" aria-live="polite">{touched.email && errors.email ? errors.email : "I’ll reply to this address."}</p>
            </div>

            <div className="field" data-state={touched.message ? (errors.message ? "error" : "success") : undefined}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} onBlur={() => handleBlur("message")} aria-invalid={touched.message && Boolean(errors.message)} aria-describedby="message-help" required placeholder="Project, timeline, and what you need." />
              <p id="message-help" className="field__help" aria-live="polite">{touched.message && errors.message ? errors.message : "Include enough context for a useful first reply."}</p>
            </div>

            <Button type="submit" variant="primary" icon={Send} iconPosition="right">Open email draft</Button>
          </form>
        </section>

        <aside className="contact-panel contact-panel--direct" aria-labelledby="direct-contact-title" data-reveal="group">
          <div>
            <p className="meta-label">Direct channels</p>
            <h2 id="direct-contact-title">Prefer fewer fields?</h2>
            <p>Email works. GitHub works. Discord works too.</p>
          </div>
          <div className="direct-links">
            <a href={`mailto:${contactInfo.email}`} className="direct-link">
              <Mail size={20} aria-hidden="true" />
              <span><small>Email</small>{contactInfo.email}</span>
            </a>
            {socialLinks.filter((social) => social.url.startsWith("http")).map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="direct-link">
                <social.icon size={20} aria-hidden="true" />
                <span><small>{social.name}</small>ransudev</span>
              </a>
            ))}
            <div className="direct-link direct-link--static">
              <span aria-hidden="true">#</span>
              <span><small>Discord</small>{contactInfo.discord}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
