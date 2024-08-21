import Link from 'next/link';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Enter Your Location',
      description: 'Provide your city or ZIP code to find nearby agents.',
      icon: '📍', // You can replace this with an actual icon
    },
    {
      title: 'Browse Agent Profiles',
      description: 'Check the profiles of verified immigration agents.',
      icon: '👤', // You can replace this with an actual icon
    },
    {
      title: 'Schedule a Consultation',
      description: 'Book a meeting or start chatting with your chosen agent.',
      icon: '📅', // You can replace this with an actual icon
    },
  ];

  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {steps.map((step, index) => (
            <div key={index} className="max-w-sm md:mx-4 mb-8 md:mb-0">
              <div className="flex items-center justify-center mb-6">
                <div className="text-5xl bg-blue-600 text-white p-4 rounded-full">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-blue-700 text-center">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/find-an-agent"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
