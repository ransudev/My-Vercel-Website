import Image from "next/image";
import { ArrowRight } from "lucide-react";
import MarqueeDivider from "../../components/ui/MarqueeDivider";
import HeroDecor from "../../components/ui/HeroDecor";

export default function HomePage() {
  return (
    <section id="home" className="neo-hero scroll-section" aria-labelledby="home-title">
      <HeroDecor />
      <div className="page neo-hero__inner">
        <div className="neo-hero__grid">
          <div className="neo-hero__copy">
            <h1 id="home-title">
              <span className="neo-hero__mark">Break it.</span>
              <span className="neo-hero__mark neo-hero__mark--delay">Fix it.</span>
              <span className="neo-hero__mark neo-hero__mark--delay-2">Ship it.</span>
            </h1>
            <p>Built with clear thinking and an appetite for difficult problems.</p>
            <div className="neo-hero__actions">
              <a href="#skills" className="btn btn--outline neo-hero__primary-action">
                See my skills <ArrowRight size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="neo-hero__manifest" aria-label="About Lance">
            <div className="neo-hero__avatar">
              <Image
                src="/lance-pixel-avatar.png"
                alt="Pixel portrait of Lance"
                width={256}
                height={256}
                priority
              />
            </div>
            <a href="#about" className="neo-hero__about-link">
              About me
            </a>
          </aside>
        </div>
      </div>

      <MarqueeDivider className="neo-strip--hero" />
    </section>
  );
}
