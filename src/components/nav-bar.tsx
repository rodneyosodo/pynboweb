import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function NavBar() {
  return (
    <nav className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                  alt="Workflow"
                />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-foreground"
                >
                  Home
                </a>
                <a
                  href="#Schedule"
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-foreground"
                >
                  Schedule
                </a>
                <a
                  href="#Schedule"
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-foreground"
                >
                  Speakers
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger>Past Events</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>2022</DropdownMenuItem>
                <DropdownMenuItem>2019</DropdownMenuItem>
                <DropdownMenuItem>2017</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
