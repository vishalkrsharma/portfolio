import logo from '../assets/logo.svg';
import Image from 'next/image';

export default function Navbar() {
  return (
    <>
      <nav className='nav'>
        <Image
          src={logo}
          alt={logo}
          className='nav__brand'
          style={{
            height: '7rem',
            width: '7rem',
          }}
        />
        <div className='nav__links'>
          <a className='nav__links__button' href='resume.pdf' target='_blank'>
            Resume
          </a>
        </div>
      </nav>
      <style jsx>{`
        @import '../styles/variables';
        .nav {
          &__links {
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
