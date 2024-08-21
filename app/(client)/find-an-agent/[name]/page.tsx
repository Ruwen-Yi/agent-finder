import React from 'react';

type AgentData = {
  name: string;
  title: string;
  rating: number;
  location: string;
  languages: string[];
  bio: string;
  specializations: string[];
  certifications: string[];
  services: { name: string; description: string; price: string }[];
  reviews: { name: string; comment: string; rating: number }[];
  contact: { phone: string; email: string; address: string };
};

const agentData: AgentData = {
  name: 'John Doe',
  title: 'Immigration Specialist',
  rating: 4.5,
  location: 'New York, USA',
  languages: ['English', 'Spanish'],
  bio: 'With over 15 years of experience in immigration law, John Doe has successfully helped thousands of clients with visa applications, residency permits, and citizenship processes.',
  specializations: [
    'Visa Applications',
    'Permanent Residency',
    'Citizenship',
    'Family Sponsorship',
  ],
  certifications: [
    'Certified Immigration Consultant',
    'Member of the American Immigration Lawyers Association (AILA)',
  ],
  services: [
    {
      name: 'Visa Assistance',
      description:
        'Comprehensive support for tourist, student, and work visas.',
      price: '$500',
    },
    {
      name: 'Permanent Residency',
      description: 'Expert guidance on applying for permanent residency.',
      price: '$1000',
    },
    {
      name: 'Citizenship Processing',
      description: 'Help with the citizenship application process.',
      price: '$1500',
    },
  ],
  reviews: [
    {
      name: 'Alice Smith',
      comment:
        'John was incredibly helpful and made the visa application process smooth and stress-free.',
      rating: 5,
    },
    {
      name: 'Michael Brown',
      comment: 'Great service, very knowledgeable.',
      rating: 4,
    },
  ],
  contact: {
    phone: '+1 (555) 123-4567',
    email: 'johndoe@example.com',
    address: '123 Main Street, New York, NY, USA',
  },
};

export default function AgentIntroduction() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      {/* Agent Profile Section */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <img
          className="w-32 h-32 rounded-full md:mr-8"
          src="https://via.placeholder.com/150"
          alt="Agent"
        />
        <div className="text-center md:text-left mt-4 md:mt-0">
          <h2 className="text-2xl font-bold text-blue-700">
            {agentData.name}, {agentData.title}
          </h2>
          <p className="text-blue-600">{agentData.location}</p>
          <p className="text-blue-600 mt-2">
            Languages: {agentData.languages.join(', ')}
          </p>
          <div className="mt-4 flex flex-col md:flex-row items-center">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md mb-2 md:mb-0 md:mr-2">
              Schedule a Consultation
            </button>
            <button className="bg-blue-100 text-blue-700 py-2 px-4 rounded-md">
              Send a Message
            </button>
          </div>
          <div className="mt-4 text-yellow-500">
            {computeStarsRate(agentData.rating)}{' '}
            <span className="text-blue-600">
              ({agentData.rating}/5 based on {agentData.reviews.length} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* About the Agent Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          About {agentData.name}
        </h3>
        <p className="text-blue-600">{agentData.bio}</p>
        <h4 className="text-lg font-semibold text-blue-700 mt-6">
          Specializations:
        </h4>
        <ul className="list-disc list-inside text-blue-600 mt-2">
          {agentData.specializations.map((specialization, index) => (
            <li key={index}>{specialization}</li>
          ))}
        </ul>
        <h4 className="text-lg font-semibold text-blue-700 mt-6">
          Accreditations & Certifications:
        </h4>
        <ul className="list-disc list-inside text-blue-600 mt-2">
          {agentData.certifications.map((certification, index) => (
            <li key={index}>{certification}</li>
          ))}
        </ul>
      </div>

      {/* Services Offered Section */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Services Offered
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {agentData.services.map((service, index) => (
            <div key={index} className="p-4 bg-white rounded-md shadow-md">
              <h4 className="text-blue-700 font-semibold">{service.name}</h4>
              <p className="text-blue-600">{service.description}</p>
              <p className="text-blue-700 font-semibold mt-2">
                Price: {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews & Testimonials Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Reviews & Testimonials
        </h3>
        <div className="space-y-4">
          {agentData.reviews.map((review, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-md shadow-md">
              <p className="text-blue-600">
                "{review.comment}" - {review.name}
              </p>
              <div className="text-yellow-500">
                {computeStarsRate(review.rating)}
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md">
          Read All Reviews
        </button>
      </div>

      {/* Availability & Appointment Scheduling Section */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Availability & Appointment Scheduling
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h4 className="text-blue-700 font-semibold">
              Next Available Dates:
            </h4>
            <ul className="list-disc list-inside text-blue-600 mt-2">
              <li>August 15, 2024</li>
              <li>August 16, 2024</li>
              <li>August 17, 2024</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h4 className="text-blue-700 font-semibold">Book an Appointment</h4>
            <form className="mt-2 space-y-2">
              <input
                type="date"
                className="w-full p-2 border border-blue-200 rounded-md"
                placeholder="Select Date"
              />
              <input
                type="time"
                className="w-full p-2 border border-blue-200 rounded-md"
                placeholder="Select Time"
              />
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact & Location Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Contact & Location
        </h3>
        <p className="text-blue-600">
          For any inquiries, feel free to reach out to {agentData.name} at:
        </p>
        <p className="text-blue-600">Phone: {agentData.contact.phone}</p>
        <p className="text-blue-600">Email: {agentData.contact.email}</p>
        <p className="text-blue-600 mt-4">{agentData.contact.address}</p>
        <div className="mt-4">
          <iframe
            className="w-full h-64 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509598!2d144.96305761550404!3d-37.81621897975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b2cbf4ac2e0!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1611242487849!5m2!1sen!2sus"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>
    </div>
  );
}

function computeStarsRate(rate: number) {
  let rateToInt = Math.floor(rate);
  let stars = '★★★★★☆☆☆☆☆';
  return stars.slice(5 - rateToInt, 10 - rateToInt);
}
