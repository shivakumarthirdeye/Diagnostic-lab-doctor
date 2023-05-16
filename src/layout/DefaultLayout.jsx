import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import Header from '../components/Header/Header';
// import Sidebar from '../components/Sidebar/Sidebar';
import { useQuery } from 'react-query';
import { logoutUser, setCurrentUser } from '../redux/features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SERVER_URL } from '../utils/config';
// import Modal from '../components/Modal/Modal';
import axios from 'axios';
import Header from '../components/Header';

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

  // const modal = useSelector(state => state.modal);
  return (
    <>
      <Header />
      <main className='py-5 px-6 max-w-[1680px] mx-auto'>
        <Suspense fallback={<div className='text-center'>Loading...</div>}>
          <Routes>
            <Route path='/' element={<>test</>} />
          </Routes>
        </Suspense>
      </main>
      {/* {modal.modalType !== null && <Modal {...modal} />} */}
    </>
  );
};

export default DefaultLayout;
