"use client";

import { useState } from "react";
import { ExternalLink, Github, Mail, MessageCircle } from "lucide-react";
import { contactInfo, socialLinks } from "../../data/socials";

type ContactMethod = "email" | "github" | "discord";

const contactMethods = [
  { id: "email", label: "Email", icon: Mail },
  { id: "github", label: "GitHub", icon: Github },
  { id: "discord", label: "Discord", icon: MessageCircle },
] as const;

export default function ContactPage() {
  const [activeMethod, setActiveMethod] = useState<ContactMethod | null>(null);
  const github = socialLinks.find((social) => social.name === "GitHub");

  return (
    <section id="contact" className="page contact-page scroll-section" aria-labelledby="contact-title">
      <header className="page-intro" data-reveal="heading">
        <h1 id="contact-title" className="page-title">Contact</h1>
        <p className="page-lede">Choose where you want to reach me.</p>
      </header>

      <div className="contact-simple" data-reveal="group">
        <div className="contact-methods" role="group" aria-label="Contact methods">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const isActive = activeMethod === method.id;

            return (
              <button
                key={method.id}
                type="button"
                className="contact-method"
                aria-label={`Show ${method.label}`}
                aria-pressed={isActive}
                aria-controls="contact-detail"
                onClick={() => setActiveMethod(method.id)}
              >
                <Icon size={28} aria-hidden="true" />
              </button>
            );
          })}
        </div>

        <div id="contact-detail" className="contact-detail" aria-live="polite">
          {!activeMethod && <p>Select an icon to view the contact details.</p>}

          {activeMethod === "email" && (
            <a href={`mailto:${contactInfo.email}`} className="contact-detail__link">
              {contactInfo.email} <ExternalLink size={18} aria-hidden="true" />
            </a>
          )}

          {activeMethod === "github" && github && (
            <a href={github.url} target="_blank" rel="noopener noreferrer" className="contact-detail__link">
              github.com/ransudev <ExternalLink size={18} aria-hidden="true" />
            </a>
          )}

          {activeMethod === "discord" && (
            <p className="contact-detail__value">Discord: <strong>@{contactInfo.discord}</strong></p>
          )}
        </div>
      </div>
    </section>
  );
}
