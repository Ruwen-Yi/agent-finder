'use client';

import React, { useState } from 'react';
import SignUpForm from '@/app/ui/(client)/sign-in/sign-up-form';
import LoginForm from '@/app/ui/(client)/sign-in/login-form';

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleToggle = () => setIsSignUp(!isSignUp);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div
        className={`w-full max-w-md p-8 bg-white rounded-lg shadow-lg transition-transform duration-500 ${
          isSignUp ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
      >
        <h1 className="text-2xl font-semibold text-blue-600 mb-4">
          {isSignUp ? 'Sign Up' : 'Log In'}
        </h1>
        <div className="flex justify-between mb-6">
          <button
            className={`w-full py-2 font-semibold text-blue-600 ${
              isSignUp ? 'border-b-2 border-blue-600' : 'text-blue-400'
            }`}
            onClick={handleToggle}
          >
            Sign Up
          </button>
          <button
            className={`w-full py-2 font-semibold text-blue-600 ${
              !isSignUp ? 'border-b-2 border-blue-600' : 'text-blue-400'
            }`}
            onClick={handleToggle}
          >
            Log In
          </button>
        </div>
        {isSignUp ? <SignUpForm /> : <LoginForm />}
      </div>
    </div>
  );
}
