import React, { useState } from 'react';

const Data = [
  {
    question: "Why shouldn't we trust atoms?",
    answer: "They make up everything",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer: "Nobody knows",
  },
  {
    question: "What's the object-oriented way to become wealthy?",
    answer: "Inheritance",
  },
  {
    question: "How many tickles does it take to tickle an octopus?",
    answer: "Ten-tickles",
  },
  {
    question: "What is: 1 + 1?",
    answer: "A window",
  },
];

const  Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
      {Data.map((item, index) => (
        <div key={index} className="mb-4 border-b">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 text-lg font-medium text-left text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <span>{item.question}</span>
            <span>{activeIndex === index ? '✖' : '▼'}</span>
          </button>
          {activeIndex === index && (
            <div className="p-4 text-gray-600 bg-gray-50 rounded-md">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion; ;
