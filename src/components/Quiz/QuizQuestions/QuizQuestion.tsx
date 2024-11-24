interface QuizQuestionProps {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;

}

function QuizQuestion({
  question,
  option1,
  option2,
  option3,
  option4,
}: QuizQuestionProps) {

  return (
    <>
      <div className="my-5">
          <p className="lead font-weight-normal">
            1. {question}
          </p>
          <div className="form-check my-2 text-white-50">
            <input type="radio" name="q1" value="A" />
            <label className="form-check-label">{option1}</label>
          </div>
          <div className="form-check my-2 text-white-50">
            <input type="radio" name="q1" value="B" />
            <label className="form-check-label">{option2}</label>
          </div>
          <div className="form-check my-2 text-white-50">
            <input type="radio" name="q1" value="C" />
            <label className="form-check-label">{option3}</label>
          </div>
          <div className="form-check my-2 text-white-50">
            <input type="radio" name="q1" value="D" />
            <label className="form-check-label">{option4}</label>
          </div>
        </div>
    </>
  )
}

export default QuizQuestion;