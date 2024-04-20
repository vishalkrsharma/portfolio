'use client';

import { useEffect, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

const ArrowIndicator = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    typeof window !== 'undefined' &&
    window.innerHeight + window.scrollY < document.body.offsetHeight && <FaArrowDown className='animate-bounce w-8 h-8 mx-auto' />
  );
};

export default ArrowIndicator;
