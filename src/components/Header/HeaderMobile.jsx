import { Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdLogout } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom/dist';

const HeaderMobile = ({ navLinks, pathname }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

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
      <header className='container xs:hidden py-3 flex justify-between items-center'>
        <div>
          <button
            className='text-2xl'
            onClick={() => {
              setShowSidebar(prev => !prev);
            }}
          >
            <GiHamburgerMenu />
          </button>
        </div>
        <div>
          <button className='bg-[#FDF4F4] p-2 rounded-md'>
            <svg
              width='22'
              height='22'
              viewBox='0 0 17 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_6_721)'>
                <path
                  d='M8.66694 15.7355C8.94691 15.7291 9.21558 15.6238 9.42543 15.4384C9.63528 15.2529 9.77278 14.9992 9.81361 14.7222H7.47583C7.51782 15.0068 7.66175 15.2664 7.88085 15.4528C8.09996 15.6392 8.37931 15.7397 8.66694 15.7355Z'
                  fill='#2B2B2B'
                />
                <path
                  d='M15.267 13.0023L15.1159 12.8689C14.6872 12.487 14.312 12.049 14.0004 11.5667C13.66 10.9012 13.456 10.1744 13.4004 9.42894V7.23338C13.3986 6.9667 13.3748 6.70061 13.3292 6.43783C12.5764 6.28309 11.9002 5.87295 11.415 5.27684C10.9299 4.68074 10.6656 3.93529 10.667 3.16672V2.88672C10.203 2.65836 9.70444 2.50819 9.19147 2.44227V1.88227C9.19147 1.72491 9.12896 1.574 9.01769 1.46272C8.90642 1.35145 8.7555 1.28894 8.59814 1.28894C8.44078 1.28894 8.28986 1.35145 8.17859 1.46272C8.06732 1.574 8.00481 1.72491 8.00481 1.88227V2.4645C6.85624 2.62652 5.80506 3.1986 5.04535 4.07513C4.28564 4.95166 3.86868 6.07345 3.87147 7.23338V9.42894C3.81581 10.1744 3.61182 10.9012 3.27147 11.5667C2.9652 12.0478 2.596 12.4857 2.17369 12.8689L2.02258 13.0023V14.2556H15.267V13.0023Z'
                  fill='#2B2B2B'
                />
                <path
                  d='M14.0003 5.3889C15.2276 5.3889 16.2225 4.39398 16.2225 3.16668C16.2225 1.93938 15.2276 0.944458 14.0003 0.944458C12.773 0.944458 11.7781 1.93938 11.7781 3.16668C11.7781 4.39398 12.773 5.3889 14.0003 5.3889Z'
                  fill='#9A0007'
                />
              </g>
              <defs>
                <clipPath id='clip0_6_721'>
                  <rect
                    width='16'
                    height='16'
                    fill='white'
                    transform='translate(0.666992 0.5)'
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </header>
      <aside>
        <Transition
          show={showSidebar}
          enter='transition ease-in-out duration-300 transform'
          enterFrom='-translate-x-full opacity-0 '
          enterTo='translate-x-0 opacity-100'
          leave='transition ease-in-out duration-300 transform'
          leaveFrom='translate-x-0 opacity-100'
          leaveTo='-translate-x-full opacity-0'
          className='fixed  top-0  bottom-0    text-white bg-[#B82C3A] right-0 left-0 z-20   '
        >
          <div className='py-8 px-7'>
            <div className='flex items-center justify-between'>
              <h1 className='font-semibold'>NAGLIKER</h1>
              <button
                onClick={() => {
                  setShowSidebar(prev => !prev);
                }}
              >
                <svg
                  width={18}
                  height={18}
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 17L17 1M1 1L17 17'
                    stroke='white'
                    strokeWidth={1.88067}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
            <div className='my-4 mt-7 flex justify-between items-center'>
              <div className=' flex items-center space-x-4 pb-1.5'>
                <div className='h-10 w-10  text-xl font-medium bg-white/[0.08] rounded-md flex items-center justify-center'>
                  M
                </div>
                <h2 className=''>Marvin McKinney</h2>
              </div>
              <div>
                <svg
                  width='9'
                  height='14'
                  viewBox='0 0 9 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.9749 0.849952L8.1499 7.02495L1.9749 13.2L0.749902 11.975L5.6999 7.02495L0.749902 2.07495L1.9749 0.849952Z'
                    fill='white'
                  />
                </svg>
              </div>
            </div>
            <div className='h-[0.5px] w-full bg-white  my-5 '></div>
            <ul className=''>
              {navLinks.map(link => {
                const { href, id, name, links } = link;
                return (
                  <li
                    onClick={() => {
                      setShowSidebar(prev => !prev);
                      navigate(href);
                    }}
                    className={` flex cursor-pointer justify-between items-center w-full py-3 overflow-hidden ${
                      pathname === href ||
                      links?.includes(pathname) ||
                      links?.includes(`/${pathname.split('/')[1]}`)
                        ? 'text-white font-bold'
                        : 'text-white'
                    }`}
                    key={id}
                  >
                    <h3>{name}</h3>
                    {/* <Link to={href}>{name}</Link> */}
                    <svg
                      width='9'
                      height='14'
                      viewBox='0 0 9 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1.9749 0.849952L8.1499 7.02495L1.9749 13.2L0.749902 11.975L5.6999 7.02495L0.749902 2.07495L1.9749 0.849952Z'
                        fill='white'
                      />
                    </svg>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='px-8 fixed bottom-10  '>
            <button
              onClick={() => {
                setShowSidebar(prev => !prev);
              }}
              className='flex items-center space-x-4 '
            >
              <span className='h-9 w-9 bg-white rounded flex items-center justify-center'>
                <MdLogout className='text-primary text-xl' />
              </span>
              <span>Logout</span>
            </button>
          </div>
        </Transition>
      </aside>
    </>
  );
};

export default HeaderMobile;
