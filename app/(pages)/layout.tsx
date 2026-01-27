import type { Metadata } from "next";
import { Navbar, Footer } from "../components/sections";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
        <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
