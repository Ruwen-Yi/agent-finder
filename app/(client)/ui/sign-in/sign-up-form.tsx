import { FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function SignUpForm() {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Sign Up
      </button>
      <div className="flex items-center justify-between my-4">
        <span className="flex-grow border-t border-gray-300"></span>
        <span className="px-2 text-gray-500">or sign up with</span>
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
