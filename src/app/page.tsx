import AboutSection from "@/components/about-section";
import Gallery from "@/components/gallery";
import HeroSection from "@/components/hero-section";
import Sponsors from "@/components/sponsors";

const images = [
  "/gallery/DSC_0004-4.jpg",
  "/gallery/DSC_0033-3.jpg",
  "/gallery/DSC_0086-5.jpg",
  "/gallery/DSC_0100.jpg",
  "/gallery/DSC_0142-3.jpg",
  "/gallery/DSC_0221-3.jpg",
  "/gallery/DSC02580.jpg",
  "/gallery/DSC_0339-3.jpg",
  "/gallery/DSC_0354-3.jpg",
  "/gallery/DSC_0427-3.jpg",
  "/gallery/DSC_0508-2.jpg",
  "/gallery/DSC_0572-2.jpg",
  "/gallery/DSC_0618-3.jpg",
  "/gallery/DSC_0623-4.jpg",
  "/gallery/DSC_0666-4.jpg",
  "/gallery/DSC_0692-4.jpg",
  "/gallery/DSC_0817-3.jpg",
  "/gallery/DSC_0965-3.jpg",
  "/gallery/DSC_0987-3.jpg",
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Gallery images={images} />
      <Sponsors />
    </>
  );
}
