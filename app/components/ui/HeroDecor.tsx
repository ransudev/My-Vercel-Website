"use client";

import { useEffect, useRef } from "react";

const PARALLAX_QUERY = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export default function HeroDecor() {
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = decorRef.current?.closest<HTMLElement>(".neo-hero");
    const canHover = window.matchMedia(PARALLAX_QUERY);
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);

    if (!hero || !canHover.matches || reducedMotion.matches) return;

    let frame = 0;
    let nextX = 0;
    let nextY = 0;

    const render = () => {
      hero.style.setProperty("--portrait-parallax-x", `${nextX.toFixed(2)}px`);
      hero.style.setProperty("--portrait-parallax-y", `${nextY.toFixed(2)}px`);
      hero.style.setProperty("--decor-parallax-x", `${(nextX * 0.72).toFixed(2)}px`);
      hero.style.setProperty("--decor-parallax-y", `${(nextY * 0.72).toFixed(2)}px`);
      hero.style.setProperty("--decor-parallax-x-inverse", `${(nextX * -0.5).toFixed(2)}px`);
      hero.style.setProperty("--decor-parallax-y-inverse", `${(nextY * -0.5).toFixed(2)}px`);
      frame = 0;
    };

    const queueRender = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();
      const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
      const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;

      nextX = normalizedX * 8;
      nextY = normalizedY * 8;
      queueRender();
    };

    const reset = () => {
      nextX = 0;
      nextY = 0;
      queueRender();
    };

    hero.addEventListener("pointermove", handlePointerMove, { passive: true });
    hero.addEventListener("pointerleave", reset);

    return () => {
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", reset);
      if (frame) window.cancelAnimationFrame(frame);
      hero.style.removeProperty("--portrait-parallax-x");
      hero.style.removeProperty("--portrait-parallax-y");
      hero.style.removeProperty("--decor-parallax-x");
      hero.style.removeProperty("--decor-parallax-y");
      hero.style.removeProperty("--decor-parallax-x-inverse");
      hero.style.removeProperty("--decor-parallax-y-inverse");
    };
  }, []);

  return (
    <div ref={decorRef} className="hero-decor" aria-hidden="true">
      <span className="hero-decor__shape hero-decor__shape--square"><i /></span>
      <span className="hero-decor__shape hero-decor__shape--slab"><i /></span>
      <span className="hero-decor__shape hero-decor__shape--plus"><i /></span>
    </div>
  );
}
