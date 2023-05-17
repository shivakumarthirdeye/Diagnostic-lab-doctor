import { useField } from 'formik';
import ErrorBox from './ErrorBox';
import { BsCheck } from 'react-icons/bs';

const Checkbox = ({ label, ...props }) => {
  const [field, meta, setFn] = useField({ ...props });
  console.log(
    '🚀 ~ file: Checkbox.jsx:7 ~ Checkbox ~ field, meta:',
    field,
    meta
  );

  return (
    <div>
      <input
        {...field}
        {...props}
        type='checkbox'
        className='w-5 h-5 bg-primary'
        checked={field.value}
      />
      {meta.touched && meta.error && <ErrorBox msg={meta.error} />}
    </div>
  );
};

export default Checkbox;
