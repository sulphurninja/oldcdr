import CDRAnalysis from '../components/CDRAnalysis'
import IPDRAnalysis from '../components/IPDRAnalysis'
import DUMPAnalysis from '../components/DUMPAnalysis'
import Location from '../components/Location'
import Header from '../components/Header'
import React, { useEffect } from 'react'
import SocialAnalyzer from '../components/SocialAnalyzer'
import UPIFinder from '../components/UPIFinder'
import Vehicle from '../components/Vehicle'
import CourtCheck from '../components/CourtCheck'
import { motion } from 'framer-motion'
import FaceDetection from '../components/FaceDetection'
import GPRSCDRAnalysis from '../components/GPRSCDRAnalysis'
import SDRAnalysis from '../components/SDRAnalysis'
import GasConnection from '../components/GasConnection'
import TimeConvertor from '../components/TimeConvertor'
import IMEIInfo from '../components/IMEIInfo'
import CellIDTracker from '../components/CellIDTracker'
import CyberSecurityUpdates from '../components/CyberSecurityUpdates'
import { Howl } from 'howler';
import Link from 'next/link'

export default function Home() {

  useEffect(() => {
    const sound = new Howl({
      src: ['sound.mp3'],
    });
    sound.play();

    return () => {
      sound.unload();
    };
  }, []);


  return (
    <div className=" h-screen w-[100%]">

      <video autoPlay muted className="absolute inset-0 object-cover w-full h-full">  {/** Background Video */}
        <source src="/bg.mp4" type="video/mp4" />
        Update your system atleast!
      </video>

      <div className='h-[5%] absolute mt-[-2%] w-full'>
        <Header />
      </div>
      <div className='grid grid-cols-4   '>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className='ml-12 mt-48'
        >
          <CDRAnalysis />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className='ml-12 mt-48'
        >
          <IPDRAnalysis />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className='ml-12 mt-48'
        >
          <DUMPAnalysis />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className='ml-12 mt-48'
        >
          <GPRSCDRAnalysis />
        </motion.div>

      </div>

      <div className='grid grid-cols-3 h-[30%]  ml-[28.2%]'>
<Link href='/Social'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.01, ease: 'easeInOut' }}
          className='mt-36 ml-[-35%]'>
          <SocialAnalyzer />
        </motion.div>
        </Link>
        <Link href='/Location'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className='mt-36 ml-[-35%]'>
          <Location />
        </motion.div>
        </Link>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          className='mt-36 ml-[-35%]'>
          <UPIFinder />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 2.1, ease: 'easeInOut' }}
          className='mt-24 ml-[-35%]'>
          <Vehicle />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
          className='mt-24 ml-[-35%]'>
          <CourtCheck />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 2.8, ease: 'easeInOut' }}
          className='mt-24 ml-[-35%]'>
          <FaceDetection/>
        </motion.div>
      </div>

<div className='grid mx-4 -mt-8'>
      <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 3.2, ease: 'easeInOut' }}>
      <SDRAnalysis/>
      </motion.div>

<Link href='/TimeConvertor'>
      <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 3.8, ease: 'easeInOut' }}
          className='mt-24'>
     <TimeConvertor/>
      </motion.div>
</Link>

      <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 4.2, ease: 'easeInOut' }}
          className='mt-24'>
 <GasConnection/>
      </motion.div>
    
</div>
<div className='grid mx-2  ml-[88%] -mt-48'>
      <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 4.6, ease: 'easeInOut' }}>
      <IMEIInfo/>
      </motion.div>
      <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 5.0, ease: 'easeInOut' }}
          className='mt-24'>
      <CellIDTracker/>
      </motion.div>
      <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 5.6, ease: 'easeInOut' }}
          className='mt-24'>
      <CyberSecurityUpdates/>
      </motion.div>
    
</div>
    </div>
  )
}
