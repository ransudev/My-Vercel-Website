import { socialLinks } from "../../data/socials";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__meta">
          <a href="#home" className="site-footer__brand">ransu.dev</a>
          <div className="site-footer__links" aria-label="Social links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {social.name}
              </a>
            ))}
          </div>
          <span>© {currentYear} ransudev</span>
        </div>
      </div>
    </footer>
  );
}
