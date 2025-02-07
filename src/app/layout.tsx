import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AllPlayers from "@/components/players/AllPlayers";
import "@/styles/globals.css";
import { ReactNode } from "react";

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main> {/* The current page gets rendered here */}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
