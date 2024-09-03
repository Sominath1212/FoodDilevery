import React, { useContext, useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { StoreContext } from '../context/StoreContex';
{/* this is minus icon*/ }

function ExporeMenu() {

    const { foodList, categories } = useContext(StoreContext);
    const [quantity, setQuantity] = useState(0);


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
        <div className='text-white'>
            <h2 className='text-green-500 mx-7 mb-5 sm:text-2xl text-xl font-bold  text-center my-2'>Your Menu</h2>
            <hr />
            {/* this is category div */}
            <div className='flex items-center justify-center gap-7 overflow-hidden'>
                {
                    categories.map((item, i) => (
                        <div key={i} className='flex items-center cursor-pointer justify-center flex-col my-3' >
                            <img src={item?.image} className='hover:border-green-500 hover:border-2 hover:scale-110 transition-all duration-700 group rounded-full w-9 sm:w-16' alt="" />
                            <p className='text-green-500 font-semibold'>{item.Title}</p>
                        </div>
                    ))
                }
            </div>
            <hr />
            {/* this is food list div */}
            <div className=' grid sm:grid-cols-5  my-2 mx-2 space-x-5  '>

                {
                    foodList?.map((food, index) => (
                        <div key={index} className='bg-white mt-5 self-center hover:scale-105 transition-all duration-700 rounded-t-lg text-black flex flex-col items-center justify-center' >
                            <img src={food?.image_url} alt="" className='rounded-t-lg h-44 w-full rounded-sm' />
                            <h4 className=' font-bold text-green-500 '>{food.name}</h4>
                            <span className='text-lg font-semibold font-mono flex items-center justify-center gap-4'>  <span className='text-sm'>{calculateRating(food.rating)}</span></span>
                            <p className='text-center font-semibold line-clamp-3 px-1'>
                                {food?.description}
                            </p>
                            <span className='flex item-center justify-between w-full px-5'>
                                <h4 className='text-xl font-bold '>${food.price}</h4>
                                <span className=' flex items-center justify-center space-x-1 rounded-full px-1 my-1'>
                                    {
                                        !quantity == 0 ? <> <RiSubtractFill className='text-2xl bg-green-400 cursor-pointer font-extrabold border-1 hover:scale-105 h-5 w-5 flex items-center justify-center rounded-full text-center ' onClick={() => setQuantity(quantity - 1)} />  <p>{quantity}</p></> : ""
                                    }
                                    <IoMdAdd
                                        onClick={() => setQuantity(quantity + 1)}
                                        className='text-2xl bg-green-400 cursor-pointer font-extrabold border-1 hover:scale-105 h-5 w-5 flex items-center justify-center rounded-full text-center ' />
                                </span>

                            </span>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ExporeMenu