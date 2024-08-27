import React from 'react'
import CakeImage from '../assets/images/cake.png'
import SandWitchImage from '../assets/images/sandwitch.png'
import SoupImage from '../assets/images/soup.png'
import RotiImsge from '../assets/images/rotis.png'
import PizzaImage from '../assets/images/Pepperoni.jpeg'
import MargheritaImage from '../assets/images/Margherita.jpeg'
import PepperoniImage from '../assets/images/Pepperoni.jpeg'
import BBQChickenImage from '../assets/images/BBQ_Chicken.jpeg'
import VegetarianImage from '../assets/images/Vegetarian.jpeg'
import HawaiianImage from '../assets/images/Hawaiian.jpeg'
import FourCheeseImage from '../assets/images/Four_Cheese.jpeg'
import MeatLoverImage from '../assets/images/Meat_Lovers.jpeg'
import Mushroom_and_TraficImage from '../assets/images/Mushroom_and_Truffle.jpeg'
import BuffaloChickenImage from '../assets/images/Buffalo_Chicken.jpeg'
import SpanishAndFetaImage from '../assets/images/Spinach_and_Feta.jpeg'
import ClassicChocolateCakeImage from '../assets/images/Classic_Chocolate_Cake.jpeg'
import RedVelvetCakeImage from '../assets/images/Red_Velvet_Cake.jpeg'
import CarretCakeImage from '../assets/images/Carrot_Cake.jpeg'
import LemonDrizzleCakeImage from '../assets/images/Lemon_Drizzle_Cake.jpeg'
import StrawberryShortcake from '../assets/images/Strawberry_Shortcake.jpeg'
import CheeseCakeImage from '../assets/images/Cheesecake.jpeg'
import BlackForestCakeImage from '../assets/images/Black_Forest_Cake.jpeg'
import VanillaBeanCakeImage from '../assets/images/Vanilla_Bean_Cake.jpeg'
import CoffeCakeImage from '../assets/images/Coffee_Cake.jpeg'
import PumpkinSpiceCakeImage from '../assets/images/Pumpkin_Spice_Cake.jpeg'
function ExporeMenu() {
    const categories = [
        {
            image: CakeImage,
            Title: "Cakes"
        },
        {
            image: SandWitchImage,
            Title: "Sandwitches"
        },
        {
            image: SoupImage,
            Title: "Soups"
        },
        {
            image: RotiImsge,
            Title: "Rotis"
        },
        {
            image: PizzaImage,
            Title: "Pizzas"
        },
    ];
    const foodList = [
        {
            "name": "Margherita",
            "image_url": MargheritaImage,
            "price": 8.99,
            "rating": 4.5,
            "description": "A classic Italian pizza with fresh tomatoes, mozzarella cheese, and basil leaves.",
            "category": "pizza"
        },
        {
            "name": "Pepperoni",
            "image_url": PepperoniImage,
            "price": 10.99,
            "rating": 4.7,
            "description": "A popular pizza topped with spicy pepperoni slices and mozzarella cheese.",
            "category": "pizza"
        },
        {
            "name": "BBQ Chicken",
            "image_url": BBQChickenImage,
            "price": 12.99,
            "rating": 4.6,
            "description": "A delicious pizza topped with barbecue sauce, grilled chicken, red onions, and mozzarella cheese.",
            "category": "pizza"
        },
        {
            "name": "Vegetarian",
            "image_url": VegetarianImage,
            "price": 11.49,
            "rating": 4.4,
            "description": "A healthy pizza loaded with fresh vegetables like bell peppers, onions, olives, and mushrooms.",
            "category": "pizza"
        },
        {
            "name": "Hawaiian",
            "image_url": HawaiianImage,
            "price": 11.99,
            "rating": 4.3,
            "description": "A tropical pizza topped with ham, pineapple chunks, and mozzarella cheese.",
            "category": "pizza"
        },
        {
            "name": "Four Cheese",
            "image_url": FourCheeseImage,
            "price": 13.49,
            "rating": 4.8,
            "description": "A rich and creamy pizza topped with a blend of mozzarella, cheddar, parmesan, and gorgonzola cheeses.",
            "category": "pizza"
        },
        {
            "name": "Meat Lovers",
            "image_url": MeatLoverImage,
            "price": 14.99,
            "rating": 4.9,
            "description": "A hearty pizza loaded with various meats like pepperoni, sausage, bacon, and ham.",
            "category": "pizza"
        },
        {
            "name": "Mushroom and Truffle",
            "image_url": Mushroom_and_TraficImage,
            "price": 15.99,
            "rating": 4.7,
            "description": "A gourmet pizza with a blend of mushrooms, truffle oil, and mozzarella cheese.",
            "category": "pizza"
        },
        {
            "name": "Buffalo Chicken",
            "image_url": BuffaloChickenImage,
            "price": 13.99,
            "rating": 4.6,
            "description": "A spicy pizza topped with buffalo chicken, red onions, and blue cheese crumbles.",
            "category": "pizza"
        },
        {
            "name": "Spinach and Feta",
            "image_url": SpanishAndFetaImage,
            "price": 12.49,
            "rating": 4.5,
            "description": "A flavorful pizza with fresh spinach, feta cheese, tomatoes, and garlic.",
            "category": "pizza"
        },
        {
            "name": "Classic Chocolate Cake",
            "image": ClassicChocolateCakeImage,
            "price": 25.00,
            "rating": 4.7,
            "description": "A rich and moist chocolate cake topped with creamy chocolate frosting.",
            "category": "cake"
        },
        {
            "name": "Red Velvet Cake",
            "image": RedVelvetCakeImage,
            "price": 30.00,
            "rating": 4.8,
            "description": "A vibrant red cake with a smooth cream cheese frosting, perfect for special occasions.",
            "category": "cake"
        },
        {
            "name": "Carrot Cake",
            "image": CarretCakeImage,
            "price": 28.00,
            "rating": 4.6,
            "description": "A moist and flavorful cake made with grated carrots, spices, and topped with cream cheese frosting.",
            "category": "cake"
        },
        {
            "name": "Lemon Drizzle Cake",
            "image": LemonDrizzleCakeImage,
            "price": 22.00,
            "rating": 4.5,
            "description": "A zesty lemon cake with a tangy glaze, perfect for a refreshing treat.",
            "category": "cake"
        },
        {
            "name": "Strawberry Shortcake",
            "image": StrawberryShortcake,
            "price": 26.00,
            "rating": 4.7,
            "description": "Light and fluffy cake layered with fresh strawberries and whipped cream.",
            "category": "cake"
        },
        {
            "name": "Cheesecake",
            "image": CheeseCakeImage,
            "price": 32.00,
            "rating": 4.9,
            "description": "A creamy and smooth cheesecake with a buttery graham cracker crust.",
            "category": "cake"
        },
        {
            "name": "Black Forest Cake",
            "image":BlackForestCakeImage,
            "price": 29.00,
            "rating": 4.8,
            "description": "A decadent chocolate cake layered with cherries and whipped cream.",
            "category": "cake"
        },
        {
            "name": "Vanilla Bean Cake",
            "image": VanillaBeanCakeImage,
            "price": 24.00,
            "rating": 4.6,
            "description": "A classic vanilla cake with a delicate flavor and light frosting.",
            "category": "cake"
        },
        {
            "name": "Coffee Cake",
            "image": CoffeCakeImage,
            "price": 23.00,
            "rating": 4.5,
            "description": "A soft and flavorful cake with a hint of coffee and a crumbly streusel topping.",
            "category": "cake"
        },
        {
            "name": "Pumpkin Spice Cake",
            "image": PumpkinSpiceCakeImage,
            "price": 27.00,
            "rating": 4.7,
            "description": "A spiced pumpkin cake topped with cream cheese frosting, perfect for autumn.",
            "category": "cake"
        },
    ];

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
            <h2 className='text-green-500 mx-7 sm:text-2xl text-xl font-bold  text-center my-2'>Your Menu</h2>
            <hr />
            <div className='flex items-center justify-center gap-7 overflow-hidden'>
                {
                    categories.map((item, i) => (
                        <div key={i} className='flex items-center cursor-pointer justify-center flex-col my-3'>
                            <img src={item?.image} className='hover:border-green-500 hover:border-2 hover:scale-110 transition-all duration-700 group rounded-full w-9 sm:w-16' alt="" />
                            <p className='text-green-500 font-semibold'>{item.Title}</p>
                        </div>
                    ))
                }
            </div>
            <hr />
            <div className=' grid sm:grid-cols-4  my-2 mx-2 space-x-5  '>
                {
                    foodList?.map((food, index) => (
                        <div key={index} className='bg-white mt-5 self-center hover:scale-110 transition-all duration-700 rounded-t-lg text-black flex flex-col items-center justify-center' >
                            <img src={food.image_url} alt="" className='mt-3 h-44 w-44 rounded-sm' />
                            <h4 className='text-xl font-bold text-green-500 '>{food.name}</h4>
                            <span className='flex item-center justify-between w-full px-5'>
                                <h4 className='text-xl font-bold '>${food.price}</h4>
                                <span className='text-2xl text-green-400 cursor-pointer font-extrabold bg-gray-700 h-5 w-5 flex items-center justify-center rounded-full text-center pb-1'>+</span>
                            </span>
                            <span className='text-lg font-semibold font-mono flex items-center justify-center gap-4'> Ratting :{food.rating} <span className='text-sm'>{calculateRating(food.rating)}</span></span>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ExporeMenu