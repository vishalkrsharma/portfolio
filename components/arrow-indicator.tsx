'use client';

import { FaArrowDown } from 'react-icons/fa';

const ArrowIndicator = () => {
  return (
    typeof window !== 'undefined' &&
    window.innerHeight + window.scrollY >= document.body.offsetHeight && <FaArrowDown className='animate-bounce w-8 h-8 mx-auto' />
  );
};

export default ArrowIndicator;
