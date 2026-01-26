import type { Metadata } from "next";
import { Navbar, Footer } from "../components/sections";
import PageTransition from "../components/PageTransition";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="min-h-screen">{children}</main>
      </PageTransition>
      <Footer />
    </>
  );
}
