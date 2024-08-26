import React from 'react'
import { IoMailOpenSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
function LoginPage() {
    return (
        <div className='min-w-[300px] max-w-[500px] mx-auto relative top-14   h-[80vh] rounded-lg border   sm:mx-3  flex flex-col items-center  justify-center
  backdrop-blur-lg   bg-gradient-to-r from-green-500 to-blue-500' >

            <h1 className='text-2xl sm:text-3xl font-bold '>Login </h1>

            <form className='flex flex-col text-center items-center justify-center'>
                <div className=' flex items-center bg-blue-500 rounded-lg border my-2'>
                    <input type="email" placeholder='email' className="text-center  rounded-l-md outline-none border-none placeholder:text-blue-500 " />
                    <IoMailOpenSharp className='m-1' />
                </div>
                <div className='flex items-center bg-blue-500 rounded-lg border mb-2'>
                    <input type="password" placeholder='password' className="text-center  rounded-l-md outline-none border-none placeholder:text-blue-500 " />
                    <FaRegEyeSlash className='m-1' />
                </div>
                <p className=' underline text-[4px] cursor-pointer relative left-46'>forgot password</p>

                <button className=' border rounded-lg px-3 my-3 text-blue-700'>Submit</button>
            </form>
        </div>
    )
}

export default LoginPage