export default function ServicesOverview() {
  const services = [
    {
      name: 'Visa Assistance',
      description: 'Expert guidance on applying for various types of visas.',
      icon: '🛂',
    },
    {
      name: 'Residency Applications',
      description: 'Support throughout the residency application process.',
      icon: '🏠',
    },
    {
      name: 'Citizenship Processing',
      description: 'Help with naturalization and citizenship applications.',
      icon: '📜',
    },
    {
      name: 'Legal Support',
      description: 'Access to legal experts for immigration-related issues.',
      icon: '⚖️',
    },
  ];
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                {service.name}
              </h3>
              <p className="text-blue-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
