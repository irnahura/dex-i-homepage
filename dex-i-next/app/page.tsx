"use client";

import { useEffect, useState, type CSSProperties } from "react";

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

const pipeline = [
  ["01", "CAMERAS", "Connect what you already have."],
  ["02", "DEX-I", "Watch every stream."],
  ["03", "EVENTS", "Detect what matters."],
  ["04", "ALERTS", "Respond with context."],
  ["05", "API", "Build intelligence into your systems."],
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scenes = Array.from(document.querySelectorAll<HTMLElement>(".home-source main > section"));
    const syncNav = () => setScrolled(window.scrollY > 80);
    const updateScenes = () => {
      const center = window.innerHeight * 0.52;
      let closest = 1;
      scenes.forEach((scene) => {
        const box = scene.getBoundingClientRect();
        const distance = Math.min(Math.abs(box.top + box.height / 2 - center) / (window.innerHeight * 0.9), 1);
        const focus = 1 - distance;
        closest = Math.min(closest, distance);
        scene.style.setProperty("--scene-scale", (1 + focus * 0.035).toFixed(4));
        scene.style.setProperty("--scene-opacity", (0.82 + focus * 0.18).toFixed(3));
        scene.style.setProperty("--scene-shift", `${((box.top + box.height / 2 - center) / window.innerHeight) * -10}px`);
      });
      const video = document.querySelector<HTMLVideoElement>(".home-source .hero-media");
      if (video && !reduceMotion.matches) {
        const progress = Math.min(Math.max(window.scrollY / Math.max(window.innerHeight * 0.9, 1), 0), 1);
        video.style.transform = `scale(${1.02 + progress * 0.08}) translateY(${progress * -1.5}%)`;
        video.style.opacity = String(1 - progress * 0.34);
      }
      setSceneProgress(1 - closest);
    };
    let ticking = false;
    const onScroll = () => {
      syncNav();
      if (!reduceMotion.matches && !ticking) {
        window.requestAnimationFrame(() => { updateScenes(); ticking = false; });
        ticking = true;
      }
    };
    syncNav();
    updateScenes();
    const root = document.querySelector<HTMLElement>(".home-source");
    const revealables = Array.from(document.querySelectorAll<HTMLElement>(".home-source main > section, .home-source .pipeline-step, .home-source .cap, .home-source .step, .home-source .video-panel, .home-source .pagefoot"));
    root?.classList.add("motion-ready");
    let revealObserver: IntersectionObserver | undefined;
    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      revealables.forEach((element) => element.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver?.unobserve(entry.target);
          }
        });
      }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
      revealables.forEach((element) => revealObserver?.observe(element));
    }
    const transitionLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.home-source a[href^="/"]'));
    const onPageLink = (event: MouseEvent) => {
      const link = event.currentTarget as HTMLAnchorElement;
      if (reduceMotion.matches || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      root?.classList.add("page-exit");
      window.setTimeout(() => { window.location.href = link.href; }, 260);
    };
    transitionLinks.forEach((link) => link.addEventListener("click", onPageLink));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver?.disconnect();
      transitionLinks.forEach((link) => link.removeEventListener("click", onPageLink));
    };
  }, []);

  return <div className="home-source">
      <style suppressHydrationWarning>{`
      .home-source main > section.pinned-scene { position: sticky; top: 0; min-height: 100svh; display: flex; align-items: center; isolation: isolate; background: var(--bg); overflow: hidden; }
      .home-source main > section.pinned-scene.hero { z-index: 1; }
      .home-source main > section.pinned-scene[data-od-id="event-showcase"] { z-index: 3; }
      .home-source main > section.pinned-scene + section { position: relative; z-index: 4; background: var(--bg); }
      .home-source main > section.pinned-scene > .container { width: 100%; }
      .home-source .hero-content { display: block; }
      .home-source .hero-copy { max-width: 520px; margin-right: auto; }
      .home-source .hero h1 { max-width: 6ch; font-family: var(--font-display), Georgia, serif; font-size: clamp(72px, 12vw, 176px); font-weight: 400; line-height: .84; letter-spacing: -.055em; }
      .home-source .row-between { display: flex; justify-content: space-between; align-items: end; gap: 20px; margin-bottom: 32px; }
      .home-source .section.zoom-scene > .container, .home-source .hero.zoom-scene > .container { transform: scale(var(--scene-scale, 1)) translateY(var(--scene-shift, 0px)); opacity: var(--scene-opacity, 1); transition: transform 420ms cubic-bezier(.22,1,.36,1), opacity 300ms var(--ease-standard); will-change: transform, opacity; }
      .home-source .hero-media { transition: transform 900ms cubic-bezier(.16,1,.3,1), opacity 640ms var(--ease-standard); }
      .home-source .screen-transition { position: fixed; inset: 0; z-index: 18; pointer-events: none; background: var(--bg); opacity: calc((1 - var(--transition-progress)) * .22); mix-blend-mode: multiply; }
      @media (max-width: 560px) { .home-source .hero h1 { font-size: clamp(54px, 16vw, 86px); } .home-source .row-between { display: block; } }
      @media (prefers-reduced-motion: reduce) { .home-source main > section.pinned-scene { position: relative; min-height: 0; display: block; } .home-source .section.zoom-scene > .container, .home-source .hero.zoom-scene > .container { transform: none !important; opacity: 1 !important; } .home-source .screen-transition { display: none; } }
    `}</style>
    <div className="screen-transition" style={{ "--transition-progress": sceneProgress } as CSSProperties} aria-hidden="true" />
    <header className={`topnav ${scrolled ? "scrolled" : ""}`} data-od-id="topnav"><div className="container topnav-inner"><a className="brand" href="#hero">DEX-I</a><nav aria-label="Primary"><a href="#intelligence">SOLUTIONS</a><a href="/documentation">DEVELOPERS</a><a href="/contact">CONTACT</a></nav><a className="btn btn-secondary" href="/contact">BOOK A DEMO →</a></div></header>

    <main>
      <section className="hero pinned-scene zoom-scene" id="hero" data-od-id="hero"><video className="hero-media" autoPlay muted loop playsInline preload="metadata" src="/next.mp4" aria-label="Abstract industrial video texture" /><div className="hero-shade" /><div className="container hero-content"><div className="hero-copy"><h1 data-od-id="hero-heading">DEX-I</h1><div className="hero-actions"><a className="btn btn-primary" href="#contact">BOOK A DEMO →</a><a className="btn btn-secondary" href="#intelligence">EXPLORE DEX-I ↓</a></div></div></div></section>

      <section className="section zoom-scene" id="intelligence" data-od-id="intelligence"><div className="container split"><div><p className="eyebrow">THE INTELLIGENCE LAYER</p><h2>RECORDING IS NOT UNDERSTANDING.</h2></div></div><div className="container pipeline" data-od-id="pipeline">{pipeline.map(([num, title, copy]) => <div className="pipeline-step" key={num}><span className="num">{num}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></section>

      <section className="section pinned-scene zoom-scene" data-od-id="event-showcase"><div className="container"><div className="row-between"><div><h2>VIDEO BECOMES SIGNAL.</h2></div></div><div className="video-panel"><video autoPlay muted loop playsInline preload="metadata" src="/made-with-mondniles-blob-tracked.mp4" aria-label="Tracked video scene used as a DEX-I event visual" /><div className="video-info"><div className="video-top"><span className="video-label"><strong>CAMERA_04 / LOBBY</strong>LIVE FEED</span></div><div className="video-bottom" /></div></div></div></section>

      <section className="section zoom-scene" data-od-id="capabilities"><div className="container"><p className="eyebrow">WHAT DEX-I SEES</p><h2>THE CAMERA FEED IS ONLY THE START.</h2><div className="cap-grid">{capabilities.map(([num, title, copy]) => <div className="cap" key={num}><span className="num">{num}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>

      <section className="section zoom-scene" data-od-id="how-it-works"><div className="container"><div className="split"><div><p className="eyebrow">HOW DEX-I WORKS</p><h2>FROM WATCHING TO ACTING.</h2></div><p className="lead">A direct path from your existing infrastructure to decisions your people and systems can use.</p></div><div className="steps">{steps.map(([num, title, copy], index) => <button className={`step ${activeStep === index ? "active" : ""}`} key={num} onMouseEnter={() => setActiveStep(index)} onFocus={() => setActiveStep(index)}><span className="num">{num}</span><h3>{title}</h3><p>{copy}</p></button>)}</div></div></section>

      <section className="section cta zoom-scene" id="contact" data-od-id="contact"><div className="container"><p className="eyebrow">READY WHEN YOU ARE</p><h2>MAKE YOUR CAMERAS INTELLIGENT.</h2><p className="lead">Tell us what you want DEX-I to detect, understand or monitor.</p><a className="btn btn-primary" href="/contact" data-od-id="contact-cta">REQUEST DEX-I DEMO →</a></div></section>
    </main>

    <footer className="pagefoot" data-od-id="footer"><div className="container"><div className="foot-grid"><div className="foot-title"><a href="#hero">DEX-I</a><br /><span className="meta">BY DEXLABS AI</span></div><div className="foot-col"><strong>PRODUCT</strong><a href="#hero">Overview</a><a href="/solutions">Solutions</a><a href="/subscription">Subscription</a><a href="/documentation">Developers</a><a href="/products">Products</a><a href="/dashboard">Dashboard</a><a href="/analytics">Analytics</a><a href="/api-keys">API Keys</a></div><div className="foot-col"><strong>SOLUTIONS</strong><a href="/solutions">Hotels</a><a href="/solutions">Retail</a><a href="/solutions">Schools</a><a href="/solutions">Factories</a></div><div className="foot-col"><strong>COMPANY</strong><a href="/documentation">About Us</a><a href="/contact">Contact Us</a><a href="/documentation">DexLabs AI</a></div><div className="foot-col"><strong>LEGAL</strong><a href="/documentation">Privacy Policy</a><a href="/documentation">Terms of Service</a><a href="/documentation">Security</a></div></div><div className="foot-bottom"><span>© 2026 DexLabs AI Education</span><span>REAL-WORLD INTELLIGENCE</span></div></div></footer>
  </div>;
}
