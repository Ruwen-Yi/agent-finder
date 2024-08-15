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

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-12">
        <h1
          className="text-4xl font-bold text-blue-600 mb-6 text-center"
          id="terms-of-service"
        >
          Terms of Service
        </h1>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 mb-4">
          These terms of service ("Terms", "Agreement") are an agreement between
          [Company Name] ("us", "we", or "our") and you ("User", "you" or
          "your"). This Agreement sets forth the general terms and conditions of
          your use of the [website name] website and any of its products or
          services (collectively, "Website" or "Services").
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Accounts and Membership
        </h2>
        <p className="text-gray-700 mb-6">
          If you create an account on the Website, you are responsible for
          maintaining the security of your account and you are fully responsible
          for all activities that occur under the account and any other actions
          taken in connection with it. We may, but have no obligation to,
          monitor and review new accounts before you may sign in and start using
          the Services. Providing false contact information of any kind may
          result in the termination of your account.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          User Content
        </h2>
        <p className="text-gray-700 mb-6">
          We do not own any data, information, or material ("Content") that you
          submit on the Website in the course of using the Service. You shall
          have sole responsibility for the accuracy, quality, integrity,
          legality, reliability, appropriateness, and intellectual property
          ownership or right to use of all submitted Content.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Backups</h2>
        <p className="text-gray-700 mb-6">
          We perform regular backups of the Website and Content and will do our
          best to ensure completeness and accuracy of these backups. In the
          event of hardware failure or data loss, we will restore backups to
          minimize impact and downtime.
        </p>
      </div>
    </div>
  );
}
