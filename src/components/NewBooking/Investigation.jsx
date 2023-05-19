import { Form, Formik, useFormikContext } from 'formik';
import * as Yup from 'yup';
import CustomSelect from '../common/Form/CustomSelect';
import React, { Fragment } from 'react';
import DatePicker from '../common/Form/DatePicker';
import { Link } from 'react-router-dom';
import SubmitBtn from '../common/Form/SubmitBtn';
import { Popover, Transition } from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi';

const Investigation = ({
  currentStep,
  setCurrentStep,
  testInfoValues,
  setTestInfoValues,
}) => {
  const initialValues = testInfoValues || {
    reportCategory: '',
    sample: '',
    tests: '',
    pickupTime: new Date(),
  };

  const validationSchema = Yup.object({
    reportCategory: Yup.string().required('Report Category Name is required'),
    sample: Yup.string().required('Sample Name is required'),
    pickupTime: Yup.string().required('Pickup Time Name is required'),
  });

  return (
    <div className='max-w-4xl mx-auto'>
      <h1 className='text-xl font-medium'>Basic information</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <Form>
          <div className='flex space-x-10'>
            <div className='flex-1'>
              <CustomSelect
                label='Report Category*'
                name='reportCategory'
                id='reportCategory'
                placeholder='Select Report Category'
                externalValue={testInfoValues}
                setExternalValue={setTestInfoValues}
                options={[
                  {
                    label: 'Category Name 1',
                    value: 'Category Name',
                  },
                  {
                    label: 'Category Name 2',
                    value: 'Category Name 2',
                  },
                  {
                    label: 'Category Name 3',
                    value: 'Category Name 3',
                  },
                ]}
              />
            </div>
            <div className='flex-1'></div>
          </div>
          <div>
            {/* <SelectTest
              testInfoValues={testInfoValues}
              setTestInfoValues={setTestInfoValues}
            /> */}
            {/* <div className='text-sm flex py-3 pb-5 justify-between'>
              <h1>Selected count({testInfoValues.tests.length})</h1>
              <h1>
                Total amount: <span className='font-bold '> ₹500</span>
              </h1>
            </div> */}
          </div>
          <div className='flex w-full  space-x-10'>
            <div className='flex-1'>
              <CustomSelect
                label='Sample*'
                name='sample'
                id='sample'
                placeholder='Select Sample'
                externalValue={testInfoValues}
                setExternalValue={setTestInfoValues}
                options={[
                  {
                    label: 'Urine',
                    value: 'urine',
                  },
                  {
                    label: 'Blood',
                    value: 'blood',
                  },
                ]}
              />
            </div>
            <div className='flex-1'>
              <DatePicker
                label='Sample pickup time*'
                name='pickupTime'
                id='pickupTime'
                placeholder='Select Sample pickup time'
                externalValue={testInfoValues}
                setExternalValue={setTestInfoValues}
                showTime={true}
              />
            </div>
          </div>
          <div className='my-10 flex items-center justify-center space-x-4'>
            <button
              onClick={() => {
                setCurrentStep(1);
              }}
              className='py-3 px-8 bg-[#C9C9C9] text-white rounded  font-semibold'
            >
              Previous
            </button>
            <SubmitBtn
              text='Proceed'
              className='!py-3.5 !px-8 bg-primary max-w-[110px] rounded text-white font-semibold'
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Investigation;

function SelectTest({ testInfoValues, setTestInfoValues }) {
  console.log(
    '🚀 ~ file: Investigation.jsx:123 ~ SelectTest ~ testInfoValues:',
    testInfoValues
  );
  const tests = [
    {
      id: 1,
      name: 'Blood sugar test after eating',
      shortName: 'BSTAE',
      price: '₹564',
    },
    {
      id: 2,
      name: 'Blood sugar test before eating',
      shortName: 'BSTBE',
      price: '₹564',
    },
    {
      id: 3,
      name: 'Urine Test',
      shortName: 'Ut',
      price: '₹500',
    },
  ];

  const handleClose = (close, value) => {
    if (testInfoValues.tests.findIndex(obj => obj.id === value.id) !== -1) {
      setTestInfoValues(testInfoValues => {
        return {
          ...testInfoValues,
          tests: testInfoValues.tests.filter(obj => obj.id !== value.id),
        };
      });
    } else {
      setTestInfoValues(testInfoValues => {
        return {
          ...testInfoValues,
          tests: [...testInfoValues.tests, value],
        };
      });
    }

    close();
  };

  return (
    <div className='my-4'>
      <label> Select Test</label>
      <Popover className='relative'>
        {({ open }) => (
          <>
            <Popover.Button className='flex items-center justify-between w-full py-3 px-5 rounded-md border border-[#C9C9C9] text-sm text-[#C9C9C9] focus:outline-none'>
              <span>Enter & search</span>
              <HiChevronDown aria-hidden='true' className='text-2xl' />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-4xl -translate-x-1/2 transform  sm:px-0 lg:max-w-4xl bg-white px-10 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                {props => {
                  const { open, close } = props;

                  return (
                    <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                      <table className='min-w-full divide-y divide-gray-300'>
                        <thead className='bg-[#FAFAFA] text-[#B5B5C3]'>
                          <tr>
                            <th
                              scope='col'
                              className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold  sm:pl-6'
                            >
                              Test
                            </th>
                            <th
                              scope='col'
                              className='px-3 py-3.5 text-left text-sm font-semibold '
                            >
                              Short Name
                            </th>
                            <th
                              scope='col'
                              className='px-3 py-3.5 text-left text-sm font-semibold '
                            >
                              Rate/price
                            </th>
                          </tr>
                        </thead>
                        <tbody className='bg-white dark:bg-dark-500'>
                          {tests.map((test, personIdx) => {
                            const { id, name, price, shortName } = test;
                            console.log(
                              testInfoValues.tests.findIndex(
                                obj => obj.id === test.id
                              ) !== -1
                            );
                            return (
                              <tr
                                onClick={() => {
                                  handleClose(close, test);
                                }}
                                // onClick={() => {
                                //   if (monthly) {
                                //     setValue(noOfEmails.split('/')[0]);
                                //     // get index

                                //     const index = plan.findIndex(
                                //       item => item.noOfEmails === noOfEmails
                                //     );

                                //     setValues([index + 1]);
                                //   } else {
                                //     setValue(noOfEmails);
                                //     const index = plan.findIndex(
                                //       item => item.noOfEmails === noOfEmails
                                //     );
                                //     setValues([index + 1]);
                                //   }
                                // }}
                                key={id}
                                className={`cursor-pointer bg-white text-[#464E5F] font-semibold relative`}
                              >
                                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium  sm:pl-6'>
                                  {name}
                                </td>
                                <td className='whitespace-nowrap px-3 py-4 text-sm '>
                                  {shortName}
                                </td>
                                <td className='whitespace-nowrap px-3 py-4 text-sm '>
                                  {price}
                                </td>
                                {testInfoValues.tests.findIndex(
                                  obj => obj.id === test.id
                                ) !== -1 && (
                                  <div className='absolute top-3 right-5'>
                                    <svg
                                      width='23'
                                      height='23'
                                      viewBox='0 0 23 23'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <g clip-path='url(#clip0_883_7878)'>
                                        <path
                                          d='M6.94873 11.9486L10.2406 15.055L16.8244 8.39844'
                                          stroke='#27AE60'
                                          stroke-width='2.88241'
                                          stroke-linecap='round'
                                          stroke-linejoin='round'
                                        />
                                      </g>
                                      <rect
                                        x='1.31374'
                                        y='1.15359'
                                        width='21.146'
                                        height='21.146'
                                        rx='3.84321'
                                        stroke='#27AE60'
                                        stroke-width='0.854047'
                                      />
                                      <defs>
                                        <clipPath id='clip0_883_7878'>
                                          <rect
                                            x='0.886719'
                                            y='0.726562'
                                            width='22'
                                            height='22'
                                            rx='4.27023'
                                            fill='white'
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                )}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    // <>
                    //   <header className='grid text-[#B5B5C3] text-sm font-semibold grid-cols-3 px-4 bg-[#FAFAFA] py-3 border-b bottom-[#C9C9C9]'>
                    //     <h1>Test</h1>
                    //     <h1>Short Name</h1>
                    //     <h1>Rate/price</h1>
                    //   </header>
                    //   <main className='grid grid-cols-3 px-4  py-3 '>
                    //     {tests.map(test => {
                    //       console.log(
                    //         '🚀 ~ file: Investigation.jsx:216 ~ SelectTest ~ testInfoValues.tests.includes(test):',
                    //         testInfoValues.tests.findIndex(
                    //           obj => obj.id === test.id
                    //         ) !== -1
                    //       );
                    //       return (
                    //         <div key={test.id}>
                    //           <button
                    //             onClick={() => {
                    //               handleClose(close, test);
                    //             }}
                    //             className='py-2 text-left px-1 text-sm font-semibold text-[#464e5f]'
                    //           >
                    //             {test.name}
                    //           </button>
                    //           <button
                    //             onClick={() => {
                    //               handleClose(close, test);
                    //             }}
                    //             className='py-2 text-left px-1 text-sm font-semibold text-[#464e5f]'
                    //           >
                    //             {test.shortName}
                    //           </button>
                    //           <button
                    //             onClick={() => {
                    //               handleClose(close, test);
                    //             }}
                    //             className='py-2 text-left px-1 text-sm font-semibold text-[#464e5f]'
                    //           >
                    //             {test.price}
                    //           </button>
                    //           {testInfoValues.tests.findIndex(
                    //             obj => obj.id === test.id
                    //           ) !== -1 && (
                    //             <div className='absolute right-5'>
                    //               <svg
                    //                 width='23'
                    //                 height='23'
                    //                 viewBox='0 0 23 23'
                    //                 fill='none'
                    //                 xmlns='http://www.w3.org/2000/svg'
                    //               >
                    //                 <g clip-path='url(#clip0_883_7878)'>
                    //                   <path
                    //                     d='M6.94873 11.9486L10.2406 15.055L16.8244 8.39844'
                    //                     stroke='#27AE60'
                    //                     stroke-width='2.88241'
                    //                     stroke-linecap='round'
                    //                     stroke-linejoin='round'
                    //                   />
                    //                 </g>
                    //                 <rect
                    //                   x='1.31374'
                    //                   y='1.15359'
                    //                   width='21.146'
                    //                   height='21.146'
                    //                   rx='3.84321'
                    //                   stroke='#27AE60'
                    //                   stroke-width='0.854047'
                    //                 />
                    //                 <defs>
                    //                   <clipPath id='clip0_883_7878'>
                    //                     <rect
                    //                       x='0.886719'
                    //                       y='0.726562'
                    //                       width='22'
                    //                       height='22'
                    //                       rx='4.27023'
                    //                       fill='white'
                    //                     />
                    //                   </clipPath>
                    //                 </defs>
                    //               </svg>
                    //             </div>
                    //           )}
                    //         </div>
                    //       );
                    //     })}
                    //   </main>
                    // </>
                  );
                }}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
