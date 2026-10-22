import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import ScrollToTop from "./ScrollToTop";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f5ef] text-[#202d27]">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 w-full">
        {children || <Outlet />}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
