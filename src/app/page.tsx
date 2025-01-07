import AboutSection from "@/components/about-section";
import HeroSection from "../components/hero-section";
import NavBar from "@/components/nav-bar";
import Sponsors from "@/components/sponsors";
import Gallery from "@/components/gallery";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <Gallery />
      <Sponsors />
      <Footer />
    </div>
  );
}
