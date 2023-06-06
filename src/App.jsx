import React from 'react';
import AuthLayout from './layout/AuthLayout';
import DefaultLayout from './layout/DefaultLayout';
import PrivateRoute from './PrivateRoute';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import store from './redux/app/store';

// @Lazy import
const Login = lazy(() => import('./pages/auth/login'));
const Register = lazy(() => import('./pages/auth/register'));
const ForgotPassword = lazy(() => import('./pages/auth/forgot-password'));
const ResetPassword = lazy(() => import('./pages/auth/reset-password'));
const VerifyOtp = lazy(() => import('./pages/auth/verify-otp'));

axios.interceptors.request.use(
  config => {
    config.headers['Authorization'] =
      'Bearer ' + store.getState().auth.accessToken;

    return config;
  },
  error => {
    Promise.reject(error);
  }
);

const App = () => {
  return (
    <>
      <BrowserRouter
        getUserConfirmation={(message, callback) => {
          // this is the default behavior
          const allowTransition = window.confirm(message);
          callback(allowTransition);
        }}
      >
        <Suspense fallback={<div className='text-center'>Loading...</div>}>
          <Routes>
            {/* /auth */}
            <Route path='auth' element={<AuthLayout />}>
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path='verify-otp' element={<VerifyOtp />} />
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
