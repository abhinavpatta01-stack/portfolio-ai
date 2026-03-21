'use client'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <section className="p-10 bg-linear-to-b from-black to-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 p-5 rounded-xl backdrop-blur-lg">
          <h3 className="text-xl font-semibold">BuildifyAI</h3>
          <p className="text-gray-400">AI Resume + Caption Generator SaaS</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 p-5 rounded-xl backdrop-blur-lg">
          <h3 className="text-xl font-semibold">Space Channel</h3>
          <p className="text-gray-400">AI-generated cinematic space videos</p>
        </motion.div>

      </div>
    </section>
  )
}