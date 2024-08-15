'use client';

import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const agents = [
  {
    id: 1,
    name: 'Agent John Doe',
    image: 'https://via.placeholder.com/150',
    comments: [
      'John helped me with my visa application, and the process was smooth!',
      'Very professional and knowledgeable.',
      'I highly recommend John for any immigration needs.',
    ],
  },
  {
    id: 2,
    name: 'Agent Jane Smith',
    image: 'https://via.placeholder.com/150',
    comments: [
      'Jane was amazing! She made the whole process stress-free.',
      'Thanks to Jane, I got my residency approved quickly.',
      "Jane's expertise is unmatched!",
    ],
  },
  {
    id: 3,
    name: 'Agent Mike Johnson',
    image: 'https://via.placeholder.com/150',
    comments: [
      'Mike provided excellent service and guidance.',
      'Friendly and professional, Mike made the process easy.',
      'I would definitely work with Mike again.',
    ],
  },
  {
    id: 4,
    name: 'Agent Sarah Lee',
    image: 'https://via.placeholder.com/150',
    comments: [
      'Sarah was incredibly helpful throughout the process.',
      'Her knowledge and experience made all the difference.',
      "I can't thank Sarah enough for her support!",
    ],
  },
  {
    id: 5,
    name: 'Agent Chris Williams',
    image: 'https://via.placeholder.com/150',
    comments: [
      'Chris was attentive and answered all my questions.',
      'I felt confident with Chris handling my case.',
      'Great service from start to finish!',
    ],
  },
];

export default function AgentCarousel() {
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAgentIndex((prevIndex) =>
        prevIndex === agents.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentAgentIndex((prevIndex) =>
      prevIndex === 0 ? agents.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentAgentIndex((prevIndex) =>
      prevIndex === agents.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full my-16 max-w-3xl mx-auto p-6 bg-blue-50 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <button onClick={handlePrev}>
          <FaChevronLeft className="text-blue-500 text-2xl" />
        </button>

        <div className="text-center">
          <img
            src={agents[currentAgentIndex].image}
            alt={agents[currentAgentIndex].name}
            className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
          />
          <h2 className="text-xl font-semibold mt-4 text-blue-600">
            {agents[currentAgentIndex].name}
          </h2>
        </div>

        <button onClick={handleNext}>
          <FaChevronRight className="text-blue-500 text-2xl" />
        </button>
      </div>

      <div className="mt-6">
        <div className="space-y-4">
          {agents[currentAgentIndex].comments.map((comment, index) => (
            <p
              key={index}
              className="text-gray-700 italic bg-white p-4 rounded-lg shadow-md"
            >
              “{comment}”
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
