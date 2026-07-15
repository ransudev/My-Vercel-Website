import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import HeroDecor from "../../components/ui/HeroDecor";
import MarqueeDivider from "../../components/ui/MarqueeDivider";

export default function HomePage() {
  return (
    <section className="neo-hero" aria-labelledby="home-title">
      <HeroDecor />
      <div className="page neo-hero__inner">
        <p className="neo-hero__identity">Lance · Computer Science · Philippines</p>

        <div className="neo-hero__grid">
          <div className="neo-hero__copy">
            <h1 id="home-title">
              Break it.{" "}
              <span className="neo-hero__mark">Fix it.</span>{" "}
              <span className="neo-hero__mark neo-hero__mark--delay">
                Ship it.<span className="neo-hero__starburst" aria-hidden="true" />
              </span>
            </h1>
            <p>
                Built with clear thinking and an appetite for difficult problems.
            </p>
            <div className="neo-hero__actions">
              <Link href="/skills" className="btn btn--primary">
                See my skills <ArrowRight size={20} aria-hidden="true" />
              </Link>
              <Link href="/contact" className="btn btn--outline">Talk to me</Link>
            </div>
          </div>

          <aside className="neo-hero__manifest" aria-label="Current focus">
            <div className="neo-hero__avatar">
              <Image
                src="/lance-pixel-avatar.png"
                alt="Pixel portrait of Lance"
                width={256}
                height={256}
                priority
              />
            </div>
          </aside>
        </div>
      </div>

      <MarqueeDivider className="neo-strip--hero" />
    </section>
  );
}
