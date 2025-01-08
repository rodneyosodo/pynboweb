import BlurFade from "./ui/blur-fade";
import Image from "next/image";

export default function Gallery() {
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
  return (
    <div className="border-t py-12 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="columns-2 gap-4 sm:columns-3">
          {images.map((imageUrl, idx) => (
            <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView={true}>
              <Image
                className="mb-4 size-full rounded-lg object-contain"
                src={imageUrl}
                width={600}
                height={600}
                alt="Gallery"
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
}
