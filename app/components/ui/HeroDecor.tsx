"use client";

import { useEffect, useRef } from "react";

const PARALLAX_QUERY = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

interface Bouncer {
  el: HTMLElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
}

const INITIAL_SPEEDS: [number, number][] = [
  [145, 95],
  [-115, 155],
  [170, -80],
  [-100, -140],
  [160, -115],
  [-135, 90],
];

const ALL_PARALLAX_PROPS = [
  "--portrait-parallax-x",
  "--portrait-parallax-y",
  "--decor-parallax-x",
  "--decor-parallax-y",
  "--decor-parallax-x-inverse",
  "--decor-parallax-y-inverse",
  "--decor-parallax-x-slow",
  "--decor-parallax-y-slow",
  "--decor-parallax-x-inverse-fast",
  "--decor-parallax-y-inverse-fast",
];

export default function HeroDecor() {
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = decorRef.current?.closest<HTMLElement>(".neo-hero");
    if (!hero) return;

    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    if (reducedMotion.matches) return;

    const canHover = window.matchMedia(PARALLAX_QUERY);
    const shapeEls = Array.from(
      decorRef.current?.querySelectorAll<HTMLElement>(".hero-decor__shape") ?? [],
    );
    if (!shapeEls.length) return;

    let heroRect = hero.getBoundingClientRect();
    let cw = heroRect.width;
    let ch = heroRect.height;

    const bouncers: Bouncer[] = shapeEls.map((el, i) => {
      const r = el.getBoundingClientRect();
      const [vx, vy] = INITIAL_SPEEDS[i] ?? [130, -100];
      return {
        el,
        x: r.left - heroRect.left,
        y: r.top - heroRect.top,
        vx,
        vy,
        w: r.width,
        h: r.height,
      };
    });

    let raf = 0;
    let prev = performance.now();

    let px = 0;
    let py = 0;
    let tx = 0;
    let ty = 0;

    const animate = (now: number) => {
      const dt = Math.min((now - prev) / 1000, 0.1);
      prev = now;

      for (let i = 0; i < bouncers.length; i++) {
        const b = bouncers[i];

        b.x += b.vx * dt;
        b.y += b.vy * dt;

        if (b.x < 0) { b.x = 0; b.vx = Math.abs(b.vx); }
        if (b.x + b.w > cw) { b.x = cw - b.w; b.vx = -Math.abs(b.vx); }
        if (b.y < 0) { b.y = 0; b.vy = Math.abs(b.vy); }
        if (b.y + b.h > ch) { b.y = ch - b.h; b.vy = -Math.abs(b.vy); }

        b.el.style.left = `${b.x.toFixed(1)}px`;
        b.el.style.top = `${b.y.toFixed(1)}px`;
      }

      px += (tx - px) * 0.08;
      py += (ty - py) * 0.08;

      hero.style.setProperty("--portrait-parallax-x", `${px.toFixed(2)}px`);
      hero.style.setProperty("--portrait-parallax-y", `${py.toFixed(2)}px`);
      hero.style.setProperty("--decor-parallax-x", `${(px * 0.72).toFixed(2)}px`);
      hero.style.setProperty("--decor-parallax-y", `${(py * 0.72).toFixed(2)}px`);
      hero.style.setProperty("--decor-parallax-x-inverse", `${(px * -0.5).toFixed(2)}px`);
      hero.style.setProperty("--decor-parallax-y-inverse", `${(py * -0.5).toFixed(2)}px`);
      hero.style.setProperty("--decor-parallax-x-slow", `${(px * 0.38).toFixed(2)}px`);
      hero.style.setProperty("--decor-parallax-y-slow", `${(py * 0.38).toFixed(2)}px`);
      hero.style.setProperty("--decor-parallax-x-inverse-fast", `${(px * -0.65).toFixed(2)}px`);
      hero.style.setProperty("--decor-parallax-y-inverse-fast", `${(py * -0.65).toFixed(2)}px`);

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    const onResize = () => {
      heroRect = hero.getBoundingClientRect();
      cw = heroRect.width;
      ch = heroRect.height;
      for (const b of bouncers) {
        b.x = Math.max(0, Math.min(b.x, cw - b.w));
        b.y = Math.max(0, Math.min(b.y, ch - b.h));
      }
    };

    window.addEventListener("resize", onResize);

    const onMove = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 8;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 8;
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
    };

    if (canHover.matches) {
      hero.addEventListener("pointermove", onMove, { passive: true });
      hero.addEventListener("pointerleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
      for (const b of bouncers) {
        b.el.style.left = "";
        b.el.style.top = "";
      }
      for (const prop of ALL_PARALLAX_PROPS) hero.style.removeProperty(prop);
    };
  }, []);

  return (
    <div ref={decorRef} className="hero-decor" aria-hidden="true">
      <span className="hero-decor__shape hero-decor__shape--square"><i /></span>
      <span className="hero-decor__shape hero-decor__shape--slab"><i /></span>
      <span className="hero-decor__shape hero-decor__shape--plus"><i /></span>
      <span className="hero-decor__shape hero-decor__shape--circle"><i /></span>
      <span className="hero-decor__shape hero-decor__shape--diamond"><i /></span>
      <span className="hero-decor__shape hero-decor__shape--dot"><i /></span>
    </div>
  );
}
