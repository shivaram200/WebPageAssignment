import React from 'react'
import HR from '../assets/hr.png'

const Content = () => {
    return (
        <div className=' mt-7 flex flex-col items-center mb-11 justify-center space-y-4'>
            <div className=' flex flex-col items-center justify-center p-4'>

                <h1 className='font-bold text-2xl sm:text-5xl'>
                    We're building the
                </h1>
                <h1 className='font-bold text-2xl sm:text-5xl'>
                    best place on Earth to learn
                </h1>
                <h1 className='font-bold text-2xl sm:text-5xl'>
                    math and science
                </h1>
            </div>
            <div className='w-full flex xl:relative flex-col'>


                <div className=' flex flex-col items-center xl:absolute xl:bottom-20 xl:right-[36%]  justify-center p-4'>

                    <h5 className='text-sm opacity-90 sm:text-xl'>In the process, we've been happy to receive a lot of </h5>
                    <h5 className='text-sm opacity-90 sm:text-xl'>love from our users.</h5>
                </div>
                <div className=' xl:px-6' >
                    <img className='lg:w-full lg:h-full xl:object-cover' src={HR} alt="img" />
                </div>
            </div>
            {/* <hr className='w-48 h-1 bg-black mx-auto rounded sm:w-[60%] ' /> */}
        </div>
    )
}

export default Content