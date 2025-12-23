import { useEffect, useState } from "react";

interface QuizScoreBlockProps {
  percentScore: number;
  show: boolean;
}

function QuizScoreBlock({
  percentScore,
  show
}: QuizScoreBlockProps) {

  const [displayScore, setDisplayScore] = useState(0);
  const delay = percentScore > 50 ? 30 : 50

  useEffect(() => {
    if (show) {
      const timer = setInterval(() => {
        setDisplayScore((prev) => {
          if (prev >= percentScore) {
            clearInterval(timer);
            return percentScore;
          }
          return prev + 1;
        });
      }, delay);

      return () => clearInterval(timer);
    }
  }, [show, percentScore]);

  return (
    show && 
      <>
        <div data-testid='scoreCard' className=" scoreBlock py-4 bg-light text-center">
          <div className="container lead">
            <p>You scored a<span data-testid="score" className="score text-primary display-4 p-3">{displayScore}%</span>Congrats!</p>
          </div>
        </div>
      </>
    
  )
}

export default QuizScoreBlock