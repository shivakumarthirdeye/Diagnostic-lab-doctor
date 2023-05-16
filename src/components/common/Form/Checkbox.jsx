import { useField } from 'formik';
import ErrorBox from './ErrorBox';
import { BsCheck } from 'react-icons/bs';
import 'pretty-checkbox/dist/pretty-checkbox.min.css';

const Checkbox = ({ label, ...props }) => {
  const [field, meta, setFn] = useField({ ...props });

  return (
    <div className='pretty relative p-default p-svg  p-curve p-fill'>
      <input
        {...field}
        {...props}
        type='checkbox'
        className='w-5 h-5 bg-primary'
      />
      <div class='state  p-danger'>
        <svg className='svg svg-icon w-4 h-4' viewBox='0 0 20 20'>
          <path
            d='M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z'
            style={{
              stroke: '#fff',
              fill: '#fff',
            }}
            // style='stroke: white;fill:white;'
          ></path>
        </svg>
        {/* <BsCheck className='icon ' /> */}
        <label></label>
      </div>
      {meta.touched && meta.error && <ErrorBox msg={meta.error} />}
    </div>
  );
};

export default Checkbox;
