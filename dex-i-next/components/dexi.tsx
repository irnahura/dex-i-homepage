"use client";

import { useState, type FormEvent, type ReactNode } from "react";

export const marketingLinks = [
  ["SOLUTIONS", "/solutions"],
  ["SUBSCRIPTION", "/subscription"],
  ["DOCUMENTATION", "/documentation"],
];

export function MobileNav({ links }: { links: string[][] }) {
  const [open, setOpen] = useState(false);
  return <>
    <button className="mobile-menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-drawer" onClick={() => setOpen(true)}>MENU <span aria-hidden="true">↓</span></button>
    <div className={`mobile-drawer${open ? " is-open" : ""}`} id="mobile-drawer" aria-hidden={!open}>
      <div className="mobile-drawer-top"><span className="eyebrow">NAVIGATION</span><button className="mobile-drawer-close" type="button" onClick={() => setOpen(false)}>CLOSE <span aria-hidden="true">×</span></button></div>
      <nav aria-label="Mobile navigation">{links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    </div>
  </>;
}

export function MarketingHeader() {
  return <header className="site-header"><div className="site-header-inner"><a className="site-wordmark" href="/">DEX-I</a><nav className="site-nav" aria-label="Primary navigation">{marketingLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><a className="header-action" href="/contact">BOOK A DEMO <span aria-hidden="true">→</span></a><MobileNav links={[["HOME", "/"], ...marketingLinks, ["CONTACT", "/contact"]]} /></div></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="footer-cta"><p className="eyebrow">READY WHEN YOU ARE</p><h2>MAKE YOUR CAMERAS INTELLIGENT.</h2><div className="action-row"><a className="button button-primary" href="/contact">CONTACT US <span>→</span></a><a className="button button-quiet" href="/documentation">READ THE DOCS</a></div></div><div className="footer-grid"><div><a className="footer-mark" href="/">DEX-I</a><p className="muted-copy">REAL-WORLD INTELLIGENCE<br />BY DEXLABS AI</p></div><FooterColumn title="PRODUCT" links={[["Overview","/dashboard"],["Solutions","/solutions"],["Subscription","/subscription"],["Documentation","/documentation"]]} /><FooterColumn title="PRODUCT UI" links={[["Products","/products"],["Analytics","/analytics"],["API Keys","/api-keys"]]} /><FooterColumn title="COMPANY" links={[["Contact Us","/contact"],["DexLabs AI","#"]]} /></div><div className="footer-bottom"><span>© 2026 DexLabs AI Education</span><span>ALL RIGHTS RESERVED</span></div></footer>;
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) { return <div className="footer-column"><strong>{title}</strong>{links.map(([label, href]) => <a key={href + label} href={href}>{label}</a>)}</div>; }

export function MarketingShell({ eyebrow, title, intro, children, dark = true }: { eyebrow: string; title: ReactNode; intro?: string; children: ReactNode; dark?: boolean }) {
  return <div className={`route-page ${dark ? "route-dark" : "route-light"}`}><MarketingHeader /><main className="route-main"><section className="route-hero"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1>{intro && <p className="route-lede">{intro}</p>}</section>{children}</main><Footer /></div>;
}

export function SectionHeading({ eyebrow, title, copy }: { eyebrow?: string; title: string; copy?: string }) { return <div className="section-heading-new">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{copy && <p className="route-lede">{copy}</p>}</div>; }

export function ProductShell({ eyebrow, title, intro, children, active }: { eyebrow: string; title: ReactNode; intro?: string; children: ReactNode; active: string }) {
  const links = [["OVERVIEW", "/dashboard"], ["PRODUCTS", "/products"], ["ANALYTICS", "/analytics"], ["API KEYS", "/api-keys"]];
  return <div className="product-page"><aside className="product-sidebar"><a className="site-wordmark" href="/">DEX-I</a><p className="sidebar-label">COMMAND CENTRE</p><nav>{links.map(([label, href]) => <a className={active === label ? "selected" : ""} key={href} href={href}>{label}</a>)}</nav><a className="sidebar-bottom" href="/">← MARKETING SITE</a></aside><main className="product-main"><div className="product-mobile-top"><a className="site-wordmark" href="/">DEX-I</a><MobileNav links={[["HOME", "/"], ["SOLUTIONS", "/solutions"], ["DOCUMENTATION", "/documentation"], ...links, ["CONTACT", "/contact"]]} /></div><header className="product-heading"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{intro && <p className="product-lede">{intro}</p>}</div><span className="live-state"><i /> SYSTEM ONLINE</span></header>{children}</main></div>;
}

export function Status({ children = "ONLINE" }: { children?: ReactNode }) { return <span className="status"><i />{children}</span>; }

export function MetricStrip({ metrics }: { metrics: string[][] }) { return <div className="metric-strip">{metrics.map(([value, label]) => <div className="metric-block" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>; }

export function DemoForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setFailed(false); setLoading(true); window.setTimeout(() => { setLoading(false); setSent(true); }, 550); };
  if (sent) return <div className="form-success"><p className="eyebrow">REQUEST RECEIVED</p><h3>WE&apos;LL BE IN TOUCH.</h3><p className="muted-copy">A member of the DEX-I team will follow up with the next step.</p></div>;
  return <form className="demo-form" onSubmit={submit} onInvalid={() => setFailed(true)}><div className="form-grid"><label>FULL NAME<input required name="name" /></label><label>BUSINESS NAME<input required name="business" /></label><label>PHONE NUMBER<input required name="phone" /></label><label>WORK EMAIL<input required type="email" name="email" /></label><label>INDUSTRY<select required name="industry" defaultValue=""><option value="" disabled>Select industry</option><option>Hotel</option><option>Retail</option><option>School</option><option>Factory</option><option>Office</option><option>Hospital</option><option>Other</option></select></label><label>NUMBER OF LOCATIONS<input required type="number" min="1" name="locations" /></label><label>NUMBER OF CAMERAS<input required type="number" min="1" name="cameras" /></label><label>CITY<input required name="city" /></label></div><label>WHAT WOULD YOU LIKE DEX-I TO DETECT OR UNDERSTAND?<textarea required name="message" rows={5} /></label>{failed && <p className="form-error" role="alert">Please complete the required fields before sending your request.</p>}<button className="button button-primary" type="submit" disabled={loading}>{loading ? "SENDING…" : "REQUEST DEX-I DEMO"} {!loading && <span>→</span>}</button></form>;
}

export const industries = {
  Hotels: ["MAKE EVERY AREA MORE VISIBLE.", ["Reception monitoring", "Guest-area monitoring", "Restricted-area access", "Staff movement", "Crowd formation", "Emergency detection"]],
  Retail: ["UNDERSTAND STORE ACTIVITY.", ["Customer movement", "Entry / exit intelligence", "Queue monitoring", "Cash-counter activity", "Restricted areas", "Store activity analytics"]],
  Schools: ["SAFETY ACROSS THE CAMPUS.", ["Campus monitoring", "Entry / exit monitoring", "Student movement", "Restricted areas", "Crowd detection", "Safety incidents"]],
  Factories: ["SEE WHAT IS HAPPENING ON THE FLOOR.", ["Worker safety", "Restricted areas", "Operational zones", "Safety-rule monitoring", "Hazard zones", "Emergency detection"]],
  Offices: ["INTELLIGENCE BEYOND ACCESS CONTROL.", ["Access monitoring", "Workspace intelligence", "Restricted rooms", "Visitor movement", "Security events", "Facility utilization"]],
} as const;

export function IndustrySelector() {
  const [active, setActive] = useState<keyof typeof industries>("Hotels");
  const [title, items] = industries[active];
  return <div className="industry-module"><div className="industry-tabs" role="tablist">{Object.keys(industries).map((name) => <button className={active === name ? "active" : ""} role="tab" aria-selected={active === name} onClick={() => setActive(name as keyof typeof industries)} key={name}>{name.toUpperCase()}</button>)}</div><div className="industry-content"><div><p className="eyebrow">{active.toUpperCase()} / DEX-I</p><h2>{title}</h2></div><div className="capability-list">{items.map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong></div>)}</div></div></div>;
}

export function ProductViews() {
  const [active, setActive] = useState("OVERVIEW");
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null);
  const cameraRows = [["CAMERA_04", "Reception", "ONLINE · 17:42:08"], ["CAMERA_05", "Lobby", "ONLINE · 17:41:33"], ["CAMERA_06", "Parking", "OFFLINE · 15:10:21"], ["CAMERA_08", "Floor 02", "ONLINE · 17:31:22"]];
  const views: Record<string, ReactNode> = {
    OVERVIEW: <><MetricStrip metrics={[["12", "CAMERAS ONLINE"], ["847", "EVENTS TODAY"], ["08", "CRITICAL ALERTS"]]} /><div className="product-columns"><DataList title="RECENT EVENTS" rows={[["17:42:08", "Restricted zone entry", "HIGH"], ["17:31:22", "Person detected", "LOW"], ["17:14:06", "Crowd formation", "MEDIUM"], ["16:52:40", "Door activity", "LOW"]]} /><DataList title="ACTIVE ALERTS" rows={[["CRITICAL", "Restricted zone entry", "CAMERA_04"], ["HIGH", "Safety event", "CAMERA_08"], ["MEDIUM", "Crowd formation", "CAMERA_02"]]} /></div></>,
    CAMERAS: selectedCamera ? <CameraDetail camera={selectedCamera} onBack={() => setSelectedCamera(null)} /> : <CameraList rows={cameraRows} onSelect={setSelectedCamera} />,
    EVENTS: <DataList title="EVENTS / 847 EVENTS" rows={[["17:42:08", "CAMERA_04 · Restricted zone entry", "HIGH"], ["17:31:22", "CAMERA_02 · Person detected", "LOW"], ["17:14:06", "CAMERA_04 · Crowd formation", "MEDIUM"]]} action="FILTER EVENTS" />,
    ALERTS: <DataList title="ALERTS / 08 REQUIRE ATTENTION" rows={[["CRITICAL", "Restricted zone entry", "CAMERA_04 · 17:42:08"], ["HIGH", "Safety event", "CAMERA_08 · 17:31:22"], ["MEDIUM", "Crowd formation", "CAMERA_02 · 17:14:06"]]} action="VIEW RESOLVED" />,
    "SMART ZONES": <Builder title="SMART ZONES" copy="Draw the areas where attention matters." rows={["Reception", "Entrance", "Restricted Area", "Staff Only", "Emergency Exit"]} />,
    "RULE BUILDER": <Builder title="TELL DEX-I WHAT MATTERS." copy="Compose a rule from an object, an action and a result." rows={["PERSON", "ENTERS", "RESTRICTED AREA", "FOR 10 SECONDS", "SEND CRITICAL ALERT"]} />,
  };
  return <div className="product-view"><div className="product-tabs">{Object.keys(views).map((name) => <button className={active === name ? "active" : ""} onClick={() => setActive(name)} key={name}>{name}</button>)}</div>{views[active]}</div>;
}

function CameraList({ rows, onSelect }: { rows: string[][]; onSelect: (camera: string) => void }) { return <section className="data-list"><div className="list-heading"><h2>CAMERAS / 12 ONLINE / 2 OFFLINE</h2><button className="text-action">+ ADD CAMERA</button></div>{rows.map((row) => <button className="camera-row" key={row[0]} onClick={() => onSelect(row[0])}><span className="mono">{row[0]}</span><span>{row[1]}</span><span className={row[2].startsWith("ONLINE") ? "camera-online" : "muted-cell"}>{row[2]}</span><b aria-hidden="true">→</b></button>)}</section>; }

function CameraDetail({ camera, onBack }: { camera: string; onBack: () => void }) { return <section className="camera-detail"><div className="detail-top"><button className="text-action" onClick={onBack}>← ALL CAMERAS</button><Status>ONLINE</Status></div><div className="camera-detail-heading"><div><p className="eyebrow">{camera}</p><h2>LOBBY</h2><p className="product-lede">Reception · Camera health stable · Last activity 17:42:08</p></div><button className="button button-quiet">CONFIGURE CAMERA</button></div><div className="camera-feed"><div className="feed-grid" /><div className="detection-box"><strong>PERSON</strong><span>CONF. 94%</span></div><span className="feed-label">LIVE VIDEO / {camera}</span></div><div className="camera-detail-grid"><DataList title="CURRENT ZONES" rows={[["01", "Reception", "ACTIVE"], ["02", "Restricted Area", "ACTIVE"]]} /><DataList title="ACTIVE RULES" rows={[["01", "Restricted zone entry", "CRITICAL"], ["02", "Crowd formation", "MEDIUM"]]} /><DataList title="RECENT EVENTS" rows={[["17:42:08", "Restricted zone entry", "HIGH"], ["17:31:22", "Person detected", "LOW"]]} /></div><div className="camera-health"><div><span>CAMERA HEALTH</span><strong>98%</strong></div><div><span>UPTIME</span><strong>14D 06H</strong></div><div><span>TIMELINE</span><strong>LIVE</strong></div></div></section>; }

function DataList({ title, rows, action }: { title: string; rows: string[][]; action?: string }) { return <section className="data-list"><div className="list-heading"><h2>{title}</h2>{action && <button className="text-action">{action} →</button>}</div>{rows.map((row) => <div className="data-row" key={row.join("-")}>{row.map((cell, i) => <span className={i === 0 ? "mono" : i === row.length - 1 ? "muted-cell" : ""} key={cell}>{cell}</span>)}</div>)}</section>; }

function Builder({ title, copy, rows }: { title: string; copy: string; rows: string[] }) { return <section className="builder"><p className="eyebrow">PRODUCT BUILDER</p><h2>{title}</h2><p className="product-lede">{copy}</p><div className="builder-stage">{rows.map((row, i) => <div className="builder-token" key={row}><span>0{i + 1}</span><strong>{row}</strong><b>⌄</b></div>)}</div><button className="button button-primary">SAVE CONFIGURATION</button></section>; }
