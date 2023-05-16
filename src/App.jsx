import React from 'react';
import AuthLayout from './layout/AuthLayout';
import DefaultLayout from './layout/DefaultLayout';
import PrivateRoute from './PrivateRoute';
import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// @Lazy import
const Login = lazy(() => import('./pages/auth/login'));
const Register = lazy(() => import('./pages/auth/register'));
const ForgotPassword = lazy(() => import('./pages/auth/forgot-password'));
const ResetPassword = lazy(() => import('./pages/auth/reset-password'));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div className='text-center'>Loading...</div>}>
          <Routes>
            {/* /auth */}
            <Route path='auth' element={<AuthLayout />}>
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path='forgot-password' element={<ForgotPassword />} />
              <Route path='reset-password' element={<ResetPassword />} />
              <Route
                path='*'
                element={<Navigate to='/auth/login' replace={true} />}
              />
            </Route>

            {/* MAIN (/) */}
            <Route
              path='/*'
              element={
                <PrivateRoute>
                  <DefaultLayout />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
