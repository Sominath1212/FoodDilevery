import React from 'react'
import { ImSpoonKnife } from 'react-icons/im'
import Footer from './Footer'


function LandingPage() {

    return (
        <>

            <div className='background-image text-white w-full sm:h-[100vh]   flex flex-col items-center justify-center sm:relative sm:pt-10'>

                <div>
                    <h1 style={{ fontFamily: "Montserrat" }} className='flex  items-center justify-center'><span className='text-green-500 font-bold text-3xl '>Food</span><span className='underline font-bold italic mx-1 '>store</span><span><ImSpoonKnife className='text-green-500' /></span></h1>
                </div>
                <pre className='px-3 text-center'> <h1 className='flex animate-pulse transition-all duration-700 items-start  font-bold font-serif text-center sm:text-4xl'>Are you hungry ? your food <ImSpoonKnife className='text-green-500' />  is here.</h1></pre>

                <p className='sm:text-xl text-center text-gray-400 mt-4' >"One cannot think well, love well, sleep well, if one has not dined well."</p>
                <button className='bg-green-500 rounded-xl text-lg  px-2 py-1 mt-5 font-bold  shadow-lg shadow-green-300'>Get started</button>
            </div>
            <Footer />
        </>
    )
}



export default LandingPage