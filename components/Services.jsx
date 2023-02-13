import React from 'react';
import Image from 'next/image';

import { SiVisualstudiocode, SiCss3, SiHtml5, SiJavascript, SiFigma, SiSass } from 'react-icons/si';

import design from '../assets/design.png';
import code from '../assets/code.png';
import consulting from '../assets/consulting.png';

export default function Services() {
  return (
    <>
      <section className='services'>
        <div className='services__title'>
          <h3>Services I offer</h3>
          <p>Things I can get done for you.</p>
        </div>
        <div className='cards'>
          <div className='cards__card'>
            <Image src={design} alt={design} width={100} height={100} />
            <h3>Beautiful Designs</h3>
            <p>Web Designs</p>
            <h4>Tools I use</h4>
            <div className='cards__card__icons'>
              <SiCss3 />
              <SiSass />
              <SiFigma />
            </div>
          </div>

          <div className='cards__card'>
            <Image src={code} alt={code} width={100} height={100} />
            <h3>Websites</h3>
            <p>Developed Websites</p>
            <h4>Tools I use</h4>
            <div className='cards__card__icons'>
              <SiVisualstudiocode />
              <SiHtml5 />
              <SiJavascript />
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @import '../styles/variables';
        .services {
          &__title {
            & h3 {
              color: $color-white;
              font-size: 2.5rem;
              margin-bottom: 1rem;
              font-weight: 400;
            }
            & p {
              color: $color-secondary;
              font-size: 2rem;
            }
            margin-bottom: 2rem;
          }
          margin-top: 5rem;
        }

        .cards {
          &__card {
            & h3 {
              font-size: 2rem;
              font-weight: 400;
              color: $color-white;
            }

            & p,
            & h4 {
              font-size: 1.75rem;
              font-weight: 400;
            }

            &__icons {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 2rem;
              font-size: 4rem;
            }
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 1.5rem;
            background-color: $color-card;
            border-radius: 1rem;
            width: 30rem;
            padding: 5rem 0;
          }

          color: $color-secondary;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3rem;
        }

        @media (max-width: 768px) {
          .services {
            &__title {
              & p {
                font-size: 2rem;
              }
            }
          }

          .cards {
            flex-direction: column;
            gap: 5rem;
          }
        }

        @media (max-width: 600px) {
          .services {
            &__title {
              & p {
                font-size: 1.5rem;
              }
            }
          }
        }
      `}</style>
    </>
  );
}
