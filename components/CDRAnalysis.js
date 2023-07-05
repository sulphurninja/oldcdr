import React, { useState } from 'react'
import { parseCSV, findMaxSMS, findCommonCaller, findCommonIMEI, findMaxDurationCallers } from './../utils/csvParser';
import { motion } from 'framer-motion'
import { useRouter } from 'next/router';

export default function CDRAnalysis() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [commonCaller, setCommonCaller] = useState(null);
  const [longDurationCaller, setLongDurationCaller] = useState(null);
  const [commonIMEI, setCommonIMEI] = useState(null);
  const [maxSMS, setMaxSMS] = useState(null);
  const [parsedData, setParsedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const totalSlides = 5;


  const Router = useRouter();

  const pageReload = () => {

    Router.reload()


  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setParsedData(null); // Reset parsedData state before uploading new file
    handleUpload(file); // Call handleUpload when file is selected
  };

  const handleUpload = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const csvData = event.target.result;
        const parsedData = parseCSV(csvData);
        setIsLoading(true);
        setTimeout(() => {
          console.log('Parsed Data:', parsedData);
          setParsedData(parsedData);
          setCommonCaller(findCommonCaller(parsedData));
          setLongDurationCaller(findMaxDurationCallers(parsedData));
          setMaxSMS(findMaxSMS(parsedData));
          setCommonIMEI(findCommonIMEI(parsedData));
          setIsLoading(false);
        }, 2000);
      };
      reader.readAsText(file);
    }
  };

  const handleNextSlide = () => {
    setActiveSlideIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousSlide = () => {
    setActiveSlideIndex((prevIndex) => prevIndex - 1);
  };

  const renderSlideContent = () => {
    switch (activeSlideIndex) {
      case 0:
        return (
          <div className="opacity-95 rounded-xl w-[90%] h-screen">
            <div className="h-[65%] w-[65%] bg-black mt-12">
              <img src="/2.png" className="absolute h-[80%] w-[80%]" />
            </div>
            {Array.isArray(commonCaller) ? (
              <div className="grid grid-cols-1 -mt-80 ml-80 absolute">
                {commonCaller.map((caller, index) => (
                  <div key={index} className="flex">
                    {index === 0 && (
                      <h1 className="text-2xl absolute w-full -mt-14 ml-[130%] text-yellow-200 font-bold font-mono">{`📱 ${caller.displayNumber} `}</h1>
                    )}
                    <p className="text-2xl text-white font-bold mb-2">{caller.number}</p>
                    <p className="text-[10px] text-green-500 pl-4 font-bold pt-2">Count: {caller.count}</p>
                    <p className="text-[10px] text-green-500 pl-4 font-bold pt-2">Incoming: {caller.incoming}</p>
                    <p className="text-[10px] text-green-500 pl-4 font-bold pt-2">Outgoing: {caller.outgoing}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>{commonCaller}</p>
            )}
          </div>
        );
      case 1:
        return (
          <div className="opacity-95 rounded-xl w-[90%] h-screen">
            <div className="h-[65%] w-[65%] bg-black mt-12">
              <img src="/3.png" className="absolute h-[80%] w-[80%]" />
            </div>
            {Array.isArray(longDurationCaller) ? (
              <div className="grid grid-cols-1 -mt-80 ml-80 absolute">
                {longDurationCaller.map((caller, index) => (
                  <div key={index} className="flex">
                    {index === 0 && (
                      <h1 className="text-2xl absolute w-full -mt-14 ml-[200%] text-yellow-200 font-bold font-mono">{`📱 ${caller.displayNumber} `}</h1>
                    )}
                    <p className="text-2xl text-white font-bold mb-2">{caller.number}</p>
                    <p className="text-[10px] text-green-500 pl-4 font-bold pt-2">Duration: {caller.duration}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>{longDurationCaller}</p>
            )}
          </div>
        );
      case 2:
        return (
          <div className="opacity-95 rounded-xl w-[90%] h-screen">
            <div className="h-[65%] w-[65%] bg-black mt-12">
              <img src="/4.png" className="absolute h-[80%] w-[80%]" />
            </div>
            {Array.isArray(commonIMEI) ? (
              <div className="grid grid-cols-1 -mt-80 ml-80 absolute">
                {commonIMEI.map((caller, index) => (
                  <div key={index} className="flex">
                    {/* {index === 0 && (
                      <h1 className="text-2xl absolute w-full -mt-14 ml-[130%] text-yellow-200 font-bold font-mono">{`📱 ${caller} `}</h1>
                    )} */}
                    <p className="text-2xl text-white font-bold mb-2">{caller.imei}</p>
                    <p className="text-[10px] text-green-500 pl-4 font-bold pt-2">Count: {caller.count}</p>

                  </div>
                ))}
              </div>
            ) : (
              <p>{commonIMEI}</p>
            )}
          </div>
        );
      case 3:
        return (
          <div className="opacity-95 rounded-xl w-[90%] h-screen">
            <div className="h-[65%] w-[65%] bg-black mt-12">
              <img src="/6.png" className="absolute h-[80%] w-[80%]" />
            </div>
            {Array.isArray(maxSMS) ? (
              <div className="grid grid-cols-2 gap-x-4 mt-[-25%] ml-48 absolute">
                {maxSMS.map((caller, index) => (
                  <div key={index} className="flex">
                    {index === 0 && (
                      <h1 className="text-2xl absolute w-full -mt-14 ml-[130%] text-yellow-200 font-bold font-mono">{`📱 ${caller.displayNumber} `}</h1>
                    )}
                    <div className='border-b-2 border-white flex'>
                      <p className="text-md  text-white font-bold mb-2">{caller.number}</p>
                      <p className="text-md text-green-500 pl-4 font-bold pt-2">Count: {caller.count}</p>

                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>{longDurationCaller}</p>
            )}
          </div>
        )
      case 4:
        return (
          <div className="opacity-95 rounded-xl w-[90%] h-screen">
            <div className="h-[65%] w-[65%] bg-black mt-12">
              <img src="/5.png" className="absolute h-[80%] w-[80%]" />
            </div>
            {Array.isArray(longDurationCaller) ? (
              <div className="grid grid-cols-1 -mt-80 ml-80 absolute">
                {longDurationCaller.map((caller, index) => (
                  <div key={index} className="flex">
                    {index === 0 && (
                      <h1 className="text-2xl absolute w-full -mt-14 ml-[130%] text-yellow-200 font-bold font-mono">{`📱 ${caller.displayNumber} `}</h1>
                    )}
                    <p className="text-2xl text-white font-bold mb-2">{caller.number}</p>
                    <p className="text-[10px] text-green-500 pl-4 font-bold pt-2">Count: {caller.count}</p>
                    <p className="text-[10px] text-green-500 pl-4 font-bold pt-2">Incoming: {caller.incoming}</p>
                    <p className="text-[10px] text-green-500 pl-4 font-bold pt-2">Outgoing: {caller.outgoing}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>{longDurationCaller}</p>
            )}
          </div>
        )

      default:
        return null;
    }
  };








  return (
    <div className=''>

      <motion.div whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }} className='absolute  cursor-pointer  h-[15%]'>

        <label className='cursor-pointer'>

          <img src='cdr.png' className='h-full w-full ' />

          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}

          />
        </label>

      </motion.div>
      {parsedData && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inset-0 flex items-center h-screen w-screen absolute justify-center bg-gray-900 bg-opacity-35"
        >
          <div className='rounded-lg p-8  w-full z-50 h-full flex items-center justify-center relative'>
            <button
              className='top-2  ml-[-2%]    rounded-lg w-[5%] z-1  mt-[-40%]  bg-red-500 text-4xl text-white hover:text-gray-400'
              onClick={() => {
                setSelectedFile(null);
                setCommonCaller(null);
                setLongDurationCaller(null);
                setCommonIMEI(null);
                setParsedData(null);
                setActiveSlideIndex(0);
                pageReload();
              }}
            >
              X
            </button>
            {/* Slide content */}
            {renderSlideContent()}

            {/* Navigation buttons */}
            <div className="absolute bottom-4 flex justify-center w-full space-x-4">
              {activeSlideIndex > 0 && (
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                  onClick={handlePreviousSlide}
                >
                  Previous
                </button>
              )}
              {activeSlideIndex < totalSlides - 1 && (
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                  onClick={handleNextSlide}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
