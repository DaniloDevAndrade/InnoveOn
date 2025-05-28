"use client"

import { motion } from "framer-motion"
import { Loader2, CheckCircle, XCircle } from "lucide-react"

type BodyProp = {
  isLoading: boolean
  errorLoading?: boolean
}

export default function LoadingConfirmation({ isLoading, errorLoading = false }: BodyProp) {
  return (
    <div className="flex items-center justify-center">
      {isLoading ? (
        <motion.div
          className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-white bg-indigo-600"
          animate={{
            scale: [1, 1.05, 1],
            transition: { duration: 0.3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
          }}
        >
          <Loader2 className="w-6 h-6 animate-spin" />
          <span className="font-medium">Carregando...</span>
        </motion.div>
      ) : errorLoading ? (
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 5, -5, 0],
            }}
            transition={{
              duration: 0.6,
              scale: { duration: 0.3 },
              rotate: { delay: 0.3, duration: 0.5 },
            }}
            className="bg-red-500 rounded-full p-2"
          >
            <XCircle className="w-12 h-12 text-white" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-medium text-lg text-red-600"
          >
          </motion.span>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-green-500 rounded-full p-2"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-medium text-lg text-green-600"
          >
            Concluído!
          </motion.span>
        </div>
      )}
    </div>
  )
}
