import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';


const HeroSection: React.FC = () => {


  return (
    <section className="grid  grid-cols-1 m-4 rounded-lg md:grid-cols-2 items-center gap-8 md:h-[40rem]  bg-gray-100">
      <div className="p-8   text-left">
        <p className="text-lg  text-gray-600 mb-2">feel the african culture</p>
        <h1 className="text-[5rem] mb-4">cultural clothes</h1>
        <Button className='' color='primary' variant='bordered'>Shop now</Button>
      </div>
      <div className="  w-full h-full">
       <img src='/dresss.jpg' width={100} height={100}  className='w-full rounded-lg  h-[40rem]' alt='dress'/>
      </div>
    </section>
  );
};

export default HeroSection;
