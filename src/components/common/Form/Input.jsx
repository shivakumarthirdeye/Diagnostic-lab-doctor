import React, { useEffect, useState } from 'react';
import { Field, useField } from 'formik';
import ErrorBox from './ErrorBox';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Input = ({ label, type, placeholder, Icon, ...props }) => {
  const [field, meta, setFn] = useField({ ...props, type });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='form-group  mb-5 relative'>
      {label && (
        <label
          className={`${props.disabled && 'opacity-60'} block mb-1 text-sm`}
        >
          {label}
        </label>
      )}
      {Icon && (
        <Icon className='text-xl md:text-[25px] text-[#93989B] absolute left-3 top-4 ' />
      )}
      <input
        {...field}
        {...props}
        type={showPassword && type === 'password' ? 'text' : type}
        placeholder={placeholder}
        className={Icon && '!pl-12'}
      />
      {type === 'password' && (
        <div className='absolute right-4 top-[15px]'>
          <button type='button' onClick={() => setShowPassword(prev => !prev)}>
            {!showPassword ? (
              <AiFillEyeInvisible size={24} className='text-[#93989B]' />
            ) : (
              <AiFillEye size={24} className='text-[#93989B]' />
            )}
          </button>
        </div>
      )}
      {meta.touched && meta.error && <ErrorBox msg={meta.error} />}
    </div>
  );
};

export default Input;