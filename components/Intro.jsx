import React from 'react';
import Image from 'next/image';
import animoji from '../assets/animoji.png';

export default function Intro() {
  return (
    <>
      <section>
        <div className='mx-auto mt-10 bg-gradient-to-b from-teal rounded-full w-60 h-60 relative overflow-hidden md:h-80 md:w-80'>
          <Image src={animoji} alt={animoji} fill={true} style={{ objectFit: 'cover' }} priority={true} />
        </div>
        <div className='text-center p-5 px-10'>
          <h2 className='title'>I'm Vishal Kumar Sharma</h2>
          <h3 className='text-2xl py-2 md:text-3xl text-white'>Developer and Designer.</h3>
          <p className='text-md py-5 leading-8 text-secondary md:text-xl max-w-lg mx-auto '>I am guy who loves programming and developing websites.</p>
        </div>
      </section>
      <style jsx>
        {`
          .title {
            font-size: 1.25rem;
            line-height: 1.5rem;
            padding: 0.5rem 0;
            font-family: 'Space Mono';
            color: var(--color-teal);
            position: relative;
            display: inline-block;
            margin: 2rem 0;
            overflow: hidden;
          }

          .title::before,
          .title::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }

          .title::before {
            background: var(--color-dark);
            animation: typewriter 4s steps(23) forwards;
          }

          .title::after {
            width: 0.125rem;
            background-color: var(--color-teal);
            animation: typewriter 4s steps(23) forwards, blick 1s steps(23) infinite;
          }

          @keyframes typewriter {
            to {
              left: 100%;
            }
          }

          @keyframes blick {
            to {
              background: transparent;
            }
          }

          @media (min-width: 768px) {
            .title {
              font-size: 3.75rem;
              line-height: 1;
            }
          }
        `}
      </style>
    </>
  );
}
