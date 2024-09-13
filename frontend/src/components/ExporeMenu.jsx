import React, { useContext, useState } from 'react'

import { StoreContext } from '../context/StoreContex';
import FoodCart from './FoodCart';
{/* this is minus icon*/ }

function ExporeMenu() {

    const { foodList, categories } = useContext(StoreContext);

    const [category, setCategory] = useState("All")

    console.log(category);
    

    return (
        <div className='text-white'>
            <h2 className='text-green-500 mx-7 mb-5 sm:text-2xl text-xl font-bold  text-center my-2'>Your Menu</h2>
            <hr />
            {/* this is category div */}
            <div className='flex items-center justify-center gap-7 overflow-hidden'>
                {
                    categories.map((item, i) => (
                        <div onClick={() =>
                            category != "All" ? setCategory("All") : setCategory(item.Title) 
                        } key={i} className='flex items-center cursor-pointer justify-center flex-col my-3' >
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
                    foodList?.map((food, index) => {
                       
                           return( <FoodCart
                                title={food.name}
                                image={food.image_url}
                                rating={food.rating}
                                descripion={food.description}
                                price={food.price}
                                key={index}
                                id={food.id} />)
                    }
                    )
                }
            </div>
        </div>
    )
}

export default ExporeMenu