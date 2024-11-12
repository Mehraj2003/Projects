import React, { useState } from 'react';

const QuizApp = () => {
  const questions = [
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Cascading Simple Sheets",
        "Cars SUVs Sailboats",
      ],
      answer: "Cascading Style Sheets",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleNextQuestion = () => {
    setSubmitted(false);
    setSelectedOption('');
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">{currentQuestion.question}</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4 mb-6">
            {currentQuestion.options.map((option, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  className="form-radio text-indigo-600"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700"
          >
            Submit
          </button>
        </form>
        {submitted && (
          <div className="mt-4 text-center">
            {selectedOption === currentQuestion.answer ? (
              <p className="text-green-600 font-medium">Correct! 🎉</p>
            ) : (
              <p className="text-red-600 font-medium">
                Incorrect. The correct answer is {currentQuestion.answer}.
              </p>
            )}
            {currentQuestionIndex < questions.length - 1 ? (
              <button
                onClick={handleNextQuestion}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700"
              >
                Next Question
              </button>
            ) : (
              <p className="text-gray-700 mt-4">You've completed the quiz!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
