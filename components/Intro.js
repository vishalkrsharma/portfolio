import React from 'react';
import Image from 'next/image';
import animoji from '../public/animoji.png';

export default function Intro() {
  return (
    <section>
      <div className='mx-auto bg-gradient-to-b from-teal rounded-full w-60 h-60 relative overflow-hidden md:h-80 md:w-80'>
        <Image src={animoji} fill={true} style={{ objectFit: 'cover' }} />
      </div>
      <div className='text-center p-5 px-10'>
        <h2 className='text-3xl py-2 text-teal font-medium md:text-6xl'>
          <span className='font-DancingScript'>I'm</span> Vishal Kumar Sharma
        </h2>
        <h3 className='text-2xl py-2 md:text-3xl text-white'>Developer and Designer.</h3>
        <p className='text-md py-5 leading-8 text-secondary md:text-xl max-w-lg mx-auto '>I am guy who loves programming and developing websites.</p>
      </div>
    </section>
  );
}
