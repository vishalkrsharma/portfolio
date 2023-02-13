import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
export default function Contact() {
  return (
    <>
      <section className='contact'>
        <div className='contact__title'>Contact Me</div>
        <div className='buttons'>
          <div className='buttons__icons'>
            <a className='buttons__icons__icon'>
              <AiFillLinkedin />
            </a>
          </div>
          <a href='https://forms.gle/tihWLC3yzJ1NYrYH9' target='_black' className='buttons__button'>
            Contact Form
          </a>
        </div>
      </section>
      <style jsx>
        {`
          @import '../styles/variables';

          .contact {
            &__title {
              color: $color-white;
              font-size: 2.5rem;
              margin-bottom: 2.5rem;
              font-weight: 400;
            }
            margin-top: 5rem;
            padding-bottom: 5rem;
          }

          .buttons {
            &__icons {
              &__icon {
                color: $color-secondary;
              }
            }

            &__button {
              &:active {
                scale: 0.95;
              }
              display: block;
              padding: 1.25rem 2rem;
              background-image: linear-gradient(to right, $color-teal, $color-cyan);
              border-radius: 1rem;
              color: $color-white;
              font-weight: bold;
              font-size: 1.75rem;
              font-weight: 400;
              line-height: 1.5rem;
              outline: transparent;
              border: none;
              margin: auto 0;
              margin-right: 1.5rem;
            }

            font-size: 4rem;
            padding: 0 5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          @media (max-width: 600px) {
            .buttons {
              padding: 0 3rem;
            }
          }

          @media (min-width: 1000px) {
            .buttons {
              width: 60%;
              margin: 0 auto;
            }
          }
        `}
      </style>
    </>
  );
}
