import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-blue-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-blue-300">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-300">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-300">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-300">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" className="hover:text-blue-300">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" className="hover:text-blue-300">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link href="#" className="hover:text-blue-300">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Contact Us</h2>
          <p className="mb-2">
            <strong>Address:</strong> 123 Immigration St, City, Country
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <Link
              href="mailto:info@immigrationconnect.com"
              className="hover:text-blue-300"
            >
              info@immigrationconnect.com
            </Link>
          </p>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Newsletter</h2>
          <p className="mb-4">
            Sign up to receive the latest updates and news.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 w-full rounded-l-md border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-blue-700 hover:bg-blue-600 text-white px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-blue-800 pt-4">
        <p className="text-center">
          &copy; 2024 Immigration Connect. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
