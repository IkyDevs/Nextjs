import BookingForm from "./components/BookingForm";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";


export default function villa() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header />
      <Hero />
      <Facilities />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <Footer />
    </div>
  );
}
