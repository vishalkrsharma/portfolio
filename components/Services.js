import React from 'react';
import Image from 'next/image';

import { SiVisualstudiocode, SiCss3, SiHtml5, SiJavascript, SiFigma, SiSass } from 'react-icons/si';

import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';

export default function Services() {
  return (
    <section className='text-center text-white'>
      <div>
        <h3 className='text-3xl py-1'>Services I offer</h3>
        <p className='text-md py-2 leading-8 text-secondary'>Things I can get done for you.</p>
      </div>
      <div className='md:flex justify-start align-middle gap-5 p-4 mx-auto' style={{ width: '1000px' }}>
        <div className='text-center shadow-lg p-10 rounded-xl bg-card w-96 flex flex-col justify-center align-middle gap-3 mx-auto my-4'>
          <Image className='mx-auto' src={design} width={100} height={100} />
          <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
          <p className='text-secondary'>Web Designs</p>
          <h4 className='py-4 text-teal-600'>Tools I use</h4>
          <div className='icons text-4xl mx-auto flex justify-center align-middle gap-5 text-secondary'>
            <SiCss3 />
            <SiSass />
            <SiFigma />
          </div>
        </div>

        <div className='text-center shadow-lg p-10 rounded-xl bg-card w-96 flex flex-col justify-center align-middle gap-3 mx-auto my-4'>
          <Image className='mx-auto' src={code} width={100} height={100} />
          <h3 className='text-lg font-medium pt-8 pb-2'>Websites</h3>
          <p className='text-secondary'>Developed Websites</p>

          <h4 className='py-4 text-teal-600'>Tools I use</h4>
          <div className='icons text-4xl mx-auto flex justify-center align-middle gap-5 text-secondary'>
            <SiVisualstudiocode />
            <SiHtml5 />
            <SiJavascript />
          </div>
        </div>
      </div>
    </section>
  );
}
