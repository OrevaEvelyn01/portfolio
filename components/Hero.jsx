"use client"
import React from 'react'
import ParticleBackground from './particleBackground'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <main className=' min-h-dvh  flex flex-col items-center justify-center '>
            <ParticleBackground />

            <div className="z-50 px-6 flex flex-col gap-10  ">
                {/* <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hi, I’m Evelyn
                </h1> */}
                <TypeAnimation
                    sequence={[
                        " Hello, I am Obison Orevaoghene",
                        2000,

                    ]}
                    wrapper="h1"
                    speed={20}
                    repeat={1}
                    cursor={false}
                    style={{
                        fontSize: "4rem",
                        color: "#d8b4fe",
                        fontWeight: 300,

                    }}
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="mt-4 text-xl text-purple-200 text-center"
                >
                    Full-Stack Web Developer | Problem Solver | Tech Enthusiast
                </motion.p>

                {/* Button (motion) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.5, duration: 1 }}
                    className="mt-8"
                >

                    <div className='flex justify-center'>


                        <a
                            href="#projects"
                            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-medium transition text-[#e2d2f3]"
                        >
                            View My Work
                        </a>



                    </div>
                </motion.div>
            </div>

        </main>
    )
}

export default Hero
