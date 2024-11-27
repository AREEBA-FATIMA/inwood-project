"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  // State to control the sheet visibility
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  // Function to close the sheet
  const closeSheet = (): void => {
    setIsOpen(false);
  };

  // Handle Navigation
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, target: string): void => {
    e.preventDefault(); // Prevent default anchor behavior
    const element = document.querySelector(target); // Find the target section
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the target
    }
    closeSheet(); // Close the sheet
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <i className="fa-solid fa-bars text-teal-800 text-xl px-2 cursor-pointer hover:text-teal-900"></i>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription>
            <nav className="lg:flex-grow flex justify-center" id="playfair">
              <ul className="flex flex-col text-teal-800 text-lg">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => handleNavigation(e, "#home")}
                    className="hover:underline hover:font-semibold px-1 cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#product"
                    onClick={(e) => handleNavigation(e, "#product")}
                    className="hover:underline hover:font-semibold px-1 cursor-pointer"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#category"
                    onClick={(e) => handleNavigation(e, "#category")}
                    className="hover:underline hover:font-semibold px-1 cursor-pointer"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => handleNavigation(e, "#about")}
                    className="hover:underline hover:font-semibold px-1 cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavigation(e, "#contact")}
                    className="hover:underline hover:font-semibold px-1 cursor-pointer"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
