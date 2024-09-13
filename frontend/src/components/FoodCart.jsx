import React, { useContext } from 'react'
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { StoreContext } from '../context/StoreContex';
function FoodCart({title ,image,description,rating,price,id}) {

    

    const { cartItems, addToCart, removeFromCart }=useContext(StoreContext)
    function calculateRating(rating) {

        const r = Math.floor(rating);
        if (r == 0) {
            return "";
        } else if (r == 1) {
            return "⭐";
        } else if (r == 2) {
            return "⭐⭐";
        } else if (r == 3) {
            return "⭐⭐⭐";
        } else if (r == 4) {
            return "⭐⭐⭐⭐";
        } else if (r == 5) {
            return "⭐⭐⭐⭐⭐";
        }
    }
  return (
      <div className='bg-white mt-5 self-center hover:scale-105 transition-all duration-700 rounded-t-lg text-black flex flex-col items-center justify-center' >
          <img src={image} alt="" className='rounded-t-lg h-44 w-full rounded-sm' />
          <h4 className=' font-bold text-green-500 '>{title}</h4>
          <span className='text-lg font-semibold font-mono flex items-center justify-center gap-4'>  <span className='text-sm'>{calculateRating(rating)}</span></span>
          <p className='text-center font-semibold line-clamp-3 px-1'>
              {description}
          </p>
          <span className='flex item-center justify-between w-full px-5'>
              <h4 className='text-xl font-bold '>${price}</h4>
              <span className=' flex items-center justify-center space-x-1 rounded-full px-1 my-1'>
                  {
                      !cartItems == 0 ? <> <RiSubtractFill className='text-2xl bg-green-400 cursor-pointer font-extrabold border-1 hover:scale-105 h-5 w-5 flex items-center justify-center rounded-full text-center ' onClick={() => removeFromCart(id)} />  <p>{cartItems[id]}</p></> : ""
                  }
                  <IoMdAdd
                      onClick={() => addToCart(id)}
                      className='text-2xl bg-green-400 cursor-pointer font-extrabold border-1 hover:scale-105 h-5 w-5 flex items-center justify-center rounded-full text-center ' />
              </span>

          </span>

      </div>
  )
}

export default FoodCart