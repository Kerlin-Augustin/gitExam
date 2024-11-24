import { useState } from "react";
import QuizQuestion from "../QuizQuestions/QuizQuestion";
import QuizScoreBlock from "../QuizScoreBlock";

function QuizForm() {
  const correctAnswers = ["A", "B", "C", "D"]; // Example correct answers
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerChange = (index: number, answer: string) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = answer;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let calculatedScore = 0;
    correctAnswers.forEach((answer, index) => {
      if (answer === userAnswers[index]) {
        calculatedScore++;
      }
    });
    setScore((calculatedScore / correctAnswers.length) * 100);
    setShowScore(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {correctAnswers.map((_, index) => (
          <QuizQuestion
            key={index}
            index={index}
            onAnswerChange={(answer: any) => handleAnswerChange(index, answer)}
          />
        ))}
        <button type="submit">Submit Quiz</button>
      </form>
      {showScore && <QuizScoreBlock score={score} show={showScore}/>}
    </>
  );
}

export default QuizForm;
