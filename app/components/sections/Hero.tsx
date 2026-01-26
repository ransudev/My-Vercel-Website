"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Button } from "../ui";
import Squares from "../ui/Squares";

export default function Hero() {
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
        <div className="text-center max-w-4xl mx-auto py-20">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 p-1 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Ransu Profile"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Ransu
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4">
            Computer Science Student
          </p>

          <p className="text-base md:text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Consistency is key.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/projects" variant="primary">
              View Projects
            </Button>
            <Button href="/contact" variant="outline">
              Contact Me
            </Button>
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
