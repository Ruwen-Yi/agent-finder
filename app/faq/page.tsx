'use client';

import { useState } from 'react';

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const faqs = [
    {
      question: 'How do I find an immigration agent near me?',
      answer:
        'You can use our platform to search for nearby agents by entering your location or selecting from a list of cities.',
    },
    {
      question: 'What services do your agents provide?',
      answer:
        'Our agents offer a range of services, including visa assistance, residency applications, citizenship processing, and legal support.',
    },
    {
      question: 'Are your agents verified and trustworthy?',
      answer:
        'Yes, all of our agents are thoroughly vetted to ensure they meet our high standards of trustworthiness and professionalism.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  return (
    <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-blue-600 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-blue-200 rounded-lg shadow-md overflow-hidden"
            >
              {/* Question - unfold answer on click*/}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-5 text-left text-blue-700 font-medium hover:bg-blue-100 focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="ml-6 h-7 flex items-center">
                  <svg
                    className={`${
                      activeIndex === index ? 'transform rotate-180' : ''
                    } w-6 h-6 text-blue-600 transition-transform duration-300`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <div className="px-4 py-5 border-t border-blue-200 bg-blue-50">
                  <p className="text-blue-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
