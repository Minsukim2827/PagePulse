"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Ensure the component is only rendered on the client
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.button
      type="button"
      className={`inline-flex justify-center rounded-full p-2 text-sm font-medium border shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
        theme === "dark" ? "bg-black text-white border-white" : "bg-white text-black border-gray-300"
      }`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      whileTap={{ scale: 0.9 }} // Adds a tap animation
      animate={{ rotate: [0, 180, 360], transition: { duration: 0.5 } }} // Adds rotation animation when toggled
    >
      {theme === "dark" ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Sun className="h-3 w-3 text-white" />
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Moon className="h-3 w-3 text-black" />
        </motion.div>
      )}
    </motion.button>
  )
}
