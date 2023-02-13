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
        <div className='hero'>
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
              background-image: linear-gradient(to bottom, $color-teal, $color-dark);
              border-radius: 50%;
              height: 35rem;
              width: 35rem;
              position: relative;
              overflow: hidden;
            }

            margin-top: 5rem;
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
            margin-top: 4rem;
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
              animation: typewriter $title-duration steps($title-steps) forwards;
            }
            &::after {
              width: 0.125rem;
              background-color: $color-teal;
              animation: typewriter $title-duration steps($title-steps) forwards, blick $title-blink-duration steps($title-steps) infinite;
            }
            font-size: 4.5rem;
            font-weight: 400;
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
        `}
      </style>
    </>
  );
}
