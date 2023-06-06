import React, { useRef } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/common/Form/Input';
import SubmitBtn from '../../components/common/Form/SubmitBtn';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from '../../utils/config';

const register = data => {
  const res = axios.post(`${SERVER_URL}/register-web-doctor`, data);
  return res;
};

const Register = () => {
  const initialValues = {
    fullName: '',
    phoneNumber: '',
    email: '',
    hospitalName: '',
    address: '',
    city: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('User Name is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    email: Yup.string().email().required('User Email is required'),
    hospitalName: Yup.string().required('Hospital Name is required'),
    address: Yup.string().required('Address Name is required'),
    city: Yup.string().required('City Name is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
  });

  const formRef = useRef(null);

  return (
    <>
      {/* {isLoading && <Loading />} */}

      <div className='min-h-screen  flex max-w-xl md:max-w-none mx-auto flex-col md:flex-row justify-center md:items-center md:justify-between relative  py-10 md:py-20'>
        <p className='absolute hidden md:block bottom-[20px] mb-2 text-sm left-[50%] translate-x-[-50%]'>
          {' '}
          Powered by <span className='font-medium'> Xyz Pvt. Ltd.</span>
        </p>
        <div className='md:flex-1 flex mb-10 md:mb-0 flex-col items-center md:block '>
          <span className='inline-block md:hidden bg-[#B82C3A]/[0.23] h-[45px] w-[45px] rounded'></span>{' '}
          <h2 className='text-lg md:text-4xl w-fit'>
            Welcome to{' '}
            <span className='hidden md:inline-block bg-[#B82C3A]/[0.23] h-[80px] w-[90px]'>
              {' '}
            </span>{' '}
            <span className=' text-lg md:text-5xl xl:text-6xl inline md:block font-medium text-primary'>
              PathoPlus
            </span>
            <p className='hidden md:block text-base text-right mt-6'>
              Welcome to{' '}
              <span className='font-medium text-primary'>PathoPlus</span>
            </p>
          </h2>
        </div>
        <div className='md:flex-1'>
          <h1 className='text-2xl md:text-[40px] font-semibold'>Sign Up</h1>
          <p className='text-sm md:text-base mt-3.5'>
            Please Sign UP to enjoy our services.
          </p>

          <Formik
            innerRef={formRef}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => {
              console.log(values);
            }}
          >
            <Form className='auth-form   max-w-2xl mt-4'>
              <Input
                placeholder='Your Full Name'
                name='fullName'
                id='fullName'
                type='text'
              />
              <Input
                placeholder='Phone number'
                name='phoneNumber'
                id='phoneNumber'
                type='number'
              />
              <Input
                placeholder='Email address'
                name='email'
                id='email'
                type='email'
              />
              <Input
                placeholder='Hospital/clinic fullName'
                name='hospitalName'
                id='hospitalName'
                type='text'
              />
              <Input
                placeholder='Address'
                name='address'
                id='address'
                type='text'
              />
              <Input placeholder='City' name='city' id='city' type='text' />
              <Input
                placeholder='Enter Password'
                name='password'
                id='password'
                type='password'
              />
              <Input
                placeholder='Confirm Password'
                name='confirmPassword'
                id='confirmPassword'
                type='password'
              />
              <div>
                <SubmitBtn text='Register' className='bg-primary' />
                <p className='text-center text-xs md:text-sm '>
                  Already Have an account?&nbsp;
                  <Link className=' text-primary font-medium' to='/auth/login'>
                    Signin
                  </Link>{' '}
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Register;
