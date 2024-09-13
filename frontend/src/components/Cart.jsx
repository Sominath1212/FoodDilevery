import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContex'
import noitemImage from '../assets/images/noitems.jpg'

function Cart() {
  const { cartItems } = useContext(StoreContext);
  return (
    <div className='relative top-10 flex justify-center items-center bg-white'>

      <img src={noitemImage} className=" h-[100vh]" alt="" />
    </div>
  )
}

export default Cart