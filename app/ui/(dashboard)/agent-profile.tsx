'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';

export default function AgentProfile() {
  const [loadingProfile, setLoadingProfile] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const { data: session } = useSession();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    if (session?.user?.accessToken) {
      // Fetch user profile if access token is available
      getUserProfile(session.user.accessToken);
    } else {
      // Redirect to `/signin` if no access token or no session
      router.push('/sign-in');
    }
  }, []);

  // This function can be used to fetch dynamic data in the future
  const getUserProfile = (token: string) => {
    setLoadingProfile(true);
    fetch(`${baseUrl}/auth/user_profile`, {
      headers: { Authorization: 'Bearer ' + token },
    })
      .then((response) => {
        setLoadingProfile(false);
      })
      .catch((error) => {
        // handle error here
        console.error(error);
      });
  };
  return (
    <>
      {' '}
      {loadingProfile ? (
        <p>Loading...</p>
      ) : (
        <div className="flex h-screen bg-blue-50">
          {/* Main Content */}
          <div className="flex-1 p-6">
            <h1 className="text-3xl font-semibold text-blue-900">
              Welcome, {session?.user?.name}! Email: {session?.user?.email}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {/* Quick Stats */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-medium text-blue-700">
                  Today's Appointments
                </h2>
                <p className="text-2xl font-bold text-blue-900">5</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-medium text-blue-700">
                  Pending Requests
                </h2>
                <p className="text-2xl font-bold text-blue-900">3</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-medium text-blue-700">
                  New Messages
                </h2>
                <p className="text-2xl font-bold text-blue-900">8</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-medium text-blue-700">
                  Recent Reviews
                </h2>
                <p className="text-2xl font-bold text-blue-900">4</p>
              </div>
            </div>

            {/* Additional Content */}
            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-blue-800">Overview</h2>
              <p className="text-blue-700 mt-2">
                This section can contain charts, tables, or other relevant data
                for the agent to review.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
