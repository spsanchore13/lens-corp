import About from "@/components/about";
import Blogs from "@/components/blogs";
import Clients from "@/components/clients";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Vision from "@/components/vision";
import WhyUs from "@/components/why-us";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Vision />
      <Blogs />
      <Clients />
      <Faq />
      <Footer />
    </main>
  );
}
