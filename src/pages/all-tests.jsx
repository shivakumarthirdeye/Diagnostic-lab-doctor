import React from 'react';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom/dist';

const AllTests = () => {
  const navigate = useNavigate();

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
          <h1 className='text-2xl font-medium  '>All Tests</h1>
        </div>
      </div>
      <div className='hidden xs:flex justify-between items-center'>
        <div>
          <h1 className='text-lg font-medium text-black-500 '>
            All Available Report test
          </h1>
          <p className='text-[#B5B5C3] mt-2'>No test Yet!</p>
        </div>
      </div>
    </div>
  );
};

export default AllTests;
