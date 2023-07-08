import React from 'react'
import { motion } from 'framer-motion'

export default function CourtCheck() {
  return (
    <div className=''>
 <motion.div whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }} className='absolute cursor-pointer md:h-[12%]  h-[6%]'>
        <img src='middle5.png' className='h-full w-full ' />
        </motion.div>
    </div>
  )
}
