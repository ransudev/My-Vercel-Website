"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { SectionTitle, TechBadge } from "../../components/ui";
import { skillCategories } from "../../data/skills";
import Squares from "../../components/ui/Squares";

export default function SkillsPage() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
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
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with"
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {skillCategories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div
                  key={category.category}
                  className="bg-slate-800 rounded-2xl p-6 md:p-8 shadow-lg border border-slate-700 hover:shadow-xl hover:border-violet-600 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
                      <CategoryIcon className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <TechBadge key={skill.name} label={skill.name} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll to next section */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <Link
          href="/projects"
          className="text-slate-400 hover:text-violet-400 transition-colors"
          aria-label="Go to projects page"
        >
          <ArrowDown size={28} />
        </Link>
      </div>
    </section>
  );
}
