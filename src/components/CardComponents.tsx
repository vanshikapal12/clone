"use client";
import { useRef } from "react";
import { motion, useTransform, useScroll, MotionValue } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface CardProps {
  i: number;
  title: string;
  year: string;
  description: string;
  subtitle: string;
  stats: { value: string; label: string }[];
  image: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const CardComponents: React.FC<CardProps> = ({
  i,
  title,
  year,
  description,
  subtitle,
  stats,
  image,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen w-370 flex items-center justify-center sticky top-0 "
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col md:flex-row h-150 p-8 gap-12 shadow-xl bg-gradient-to-br from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 relative -top-[25%]  w-[100%] rounded-md origin-top`}
      >
        <div className="flex-1   h-130">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-500">
              {title}
            </CardTitle>
            <CardDescription className="text-white font-semibold text-4xl mt-3">
              {year}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-white mt-10">{description}</p>
            <h2 className="text-lg font-semibold mt-10">{subtitle}</h2>
            <div className="flex flex-wrap gap-4 w-100">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-4 rounded bg-gray-700 w-40 text-purple-400 font-bold ${
                    (index + 1) % 2 === 0 ? "ml-10" : "ml-0"
                  }`}
                >
                  {stat.value}
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </div>
        <div className="flex-1 ">
          <CardFooter>
            <div className="relative w-full h-[800px] rounded-lg overflow-hidden">
              <motion.div
                className="w-full h-full"
                style={{ scale: imageScale }}
              >
                <Image
                  src={image}
                  alt="Placeholder Image"
                  height={800}
                  width={570}
                  className="object-cover "
                />
              </motion.div>
            </div>
          </CardFooter>
        </div>
      </motion.div>
    </div>
  );
};

export default CardComponents;
