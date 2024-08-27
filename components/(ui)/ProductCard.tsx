"use client"
import React, { useState } from 'react';
import Link from 'next/link';

import { StarIcon } from 'lucide-react';
import ProductModal from '../(ui)/ProductModal';

interface ProductCardProps {
    product: ProductType;
    reviewCount:any,
    rating:any,
    updateSignedInUser?: (updatedUser: UserType) => void;
  }

const ProductCard: React.FC<ProductCardProps> = ({ product,rating,reviewCount}:ProductCardProps) => {
    
    

    return (
        <Link href={`/products/${product._id}`}>
        <div className="bg-white border border-border rounded-lg shadow-md overflow-hidden flex p-4">
            {/* Product Image */}
            <img src={product.media[0]} alt={product.title} className="w-24 h-24 object-cover rounded-md mr-4" />

            {/* Product Details */}
            <div className="flex flex-col justify-between">
                <div>
                    {/* Rating */}
                    <div className="flex items-center mb-1">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} color={i < rating ? "#f5c518" : "#e4e5e9"} />
                        ))}
                        <span className="text-gray-500 text-sm ml-2">{reviewCount}</span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-md font-semibold">{product.title}</h3>
                </div>

                {/* Price */}
                <p className="text-xl font-bold mt-2">{product.price}</p>

                {/* View Details Link */}
                {/* <div onClick={openModal}>
                    <a className="text-blue-500 mt-4 block"></a>
                </div> */}
            </div>
            
        </div>
        </Link>
    );
};

export default ProductCard;
