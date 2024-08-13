import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="text-white">
            Immigration Connect
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/home" className="hover:text-blue-200">
            Home
          </Link>
          <Link href="/how-it-works" className="hover:text-blue-200">
            How It Works
          </Link>
          <Link href="/services-overview" className="hover:text-blue-200">
            Services
          </Link>
          <Link href="/about-us" className="hover:text-blue-200">
            About Us
          </Link>
          <Link href="#contact" className="hover:text-blue-200">
            Contact
          </Link>
        </nav>

        {/* Call to Action Buttons */}
        <div className="flex items-center space-x-4">
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
      </div>
    </header>
  );
}
