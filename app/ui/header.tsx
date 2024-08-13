import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer hover:text-blue-200 transition duration-300">
          ImmigrationConnect
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/home"
            className="hover:text-blue-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/how-it-works"
            className="hover:text-blue-200 transition duration-300"
          >
            How It Works
          </Link>
          <Link
            href="/services-overview"
            className="hover:text-blue-200 transition duration-300"
          >
            Services
          </Link>
          <Link
            href="/about-us"
            className="hover:text-blue-200 transition duration-300"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-200 transition duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Sign Up / Login Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="#signup"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Sign Up
          </Link>
          <Link
            href="#login"
            className="bg-white text-blue-600 hover:text-blue-500 hover:bg-blue-100 font-semibold py-2 px-4 rounded"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden">
        <div className="px-6 pt-4 pb-2 space-y-4">
          <Link
            href="/home"
            className="block text-sm hover:text-blue-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/how-it-works"
            className="block text-sm hover:text-blue-200 transition duration-300"
          >
            How It Works
          </Link>
          <Link
            href="/services-overview"
            className="block text-sm hover:text-blue-200 transition duration-300"
          >
            Services
          </Link>
          <Link
            href="/about-us"
            className="block text-sm hover:text-blue-200 transition duration-300"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="block text-sm hover:text-blue-200 transition duration-300"
          >
            Contact
          </Link>
          <Link
            href="#signIn"
            className="block text-sm hover:text-blue-200 transition duration-300"
          >
            Sign In / Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
