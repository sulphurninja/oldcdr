import React from 'react'
import { motion } from 'framer-motion'

export default function SocialAnalyzer() {
  return (
    <div className=''>
      <motion.div whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }} className='absolute cursor-pointer  h-[12%]'>
        <img src='middle2.png' className='h-full w-full ' />
      </motion.div>
    </div>

  )
}
