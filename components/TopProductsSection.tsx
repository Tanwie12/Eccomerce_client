import React from 'react';

import ProductCard from './(ui)/ProductCard';
import { getProducts } from '@/lib/actions/actions';

const TopProducts: React.FC = async() => {
  const product=await getProducts()

  return (
    <section className="py-16 m-4 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl font-bold mb-6">TopProducts</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Image on the Left */}
          <div className="col-span-1">
            <img
              src="/drum.webp"
              alt="Featured Product"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Product Cards on the Right */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {product.map((product: ProductType) => (
            <ProductCard key={product._id} reviewCount={3} rating={4} product={product}/>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
