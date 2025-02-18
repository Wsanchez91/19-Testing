import React, { useState } from 'react';

const questions = [
    { question: "What is React?", options: ["Library", "Framework", "Language"], answer: "Library" },
    { question: "What does JSX stand for?", options: ["JavaScript XML", "JSON XML", "Java Syntax"], answer: "JavaScript XML" }
];

const Quiz: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswer = (option: string) => {
        if (option === questions[currentQuestion].answer) setScore(score + 1);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) setCurrentQuestion(nextQuestion);
        else setShowScore(true);
    };

    return (
        <div className="quiz-container">
            {showScore ? (
                <div className="score-section">Your score: {score} / {questions.length}</div>
            ) : (
                <div>
                    <h2>{questions[currentQuestion].question}</h2>
                    {questions[currentQuestion].options.map(option => (
                        <button key={option} onClick={() => handleAnswer(option)}>{option}</button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Quiz;
