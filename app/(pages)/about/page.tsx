"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { SectionTitle, Card } from "../../components/ui";
import { aboutText, infoCards } from "../../data/about";
import Squares from "../../components/ui/Squares";

export default function AboutPage() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-slate-950">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#271E37"
          hoverFillColor="#222222"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 w-full relative z-10">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better"
        />

        <div className="max-w-4xl mx-auto">
          {/* About Text */}
          <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 mb-12 border border-slate-700">
            <p className="text-slate-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
              {aboutText}
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {infoCards.map((card) => (
              <Card
                key={card.title}
                title={card.title}
                description={card.value}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to next section */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <Link
          href="/skills"
          className="text-slate-400 hover:text-violet-400 transition-colors"
          aria-label="Go to skills page"
        >
          <ArrowDown size={28} />
        </Link>
      </div>
    </section>
  );
}
