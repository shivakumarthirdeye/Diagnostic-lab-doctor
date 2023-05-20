import { Form, Formik, useField, useFormikContext } from 'formik';
import * as Yup from 'yup';
import CustomSelect from '../common/Form/CustomSelect';
import React, { Fragment } from 'react';
import DatePicker from '../common/Form/DatePicker';
import { Link } from 'react-router-dom';
import SubmitBtn from '../common/Form/SubmitBtn';
import { Popover, Transition } from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi';
import { AiOutlineMinus } from 'react-icons/ai';
import ErrorBox from '../common/Form/ErrorBox';

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
    tests: Yup.array()
      .of(
        Yup.object().shape({
          id: Yup.string(),
          name: Yup.string(),
          shortName: Yup.string(),
          price: Yup.number(),
        })
      )
      .required('Tests List is required'),
  });

  return (
    <div className='max-w-4xl mx-auto'>
      <h1 className='text-xl font-medium'>Basic information</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, fn) => {
          if (!values.tests.length) {
            return fn.setFieldError('tests', 'required');
          }
          setTestInfoValues(values);
          setCurrentStep(3);
        }}
      >
        {formik => {
          const { values, setFieldValue } = formik;

          return (
            <Form>
              <div className='flex space-x-10'>
                <div className='flex-1'>
                  <CustomSelect
                    label='Report Category*'
                    name='reportCategory'
                    id='reportCategory'
                    placeholder='Select Report Category'
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
                <SelectTest
                  testInfoValues={testInfoValues}
                  setTestInfoValues={setTestInfoValues}
                />
                <div className='grid grid-cols-2 gap-5 '>
                  {testInfoValues?.tests?.map(test => {
                    const { name, id, shortName, price } = test;
                    return (
                      <div
                        key={id}
                        className='p-[14px] relative text-sm rounded-md border  border-[#F6AFAF]'
                      >
                        <h1 className='font-medium'>{name}</h1>
                        <p className='py-1 pb-2 text-[#ABABAB] text-xs'>
                          {shortName}
                        </p>
                        <h2 className='text-[#497BEA] font-semibold'>
                          {' '}
                          ₹{price}
                        </h2>

                        <button
                          onClick={() => {
                            setTestInfoValues(testInfoValues => {
                              return {
                                ...testInfoValues,
                                tests: testInfoValues?.tests?.filter(
                                  obj => obj.id !== test.id
                                ),
                              };
                            });
                            setFieldValue('tests', [
                              ...testInfoValues?.tests.filter(
                                obj => obj.id !== test.id
                              ),
                            ]);
                          }}
                          className='absolute top-5 right-5  w-5 text-primary text-xl h-5 flex items-center justify-center bg-[#FDF4F4] rounded-full'
                        >
                          <AiOutlineMinus />
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className='text-sm flex py-3 pb-5 justify-between'>
                  <h1>Selected count({testInfoValues?.tests.length})</h1>
                  <h1>
                    Total amount:{' '}
                    <span className='font-bold '>
                      {' '}
                      ₹
                      {testInfoValues?.tests?.reduce(
                        (accumulator, currentValue) => {
                          return (accumulator =
                            accumulator + currentValue.price);
                        },
                        0
                      )}
                    </span>
                  </h1>
                </div>
              </div>
              <div className='flex w-full  space-x-10'>
                <div className='flex-1'>
                  <CustomSelect
                    label='Sample*'
                    name='sample'
                    id='sample'
                    placeholder='Select Sample'
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
                  isSubmitting={!values.tests.length}
                  text='Proceed'
                  className='!py-3.5 !px-8 bg-primary max-w-[110px] rounded text-white font-semibold'
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Investigation;

function SelectTest({ testInfoValues, setTestInfoValues }) {
  const tests = [
    {
      id: 1,
      name: 'Blood sugar test after eating',
      shortName: 'BSTAE',
      price: 564,
    },
    {
      id: 2,
      name: 'Blood sugar test before eating',
      shortName: 'BSTBE',
      price: 564,
    },
    {
      id: 3,
      name: 'Urine Test',
      shortName: 'Ut',
      price: 500,
    },
  ];
  const [field, meta] = useField({ name: 'tests' });

  const { values, setFieldValue, setTouched, setErrors, setFieldError } =
    useFormikContext();

  const handleClose = (close, value) => {
    // if (testInfoValues?.tests.length > 0) {
    //   setFieldError('tests', '');
    // } else {
    // }
    setTouched({
      tests: true,
    });

    if (testInfoValues?.tests.findIndex(obj => obj.id === value.id) !== -1) {
      setFieldValue('tests', [
        ...testInfoValues?.tests.filter(obj => obj.id !== value.id),
      ]);
      setTestInfoValues(testInfoValues => {
        return {
          ...testInfoValues,
          tests: testInfoValues?.tests.filter(obj => obj.id !== value.id),
        };
      });
    } else {
      setTestInfoValues(testInfoValues => {
        return {
          ...testInfoValues,
          tests: [...testInfoValues?.tests, value],
        };
      });
      setFieldValue('tests', [...testInfoValues?.tests, value]);
    }

    close();
  };

  return (
    <div
      className='my-4'
      onFocus={() => {
        setTouched({
          tests: true,
        });
      }}
    >
      <label className=' text-sm block mb-2 '> Select Test*</label>
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
                                  ₹{price}
                                </td>
                                {testInfoValues?.tests &&
                                  testInfoValues?.tests?.findIndex(
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
                  );
                }}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      {meta.touched && !meta.value.length && (
        <ErrorBox msg='Test List is required' />
      )}
    </div>
  );
}
