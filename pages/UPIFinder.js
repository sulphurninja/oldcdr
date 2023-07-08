import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function UPIFinder() {
  const [vpa, setVpa] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/upifind?vpa=${vpa}`);
      setResult(response.data);
      console.log(response.data.name_at_bank)
    } catch (error) {
      console.error(error);
      setResult({ error: 'An error occurred while fetching data from the API' });
    }
  };

  return (
    <div className=" h-screen w-screen absolute ">

      <video autoPlay muted className="absolute  object-cover   w-full h-full">  {/** Background Video */}
        <source src="/bg.mp4" type="video/mp4" />
        Update your system atleast!
      </video>
      <Link href='/'>
      <div className='h-[10%] w-[20%] md:w-[10%] md:h-[20%] absolute  '>
        <img src='/logo.png' className='h-full w-full' />
      </div>
      </Link>

      <div className='h-[5%] absolute md:mt-[-8%]  mt-[-22%] w-full'>
        <Header />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className='mt-[65%] md:mt-[15%] w-[10%] h-[50%] md:w-[50%] md:h-[60%] absolute md:ml-[25%]   ml-[10%] text-center '
      >
        <img src='/upi.png' className=' h-full w-full md:block hidden rounded-3xl' />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={vpa}
            onChange={(e) => setVpa(e.target.value)}
            placeholder="Enter UPI ID"
            className='bg-white absolute h-12 md:h-14 px-4 text-black font-mono border-4 border-green-400 md:mt-[-45%] md:ml-[-20%]  rounded-xl '
          />
          <button className='bg-blue-400 font-bold font-mono hover:bg-blue-700 text-white   rounded-xl absolute mt-[200%] md:mt-[-45%] md:ml-[20%] md:p-4  px-4' type="submit">Submit</button>
        </form>
      </motion.div>
      {result && (
        <div className='absolute text-white md:mt-[35%] md:ml-[30%] mt-[102%] leading-10 ml-[5%] font-mono font-bold md:text-lg text-sm'>
          {result.error ? (
            <p className='text-red-600 font-bold animate-pulse'>⚠️ Error Occurred!!!</p>
          ) : (
            <div>
              <p>Account Exists: {result.result.account_exists}</p>
              <p>Name at Bank: {result.result.name_at_bank}</p>
            </div>
          )}
        </div>
      )}

      {/*
      
         */}
{/* 
      */}
    </div>
  );
}


