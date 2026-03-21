'use client'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-linear-to-r from-black via-purple-900 to-black text-white">

      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold"
      >
        Hi, I'm Abhinav 🚀
      </motion.h1>

      <p className="mt-4 text-xl text-gray-300">
        <Typewriter
          words={['AI Builder', 'SaaS Creator', 'Future Innovator']}
          loop={true}
          cursor
        />
      </p>

    </section>
  )
}