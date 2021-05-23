import React, { useState } from 'react';
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { HeartIcon } from "@heroicons/react/outline";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    const [hasPrime] = useState(Math.random() < 0.5);
    return (
        <div key={id} className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-md">
            {/* Falta opcion de alternar corazones (Wishlist) */}
            <HeartIcon className="absolute cursor-pointer h-8 text-red-500 right-0 left-3/4 ml-5" />
            <p className="absolute top-2 right-2 text-xs italic text-amazon_blue-light">{category}</p>

            <Image src={image} height={200} width={200} objectFit="contain" alt={title} />
            <div className="flex">
                {
                    Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon key={i} className="mt-5 h-5 text-yellow-400" />
                        ))
                }
            </div>
            <h4 className="my-3 text-amazon_blue-light font-semibold">{title}</h4>

            <p className="text-xs my-2 line-clamp-2 text-amazon_blue-light">{description}</p>

            <div>
                <Currency quantity={price} currency="GBP" />
            </div>
            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-14" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}
            <button className="mt-auto cursor-pointer button text-amazon_blue-light">Add to cart</button>
        </div>
    )
}

export default Product;
