import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
// import Header from '../components/Header/Header';
// import Sidebar from '../components/Sidebar/Sidebar';
import { useQuery } from 'react-query';
import { logoutUser, setCurrentUser } from '../redux/features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SERVER_URL } from '../utils/config';
// import Modal from '../components/Modal/Modal';
import axios from 'axios';
import Header from '../components/Header';
import Modal from '../components/Modal/Modal';

// @Lazy import
const Bookings = lazy(() => import('../pages/bookings'));
const NewBooking = lazy(() => import('../pages/bookings/new-booking'));
const SelectTest = lazy(() =>
  import('../pages/bookings/new-booking/select-test')
);
const Patients = lazy(() => import('../pages/patients'));
const AllTests = lazy(() => import('../pages/all-tests'));

const DefaultLayout = () => {
  const dispatch = useDispatch();

  // const { data, isLoading, isError, error } = useQuery(
  //   [`currentUser`],
  //   getUser,
  //   {
  //     onSuccess: user => {
  //       // if (!user.isActive) {
  //       //   return dispatch(logoutUser());
  //       // }

  //       dispatch(setCurrentUser(user));
  //     },
  //     refetchInterval: 150000, // 2.5 min
  //   }
  // );

  const modal = useSelector(state => state.modal);
  return (
    <>
      <Header />
      <main className='py-3.5 xs:py-5 lg:px-5 xl:px-6  container '>
        <Suspense fallback={<div className='text-center'>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Bookings />} />
            <Route path='/new-booking' element={<NewBooking />} />
            <Route path='/new-booking/select-test' element={<SelectTest />} />
            <Route path='/patients' element={<Patients />} />
            <Route path='/all-tests' element={<AllTests />} />
          </Routes>
        </Suspense>
      </main>
      {modal.modalType !== null && <Modal {...modal} />}
    </>
  );
};

export default DefaultLayout;
