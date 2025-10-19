"use client"
import React from 'react'
import ParticleBackground from './ParticleBackground'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <main className=' relative  flex flex-col items-center justify-center  '>
            <ParticleBackground  />
            <div className="z-30 px-6 flex flex-col gap-6 lg:gap-10 justify-center min-h-[70dvh]">
                <div className='text-4xl md:text-5xl lg:text-7xl font-semibold'> <TypeAnimation
                    sequence={[
                        " Hello, I am Obison Orevaoghene",
                        2000,
                    ]}
                    wrapper="span"
                    speed={20}
                    repeat={1}
                    cursor={false}
                    style={
                        {
                        color: "#d8b4fe",
                        fontWeight: 300,
                    }
                }
                /></div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="mt-4 text-xl max-md:text-base text-purple-200 text-left ">
                    Full-Stack Web Developer | Problem Solver | Tech Enthusiast
                </motion.p>

                {/* Button (motion) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.5, duration: 1 }}
                    className="mt-8"
                >

                    <div className='flex gap-6 justify-start max-[400px]:text-xs'>


                        <a
                            href="#projects"
                            className="bg-purple-600 hover:bg-purple-700 md:px-6 md:py-3 px-4 py-2  rounded-xl font-medium transition text-[#e2d2f3]"
                        >
                            View My Work
                        </a>

                        <a
                            href="#projects"
                            className="bg-[#e2d2f3] hover:bg-purple-100  md:px-6 md:py-3 px-4 py-2  rounded-xl font-medium transition text-purple-500"
                        >
                            Download resume
                        </a>



                    </div>
                </motion.div>
            </div>

        </main>
    )
}

export default Hero
