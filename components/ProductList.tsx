import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";
import { Button } from "@nextui-org/react";

const ProductList = async () => {
  const products = await getProducts();

  return (
    <div className="flex flex-col rounded-lg shadow-full  items-center gap-10 py-8  m-4">
      <p className="text-heading1-bold">Products</p>
      {!products || products.length === 0 ? (
        <p className="text-body-bold">No products found</p>
      ) : (
        <>
        <div className="grid grid-cols-5 gap-5">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </div>
        <div>
          <Button variant="bordered" color='primary'>view more</Button>
        </div>
        </>
        
      )}
    </div>
  );
};

export default ProductList;
