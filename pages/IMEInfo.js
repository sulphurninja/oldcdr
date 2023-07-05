import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';

export default function IMEIInfo() {
    const [imei, setImei] = useState('');
    const [result, setResult] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/api/imei?imei=${imei}`);
      setResult(response.data);
    } catch (error) {
      console.error(error);
      setResult({ error: 'An error occurred while fetching data from the API' });
    }
  };

  return (
    <div className='h-screen w-screen'>
      <video autoPlay muted className="absolute inset-0 object-cover w-full h-full">  {/** Background Video */}
        <source src="/bg.mp4" type="video/mp4" />
        Update your system atleast!
      </video>
      <div className='h-[5%] absolute mt-[-2%] w-full'>
        <Header />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className='mt-[15%] w-[50%]   ml-[25%] text-center absolute'
      >
        <img src='/imei.png' className='absolute rounded-3xl' />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={imei}
            onChange={(e) => setImei(e.target.value)}
            placeholder="Enter IMEI Info"
            className='bg-white absolute text-black font-mono border-4 border-green-400 mt-36 -ml-36 h-12 rounded-xl px-2 '
          />
          <button className='bg-blue-400 font-bold font-mono hover:bg-blue-700 text-white absolute mt-36 h-12 ml-24 px-6 rounded-xl ' type="submit">Submit</button>
        </form>
      </motion.div>

      {result && (
        <div className='absolute text-white mt-[32%] leading-10 ml-[30%] font-mono font-bold text-2xl'>
          {result.error ? (
            <p className='text-red-600 font-bold animate-pulse'>⚠️ Error Occurred!!!</p>
          ) : (
            <div>
              <p className=' text-sm  text-green-400'> Brand Name: {result.response.brand_name}</p>
              <p className='text-md text-green-400'> Model Name: {result.response.model_name}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}


