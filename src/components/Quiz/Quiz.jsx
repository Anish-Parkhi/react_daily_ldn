import React, { useState } from 'react';
import styles from './Quiz.module.css';

const quizQuestions = [
  {
    id: 1,
    question: 'What is the largest planet in our solar system?',
    options: ['Venus', 'Jupiter', 'Saturn', 'Mars'],
    answer: 1, // Correct answer index is 1 for "Jupiter"
  },
  {
    id: 2,
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: ['China', 'Japan', 'South Korea', 'Vietnam'],
    answer: 1, // Correct answer index is 1 for "Japan"
  },
  {
    id: 3,
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      'William Shakespeare',
      'Charles Dickens',
      'Jane Austen',
      'Mark Twain',
    ],
    answer: 0, // Correct answer index is 0 for "William Shakespeare"
  },
  {
    id: 4,
    question: "Which element has the chemical symbol 'O'?",
    options: ['Osmium', 'Oxygen', 'Gold', 'Iron'],
    answer: 1, // Correct answer index is 1 for "Oxygen"
  },
  {
    id: 5,
    question: 'In which year did the Titanic sink?',
    options: ['1905', '1912', '1920', '1931'],
    answer: 1, // Correct answer index is 1 for "1912"
  },
];

function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const handleClick = (questionId, optionId) => {
    setUserAnswer((prev) => {
      const isAval = prev.find((item) => item.questionId === questionId);
      if (isAval) {
        return prev.map((item) => {
          if (item.questionId === questionId) {
            return { ...item, optionId: optionId };
          }
          return item;
        });
      } else {
        return [...prev, { questionId: questionId, optionId: optionId }];
      }
    });
  };

  const sortInOrder = [...userAnswer].sort(
    (a, b) => a.questionId - b.questionId
  );
  console.log(userAnswer);

  const handleSubmit = () => {
    let initialScore = 0;
    for (let i = 0; i < sortInOrder.length; i++) {
      if (sortInOrder[i].optionId === quizQuestions[i].answer) {
        initialScore++;
      }
    }
    setScore(initialScore);
  };

  return (
    <div className={styles.quizMainWrapper}>
      {quizQuestions.map((question) => {
        return (
          <>
            <div className={styles.questionsWrapper}>
              <div>{question.id}</div>
              <div>{question.question}</div>
            </div>
            <div className={styles.optionsContainer}>
              {question.options.map((option, index) => {
                return (
                  <div className={styles.optionsInnerContainer}>
                    <input
                      onClick={() => handleClick(question.id, index)}
                      type="radio"
                      name={question.id}
                    />
                    <div>{option}</div>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
      <button onClick={handleSubmit}>Submit</button>
      <div>Your score is {score}</div>
    </div>
  );
}

export default Quiz;
