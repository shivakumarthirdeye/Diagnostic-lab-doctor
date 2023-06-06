import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  let accessToken = 'test';

  if (accessToken) {
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
