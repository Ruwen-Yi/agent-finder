import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Hero Content */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Connect with Trusted Immigration Experts
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Get personalized assistance for your immigration journey, right where
          you are.
        </p>
        {/* Call to Action Buttons */}
        <div className="flex flex-col space-y-4 justify-center md:flex-row md:space-y-0 md:space-x-4">
          <Link
            href="/find-an-agent"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
          >
            Find an Agent Now
          </Link>
          <Link
            href="/services-overview"
            className="bg-white text-blue-600 hover:text-blue-500 hover:bg-blue-100 font-semibold py-3 px-6 rounded-lg shadow-lg"
          >
            Learn More About Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
