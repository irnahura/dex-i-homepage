import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><Header />{children}<Footer /></>;
}
