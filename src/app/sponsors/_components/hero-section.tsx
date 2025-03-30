export default function HeroSection() {
  return (
    <div className="relative overflow-hidden py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Welcome to PyCon Kenya 2025
          </h1>
          <p className="my-6 text-xl text-muted-foreground">
            Africa's largest Python conference, held in Nairobi, Kenya. Join us
            for a weekend of inspiring talks, informative workshops, and fun
            networking events.
          </p>
        </div>
        <div className="mt-10 relative max-w-7xl mx-auto">
          <img
            src="/gallery/DSC_0004-4.jpg"
            className="rounded-xl"
            alt="PyConKE 2022"
          />
          <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
            <div className="w-48 h-48 rounded-lg bg-background/10" />
          </div>
          <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
            <div className="w-48 h-48 rounded-full bg-background/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
