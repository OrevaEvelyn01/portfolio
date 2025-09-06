"use client"

import Hero from '@/components/Hero'
import React from 'react'
import { motion } from 'framer-motion'


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
        className='p-10 pt-20 grid grid-cols-2 items-center  '>

        <div>
          <h1 className='text-center text-4xl font-bold'>About Me</h1>

        </div>

        <div className='flex flex-col gap-10 items-start'>
          <p className=' leading-10'> I am a full Stack developer who loves creating responsive, user-friendly websites and applications. On the frontend, I work with HTML, CSS, Javascript, React, and Next.js to bring designs to life. On thebackend, I use Node.js and Firebase to build reliable , scalable solutions.</p>


          <a
            href="#projects"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-medium transition text-white"
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

          <div className='grid grid-cols-2 gap-8 gap-x-20'>


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
        id="projects"
        className="min-h-screen flex items-center justify-center px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 ">Take a look at some of my work</h2>
          <div className="grid sm:grid-cols-2 gap-6">

            {/* i want to use cards, use absolute to position it well for designs */}
            <div className="p-4 bg-gray-800 rounded-xl">Project 1</div>
            <div className="p-4 bg-gray-800 rounded-xl">Project 2</div>
          </div>
        </div>
      </motion.section>



    </div>
  )
}

export default page
