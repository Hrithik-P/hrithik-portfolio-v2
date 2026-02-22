"use client"

import { motion } from "framer-motion"
import { type ReactNode, useEffect, useState } from "react"

interface AnimatedGridItemProps {
  children: ReactNode
  index: number
  className?: string
}

export function AnimatedGridItem({ children, index, className }: AnimatedGridItemProps) {
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    setHasAnimated(true)
  }, [])

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={hasAnimated ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      {children}
    </motion.div>
  )
}
