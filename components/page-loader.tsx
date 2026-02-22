"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="flex items-center gap-0.5 font-mono text-2xl sm:text-3xl font-medium text-primary tracking-tight">
            <span aria-hidden>{"<"}</span>
            <motion.span
              aria-hidden
              className="inline-block w-0.5 sm:w-1 h-6 sm:h-7 bg-primary align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.7, ease: "easeInOut" }}
            />
            <span aria-hidden>{" />"}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
