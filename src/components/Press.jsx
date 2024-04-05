import React from 'react'


const Press = () => {
    return (
        <div className='flex flex-col mt-8 px-10 gap-7 xl:px-20  items-start'>
            <hr className='w-full h-1 bg-black mx-auto rounded  ' />
            <h1 className='text-4xl font-bold xl:text-5xl xl:pb-10'>Press</h1>
            <div className='flex  items-center w-full gap-20 lg:justify-start lg:gap-[45%] xl:gap-[48%] justify-between'>
                <div className='w-24 h-24'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#cccccc" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                </div>
                <div className='w-24 h-24'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#cdced0" d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" /></svg>
                </div>

            </div>
            <hr className='w-full mx-auto my-6  bg-gray-400' />

            <div className='flex mb-7 items-start justify-between w-full'>
                <div className='w-[45%]'>
                    <h3 className='text-xl font-semibold text-gray-500' >March 2020</h3>
                    <h3 className='text-xl font-semibold'>She puzzled it out</h3>
                </div>
                <div className='w-[45%]'>
                    <h3 className='text-xl font-semibold text-gray-500'>May 2019</h3>
                    <h3 className='text-xl font-semibold'>Microsoft,Brilliant team up to offer quantum curriculum</h3>
                </div>
            </div>
            <div className='flex w-full items-center justify-between lg:justify-start lg:gap-[43%] xl:gap-[47%]'>
                <h3 className='text-xl text-gray-600 font-semibold'>The Atlantic</h3>
                <h3 className='text-xl text-gray-600 font-semibold'>The New York Times</h3>
            </div>
            <hr className='w-full mx-auto my-6  bg-gray-400' />
            <div className='flex mb-7 items-start justify-between w-full'>
                <div className='w-[45%]'>
                    <h3 className='text-xl font-semibold text-gray-500' >November 2016</h3>
                    <h3 className='text-xl font-semibold'>The Math Revolution</h3>
                </div>
                <div className='w-[45%]'>
                    <h3 className='text-xl font-semibold text-gray-500'>March 2016</h3>
                    <h3 className='text-xl font-semibold'>Reasonable-Seeming but WRONG Approximations of &pi;</h3>
                </div>
            </div>
            <h1 className='text-md mb-6 text-gray-600'>Read more articles about Brilliant <a className='underline font-bold'>here.</a></h1>
            <hr className='w-full h-1 bg-black mx-auto rounded  ' />

        </div>
    )
}

export default Press