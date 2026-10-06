import type { Metadata } from "next";
import "./globals.css";
import "./dexi.css";
import "./mobile-nav.css";
import "./design-pass.css";
import "./home-base.css";
import "./scope-additions.css";

export const metadata: Metadata = {
  title: "DEX-I · Real-world video intelligence",
  description: "Transform existing camera infrastructure into actionable intelligence.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
