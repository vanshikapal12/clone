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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[50%] max-w-4xl h-90 bg-amber-600 flex flex-col items-center justify-center gradient-border">
          <h1 className="text-7xl font-bold text-white mr-8 inline-block">
            Join Our
            <span className="text-7xl gradient-text inline-block">
              {" "}
              Mission
            </span>
          </h1>
          <p className="text-lg sm:text-xl mt-5 md:text-xl text-slate-700 dark:text-[#92a3b8] dark:group-hover:text-gray-300 group-hover:text-gray-950">
            Help us reimagine the future of hiring in the tech industry.
          </p>
          <button className="bg-white text-black py-2 px-4 rounded mt-9 w-50">
            Start Here
          </button>
        </div>
      </div>
    </div>
  );
}
