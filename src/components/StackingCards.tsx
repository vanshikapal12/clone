"use client";
import { useRef } from "react";
import { ReactLenis } from "lenis/react";
import { useScroll, useTransform, motion } from "framer-motion";
import CardComponents from "./CardComponents";

const sections = [
  {
    title: "Everything Ai 2.0",
    year: "2024",
    description:
      "Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
    subtitle: "Another Subtitle H2",
    stats: [
      { value: "50K+", label: "Users" },
      { value: "98%", label: "Accuracy" },
      { value: "2x faster", label: "Processing" },
    ],
    image: "/2024.webp",
    alt: "Everything AI 2.0",
    color: "#5196fd",
  },
  {
    title: "ML Integration",
    year: "2025",
    description:
      "Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%. Everything AI also launched its first integration with popular CRM tools, allowing seamless data sharing.",
    subtitle: "Additional Enhancements",
    stats: [
      { value: "+30%", label: "Accuracy" },
      { value: "15+", label: "Integration" },
      { value: "25k+", label: "Users" },
    ],
    image: "/2023.webp",
    alt: "ML Integration",
    color: "#8f89ff",
  },
  {
    title: "The Begining",
    year: "2023",
    description:
      "Everything AI was officially launched! Released initial AI-powered automation features for data processing and visualization, setting a foundation for growth in intelligent data solutions.",
    subtitle: "New Features",
    stats: [
      { value: "10+", label: "Features" },
      { value: "1M+", label: "Data Processed" },
      { value: "1k+", label: "Clients" },
    ],
    image: "/2022.jpg",
    alt: "The Beginning",
    color: "#13006c",
  },
];

export default function StackingCards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-350 bg-slate-950">
          {sections.map((section, i) => {
            const targetScale = 1 - (sections.length - i) * 0.05;
            return (
              <CardComponents
                key={`s_${i}`}
                i={i}
                title={section?.title}
                year={section?.year}
                description={section?.description}
                subtitle={section?.subtitle}
                stats={section?.stats}
                image={section?.image}
                // alt={section?.alt}
                color={section?.color}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}
