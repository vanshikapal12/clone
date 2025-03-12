"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  return (
    <div className="relative py-30 w-full ">
      <WorldMap
        dots={[
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
      <div className="flex -mt-220 items-center justify-center h-screen bg-gradient-to-r from-[#e9d5ff] to-[#bfdbfe] bg-opacity-60 dark:bg-gradient-to-r dark:from-[#1e0e24] dark:to-[#26161b] dark:bg-opacity-60">
        <div className="relative border-2 gradient-border max-w-5xl group rounded-3xl px-6 sm:px-10 md:px-12 py-16 sm:py-20 md:py-24 overflow-hidden w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-[400px] transform transition-all duration-700 ease-out opacity-80 scale-100">
          <div className="absolute -top-4 -right-2 w-48 h-48 transition-transform duration-200 group-hover:scale-105 md:w-44 md:h-44 translate-x-1/4 -translate-y-1/4">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 animate-pulse">
                <div className="absolute right-4 top-8 w-3 h-3 bg-[#f6c436] rounded-full"></div>
                <div className="absolute right-12 top-4 w-2 h-2 bg-[#5bb2f6] rounded-full"></div>
                <div className="absolute right-8 bottom-8 w-4 h-4 bg-green-300 rounded-full"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-b from-[#ec0bc8] via-[#5bb2f6] to-white rounded-2xl shadow-lg transform rotate-12 relative overflow-hidden">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#f6c436] rounded-t-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-5xl text-center gap-4 sm:gap-6">
            <h2 className="text-[32px] mt-10 sm:text-[40px] md:text-[48px] lg:text-[40px] font-extrabold text-[#92a3b8] group-hover:text-white leading-tight">
              <span className="font-bold text-7xl text-slate-900 dark:text-white dark:group-hover:text-slate-50">
                Join Our
              </span>
              <span className="gradient-text-new text-7xl  bg-clip-text text-transparent ml-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Mission
              </span>
            </h2>

            <p className="text-lg sm:text-xl md:text-xl text-slate-700 dark:text-[#92a3b8] dark:group-hover:text-gray-300 group-hover:text-gray-950">
              Help us reimagine the future of hiring in the tech industry.
            </p>
            <button className="whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative inline-flex animate-rainbow cursor-pointer items-center justify-center bg-[length:200%] font-medium text-white dark:text-black transition-all duration-500 ease-in-out border-white hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 dark:bg-white bg-black dark:hover:ring-0 h-11 rounded-md px-8 text-md">
              Start Here
              <svg
                className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
