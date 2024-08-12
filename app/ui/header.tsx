export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="text-white">
            Immigration Connect
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-200">
            Home
          </a>
          <a href="#how-it-works" className="hover:text-blue-200">
            How It Works
          </a>
          <a href="#services" className="hover:text-blue-200">
            Services
          </a>
          <a href="#about" className="hover:text-blue-200">
            About Us
          </a>
          <a href="#contact" className="hover:text-blue-200">
            Contact
          </a>
        </nav>

        {/* Call to Action Buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="#signup"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Sign Up
          </a>
          <a
            href="#login"
            className="bg-white text-blue-600 hover:text-blue-500 hover:bg-blue-100 font-semibold py-2 px-4 rounded"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
