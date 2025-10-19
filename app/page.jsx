"use client";

import Hero from "@/components/Hero";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/Contact";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "FireBase", level: 90 },
];

const page = () => {
  return (
    <div className="flex flex-col ">
      <section>
        <Hero />
      </section>

      <div className="z-40 bg-[#8000801d] ">
        <div>
          {/* about me */}
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="p-10 pt-10 grid max-md:gap-10 md:grid-cols-2 items-center  min-h-[90dvh]  "
          >
            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-center text-4xl font-bold max-md:mb-10">
                About Me
              </h1>

              <Image
                src={"/about.jpg"}
                width={1000}
                height={1000}
                className="rounded-full border border-black w-60 h-60 "
              ></Image>
            </div>

            <div className="flex flex-col gap-10 items-start">
              <p className=" leading-10">
                {" "}
                I am a full Stack developer who loves creating responsive,
                user-friendly websites and applications. On the frontend, I work
                with HTML, CSS, Javascript, React, and Next.js to bring designs
                to life. On thebackend, I use Node.js and Firebase to build
                reliable , scalable solutions.
              </p>

              <a
                href="#projects"
                className="bg-purple-600 hover:bg-purple-700 active:bg-purple-500 px-6 py-3 rounded-xl font-medium transition text-white max-[400px]:text-xs"
              >
                View My Resume
              </a>
            </div>
          </motion.section>

          {/* skills section */}

          <motion.section
            id="skills"
            className="min-h-screen flex items-center justify-center  px-6 py-15"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-4xl ">
              <h2 className="text-4xl font-bold text-center">Skills</h2>

              <div className="grid md:grid-cols-2 gap-8 gap-x-20  mt-12">
                {skills.map((skill, i) => (
                  <div key={i} className="mb-6 ">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium ">{skill.name}</span>
                      <span className="text-gray-950">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-950 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="h-3 bg-purple-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* my projects */}

          <motion.section
            id="projects"
            className="min-h-screen flex flex-col  px-6  "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold mb-6 text-center  py-15 ">
              Take a look at some of my work
            </h2>

            <div className="max-md:flex max-md:justify-center">
              <div className=" grid gap-15 max-md:max-w-[360px]">
                {/* the portfolio cards */}
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12   p-7  ">
                  <div>
                    <Image
                      src={"/waju.png"}
                      width={1000}
                      height={1000}
                      className="rounded-md  w-150 h-75  "
                    />
                  </div>

                  <div>
                    <div className="max-md:text-center">
                      <h3 className="text-xl lg:text-4xl font-bold text-black mb-3">
                        Waju Heavens
                      </h3>
                      <p className="text-black mb-3 lg:text-2xl">
                        A web app to manage weddings.
                      </p>
                      <p className="text-sm text-black leading-9 mb-3">
                        Built with React, Firebase, Tailwind CSS... Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Asperiores
                        culpa illo modi repudiandae laboriosam provident atque
                        tenetur voluptatibus accusantium inventore!
                      </p>
                    </div>
                    <div className="flex justify-start gap-15 max-md:justify-center">
                      <Link
                        href={"https://wajuheavens-qj3a.vercel.app/"}
                        className="px-3 py-2 text-gray-200 hover:bg-gray-900 transition duration-300 bg-gray-700 rounded-full"
                      >
                        {" "}
                        Demo
                      </Link>
                      <Link
                        href={"https://github.com/OrevaEvelyn01/wajuheavens"}
                        className="px-3 py-2 text-gray-200 hover:bg-gray-900 transition duration-300 bg-gray-700 rounded-full"
                      >
                        Code
                      </Link>
                    </div>
                  </div>
                </div>

                {/* number2 */}

                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12   p-7  ">
                  <div className=" md:order-2 ">
                    <Image
                      src={"/calculator.png"}
                      width={1000}
                      height={1000}
                      className="rounded-md  h-75 w-150"
                    />
                  </div>

                  <div className="md:order-1 ">
                    <div className="max-md:text-center">
                      <h3 className="text-xl lg:text-4xl font-bold text-black mb-3">
                        Calculator
                      </h3>
                      <p className="text-black mb-3 lg:text-2xl">
                        A web app to manage weddings.
                      </p>
                      <p className="text-sm text-black leading-9 mb-3">
                        Built with Html, JavaScript and Tailwind CSS... Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia ullam vel harum, tempore voluptatem quibusdam.
                        Cum facere debitis nihil quam.
                      </p>
                    </div>
                    <div className="flex justify-start gap-15 max-md:justify-center">
                      <Link
                        href={"https://calculator-one-ebon-58.vercel.app/"}
                        className="px-3 py-2 text-gray-200 hover:bg-gray-900 transition duration-300 bg-gray-700 rounded-full"
                      >
                        {" "}
                        Demo
                      </Link>
                      <Link
                        href={"https://github.com/OrevaEvelyn01/calculator"}
                        className="px-3 py-2 text-gray-200 hover:bg-gray-900 transition duration-300 bg-gray-700 rounded-full"
                      >
                        Code
                      </Link>
                    </div>
                  </div>
                </div>

                {/* number 3 */}
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12   p-7  ">
                  <div>
                    <Image
                      src={"/inkpress.png"}
                      width={1000}
                      height={1000}
                      className="rounded-md  h-75 w-150 "
                    />
                  </div>

                  <div className="">
                    <div className="max-md:text-center">
                      <h3 className="text-xl lg:text-4xl font-bold text-black mb-3">
                        InkPress
                      </h3>
                      <p className="text-black mb-3 lg:text-2xl">
                        A book review app
                      </p>
                      <p className="text-sm text-black leading-9 mb-3">
                        Built with React, Firebase, Tailwind CSS... Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit. Odio,
                        nemo? Aliquam tenetur quae illum, necessitatibus ipsum
                        ab vel laborum laudantium.
                      </p>
                    </div>
                    <div className="flex justify-start gap-15 max-md:justify-center">
                      <Link
                        href={"https://inkpress-a6zn.vercel.app/"}
                        className="px-3 py-2 text-gray-200 hover:bg-gray-900 transition duration-300 bg-gray-700 rounded-full"
                      >
                        {" "}
                        Demo
                      </Link>
                      <Link
                        href={"https://github.com/OrevaEvelyn01/inkpress"}
                        className="px-3 py-2 text-gray-200 hover:bg-gray-900 transition duration-300 bg-gray-700 rounded-full"
                      >
                        Code
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center py-10 max-[400px]:text-xs">
              <Link
                href={"/projects"}
                className=" text-base text-white bg-purple-600 py-3 px-6  rounded-full"
              >
                See More
              </Link>
            </div>
          </motion.section>

          {/* contact */}

          <motion.section
            id="contact"
            className="py-12 px-6  bg-[#1a002e]  text-center space-y-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-gray-300 mb-6">
              Interested in working with me or just want to say hi? I'd love to
              hear from you!
            </p>

            <Contact />
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default page;
