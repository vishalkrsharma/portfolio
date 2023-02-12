import React from 'react';
import Image from 'next/image';
import animoji from '../assets/animoji.png';

export default function Intro() {
  return (
    <>
      <section className='intro'>
        <div className='intro__animoji'>
          <Image src={animoji} alt={animoji} fill={true} style={{ objectFit: 'cover' }} priority={true} />
        </div>
        <div className='hero p-5 px-10'>
          <h2 className='title'>I'm Vishal Kumar Sharma</h2>
          <h3 className='hero__sub'>Developer and Designer.</h3>
          <p className='hero__text'>I am guy who loves programming and developing websites.</p>
        </div>
      </section>
      <style jsx>
        {`
          @import '../styles/variables';
          .intro {
            &__animoji {
              margin: 0 auto;
              margin-bottom: 1rem;
              background-image: linear-gradient(to right, $color-teal, $color-cyan);
              border-radius: 50%;
              height: 40rem;
              width: 40rem;
              position: relative;
              overflow: hidden;
            }

            margin-top: 5rem;
            text-align: center;
            color: $color-white;
          }

          .hero {
            &__sub {
              font-size: 3rem;
              font-weight: 400;
            }
            &__text {
              margin: 0 auto;
              margin-top: 2rem;
              width: 40%;
              font-size: 2rem;
              color: $color-secondary;
              letter-spacing: 0.5rem;
            }
            width: 90%;
            margin: 0 auto;
          }

          .title {
            &::before,
            &::after {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
            }
            &::before {
              background: $color-dark;
              animation: typewriter 4s steps(23) forwards;
            }
            &::after {
              width: 0.125rem;
              background-color: $color-teal;
              animation: typewriter 4s steps(23) forwards, blick 1s steps(23) infinite;
            }
            font-size: 4.5rem;
            line-height: 4.5rem;
            padding: 0.5rem 0;
            font-family: 'Space Mono';
            color: $color-teal;
            position: relative;
            display: inline-block;
            margin: 2rem 0;
            overflow: hidden;
          }

          @media (max-width: 1378px) {
            .hero {
              &__text {
                width: 70%;
              }
            }
          }
          @media (max-width: 768px) {
            .intro {
              &__animoji {
                height: 30rem;
                width: 30rem;
              }
            }
            .title {
              font-size: 3rem;
              line-height: 1;
            }

            .hero {
              &__sub {
                font-size: 2.5rem;
              }
              &__text {
                font-size: 2rem;
                letter-spacing: 0.25rem;
                width: 100%;
              }
            }
          }

          @media (max-width: 600px) {
            .title {
              font-size: 2rem;
            }

            .hero {
              &__sub {
                font-size: 1.75rem;
              }
              &__text {
                font-size: 1.5rem;
                width: 90%;
              }
            }
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
          }
        `}
      </style>
    </>
  );
}
