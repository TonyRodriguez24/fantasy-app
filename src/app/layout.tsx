import { ReactNode } from "react";
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PlayerCard from '@/components/players/PlayerCard'
import '@/styles/globals.css'

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header><Navbar/></header>
        <main>{children}</main> {/* The current page gets rendered here */}
        <PlayerCard/>
        <footer><Footer/></footer>
      </body>
    </html>
  );
}
