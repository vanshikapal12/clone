"use client";

import {
  Users,
  Lightbulb,
  Rocket,
  TrendingUp,
  Star,
  Award,
} from "lucide-react";
import Image from "next/image";

export default function CompanyValuesSection() {
  //   const { theme } = useTheme();
  const isDark = "dark";

  return (
    <section className="flex flex-col lg:flex-row w-full">
      {/* Left side - Image */}
      <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px]">
        {/* <Image
          src="/security.jpg"
          alt="Professional working with data visualizations"
          fill
          className="object-cover object-center"
          priority
        /> */}
      </div>

      {/* Right side - Values */}
      <div
        className={`w-full lg:w-1/2 ${
          isDark ? "bg-[#0f0f20]" : "bg-slate-100"
        } p-8 lg:p-12`}
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-[#e94dff]">How We </span>
          <span className="text-[#a8ff78]">Thrive</span>
        </h2>

        <p className={`${isDark ? "text-gray-300" : "text-gray-700"} mb-10`}>
          At Everything Talent, we break the norm. Driven by community, we
          empower individuals to innovate, learn, and push boundaries— fostering
          shared growth and a relentless pursuit of excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Value Card 1 */}
          <div
            className={`${
              isDark ? "bg-[#1a1a2e]" : "bg-white shadow-md"
            } rounded-lg p-6 hover:shadow-lg transition-all`}
          >
            <div className="text-[#e94dff] mb-3">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Community-Driven</h3>
            <p
              className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We build strong connections and foster collaboration within our
              team.
            </p>
          </div>

          {/* Value Card 2 */}
          <div
            className={`${
              isDark ? "bg-[#1a1a2e]" : "bg-white shadow-md"
            } rounded-lg p-6 hover:shadow-lg transition-all`}
          >
            <div className="text-[#a8ff78] mb-3">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Innovation First</h3>
            <p
              className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We encourage creative thinking and novel approaches to challenges.
            </p>
          </div>

          {/* Value Card 3 */}
          <div
            className={`${
              isDark ? "bg-[#1a1a2e]" : "bg-white shadow-md"
            } rounded-lg p-6 hover:shadow-lg transition-all`}
          >
            <div className="text-[#e94dff] mb-3">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Action Oriented</h3>
            <p
              className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We transform ideas into tangible results through decisive action.
            </p>
          </div>

          {/* Value Card 4 */}
          <div
            className={`${
              isDark ? "bg-[#1a1a2e]" : "bg-white shadow-md"
            } rounded-lg p-6 hover:shadow-lg transition-all`}
          >
            <div className="text-[#a8ff78] mb-3">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Continuous Growth</h3>
            <p
              className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We embrace learning and development as core principles.
            </p>
          </div>

          {/* Value Card 5 */}
          <div
            className={`${
              isDark ? "bg-[#1a1a2e]" : "bg-white shadow-md"
            } rounded-lg p-6 hover:shadow-lg transition-all`}
          >
            <div className="text-[#e94dff] mb-3">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Excellence Pursuit</h3>
            <p
              className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We strive for exceptional quality in everything we do.
            </p>
          </div>

          {/* Value Card 6 */}
          <div
            className={`${
              isDark ? "bg-[#1a1a2e]" : "bg-white shadow-md"
            } rounded-lg p-6 hover:shadow-lg transition-all`}
          >
            <div className="text-[#a8ff78] mb-3">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Shared Success</h3>
            <p
              className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We celebrate achievements and grow together as one team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
