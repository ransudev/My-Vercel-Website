import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { aboutText, infoCards } from "../../data/about";

export default function AboutPage() {
  return (
    <article className="page document-page">
      <header className="page-intro">
        <h1 className="page-title">About</h1>
        <p className="page-lede">A computer science student turning ideas into practical software.</p>
      </header>

      <div className="document-page__body">
        <p className="document-page__lead" data-reveal="copy">{aboutText.replace(/\s+/g, " ").trim()}</p>

        <section className="document-section" aria-labelledby="working-notes-title">
          <h2 id="working-notes-title" className="document-section__title" data-reveal="title">Working notes</h2>
          <div className="fact-list">
            {infoCards.map((card, index) => (
              <div key={card.title} className="fact-list__row" data-reveal="item" style={{ "--reveal-index": index } as CSSProperties}>
                <span>{card.title}</span>
                <strong>{card.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <p className="document-page__close" data-reveal="copy">
          The work is still growing. The standard stays the same: understand the problem, build the smallest useful answer, and improve it with evidence. {" "}
          <Link href="/contact" className="text-link">Start a conversation <ArrowRight size={16} aria-hidden="true" /></Link>
        </p>
      </div>
    </article>
  );
}
