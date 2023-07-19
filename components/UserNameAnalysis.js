import React from 'react'
import { motion } from 'framer-motion'

export default function UserNameAnalysis() {
  return (
    <div className='mt-36 ml-[40%]'>
      <motion.div whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }} className='absolute cursor-pointer md:h-[40%] h-[6%]'>
        <img src='username.png' className='h-full w-full ' />
      </motion.div>
    </div>

  )
}
