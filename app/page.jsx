"use client"

import Hero from '@/components/Hero'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'


const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "FireBase", level: 90 }
]

const page = () => {
  return (
    <div>
      <Hero />

      {/* about me */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='p-10 pt-10 grid md:grid-cols-2 items-center  min-h-dvh  mt-30'>

        <div>
          <h1 className='text-center text-4xl font-bold max-md:mb-10' >About Me</h1>

        </div>

        <div className='flex flex-col gap-10 items-start'>
          <p className=' leading-10'> I am a full Stack developer who loves creating responsive, user-friendly websites and applications. On the frontend, I work with HTML, CSS, Javascript, React, and Next.js to bring designs to life. On thebackend, I use Node.js and Firebase to build reliable , scalable solutions.</p>


          <a
            href="#projects"
            className="bg-purple-600 hover:bg-purple-700 active:bg-purple-500 px-6 py-3 rounded-xl font-medium transition text-white"
          >
            View My Resume
          </a>

        </div>
      </motion.section>


      {/* skills section */}

      <motion.section
        id="skills"
        className="min-h-screen flex items-center justify-center px-6 pt-40"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-4xl ">
          <h2 className="text-4xl font-bold mb-10  text-center">Skills</h2>

          <div className='grid md:grid-cols-2 gap-8 gap-x-20'>


            {skills.map((skill, i) => (
              <div key={i} className="mb-6 ">
                <div className="flex justify-between mb-2">
                  <span className="font-medium ">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
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
        id="sampleProjects"
        className="min-h-screen flex flex-col  px-6 bg-gray-700 mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >



        <h2 className="text-4xl font-semibold mb-6 text-center text-white py-15 ">Take a look at some of my work</h2>


        <div className='max-md:flex max-md:justify-center'>
          <div className=" grid md:grid-cols-3 gap-15 max-md:max-w-[360px]">

            {/* the portfolio cards */}
            <div className='flex flex-col rounded-md gap-8  bg-black p-7  shadow-black shadow-md'>
              <Image src={"/waju.png"} width={1000} height={1000} className='rounded-md  h-45 ' />

              <div>
                <h3 className="text-xl font-bold text-purple-600 mb-1">Waju Heavens</h3>
                <p className="text-gray-300 mb-2">A web app to manage weddings.</p>
                <p className="text-sm text-gray-400">Built with React, Firebase, Tailwind CSS</p>


              </div>
              <div className='flex justify-center gap-15'>
                <Link href={"https://wajuheavens-qj3a.vercel.app/"} className='px-3 py-2 text-gray-200 hover:bg-gray-900 transition duration-300 bg-gray-700 rounded-full'> Demo</Link>
                <Link href={"https://github.com/OrevaEvelyn01/wajuheavens"} className='px-3 py-2 text-gray-200 hover:bg-gray-900 transition duration-300 bg-gray-700 rounded-full'>Code</Link>
              </div>

            </div>

            <div className='flex flex-col rounded-md gap-8  bg-black p-7  shadow-black shadow-md '>
              <Image src={"/calculator.png"} width={1000} height={1000} className='rounded-md  h-50 ' />

              <div>
                <h3 className="text-xl font-bold text-purple-600 mb-1">Calculator</h3>
                <p className="text-gray-300 mb-2">A web app to manage weddings.</p>
                <p className="text-sm text-gray-400">Built with Html, JavaScript and Tailwind CSS</p>


              </div>
              <div className='flex justify-center gap-15'>
                <Link href={"https://calculator-one-ebon-58.vercel.app/"} className='px-3 py-2 text-gray-200 hover:bg-gray-900 transition duration-300 bg-gray-700 rounded-full'> Demo</Link>
                <Link href={"https://github.com/OrevaEvelyn01/calculator"} className='px-3 py-2 text-gray-200 hover:bg-gray-900 transition duration-300 bg-gray-700 rounded-full'>Code</Link>
              </div>

            </div>
            <div className='flex flex-col rounded-md gap-8  bg-black p-7  shadow-black shadow-md'>
              <Image src={"/inkpress.png"} width={1000} height={1000} className='rounded-md  h-45 ' />

              <div>
                <h3 className="text-xl font-bold text-purple-600 mb-1">InkPress</h3>
                <p className="text-gray-300 mb-2">A book  review app</p>
                <p className="text-sm text-gray-400">Built with React, Firebase, Tailwind CSS</p>


              </div>
              <div className='flex justify-center gap-15'>
                <Link href={"https://inkpress-a6zn.vercel.app/"} className='px-3 py-2 text-gray-200 hover:bg-gray-900 transition duration-300 bg-gray-700 rounded-full'> Demo</Link>
                <Link href={"https://github.com/OrevaEvelyn01/inkpress"} className='px-3 py-2 text-gray-200 hover:bg-gray-900 transition duration-300 bg-gray-700 rounded-full'>Code</Link>
              </div>

            </div>

          </div>
        </div>


        <div className='flex justify-center py-10'>
          <Link href={"/projects"} className=' text-base text-white bg-purple-600 py-3 px-6  rounded-full' >
            See More

          </Link>
        </div>



      </motion.section>


      {/* contact */}

      <motion.section
        className="py-12 px-6 bg-gray-900 text-center space-y-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-4">
          Let's Build Something Together
        </h2>
        <p className="text-gray-300 mb-6">
          Interested in working with me or just want to say hi? I'd love to hear from you!
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
        >
          Contact Me
        </a>
      </motion.section>


    </div>
  )
}

export default page
