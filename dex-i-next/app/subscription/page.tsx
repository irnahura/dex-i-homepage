"use client";

import { useState } from "react";
import { MarketingShell } from "@/components/dexi";

const plans = [
  { name: "STARTER", copy: "For small businesses and single-location deployments.", action: "GET STARTED", features: ["Limited cameras", "AI event detection", "Basic smart zones", "Event history", "Dashboard access", "Standard support"] },
  { name: "PROFESSIONAL", copy: "For growing businesses and teams operating across more than one site.", action: "START PROFESSIONAL", features: ["Higher camera limits", "Advanced event rules", "Real-time alerts", "Extended event history", "Business analytics", "API access", "Webhooks", "Multi-user access"] },
  { name: "ENTERPRISE", copy: "For large and multi-location organizations.", action: "CONTACT ENTERPRISE SALES", features: ["Multi-location management", "Custom camera limits", "Advanced AI models", "Custom event detection", "API access", "Webhooks", "Enterprise integrations", "Advanced analytics", "Custom deployment", "Priority support"] },
];
const comparison = [["CAMERAS", "LIMITED", "HIGHER", "CUSTOM"], ["LOCATIONS", "1", "5", "MULTI-LOCATION"], ["EVENT DETECTION", "BASIC", "ADVANCED", "CUSTOM"], ["SMART ZONES", "BASIC", "ADVANCED", "ADVANCED"], ["ALERTS", "—", "REAL-TIME", "REAL-TIME"], ["ANALYTICS", "—", "BUSINESS", "ADVANCED"], ["API / WEBHOOKS", "—", "YES", "YES"], ["SUPPORT", "STANDARD", "PRIORITY", "DEDICATED"]];

export default function SubscriptionPage() {
  const [billing, setBilling] = useState("MONTHLY");
  return <MarketingShell eyebrow="SUBSCRIPTION" title={<>INTELLIGENCE THAT<br />SCALES WITH YOUR BUSINESS.</>} intro="Choose the operating layer that fits the way your business sees the world."><section className="route-section subscription-route"><div className="billing-toggle"><button className={billing === "MONTHLY" ? "active" : ""} onClick={() => setBilling("MONTHLY")}>MONTHLY</button><button className={billing === "ANNUAL" ? "active" : ""} onClick={() => setBilling("ANNUAL")}>ANNUAL</button></div><div className="plan-grid">{plans.map((plan, i) => <article className={`plan-card ${i === 1 ? "featured" : ""}`} key={plan.name}><p className="eyebrow">0{i + 1}</p><h2>{plan.name}</h2><p>{plan.copy}</p><div className="plan-rule" /><span className="plan-note">{billing === "ANNUAL" ? "Custom annual pricing." : "Configurable monthly pricing."}</span><div className="plan-features">{plan.features.map((feature) => <span key={feature}>{feature}</span>)}</div><a className="button button-primary" href="/contact">{plan.action} <span>→</span></a></article>)}</div><section className="comparison-section"><p className="eyebrow">PLAN COMPARISON</p><h2>CHOOSE YOUR OPERATING LAYER.</h2><table className="comparison-table"><thead><tr><th>FEATURE</th><th>STARTER</th><th>PROFESSIONAL</th><th>ENTERPRISE</th></tr></thead><tbody>{comparison.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></section><p className="small-note">Pricing is configurable for your deployment. Contact the DEX-I team for tailored monthly or annual pricing.</p></section></MarketingShell>;
}
