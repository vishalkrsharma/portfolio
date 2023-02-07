import React from 'react';
import logo from '../assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='p-4 flex justify-between align-middle'>
      <Image src={logo} alt={logo} className='w-20 h-20' />
      <button className='bg-gradient-to-r from-cyan to-teal rounded-lg text-white px-4 h-10 my-auto font-bold leading-5 mx-6'>
        <Link href='resume.pdf' target='_blank'>
          Resume
        </Link>
      </button>
    </nav>
  );
}
