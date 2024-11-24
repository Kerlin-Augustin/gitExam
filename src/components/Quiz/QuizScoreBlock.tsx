interface QuizScoreBlockProps {
  score: number
}

function QuizScoreBlock({
  score
}: QuizScoreBlockProps){
  
  return (
    <>
    <div className=" scoreBlock py-4 d-none bg-light text-center">
        <div className="container lead">
          <p>You scored a<span className="score text-primary display-4 p-3">{score}%</span>Congrats!</p>
        </div>
      </div>
    </>
  )
}

export default QuizScoreBlock