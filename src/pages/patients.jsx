import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { AiOutlineUndo } from 'react-icons/ai';
import { FaUndo } from 'react-icons/fa';
import { GrFilter, GrSearch } from 'react-icons/gr';
import { HiOutlineArrowSmLeft, HiOutlineFilter } from 'react-icons/hi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useNavigate } from 'react-router-dom/dist';

const Patients = () => {
  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className='mainContainer xs:mt-12'>
      <div className='flex justify-between py-3 xs:hidden'>
        <div className='flex space-x-3'>
          <button
            type='button'
            onClick={() => {
              navigate(-1);
            }}
          >
            <HiOutlineArrowSmLeft className='text-3xl' />
          </button>
          <h1 className='text-2xl font-medium  '>Lab Patients</h1>
        </div>
      </div>

      <div className=' justify-between hidden xs:flex items-center'>
        <div>
          <h1 className='text-lg font-medium text-black-500 '>All Patients</h1>
          <p className='text-[#B5B5C3] mt-2'>No Patients Yet!</p>
        </div>
      </div>
      {/* Filter */}
      <div className='my-8'>
        <div className='flex space-x-6 justify-between md:justify-normal  items-center'>
          <div className='max-w-[280px] w-full relative'>
            <input
              type='text'
              placeholder='Search for patients'
              className='bg-[#F1F1F1] border-none focus:border-none focus:outline-none p-4 max-w-[280px] rounded-[10px] w-full pr-10 '
            />
            <div className='absolute right-4  text-xl top-[18px] text-[#F1F1F1]'>
              <GrSearch className='searchSvg' />
            </div>
          </div>
          <div className='block md:hidden'>
            <button
              onClick={() => {
                setOpenFilter(prev => !prev);
              }}
              className='bg-[#497BEA] p-3 rounded-full'
            >
              <svg
                width={26}
                height={26}
                viewBox='0 0 26 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M22.479 5.41667H19.229M14.8957 3.25V7.58333M14.8957 5.41667H2.979M7.31234 13H2.979M11.6457 10.8333V15.1667M23.5623 13H11.6457M22.479 20.5833H19.229M14.8957 18.4167V22.75M14.8957 20.5833H2.979'
                  stroke='white'
                  strokeWidth={1.5}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
          <div className='hidden md:flex bg-[#273142]  items-center    rounded-[10px] '>
            <button className='text-white  p-5  border-r border-white '>
              <HiOutlineFilter className='text-white' />
            </button>
            <button className='text-white  p-4  border-r border-white '>
              Filter by Date{' '}
              <span>
                <MdOutlineKeyboardArrowDown className='inline ml-2 text-2xl' />
              </span>
            </button>
            <button className='flex items-center  text-[#FF8743]  px-4   border-white '>
              <span>
                <svg
                  className='mr-2'
                  width='20'
                  height='20'
                  viewBox='0 0 17 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5.70898 6.55078H2.70898V3.55078'
                    stroke='#FF8743'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M4.83398 12.2068C5.60299 12.9765 6.58299 13.5007 7.65001 13.7133C8.71703 13.9259 9.82313 13.8173 10.8284 13.4011C11.8336 12.985 12.6929 12.28 13.2974 11.3754C13.902 10.4709 14.2247 9.40733 14.2247 8.31934C14.2247 7.23135 13.902 6.1678 13.2974 5.26324C12.6929 4.35867 11.8336 3.65372 10.8284 3.23757C9.82313 2.82142 8.71703 2.71277 7.65001 2.92535C6.58299 3.13793 5.60299 3.6622 4.83398 4.43184L2.70898 6.55059'
                    stroke='#FF8743'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </span>
              Reset FIlter
            </button>
          </div>
        </div>
      </div>
      {/* No Info */}
      <div className='py-60 flex flex-col items-center justify-center'>
        <div className='text-center mt-3'>
          <h1 className='text-lg  font-medium text-black-500 '>
            No Patients Yet!
          </h1>
          <p className='text-[#B5B5C3] mt-1'>
            Book for a sample test now and get patient details
          </p>
        </div>
      </div>

      {openFilter && (
        <div
          onClick={() => {
            setOpenFilter(prev => !prev);
          }}
          className='fixed top-0 left-0 right-0 bottom-0 bg-black/50  z-10'
        ></div>
      )}

      <Transition
        show={openFilter}
        enter='transition ease-in-out duration-300 transform'
        enterFrom='translate-y-full'
        enterTo='translate-y-0'
        leave='transition ease-in-out duration-300 transform'
        leaveFrom='translate-y-0'
        leaveTo='translate-y-full'
        className='fixed bottom-0 h-[375px] z-20 bg-white p-5 w-full left-0 right-0'
      >
        Filter
      </Transition>

      {/* EF No Info */}
    </div>
  );
};

export default Patients;
