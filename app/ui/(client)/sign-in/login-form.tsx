'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function LoginForm() {
  const searchParams = useSearchParams();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (authenticated) {
      // Redirect to previous page or home page
      const next = searchParams.get('next') || '/home';
      window.location.href = next;
    }
  }, [authenticated]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, type: 'credentials' }),
      });

      if (res.ok) {
        setAuthenticated(true);
      } else {
        // handle error state here
        setError('Invalid credentials');
      }
    } catch (error) {
      // handle error state here
      console.error('Error during sign-in', error);
      setError('Internal server error');
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        className="w-full p-2 border border-gray-300 rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border border-gray-300 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Log In
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="flex items-center justify-between my-4">
        <span className="flex-grow border-t border-gray-300"></span>
        <span className="px-2 text-gray-500">or log in with</span>
        <span className="flex-grow border-t border-gray-300"></span>
      </div>
      <div className="flex space-x-4">
        <button className="p-2 border rounded-full hover:bg-gray-200">
          <FaGoogle className="text-blue-500 text-xl" />
        </button>
        <button className="p-2 border rounded-full hover:bg-gray-200">
          <FaFacebook className="text-blue-600 text-xl" />
        </button>
        <button className="p-2 border rounded-full hover:bg-gray-200">
          <FaLinkedin className="text-blue-700 text-xl" />
        </button>
      </div>
    </form>
  );
}
