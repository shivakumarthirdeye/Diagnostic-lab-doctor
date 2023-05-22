import { useField } from 'formik';
import React from 'react';

const RadioCheckbox = ({ label, ...props }) => {
  const [field, meta, setFn] = useField({ ...props });

  return (
    <div className='flex items-center'>
      <input
        {...field}
        // onFocus={() => {
        //   setFn.setTouched({
        //     [field.name]: true,
        //   });
        // }}
        // onChange={e => {
        //   console.log(e);
        // }}
        checked={field.value === props.value}
        {...props}
        type='radio'
        className='opacity-0 absolute z-10 w-8 h-8 cursor-pointer'
      />
      <label
        htmlFor={props.id}
        className='flex items-center cursor-pointer text-xl'
      >
        <span className='w-7 h-7 inline-block mr-2 rounded-full border border-grey flex-no-shrink'></span>
      </label>
    </div>
  );
};

export default RadioCheckbox;
