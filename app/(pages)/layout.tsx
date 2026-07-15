import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import MotionObserver from "../components/ui/MotionObserver";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="site-main">{children}</main>
      <MotionObserver />
      <Footer />
    </>
  );
}
