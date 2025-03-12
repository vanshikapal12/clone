"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function CityBanner() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <div className="relative w-full h-100">
      {/* City Skyline Banner */}
      <div className="relative w-full overflow-hidden">
        <div className="w-full aspect-[3/1] md:aspect-[4/1] lg:aspect-[5/1] relative">
          {/* Dark mode image (visible in dark mode) */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              theme === "dark" ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src="/bottom_san_fransisco_skyline.webp"
              alt="City Skyline"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Light mode image (visible in light mode) - using a lighter version of the skyline */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              theme === "light" ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-sky-100 to-blue-200">
              <Image
                src="/bottom_san_fransisco_skyline.webp"
                alt="City Skyline"
                fill
                priority
                className="object-cover mix-blend-multiply opacity-90 cover"
              />
            </div>
          </div>

          {/* Company Name Overlay */}
          <div className="absolute top-1/2 right-4 md:right-8 lg:right-12 transform -translate-y-1/2">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wider text-fuchsia-500 dark:text-fuchsia-400">
              EVERYTHINGTALENT.AI
            </h1>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="w-full text-center py-2 px-4 text-xs bg-white dark:bg-black text-gray-600 dark:text-gray-400">
        © 2025 Everything Talent Labs, LLC. All Rights Reserved.
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 left-4 p-2 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-sm text-gray-800 dark:text-white hover:bg-white/30 dark:hover:bg-black/30 transition-colors"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </button>
    </div>
  );
}
