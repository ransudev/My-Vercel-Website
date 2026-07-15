import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { skillCategories } from "../../data/skills";

export default function SkillsPage() {
  return (
    <div className="page skills-page">
      <header className="page-intro">
        <h1 className="page-title">Skills</h1>
        <p className="page-lede">A compact inventory of the tools I use to move from an idea to a working application.</p>
      </header>

      <div className="skills-index">
        {skillCategories.map((category, index) => (
          <section key={category.category} className="skill-group" aria-labelledby={`skill-${index}`} data-reveal="item" style={{ "--reveal-index": index } as CSSProperties}>
            <div className="skill-group__head">
              <h2 id={`skill-${index}`}>{category.category}</h2>
            </div>
            <ul className="skill-group__list">
              {category.skills.map((skill) => <li key={skill.name}>{skill.name}</li>)}
            </ul>
          </section>
        ))}
      </div>

      <div className="skills-page__close" data-reveal="copy">
        <p>These are working tools, not a claim of mastery. I keep the stack lean and add depth where the work demands it.</p>
        <Link href="/contact" className="btn btn--primary">Start a conversation <ArrowRight size={18} aria-hidden="true" /></Link>
      </div>
    </div>
  );
}
