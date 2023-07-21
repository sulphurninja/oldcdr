import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'
import UserNameAnalysis from '../components/UserNameAnalysis'
import {motion} from 'framer-motion'
import MobileNumberAnalysis from '../components/MobileNumberAnalysis'

export default function SocialAnalyzer() {
  return (
    <div className=" h-screen w-screen absolute ">
      <video autoPlay muted className="absolute  object-cover   w-full h-full">  {/** Background Video */}
        <source src="/bg.mp4" type="video/mp4" />
        Update your system atleast!
      </video>
      <div className='h-[10%] w-[20%] md:w-[10%] md:h-[20%] absolute  '>
        <Link href='/'>
          <img src='/logo.png' className='h-full w-full' />
        </Link>
      </div>

      <div className='h-[5%] absolute md:mt-[-8%]  mt-[-22%] w-full'>
        <Header />
      </div>
      <Link href='http://109.106.255.65:9797'>
      <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}>
          <UserNameAnalysis/>
        </motion.div>
        </Link>
        <Link href='/Mobile'>
      <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}>
          <MobileNumberAnalysis/>
        </motion.div>
        </Link>
     
    </div>
  )
}
