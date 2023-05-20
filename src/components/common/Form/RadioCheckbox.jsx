import { useField } from 'formik';
import React from 'react';

const RadioCheckbox = ({ label, ...props }) => {
  const [field, meta, setFn] = useField({ ...props });

  return (
    <div>
      <div class='flex items-center'>
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
          {...props}
          type='radio'
          class='opacity-0 absolute z-10 w-8 h-8 cursor-pointer'
        />
        <label for='radio1' class='flex items-center cursor-pointer text-xl'>
          <span class='w-7 h-7 inline-block mr-2 rounded-full border border-grey flex-no-shrink'></span>
        </label>
      </div>
      {/* <input {...field} {...props} type='radio' className='bg-primary' /> */}
      {/* <Label htmlFor='radio-button'>Option text</Label> */}
    </div>
  );
};

export default RadioCheckbox;
