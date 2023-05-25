import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import HeaderMobile from './HeaderMobile';

const navLinks = [
  {
    id: 1,
    name: 'Bookings',
    href: '/',
    links: ['/new-booking'],
  },
  {
    id: 2,
    name: 'Patients',
    href: '/patients',
  },
  {
    id: 3,
    name: 'All Tests',
    href: '/all-tests',
  },
];

const Header = () => {
  const { pathname } = useLocation();

  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'auto';
    };
  }, [showSidebar]);
  return (
    <>
      {pathname === '/' && (
        <HeaderMobile navLinks={navLinks} pathname={pathname} />
      )}
      <header className='bg-primary hidden xs:block   py-2 md:pt-5 md:py-0'>
        <nav className='container text-white font-semibold  flex justify-between items-center space-x-8 '>
          <div className='flex items-center space-x-16'>
            <div>
              <h1 className=' py-4'>
                <Link to='/'>NAGLIKER</Link>
              </h1>
            </div>
            <ul className=' items-center hidden md:flex  lg:space-x-6 xl:space-x-8  '>
              {navLinks.map(link => {
                const { href, id, name, links } = link;
                return (
                  <li
                    className={` relative rounded-t-2xl  px-7 py-4 overflow-hidden ${
                      pathname === href ||
                      links?.includes(pathname) ||
                      links?.includes(`/${pathname.split('/')[1]}`)
                        ? 'bg-white text-primary'
                        : 'text-white'
                    }`}
                    key={id}
                  >
                    <Link to={href}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='hidden md:block'>
            <div className=' flex items-center space-x-4 pb-1.5'>
              <h2 className=''>Marvin McKinney</h2>
              <div className='h-10 w-10  text-xl font-medium bg-white/[0.08] rounded-md flex items-center justify-center'>
                M
              </div>
            </div>
          </div>
          <div className='block md:hidden'>
            <button
              className='text-2xl'
              onClick={() => {
                setShowSidebar(prev => !prev);
              }}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </nav>
      </header>
      {showSidebar && (
        <div
          onClick={() => {
            setShowSidebar(prev => !prev);
          }}
          className='fixed w-screen h-screen bg-black/30 z-10 top-0'
        >
          {' '}
        </div>
      )}
      <aside
        className={`${
          showSidebar ? 'translate-x-0' : 'translate-x-[100%]'
        } fixed  right-0 hidden xs:block  transition-all top-0 z-20  max-w-sm w-full bg-white shadow-2xl h-screen`}
      >
        <button
          className='absolute top-5 right-5'
          onClick={() => {
            setShowSidebar(prev => !prev);
          }}
        >
          <FaTimes className='text-3xl' />
        </button>
        <ul className=' items-center flex  my-20 flex-col lg:space-x-6 xl:space-x-8  '>
          {navLinks.map(link => {
            const { href, id, name, links } = link;
            return (
              <li
                onClick={() => {
                  setShowSidebar(prev => !prev);
                }}
                className={` w-full p-4 px-6 overflow-hidden ${
                  pathname === href ||
                  links?.includes(pathname) ||
                  links?.includes(`/${pathname.split('/')[1]}`)
                    ? 'bg-primary text-white'
                    : 'text-black'
                }`}
                key={id}
              >
                <Link to={href}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Header;
