import React, { useState } from 'react';
import BreadCrumb from '../../../components/common/BreadCrumb';
import { Link } from 'react-router-dom';

const steps = [
  { id: 1, name: 'Patient Information' },
  { id: 2, name: 'Investigations' },
  { id: 3, name: 'Payments' },
];

const NewBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div>
      {' '}
      <BreadCrumb
        paths={[{ id: 1, name: 'Booking List', to: '/' }]}
        currentPage='New Booking Form'
      />
      <div className='mainContainer'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-lg font-medium text-black-500 '>Lab Booking</h1>
            <p className='text-[#B5B5C3] mt-2'>Complete all 3 steps</p>
          </div>
          <div>
            <Link
              to='/'
              className='bg-primary py-2.5 text-sm px-4 rounded-[10px] text-white font-semibold'
            >
              Back to all
            </Link>
          </div>
        </div>
        <div className='py-20  space-x-4 max-w-4xl mx-auto flex items-center justify-center'>
          {steps.map(step => {
            const { id, name } = step;
            return (
              <div
                className={`flex-1 border-b-4 pb-3 ${
                  currentStep === id
                    ? 'text-black border-black'
                    : 'text-[#C9C9C9] border-[#C9C9C9]'
                }`}
                key={id}
              >
                <h1 className='text-sm font-semibold'>
                  <span className='text-[26px]'>{id}</span>
                  &nbsp; {name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewBooking;
