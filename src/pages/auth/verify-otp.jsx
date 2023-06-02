import { Formik, Form } from 'formik';
import Input from '../../components/common/Form/Input';
import * as Yup from 'yup';
import { FiLock, FiUser } from 'react-icons/fi';
import Checkbox from '../../components/common/Form/Checkbox';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import SubmitBtn from '../../components/common/Form/SubmitBtn';
import axios from 'axios';
import { SERVER_URL } from '../../utils/config';
import { ERROR, SUCCESS } from '../../utils/constant';
import { handleError } from '../../utils/helper';
import { addToast } from '../../redux/features/toastSlice';
import { useDispatch } from 'react-redux';
import { useMutation } from 'react-query';

const verifyOTP = async data => {
  console.log('🚀 ~ file: verify-otp.jsx:16 ~ verifyOTP ~ data:', data);
  const res = await axios.post(`${SERVER_URL}/verify-web-doctorotp`, data);
  return res;
};

const VerifyOtp = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    otp: '',
  };

  const validationSchema = Yup.object({
    otp: Yup.number('OTP must be a number').required('OTP is required'),
  });

  if (!state) {
    return <Navigate replace to='/auth/login' />;
  }

  const { mutate, data, isError, isLoading, error } = useMutation({
    mutationFn: verifyOTP,
    onSuccess: success => {
      dispatch(
        addToast({
          kind: SUCCESS,
          msg: success.data.message,
        })
      );
      navigate('/auth/login', {
        state: success.data,
      });

      dispatch(
        addToast({
          kind: SUCCESS,
          msg: 'Please Login',
        })
      );
    },
    onError: error => {
      const errorMsg = handleError(error);
      dispatch(
        addToast({
          kind: ERROR,
          msg: errorMsg,
        })
      );
    },
  });

  return (
    <div className='py-20 md:h-screen flex max-w-xl md:max-w-none mx-auto flex-col md:flex-row justify-center md:items-center md:justify-between relative '>
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
        <h1 className='text-2xl md:text-[40px] font-semibold'>Verify OTP</h1>
        <p className='text-sm md:text-base mt-3.5'>
          OTP has sent to your registered email address
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={values => {
            // console.log({ ...state.doctor, values });
            mutate({ ...state, values });
          }}
        >
          <Form className='auth-form   max-w-2xl mt-4'>
            <Input placeholder='Enter OTP' name='otp' id='otp' type='number' />

            <SubmitBtn text='Verify' className='bg-primary' />
            <p className='text-center text-xs md:text-sm '>
              {' '}
              Didn’t received?
              <button type='button' className=' text-primary font-medium'>
                &nbsp;Resend OTP
              </button>{' '}
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default VerifyOtp;
