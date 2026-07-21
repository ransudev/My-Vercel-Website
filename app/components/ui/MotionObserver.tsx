"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";

export default function MotionObserver() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      targets.forEach((target) => target.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.08 },
    );

    targets.forEach((target) => {
      const bounds = target.getBoundingClientRect();
      const hasAlreadyPassed = bounds.bottom <= 0;

      if (hasAlreadyPassed) {
        target.classList.add("is-revealed");
        return;
      }

      target.classList.add("is-reveal-ready");
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
