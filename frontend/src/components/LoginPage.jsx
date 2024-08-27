import React from 'react'
import { IoMailOpenSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
function LoginPage() {
    return (
        <div className='sm:mx-56  relative top-14   h-[35vh] rounded-lg border    flex flex-col items-center  justify-center
  bg-white/80 w-72 sm:w-80' >

            <h1 className='text-2xl sm:text-3x l font-bold '>Login </h1>

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

                <button className=' border rounded-lg px-3 my-3 bg-blue-700'>Submit</button>
            </form>
        </div>
    )
}

export default LoginPage