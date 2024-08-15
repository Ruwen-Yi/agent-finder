export default function PrivacyPolicy() {
  return (
    <div className="bg-blue-50 min-h-screen py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-4">
          Welcome to our Privacy Policy page. Your privacy is critically
          important to us. At [Company Name], we have a few fundamental
          principles:
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li className="mb-2">
            We don’t ask you for personal information unless we truly need it.
          </li>
          <li className="mb-2">
            We don’t share your personal information except to comply with the
            law, develop our products, or protect our rights.
          </li>
          <li className="mb-2">
            We don’t store personal information on our servers unless required
            for the ongoing operation of one of our services.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          Our services require us to collect certain information about you. This
          includes:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li className="mb-2">
            Personal Identification Information (Name, email address, phone
            number, etc.)
          </li>
          <li className="mb-2">
            Usage Data (e.g., how our service is accessed and used)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          How We Use Information
        </h2>
        <p className="text-gray-700 mb-6">
          We use the collected information for various purposes, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li className="mb-2">To provide and maintain our services</li>
          <li className="mb-2">To notify you about changes to our service</li>
          <li className="mb-2">To provide customer support</li>
          <li className="mb-2">To monitor the usage of our service</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li className="mb-2">By email: [your-email@example.com]</li>
          <li>By visiting this page on our website: [Your Website URL]</li>
        </ul>
      </div>
    </div>
  );
}
