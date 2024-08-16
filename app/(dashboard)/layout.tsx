'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FiHome,
  FiCalendar,
  FiMessageCircle,
  FiStar,
  FiPieChart,
  FiSettings,
  FiLogOut,
} from 'react-icons/fi';
import { HiMenuAlt3 } from 'react-icons/hi';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-blue-50">
      <div
        className={`bg-blue-600 text-white flex flex-col p-4 space-y-6 ${
          sidebarOpen ? 'w-64' : 'w-16'
        } transition-all duration-300`}
      >
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-2xl"
        >
          <HiMenuAlt3 />
        </button>
        <div className="space-y-4">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <FiHome size={24} />
            {sidebarOpen && <span>Dashboard</span>}
          </Link>
          <Link href="/appointments" className="flex items-center space-x-2">
            <FiCalendar size={24} />
            {sidebarOpen && <span>Appointments</span>}
          </Link>
          <Link href="/messages" className="flex items-center space-x-2">
            <FiMessageCircle size={24} />
            {sidebarOpen && <span>Messages</span>}
          </Link>
          <Link href="/reviews" className="flex items-center space-x-2">
            <FiStar size={24} />
            {sidebarOpen && <span>Reviews</span>}
          </Link>
          <Link href="/analytics" className="flex items-center space-x-2">
            <FiPieChart size={24} />
            {sidebarOpen && <span>Analytics</span>}
          </Link>
          <Link href="/settings" className="flex items-center space-x-2">
            <FiSettings size={24} />
            {sidebarOpen && <span>Settings</span>}
          </Link>
        </div>
        <div className="mt-auto">
          <Link href="/logout" className="flex items-center space-x-2">
            <FiLogOut size={24} />
            {sidebarOpen && <span>Logout</span>}
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}
