import { ProductShell, ProductViews } from "@/components/dexi";
import "./products.css";

export default function ProductsPage() { return <ProductShell active="PRODUCTS" eyebrow="PRODUCTS / LIVE OPERATIONS" title={<>SEE WHAT DEX-I<br />CAN UNDERSTAND.</>} intro="Monitor cameras. Review events. Configure intelligence. Respond to alerts."><div className="product-context-strip"><span>WORKSPACE / HQ NORTH</span><span>LAST SYNC / 17:42:08</span><span>INGEST / 12 CAMERAS</span></div><ProductViews /></ProductShell>; }
