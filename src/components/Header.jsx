import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
  return (
    <header className='bg-primary pt-5'>
      <nav className='container text-white font-semibold flex justify-between items-center space-x-8 '>
        <div className='flex items-center space-x-16'>
          <div>
            <h1 className=' py-4'>
              <Link to='/'>NAGLIKER</Link>
            </h1>
          </div>
          <ul className='flex items-center space-x-8  '>
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
        <div className=''>
          <div className=' flex items-center space-x-4 pb-3'>
            <h2 className=''>Marvin McKinney</h2>
            <div className='h-10 w-10  text-xl font-medium bg-white/[0.08] rounded-md flex items-center justify-center'>
              M
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
