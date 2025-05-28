"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function RoboAnimation() {
  return (
    <div className="w-full h-full">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-4 bg-[#05a66d]/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <Image src='/images/icon-Innove.svg' priority={true} width='27' height='27' alt="" className="w-24 h-24 sm:w-28 sm:h-28" />
        </div>
      </motion.div>
    </div>
  )
}
