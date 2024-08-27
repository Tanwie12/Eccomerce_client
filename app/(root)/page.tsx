import BrowseCategories from "@/components/BrowseSection";
import Collections from "@/components/Collections";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

import PartnersSection from "@/components/Partners";
import ProductList from "@/components/ProductList";

import TopProducts from "@/components/TopProductsSection";

import Image from "next/image";
import BrandCarouselPage from "@/components/Partners";


export default function Home() {
  return (
    <>
   
      <HeroSection/>
      <BrowseCategories/>
      <TopProducts/>
      <ProductList />
      <div className="">
      {/* <BrandCarouselPage/> */}
    </div>
   
      
      <Footer/>
      
    </>
  );
}

export const dynamic = "force-dynamic";

