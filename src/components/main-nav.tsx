"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image"; // Import Image component
import { Menu, Moon, Sun, ChevronDown, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MainNav() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-3">
      <div className="container flex items-center h-14 ml-20">
        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pl-1 pr-0">
            <div className="px-7">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex h-8 w-8 ml-10">
                  <Image
                    src={"/logo.webp"} // Adjust the src attribute to the path of your image
                    alt="Logo"
                    height={55}
                    width={55}
                    className="rounded-full p-1 border"
                  />
                  |
                </div>
              </Link>
            </div>
            <div className="border w-3 h-8 border-gray-500 rounded-lg p-2 mt-10">
              {" "}
              {/* Add border and padding to the container */}
              <nav className="flex flex-col gap-4 px-2 mt-4 bg-amber-300 border-gray-700">
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="block px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Products
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                    Solutions
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Enterprise</DropdownMenuItem>
                    <DropdownMenuItem>Small Business</DropdownMenuItem>
                    <DropdownMenuItem>Startups</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link
                  href="/pricing"
                  className="block px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Pricing
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Blog
                </Link>
                <Link
                  href="/support"
                  className="block px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Support
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-2 text-sm font-medium text-purple-500 hover:bg-accent hover:text-purple-400"
                >
                  About
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <div className="border w-2xl border-gray-500 rounded-lg p-2 mr-4">
          {" "}
          {/* Add border and padding to the container */}
          <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-6">
            <div className="flex h-9 w-16  p-1 ">
              {" "}
              {/* Add rounded border and padding to the container */}
              <Image
                src={"/logo.webp"} // Adjust the src attribute to the path of your image
                alt="Logo"
                height={52}
                width={52}
              />
            </div>
            <Link
              href="/"
              className="block text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block text-sm font-medium transition-colors hover:text-primary"
            >
              Products
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-primary">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Enterprise</DropdownMenuItem>
                <DropdownMenuItem>Small Business</DropdownMenuItem>
                <DropdownMenuItem>Startups</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/pricing"
              className="block text-sm font-medium transition-colors hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="block text-sm font-medium transition-colors hover:text-primary"
            >
              Blog
            </Link>
            <Link
              href="/support"
              className="block text-sm font-medium transition-colors hover:text-primary"
            >
              Support
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium text-purple-500 transition-colors hover:text-purple-400"
            >
              About
            </Link>
          </nav>
        </div>

        {/* Right Side Items */}
        <div className="flex flex-1 items-center justify-end space-x-2 border border-gray-500 rounded-lg p-2 w-38 ml-133  ">
          <Button
            variant="ghost"
            className="hidden lg:inline-flex border-gradient"
            onMouseDown={(e) =>
              e.currentTarget.classList.add(
                "bg-gradient-to-r",
                "from-purple-500",
                "to-pink-500"
              )
            }
            onMouseUp={(e) =>
              e.currentTarget.classList.remove(
                "bg-gradient-to-r",
                "from-purple-500",
                "to-pink-500"
              )
            }
          >
            Request a Demo
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            className="mr-2 bg-amber-200"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 bg-amber-900" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button>
            Login
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
