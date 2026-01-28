"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Button } from "../../components/ui";
import Squares from "../../components/ui/Squares";

export default function HomePage() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Squares Background */}
      <div className="absolute inset-0 bg-slate-950">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#271E37"
          hoverFillColor="#222222"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto py-20">
          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* LEFT: Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Name and Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-white">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Lance
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 mb-4">
                Computer Science Student
              </p>

              <p className="text-base md:text-lg text-slate-400 mb-8">
                Consistency is key.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="/projects" variant="primary">
                  View Projects
                </Button>
                <Button href="/contact" variant="outline">
                  Contact Me
                </Button>
              </div>
            </div>

            {/* RIGHT: Profile Image Card */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-sm">
                <div className="relative rounded-2xl overflow-hidden border-2 border-violet-500/50 shadow-2xl shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300 hover:scale-105">
                  <div className="aspect-[3/4] relative bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10">
                    <Image
                      src="/profile.png"
                      alt="Ransu Profile"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <Link
          href="/about"
          className="text-slate-400 hover:text-violet-400 transition-colors"
          aria-label="Go to about page"
        >
          <ArrowDown size={28} />
        </Link>
      </div>
    </section>
  );
}
