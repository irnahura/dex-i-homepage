"use client";

import { useEffect, useState, type CSSProperties } from "react";

const pipeline = [
  ["01", "CAMERAS", "Connect what you already have."],
  ["02", "DEX-I", "Watch every stream."],
  ["03", "EVENTS", "Detect what matters."],
  ["04", "ALERTS", "Respond with context."],
  ["05", "API", "Build intelligence into your systems."],
];

const capabilities = [
  ["01", "PERSON DETECTION", "Know when people enter the frame."],
  ["02", "PERSON TRACKING", "Follow movement across a scene."],
  ["03", "SMART ZONES", "Define where attention matters."],
  ["04", "EVENT DETECTION", "Turn activity into searchable events."],
  ["05", "REAL-TIME ALERTS", "Deliver the signal to the right team."],
  ["06", "EVENT HISTORY", "Find the moment without scrubbing."],
  ["07", "MULTI-CAMERA", "Build a wider view of operations."],
  ["08", "BUSINESS ANALYTICS", "Move from awareness to insight."],
];

const steps = [
  ["01", "CONNECT YOUR CAMERAS", "CCTV, IP cameras or RTSP streams."],
  ["02", "DEFINE WHAT MATTERS", "Set zones, rules and operational context."],
  ["03", "DEX-I WATCHES", "Streams stay live while intelligence stays quiet."],
  ["04", "EVENTS ARE DETECTED", "Activity becomes a clear, structured event."],
  ["05", "INTELLIGENCE IS DELIVERED", "Alerts, APIs, webhooks and analytics."],
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scenes = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    scenes.forEach((scene) => scene.classList.add("zoom-scene"));
    let ticking = false;
    const updateScenes = () => {
      const center = window.innerHeight * 0.52;
      let closestDistance = 1;
      scenes.forEach((scene) => {
        const box = scene.getBoundingClientRect();
        const sceneCenter = box.top + box.height / 2;
        const distance = Math.min(Math.abs(sceneCenter - center) / (window.innerHeight * 0.9), 1);
        const focus = 1 - distance;
        closestDistance = Math.min(closestDistance, distance);
        scene.dataset.sceneFocus = focus > 0.58 ? "active" : focus > 0.2 ? "near" : "far";
        scene.style.setProperty("--scene-scale", (0.97 + focus * 0.035).toFixed(4));
        scene.style.setProperty("--scene-opacity", (0.82 + focus * 0.18).toFixed(3));
        scene.style.setProperty("--scene-shift", `${((sceneCenter - center) / window.innerHeight) * -10}px`);
      });
      const heroVideo = document.querySelector<HTMLVideoElement>(".hero-media");
      if (heroVideo) {
        const progress = Math.min(Math.max(window.scrollY / Math.max(window.innerHeight * 0.9, 1), 0), 1);
        heroVideo.style.transform = `scale(${1.02 + progress * 0.08}) translateY(${progress * -1.5}%)`;
        heroVideo.style.opacity = String(1 - progress * 0.34);
      }
      setSceneProgress(1 - closestDistance);
      ticking = false;
    };
    const onMotionScroll = () => {
      if (!reduceMotion.matches && !ticking) {
        window.requestAnimationFrame(updateScenes);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onMotionScroll, { passive: true });
    if (!reduceMotion.matches) updateScenes();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onMotionScroll);
    };
  }, []);

  return (
    <>
      <style>{`\n        main > section.pinned-scene { position: sticky; top: 0; min-height: 100svh; display: flex; align-items: center; isolation: isolate; background: var(--bg); overflow: hidden; }\n        main > section.pinned-scene#hero { z-index: 1; }\n        main > section.pinned-scene[data-od-id="event-showcase"] { z-index: 3; }\n        main > section.pinned-scene + section { position: relative; z-index: 4; background: var(--bg); }\n        .section.zoom-scene > .container, .hero.zoom-scene > .container { transform: scale(var(--scene-scale, 1)) translateY(var(--scene-shift, 0px)); transform-origin: center center; opacity: var(--scene-opacity, 1); transition: transform 420ms cubic-bezier(.22,1,.36,1), opacity 300ms var(--ease); will-change: transform, opacity; }\n        main > section[data-scene-focus="far"] > .container { opacity: .66; }\n        main > section[data-scene-focus="near"] > .container { opacity: .86; }\n        .screen-transition { position: fixed; inset: 0; z-index: 18; pointer-events: none; background: var(--bg); opacity: calc((1 - var(--transition-progress)) * .22); mix-blend-mode: multiply; transition: opacity 700ms cubic-bezier(.16,1,.3,1); }\n        .screen-transition::after { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 50% 48%, transparent 0 22%, color-mix(in oklab, var(--accent) 8%, transparent) 54%, var(--bg) 100%); opacity: .4; }\n        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } main > section.pinned-scene { position: relative; min-height: 0; display: block; } .section.zoom-scene > .container, .hero.zoom-scene > .container { transform: none !important; opacity: 1 !important; } main > section[data-scene-focus="far"] > .container, main > section[data-scene-focus="near"] > .container { opacity: 1; } .screen-transition { display: none; } }\n      `}</style>
      <div className="screen-transition" style={{ "--transition-progress": sceneProgress } as CSSProperties} aria-hidden="true" />
      <header className={`topnav ${scrolled ? "scrolled" : ""}`}>
        <div className="container topnav-inner">
          <a className="brand" href="#hero">DEX-I</a>
          <nav aria-label="Primary"><a href="#intelligence">SOLUTIONS</a><a href="#contact">CONTACT</a></nav>
          <a className="btn btn-secondary" href="#contact">BOOK A DEMO →</a>
        </div>
      </header>

      <main>
        <section className="hero pinned-scene" id="hero" data-od-id="hero">
          <video className="hero-media" autoPlay muted loop playsInline preload="metadata" src="/next.mp4" aria-label="Abstract industrial video texture" />
          <div className="hero-shade" />
          <div className="container hero-content"><div className="hero-copy">
            <h1>DEX-I</h1>
            <div className="hero-actions"><a className="btn btn-primary" href="#contact">BOOK A DEMO →</a><a className="btn btn-secondary" href="#intelligence">EXPLORE DEX-I ↓</a></div>
          </div></div>
        </section>

        <section className="section" id="intelligence" data-od-id="intelligence"><div className="container split"><div><p className="eyebrow">THE INTELLIGENCE LAYER</p><h2>RECORDING IS NOT UNDERSTANDING.</h2></div></div><div className="container pipeline">{pipeline.map(([num, title, copy]) => <div className="pipeline-step" key={num}><span className="num">{num}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></section>

        <section className="section pinned-scene event-scene" data-od-id="event-showcase"><div className="container"><div className="section-heading"><h2>VIDEO BECOMES SIGNAL.</h2></div><div className="video-panel"><video autoPlay muted loop playsInline preload="metadata" src="/made-with-mondniles-blob-tracked.mp4" aria-label="Tracked video scene used as a DEX-I event visual" /><div className="video-info"><div className="video-label"><strong>CAMERA_04 / LOBBY</strong>LIVE FEED · 17:42:08</div><div className="insight"><span className="eyebrow">DEX-I INSIGHT</span><h3>RESTRICTED ZONE ENTRY</h3><p>HIGH PRIORITY · CONFIDENCE 94%</p></div></div></div></div></section>

        <section className="section" data-od-id="capabilities"><div className="container"><p className="eyebrow">WHAT DEX-I SEES</p><h2>THE CAMERA FEED IS ONLY THE START.</h2><div className="cap-grid">{capabilities.map(([num, title, copy]) => <div className="cap" key={num}><span className="num">{num}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>

        <section className="section" data-od-id="how-it-works"><div className="container"><div className="split"><div><p className="eyebrow">HOW DEX-I WORKS</p><h2>FROM WATCHING TO ACTING.</h2></div><p className="lead">A direct path from your existing infrastructure to decisions your people and systems can use.</p></div><div className="steps">{steps.map(([num, title, copy], index) => <button className={`step ${activeStep === index ? "active" : ""}`} key={num} onMouseEnter={() => setActiveStep(index)} onFocus={() => setActiveStep(index)}><span className="num">{num}</span><h3>{title}</h3><p>{copy}</p></button>)}</div></div></section>

        <section className="section cta" id="contact" data-od-id="contact"><div className="container"><p className="eyebrow">READY WHEN YOU ARE</p><h2>MAKE YOUR CAMERAS INTELLIGENT.</h2><p className="lead">Tell us what you want DEX-I to detect, understand or monitor.</p><a className="btn btn-primary" href="mailto:hello@dexlabs.ai">REQUEST DEX-I DEMO →</a></div></section>
      </main>

      <footer className="pagefoot" data-od-id="footer"><div className="container"><div className="foot-grid"><div className="foot-title">DEX-I<br /><span className="meta">BY DEXLABS AI</span></div><div className="foot-col"><strong>PRODUCT</strong><a href="#hero">Overview</a><a href="#intelligence">Solutions</a></div><div className="foot-col"><strong>SOLUTIONS</strong><a href="#contact">Hotels</a><a href="#contact">Retail</a><a href="#contact">Schools</a><a href="#contact">Factories</a></div><div className="foot-col"><strong>COMPANY</strong><a href="#contact">About Us</a><a href="mailto:hello@dexlabs.ai">Contact Us</a><a href="#contact">DexLabs AI</a></div><div className="foot-col"><strong>LEGAL</strong><a href="#contact">Privacy Policy</a><a href="#contact">Terms of Service</a><a href="#contact">Security</a></div></div><div className="foot-bottom"><span>© 2026 DexLabs AI Education</span><span>REAL-WORLD INTELLIGENCE</span></div></div></footer>
    </>
  );
}
