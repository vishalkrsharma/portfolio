import React from 'react';
import Image from 'next/image';
import animoji from '../assets/animoji.png';
import typewriter from '../styles/typewriter.module.css';

export default function Intro() {
  return (
    <section>
      <div className='mx-auto mt-10 bg-gradient-to-b from-teal rounded-full w-60 h-60 relative overflow-hidden md:h-80 md:w-80'>
        <Image src={animoji} alt={animoji} fill={true} style={{ objectFit: 'cover' }} priority={true} />
      </div>
      <div className='text-center p-5 px-10'>
        <h2 className={typewriter.title}>I'm Vishal Kumar Sharma</h2>
        <h3 className='text-2xl py-2 md:text-3xl text-white'>Developer and Designer.</h3>
        <p className='text-md py-5 leading-8 text-secondary md:text-xl max-w-lg mx-auto '>I am guy who loves programming and developing websites.</p>
      </div>
    </section>
  );
}
