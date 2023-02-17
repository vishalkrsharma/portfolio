import { useEffect, useRef } from 'react';

export default function Blob() {
  const blob = useRef();

  useEffect(() => {
    document.body.onpointermove = (e) => {
      const { clientX, clientY } = e;
      blob.current.style.left = `${clientX}px`;
      blob.current.style.top = `${clientY}px`;
    };
  });

  return (
    <>
      <div className='blob' ref={blob}>
        <div className='blur'></div>
      </div>
      <style jsx>{`
        @import '../styles/variables';
        @media (hover: hover) and (pointer: fine) {
          .blob {
            height: $blob-dimension;
            width: $blob-dimension;
            background-color: blue;
            position: absolute;
            top: 50%;
            left: 50%;
            translate: -50% -50%;
            border-radius: 50%;
            background-image: linear-gradient(to right, $color-teal, $color-cyan);
            scale: 0;
            animation: rotate 3s infinite, expand 3s forwards;

            animation-delay: $title-duration;
            filter: blur(3rem);
          }

          .blur {
            height: 100%;
            width: 100%;
            position: absolute;
            z-index: 2;
            backdrop-filter: blur(200px);
          }
        }

        @keyframes expand {
          from {
            scale: 0;
          }
          to {
            scale: 1;
          }
        }

        @keyframes rotate {
          from {
            rotate: 0deg;
          }

          to {
            rotate: 360deg;
          }
        }
      `}</style>
    </>
  );
}
