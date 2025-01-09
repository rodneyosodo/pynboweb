import {
  Book,
  CalendarClock,
  Menu,
  PhoneCall,
  ShieldCheck,
  Sunset,
  Target,
  Trees,
  Users,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const subMenuItemsOne = [
  {
    title: "Overview",
    url: "#overiew",
    description: "The overview of the conference",
    icon: <Target className="size-5 shrink-0" />,
  },
  {
    title: "Schedule",
    url: "#schedule",
    description: "African time is not allowed",
    icon: <CalendarClock className="size-5 shrink-0" />,
  },
  {
    title: "Speakers",
    url: "#speakers",
    description: "List of our fantastic speakers",
    icon: <Users className="size-5 shrink-0" />,
  },
  {
    title: "Proposal Guidelines",
    url: "#proposal",
    description: "How to submit a proposal to the conference",
    icon: <ShieldCheck className="size-5 shrink-0" />,
  },
];

const subMenuItemsTwo = [
  {
    title: "What is PyNBO",
    url: "#what-is-pynbo",
    description:
      "PyNBO is a non-profit organization that aims to promote the use of Python in Kenya",
    icon: <Zap className="size-5 shrink-0" />,
  },
  {
    title: "Code of Conduct",
    url: "#code-of-conduct",
    description:
      "We expect all community members to follow our code of conduct when interacting with each other",
    icon: <Book className="size-5 shrink-0" />,
  },
  {
    title: "Python Software Foundation",
    url: "#psf",
    description:
      "PSF is a non-profit organization that promotes, protects, and advances the Python programming language",
    icon: <Trees className="size-5 shrink-0" />,
  },
  {
    title: "Support",
    url: "#support",
    description: "Get in touch with us if you need help",
    icon: <PhoneCall className="size-5 shrink-0" />,
  },
];

export default function Navbar1() {
  return (
    <section className="py-4">
      <div className="container mx-auto max-w-7xl px-8">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                className="w-8"
                alt="python-logo"
              />
              <span className="text-xl font-bold">PyConKE</span>
            </div>
            <div className="flex items-center">
              <a
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
                href="#home"
              >
                Home
              </a>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="text-muted-foreground">
                    <NavigationMenuTrigger>
                      <span>About</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        <NavigationMenuLink>
                          {subMenuItemsOne.map((item) => (
                            <li key={item.title}>
                              <a
                                className={cn(
                                  "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                )}
                                href={item.url}
                              >
                                {item.icon}
                                <div>
                                  <div className="text-sm font-semibold">
                                    {item.title}
                                  </div>
                                  <p className="text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </li>
                          ))}
                        </NavigationMenuLink>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="text-muted-foreground">
                    <NavigationMenuTrigger>Program</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        <NavigationMenuLink>
                          {subMenuItemsTwo.map((item) => (
                            <li key={item.title}>
                              <a
                                className={cn(
                                  "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                )}
                                href={item.url}
                              >
                                {item.icon}
                                <div>
                                  <div className="text-sm font-semibold">
                                    {item.title}
                                  </div>
                                  <p className="text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </li>
                          ))}
                        </NavigationMenuLink>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <a
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
                href="#sponsors"
              >
                Sponsors
              </a>
            </div>
          </div>
          <div className="flex">
            <DropdownMenu>
              <DropdownMenuTrigger>Past Events</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>2022</DropdownMenuItem>
                <DropdownMenuItem>2017</DropdownMenuItem>
                <DropdownMenuItem>2016</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                className="w-8"
                alt="python-logo"
              />
              <span className="text-xl font-bold">PyConKE</span>
            </div>
            <Sheet>
              <SheetTrigger asChild={true}>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                        className="w-8"
                        alt="python-logo"
                      />
                      <span className="text-xl font-bold">PyConKE</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mb-8 mt-8 flex flex-col gap-4">
                  <a href="#home" className="font-semibold">
                    Home
                  </a>
                  <Accordion
                    type="single"
                    collapsible={true}
                    className="w-full"
                  >
                    <AccordionItem value="about" className="border-b-0">
                      <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                        About
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsOne.map((item) => (
                          <a
                            key={item.title}
                            className={cn(
                              "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            )}
                            href={item.url}
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm font-semibold">
                                {item.title}
                              </div>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="program" className="border-b-0">
                      <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                        Program
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsTwo.map((item, idx) => (
                          <a
                            key={item.title}
                            className={cn(
                              "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            )}
                            href={item.url}
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm font-semibold">
                                {item.title}
                              </div>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <a href="#sponsors" className="font-semibold">
                    Sponsors
                  </a>
                </div>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 justify-start">
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-muted-foreground",
                      )}
                      href="#contact"
                    >
                      Contact
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-muted-foreground",
                      )}
                      href="#legal"
                    >
                      Legal
                    </a>
                  </div>
                  <div className="border-t pt-4 mt-2 flex flex-col gap-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger>Past Events</DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>2022</DropdownMenuItem>
                        <DropdownMenuItem>2017</DropdownMenuItem>
                        <DropdownMenuItem>2016</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
}
