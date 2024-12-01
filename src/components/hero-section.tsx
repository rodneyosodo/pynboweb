import GradualSpacing from "./ui/gradual-spacing";
import PulsatingButton from "./ui/pulsating-button";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden py-24 lg:py-32">
      <div className="max-w-2xl text-center mx-auto">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          <GradualSpacing
            className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
            text="Welcome to PyCon Kenya 2025"
          />
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Africa's largest Python conference, held in Nairobi, Kenya. Join us
          for a weekend of inspiring talks, informative workshops, and fun
          networking events.
        </p>
        <PulsatingButton className="mt-8 mx-auto" color="primary">
          Get Your Ticket
        </PulsatingButton>
      </div>
      <div className="mt-10 relative max-w-5xl mx-auto">
        <img
          src="https://placehold.co/1024x480"
          className="rounded-xl"
          alt="Hero Description"
        />
        <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
          <div className="w-48 h-48 rounded-lg bg-background/10" />
        </div>
        <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
          <div className="w-48 h-48 rounded-full bg-background/10" />
        </div>
      </div>
    </div>
  );
}
