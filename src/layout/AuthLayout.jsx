import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  // const { accessToken, refreshToken } = useSelector(state => {
  //   return state.auth;
  // });

  let accessToken = '',
    refreshToken = '';

  if (accessToken || refreshToken) {
    return <Navigate to='/' replace={true} />;
  }
  return (
    <div className='min-h-screen'>
      <main className='max-w-[1050px] mx-auto px-4'>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;