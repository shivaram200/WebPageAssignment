import React from 'react'
import Rev from '../assets/rev.png'
import Items from './Items'
import Rocket from '../assets/rocket.png'
const Review = () => {
    const data = [
        {
            name: "Jacob Snider",
            content: "Through its engaging and well-structured courses,Brilliant has taught me mathematical concepts thai previously struggled to understand. I now feel confident approaching both technival job interviews and real world problem solving situations."

        },
        {
            name: "Banjo bulldog",
            from: "- App Store",
            content: "As a chemical engineer, I found this app to be an awesome teaching tool and would recommend to anyone interested in STEM"

        },
        {
            name: "Frank Magnotti",
            from: "- Google Play",
            content: "I've been out of practice as an electrical engineer ever since switching to product management. Brilliant helps me get back up to speed on engineering, mathematics, and computer science -- I love it!!!"

        },
        {
            name: "startupper7777",
            from: "- App Store",
            content: "If you want to learn new things quickly and really understand the basic concepts, this is for you! I am an entrepreneur, needing to understand the basics of a lot of subjects at the same time and this is ideal for doing just that."
        },
        {
            name: "Viv W.",
            from: "- App Store",
            content: "This app is both super aesthetically and functionally pleasing and incredibly fun. I'm an engineer and like to stay fresh on a few skills that are a bit outside of my everyday use in my current job. This really hits the core of a concept and allows you to feel accomplished by actually learning and passing quizzes."

        },
        {
            name: "Kem Andrsn",
            from: "- Google Play",
            content: "It's great for learning and sharpening skills. This app has been helpful with my performance at work and I feel more mentally active than before. Thank you so much devs."




        }
    ]
    return (
        <div className='flex flex-col xl:justify-around  xl:items-start  md:flex-row'>
            <div className='flex flex-col  space-y-6'>
                <div className='flex px-10  flex-col items-start justify-center'>
                    <h2 className='font-bold py-5 xl:tracking-normal xl:text-5xl text-2xl sm:text-4xl tracking-wider'>User reviews</h2>
                    <h6 className='text-sm opacity-90 sm:text-xl'>Over 50,000 5-star reviews in the App</h6>
                    <h6 className='text-sm opacity-90 sm:text-xl'>Store and Play Store</h6>
                </div>
                <div className='px-10 xl:pt-56'>
                    <div className='border-2 flex md:w-72 items-center justify-between border-black px-4 py-2 w-[70%] rounded-md'>

                        <button className='font-semibold'>FEATURED</button>
                        <div className='w-5 h-5 mb-3'>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
                        </div>
                    </div>

                </div>
                <div className='hidden xl:flex pt-40 '>
                    <img src={Rocket} className='w-full h-full object-cover' alt="rock" />
                </div>




            </div>
            <div className='flex flex-col  xl:w-[45%] space-y-7'>

                <div>
                    <img src={Rev} alt="img2" />
                </div>
                <div className='flex flex-wrap items-center justify-start gap-3 px-10 xl:px-1  '>
                    <button className='border hover:outline-sky-400 font-semibold hover:outline hover:outline-2 hover:bg-sky-100 border-gray-400 px-3 py-2 rounded-md'>ALL</button>
                    <button className='border hover:outline-sky-400 font-semibold hover:outline hover:outline-2 hover:bg-sky-100 border-gray-400 px-3 py-2 rounded-md'>STUDENTS</button>
                    <button className='border hover:outline-sky-400 font-semibold hover:outline hover:outline-2 hover:bg-sky-100 border-gray-400 px-3 py-2 rounded-md'>TEACHERS</button>
                    <button className='border outline-sky-400 font-semibold outline outline-2 bg-sky-100 border-gray-400 px-3 py-2 rounded-md'>PROFESSIONALS</button>
                    <button className='border hover:outline-sky-400 font-semibold hover:outline hover:outline-2 hover:bg-sky-100 border-gray-400 px-3 py-2 rounded-md'>PARENTS</button>
                    <button className='border hover:outline-sky-400 font-semibold hover:outline hover:outline-2 hover:bg-sky-100 border-gray-400 px-3 py-2 rounded-md'>LIFE-LONG LEARNERS</button>
                </div>
                <hr className='w-[80%] xl:w-full mx-auto  bg-gray-400' />
                {
                    data.map((item, index) => <Items key={index} name={item.name} from={item.from} content={item.content} />)
                }
                <div >
                    <h4 className='text-center font-semibold'>&lt; 1 of 2 &gt; </h4>

                </div>

            </div>

        </div>
    )
}

export default Review