import { Form, Formik, useFormikContext } from 'formik';
import * as Yup from 'yup';
import Input from '../common/Form/Input';
import CustomSelect from '../common/Form/CustomSelect';
import { Link } from 'react-router-dom';
import SubmitBtn from '../common/Form/SubmitBtn';
import 'yup-phone-lite';

const PatientInfo = ({
  currentStep,
  setCurrentStep,
  patientValues,
  setPatientValues,
}) => {
  const initialValues = patientValues || {
    firstName: '',
    lastName: '',
    patientId: '',
    age: '',
    gender: '',
    mobileNumber: '',
    email: '',
    address: '',
    city: '',
    notes: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string(),
    patientId: Yup.string(),
    age: Yup.string().required('Age is required'),
    gender: Yup.string().required('Gender is required'),
    mobileNumber: Yup.string().phone('IN', 'Please enter a valid phone number'),
    email: Yup.string().email('Enter valid email address'),
    address: Yup.string(),
    city: Yup.string(),
    notes: Yup.string(),
  });

  return (
    <div className='xl:px-8'>
      {/* <Prompt when={true} message='Are you sure you want to leave?' /> */}
      <h1 className='text-xl font-medium'>Basic information</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          setPatientValues(values);
          setCurrentStep(2);
        }}
      >
        <Form className='form my-10'>
          <div className='md:grid  grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8 xl:gap-12 gap-y-5'>
            <Input
              label='Patient First Name*'
              name='firstName'
              id='firstName'
              placeholder='Enter first name'
            />
            <Input
              label='Last name'
              name='lastName'
              id='lastName'
              placeholder='Enter last name'
            />
            <Input
              label='Patient ID'
              name='patientId'
              id='patientId'
              placeholder='Enter ID'
            />
            <CustomSelect
              label='Gender*'
              name='gender'
              id='gender'
              placeholder='Select gender'
              options={[
                {
                  label: 'Male',
                  value: 'male',
                },
                {
                  label: 'Female',
                  value: 'female',
                },
                {
                  label: 'Other',
                  value: 'other',
                },
              ]}
            />
            <Input label='Age*' name='age' id='age' placeholder='Enter Age' />
            <Input
              label='Mobile Number'
              name='mobileNumber'
              id='mobileNumber'
              placeholder='Enter mobile number'
            />
            <Input
              label='Email'
              name='email'
              id='email'
              placeholder='Enter email address'
            />
            <br className='hidden md:block' />
            <div className='col-span-2'>
              <Input
                label='Address'
                name='address'
                id='address'
                placeholder='Enter Address'
              />
            </div>
            <Input
              label='City'
              name='city'
              id='city'
              placeholder='Enter City Name'
            />
            <div className='col-span-3'>
              <Input
                label='Notes'
                name='notes'
                id='notes'
                placeholder='Enter Notes'
              />
            </div>
          </div>
          <div className='my-10 flex items-center justify-center space-x-4'>
            <Link
              to='/'
              className='py-3 text-sm lg:text-base px-8 bg-[#C9C9C9] text-white rounded  font-semibold'
            >
              Cancel
            </Link>
            <SubmitBtn
              text='Proceed'
              className='!py-3  text-sm lg:text-base !px-8 bg-primary max-w-[110px] rounded text-white font-semibold'
            />
            {/* <button
              type='submit'
              className='py-3 px-8 bg-primary rounded text-white font-semibold'
            >
              Proceed
            </button> */}
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PatientInfo;
