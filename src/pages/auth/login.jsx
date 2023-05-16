import { Formik, Form } from 'formik';
import React from 'react';
import Input from '../../components/common/Form/Input';
import * as Yup from 'yup';
import { FiLock, FiUser } from 'react-icons/fi';
import Checkbox from '../../components/common/Form/Checkbox';
import { Link } from 'react-router-dom';
import SubmitBtn from '../../components/common/Form/SubmitBtn';

const Login = () => {
  const initialValues = {
    name: '',
    password: '',
    stayLoggedIn: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('User Name is required'),
    password: Yup.string().required('Password is required'),
    stayLoggedIn: Yup.boolean(),
  });

  return (
    <div className='h-screen flex max-w-xl md:max-w-none mx-auto flex-col md:flex-row justify-center md:items-center md:justify-between relative '>
      <p className='absolute hidden md:block bottom-[20px] mb-2 text-sm left-[50%] translate-x-[-50%]'>
        {' '}
        Powered by <span className='font-medium'> Xyz Pvt. Ltd.</span>
      </p>
      <div className='md:flex-1 flex mb-10 md:mb-0 flex-col items-center md:block '>
        <span className='inline-block md:hidden bg-[#B82C3A]/[0.23] h-[45px] w-[45px] rounded'></span>{' '}
        <h2 className='text-lg md:text-4xl'>
          Welcome to{' '}
          <span className='hidden md:inline-block bg-[#B82C3A]/[0.23] h-[80px] w-[90px]'>
            {' '}
          </span>{' '}
          <span className=' text-lg md:text-5xl xl:text-6xl inline md:block font-medium text-primary'>
            PathoPlus
          </span>
        </h2>
      </div>
      <div className='md:flex-1'>
        <h1 className='text-2xl md:text-[40px] font-semibold'>Sign In</h1>
        <p className='text-sm md:text-base mt-2'>
          Please Sign in to enjoy our services.
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={values => {
            console.log(values);
          }}
        >
          <Form className='form  max-w-2xl mt-4'>
            <Input
              Icon={FiUser}
              placeholder='User Name'
              name='name'
              id='name'
              type='text'
            />
            <Input
              Icon={FiLock}
              placeholder='Password'
              type='password'
              name='password'
              id='password'
            />
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <Checkbox
                  name='stayLoggedIn'
                  id='stayLoggedIn'
                  label='Keep me login'
                />
                <p className='text-xs md:text-sm'> Keep me login</p>
              </div>
              <div>
                <Link
                  to='/auth/forgot-password'
                  className='text-xs md:text-sm text-primary font-medium'
                >
                  Forgot Password ?
                </Link>
              </div>
            </div>
            <SubmitBtn text='Login' className='bg-primary' />
            <p className='text-center text-xs md:text-sm '>
              {' '}
              Don’t Have an account?{' '}
              <Link className=' text-primary font-medium' to='/auth/register'>
                Sign Up
              </Link>{' '}
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
