import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import TreatmentsPage from "../pages/TreatmentsPage";
import ApproachPage from "../pages/ApproachPage";
import TestimonialsPage from "../pages/TestimonialsPage";
import GalleryPage from "../pages/GalleryPage";
import BookingPage from "../pages/BookingPage";
import ContactPage from "../pages/ContactPage";
import LocationsIndexPage from "../pages/LocationsIndexPage";
import LocalityDetailPage from "../pages/LocalityDetailPage";
import FAQPage from "../pages/FAQPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Core Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/treatments" element={<TreatmentsPage />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/reviews" element={<Navigate to="/testimonials" replace />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/appointment" element={<BookingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/location" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />

        {/* Locality Hub & Dedicated SEO Locality Pages */}
        <Route path="/locations" element={<LocationsIndexPage />} />
        <Route path="/homeopathy-clinic-in-pune" element={<LocationsIndexPage />} />
        <Route path="/locations/:slug" element={<LocalityDetailPage />} />
        <Route path="/homeopathy-clinic-in-pune/:slug" element={<LocalityDetailPage />} />

        {/* 404 Fallback */}
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
