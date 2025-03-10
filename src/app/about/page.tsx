import Image from "next/image";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CompanyValuesSection from "./company-value-section";

const AboutPage = () => {
  return (
    <>
      <div className="container mx-auto p-4 flex flex-col lg:flex-row mt-3">
        <div className="lg:w-1/2 p-10 mt-5">
          <h6>ABOUT US</h6>
          <h1 className="text-5xl font-bold mt-6 mb-4">
            Shaping the Next Generation of HR
            <span className="gradient-text"> Tech Requirements</span>
          </h1>
          <h4 className="mt-8 mb-4">
            At Everything Talent, we help you launch your requirement into a new
            dimension.
          </h4>
          <button className="mt-13 px-4 py-2 rounded-lg flex items-center bg-gray-50 text-black border-4 border-transparent group hover:border-gradient-to-r from-blue-500 to-teal-400">
            Start for Free Today
            <span className="ml-2">&rarr;</span>
          </button>
        </div>
        <div className="lg:w-1/2 p-4 mt-3">
          <div className="gradient-border">
            <Image
              src="/heroBg2.webp"
              alt="image"
              layout="responsive"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="w-full p-4 mt-5 text-center dark:bg-[#404040] bg-gray-100 py-8 px-2 rounded-lg">
        <div className="w-50 h-10 p-1.5 text-center mx-auto rounded-lg font-bold bg-gray-500">
          Our Standards
        </div>
        <h1 className="text-6xl mt-4 mb-2 font-bold">
          The Fuel for
          <span className="gradient-text"> Our Version</span>
        </h1>
        <p className="mt-2 text-gray-400 text-2xl">
          Driven by Vision we provide comprehensive solution to meet your hiring
          need
        </p>
        <Tabs defaultValue="ambition" className="w-full ">
          <TabsList className="inline-flex bg-gradient-to-br border from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%] shadow-md rounded-full p-1 relative max-sm:hidden ml-100 w-140 h-13 mt-15">
            <TabsTrigger value="ambition" className="text-lg">
              Ambition
            </TabsTrigger>
            <TabsTrigger value="satisfaction" className="text-lg">
              Satisfaction
            </TabsTrigger>
            <TabsTrigger value="integrity" className="text-lg">
              Integrity
            </TabsTrigger>
            <TabsTrigger value="vigilance" className="text-lg">
              Vigilance
            </TabsTrigger>
          </TabsList>
          <TabsContent value="ambition">
            <Card className=" mt-4 bg-gradient-to-br border from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 rounded-3xl p-8 md:p-16 transition-transform duration-200 container ml-10">
              <CardContent>
                <div className="flex flex-col lg:flex-row ">
                  <div className="lg:w-1/2 p-7">
                    <h1 className="text-4xl text-left">
                      Connecting Talent and Opportunity
                    </h1>
                    <h2 className="mt-8 mr-120 text-2xl">Ambition</h2>
                    <p className="mt-8 text-gray-600 justify-baseline text-left">
                      Hiring doesn't have to be a painful guessing game. We're
                      bridging the gap between recruiters and software engineers
                      through our platform, where talent and opportunity finally
                      meet, creating the perfect match.
                    </p>
                    <ul className="list-none mt-4 space-y-2">
                      <li className="flex items-center">
                        <span className="text-lg text-purple-500">✧</span>
                        Connect skilled Developers with ideal roles
                      </li>
                      <li className="flex items-center">
                        <span className="text-lg text-purple-500">✧</span>
                        Streamline tech recruitment process
                      </li>
                      <li className="flex items-center">
                        <span className="text-lg text-purple-500">✧</span>
                        Create optimal candidate-company matches
                      </li>
                    </ul>
                  </div>
                  <div className="lg:w-1/2 p-4 ">
                    <Image
                      src="/ambition.jpg"
                      alt="image"
                      layout="responsive"
                      width={900}
                      height={600}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="satisfaction">
            <Card className=" mt-4 bg-gradient-to-br border from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 rounded-3xl p-8 md:p-16 transition-transform duration-200 container ml-10">
              <CardContent>
                <div className="flex flex-col lg:flex-row ">
                  <div className="lg:w-1/2 p-7">
                    <h1 className="text-5xl mr-0">Partnering for Success</h1>
                    <h2 className="mt-8 mr-120 text-2xl">Satifaction</h2>
                    <p className="mt-8 text-gray-600 justify-baseline text-left">
                      Your success is our mission, and we're here to fuel it
                      every step of the way by becoming your partner in
                      achieving hiring excellence. For us, your success isn't
                      just a goal; it's the spark that drives the future of tech
                      and innovation!
                    </p>
                    <ul className="list-none mt-4 space-y-2">
                      <li className="flex items-center">
                        <span className="text-lg text-purple-500">✧</span>
                        Connect skilled Developers with ideal roles
                      </li>
                      <li className="flex items-center">
                        <span className="text-lg text-purple-500">✧</span>
                        Streamline tech recruitment process
                      </li>
                      <li className="flex items-center">
                        <span className="text-lg text-purple-500">✧</span>
                        Create optimal candidate-company matches
                      </li>
                    </ul>
                  </div>
                  <div className="lg:w-1/2 p-4 relative">
                    <Image
                      src="/some1.avif"
                      alt="image"
                      layout="fill"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="integrity">
            <Card className=" mt-4 bg-gradient-to-br border from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 rounded-3xl p-8 md:p-16 transition-transform duration-200 container ml-10">
              <CardContent>
                <div className="flex flex-col lg:flex-row ">
                  <div className="lg:w-1/2 p-7">
                    <h1 className="text-5xl mr-0">Building Trust in Hiring</h1>
                    <h2 className="mt-8 mr-120 text-2xl">Integrity</h2>
                    <p className="mt-8 text-gray-600 justify-baseline text-left">
                      We believe that trust is the foundation of every great
                      hire. That's why we make it our mission to prioritize
                      clarity and trust at every step of the journey.
                    </p>
                    <ul className="list-none mt-4 space-y-2">
                      <li className="flex items-center">
                        <span className="text-lg text-purple-500">✧</span>
                        Build hiring confidence through transparency
                      </li>
                      <li className="flex items-center">
                        <span className="text-lg text-purple-500">✧</span>
                        Prioritize trust in recruitment process
                      </li>
                      <li className="flex items-center">
                        <span className="text-lg text-purple-500">✧</span>
                        Foster honest candidate-employer relationships
                      </li>
                    </ul>
                  </div>
                  <div className="lg:w-1/2 p-4 ">
                    <Image
                      src="/integrity.webp"
                      alt="image"
                      layout="responsive"
                      width={900}
                      height={600}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="vigilance">
            <Card className=" mt-4 bg-gradient-to-br border from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 rounded-3xl p-8 md:p-16 transition-transform duration-200 container ml-10">
              <CardContent>
                <div className="flex flex-col lg:flex-row ">
                  <div className="lg:w-1/2 p-7">
                    <h1 className="text-4xl text-left ">
                      Security-Driven Solutions
                    </h1>
                    <h2 className="mt-8 mr-120 text-2xl">Vigilance</h2>
                    <p className="mt-8 text-gray-600 justify-baseline text-left">
                      Confidence starts with security, and we are committed to
                      enhancing your experience. Your security is woven into
                      every part of our platform so you can drive forward
                      without a second thought.
                    </p>
                    <ul className="list-none mt-4 space-y-2">
                      <li className="flex items-center">
                        <span className="text-lg text-purple-500">✧</span>
                        Prioritize end-to-end platform security
                      </li>
                      <li className="flex items-center">
                        <span className="text-lg text-purple-500">✧</span>
                        Ensure protected recruitment experience
                      </li>
                      <li className="flex items-center">
                        <span className="text-lg text-purple-500">✧</span>
                        Build confidence through data protection
                      </li>
                    </ul>
                  </div>
                  <div className="lg:w-1/2 p-4">
                    <div className="relative h-96">
                      <Image
                        src="/security.jpg"
                        alt="image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      {/* Fourth Section */}
      <div className="container mx-auto mt-10 p-4 flex flex-col lg:flex-row h-180 ">
        <div className="lg:w-1/2 p-4 h-130 mt-20">
          <h2 className="mb-6 text-4xl font-bold tracking-tight dark:text-white sm:text-5xl">
            The
            <span className="gradient-text"> Story </span>
            Behind Us
          </h2>
          <h4 className="text-xl mt-2 text-left">
            It all started with one question: What if hiring didn't have to feel
            like gambling on a hunch?
          </h4>
          <div className="flex flex-wrap justify-center mt-12 space-y-4 ">
            <div className="w-1/2 p-2  h-43">
              <div className="p-4 bg-white rounded shadow h-40 border-gray-500 dark:border-gray-700 hover:border-transparent hover:bg-purple-600 bg-gradient-to-br from-slate-200 via-gray-50 to-transparent dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-105 hover:bg-[linear-gradient(to right, #ff00cc, #333399)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-purple-400 mb-3"
                >
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                  <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                  <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                  <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                  <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                </svg>

                <h6>AI-Powered</h6>
                <p className="text-gray-500">
                  Advanced AI/ML Algorithm for precise matching
                </p>
              </div>
            </div>
            <div className="w-1/2 p-2 h-43">
              <div className="p-4 bg-white rounded shadow h-40  dark:border-gray-700 hover:border-gradient hover:bg-purple-600 bg-gradient-to-br from-slate-200 via-gray-50 to-transparent dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-purple-400 mb-3"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>

                <h6>Human-Centric</h6>
                <p className="text-gray-500">
                  Built by recruiters, for recruiters
                </p>
              </div>
            </div>
            <div className="w-1/2 p-2 h-43">
              <div className="p-4 bg-white rounded shadow h-40  dark:border-gray-700 hover:border-gradient hover:bg-purple-600 bg-gradient-to-br from-slate-200 via-gray-50 to-transparent dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-purple-400 mb-3"
                >
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                  <path d="M22 10v6"></path>
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                </svg>

                <h6>Skill Assessment</h6>
                <p className="text-gray-500">
                  Comprehensive skill evaluation system
                </p>
              </div>
            </div>
            <div className="w-1/2 p-2 h-43 ">
              <div className="p-4 bg-white rounded shadow h-40  dark:border-gray-700 hover:border-gradient hover:bg-purple-600 bg-gradient-to-br from-slate-200 via-gray-50 to-transparent dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-purple-400 mb-3"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>

                <h6>Future-Ready</h6>
                <p className="text-gray-500">
                  Constantly evolving with industry needs
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 p-4 mt-20 relative h-[560px] transition-transform duration-200 hover:scale-x-105 overflow-hidden rounded-2xl">
          <Image
            src="/our-story.svg"
            alt="image"
            layout="responsive"
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
      ///bhnj
      {/* Fifth Section */}
      {/* <div className=" h-500 mx-auto p-4 flex flex-col lg:flex-row mt-3 backdrop-blur-2xl bg-amber-900"> */}
      //first div
      {/* <div className="container mx-auto mt-20 p-4 flex flex-col lg:flex-row bg-amber-400 h-60"> */}
      {/* <div className="w-210 h-50 bg-amber-500 ml-50">
            <div className="w-26 h-8 p-1.5 text-center mx-auto rounded-lg font-bold bg-gray-500">
              Our Values
            </div>
            <h2 className="text-6xl mt-4 mb-2 font-bold ml-15">
              Our Philosophy in<span className="gradient-text"> Action</span>
            </h2>
            <p className="mt-2 text-gray-400 text-2xl">
              At Everything Talent, Bringing Our Values to Life Through
              Meaningful Actions
            </p>
          </div> */}
      {/* </div> */}
      <div className=" mx-auto p-4 flex flex-col mt-3 backdrop-blur-2xl bg-amber-900relative h-full w-full bg-white dark:bg-slate-950 py-8 sm:py-16 md:py-28 px-4 sm:px-6 lg:px-8">
        {/* First div */}
        <div className="container mx-auto mt-20 p-4 flex flex-col h-60">
          <div className="w-26 h-8 p-1.5 text-center mx-auto rounded-lg font-bold bg-gray-500">
            Our Values
          </div>
          <h2 className="text-6xl mt-4 mb-2 font-bold text-center">
            Our Philosophy in<span className="gradient-text"> Action</span>
          </h2>
          <p className="mt-2 text-gray-400 text-2xl text-center">
            At Everything Talent, Bringing Our Values to Life Through Meaningful
            Actions
          </p>
        </div>

        {/* Second div */}
        <div className="container mx-auto p-4 flex flex-col h-60">
          <div className="flex flex-row space-x-4">
            <div className="w-90 h-50 bg-yellow-300 p-4 rounded-2xl">
              <div className="font-bold text-yellow-700 text-2xl">01</div>
              <div className="text-xl font-black text-black/60 md:text-2xl">
                <p>
                  With us, there are no surprises—just straight talk and genuine
                  commitment.
                </p>
                <sup className="text-sm text-yellow-700">#HONESTY</sup>
              </div>
            </div>
            <div className="w-140 p-4 rounded-2xl bg-violet-500">
              <div className="font-bold text-[#4f357d] ">03</div>
              <p className="text-2xl font-semibold text-white">
                We act with urgency to ensure progress and deliver results
                efficiently. Every moment matters.
              </p>
              <div className="text-sm text-[#4f357d]">#URGENCY</div>
              <div className="flex py-0 ">
                <div className="group relative z-0 -ml-4 flex scale-100 items-center transition-all duration-200 ease-in-out hover:z-10 hover:scale-110 bg-amber-900">
                  <div className="relative overflow-hidden rounded-full bg-white">
                    <div className="bg-size pointer-events-none absolute h-full w-full animate-bg-position from-violet-500 from-30% via-cyan-400 via-50% to-pink-500 to-80% bg-[length:300%_auto] opacity-15 group-hover:bg-gradient-to-r"></div>
                    <div className="z-1 blur-lg"></div>
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="John Doe"
                      className="rounded-full object-cover m-1 size-8"
                    />
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 transform whitespace-nowrap rounded bg-slate-900 p-2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
                    <div className="text-sm font-semibold">John Doe</div>
                    <div className="text-sm">Software Engineer</div>
                  </div>
                </div>
                <div className="bg-amber-600"></div>
              </div>
            </div>

            <div className="w-90 bg-gray-500 p-4 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:w-12 md:h-12 text-current"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 8V4H8"></path>
                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
              <div className="text-sm font-medium text-black">02</div>
              <div className="mt-1 inline-block font-bold text-2xl">
                Embrace hard work
              </div>
              <div className="font-semibold mt-5">
                <div className="relative font-mono">
                  <div className="invisible">#HARDWORK</div>
                  <div className="absolute inset-0 h-full w-full">
                    #HARD<span className="">|</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third div */}
          <div className="container mx-auto p-4 flex flex-col h-60 s">
            <div className="flex flex-row space-x-4">
              <div className="w-1/2 p-4 rounded-2xl h-50 bg-lime-300 ">
                <div className="text-sm font-medium text-lime-600">05</div>
                <div className="text-xl mt-5 font-black text-lime-800">
                  We’re here to help you aim higher, break limits, and achieve
                  what others might think impossible.
                </div>
                <div className="text-sm  text-right text-lime-400">
                  #ASPIRATION
                </div>
              </div>
              <div className="w-1/2 bg-gray-100 p-4 rounded-2xl">
                <div className="text-lg font-bold text-neutral-800 text-center">
                  06
                </div>
                <div className="group relative flex items-center justify-center px-2 py-2 md:px-6 md:py-4 bg-transparent">
                  <div className="text-2xl font-black uppercase text-foreground/15 transition-all group-hover:opacity-60 md:text-3xl">
                    Do hard things
                  </div>
                  <div className="text-md absolute font-black uppercase transition-all group-hover:text-4xl md:text-3xl group-hover:md:text-4xl text-zinc-800">
                    Do hard things
                  </div>
                  <sup className="text-sm text-neutral-800 text-center mt-20 mr-57 ">
                    #RESILIENT
                  </sup>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth div */}
          <div className="container mx-auto p-4 flex flex-col  h-60">
            <div className="flex flex-row space-x-4">
              <div className="w-100 bg-green-200 p-4 rounded-2xl h-50">
                <div className="text-sm font-bold text-neutral-800">04</div>
                <div className="mt-6  text-lg font-bold">Grow 1% every day</div>
                <div className="text-sm mt-6 font-bold text-neutral-800 ">
                  #GROWTHMINDSET
                </div>
              </div>
              <div className="w-100 bg-rose-300 p-4 rounded-2xl">
                <div className="text-sm font-medium text-neutral-800">07</div>
                <div className="mt-2 font-bold text-white ">
                  We value fresh ideas, bold solutions, and the freedom to
                  imagine what’s next.
                </div>
                <div className="text-sm mt-5 text-neutral-800 ">
                  #CREATIVITY
                </div>
              </div>
              <div className="w-2/3 bg-blue-200 p-4 rounded-2xl">
                <div className="text-sm font-medium text-blue-800">08</div>
                <p className="text-2xl mt-5 ">
                  Commit to continuous learning and improvement
                </p>
                <div className="text-sm  mt-3 text-blue-800">#LEARNING</div>
              </div>
            </div>
          </div>

          {/* Fifth div */}
          <div className="container mx-auto p-4 flex flex-col h-60">
            <div className="flex flex-row space-x-4">
              <div className="w-1/2 bg-yellow-300 p-4 rounded-2xl h-50">
                <div className="text-sm font-medium text-[#6C1717]">10</div>
                <div className="text-2xl font-black text-black/60">
                  Every project, every solution we create is aimed at
                  contributing to something greater.
                </div>
                <div className="text-sm pt-6 text-[#6C1717]">#CONTRIBUTION</div>
              </div>
              <div className="w-1/2 bg-[#F77C73]  p-4 rounded-2xl">
                <div className="text-sm font-medium text-[#4E1B26]">09</div>
                <p className="text-2xl text-white ">
                  Build trust through actions, not just words.
                </p>
                <div className="text-sm  text-[#4E1B26]">#TRUST</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      //
      <main className="min-h-screen">
        <CompanyValuesSection />
      </main>
    </>
  );
};

export default AboutPage;
