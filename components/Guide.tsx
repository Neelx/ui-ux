import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='border-2 border-red-500 padding-container
        max-container w-full pb-24'>
          <Image src="/camp.svg" alt="camp" width={50} height={50}/>
          <p className='uppercase regualr-18 -mt-1 mb-3 text-green-50'>
            I am here for you.
          </p>
          <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
            <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>
              Here to help you
            </h2>
              <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
                Neelx is here to help you as he is also learning the various
                libraries and languages used in frontend journey come join with him 
                and lets enhance our skills with the help of various efficient products.
              </p>
          </div>
      </div>
      <div className='flexCenter max-container relative w-full border-2 border-blue-500'>
        <Image
        src="/boat.png"
        alt="boat"
        width={1440}
        height={580}
        className='w-full object-center object-cover 2xl:rounded-5xl'
        />
        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3
        rounded-3xl border shadow md:left-[5%] lg:top-20'>
          <Image
          src="/meter.svg"
          alt="meter"
          width={16}
          height={158}
          className='w-full object-cover object-center 2xl:rounded-5xl'
          />
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regaular-16 text-gray-20'>Destiantion</p>
                <p className='bold-16 text-green-50'>50 mins</p>
              </div>
              <p className='bold-20 mt-2'>Amanora</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className='regular-26 text-gray-20'>Start track</p>
              <h4 className='bold-20 mt-2 whitespace-nowrap'>Swargate</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
