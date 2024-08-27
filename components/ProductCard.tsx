"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className={`relative bg-card text-card-foreground p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none w-[220px] flex flex-col gap-2`}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={product.media[0]}
          alt="product"
          width={250}
          height={300}
          className="h-[250px] object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} />
        </div>
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">{product.title}</p>
        <p className="text-sm text-gray-500">{product.category}</p>
      </div>
      <div className="flex justify-between items-center mt-1">
        <p className="text-lg font-bold">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
