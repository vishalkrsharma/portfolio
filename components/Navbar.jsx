import React from 'react';
import logo from '../assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className='nav'>
        <Image
          src={logo}
          alt={logo}
          className='logo__brand'
          style={{
            height: '7rem',
            width: '7rem',
          }}
        />
        <a className='nav__resume' href='resume.pdf' target='_blank'>
          Resume
        </a>
      </nav>
      <style jsx>{`
        @import '../styles/variables';
        .nav {
          &__resume {
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
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          height: 7rem;
          width: 7rem;
        }
      `}</style>
    </>
  );
}
