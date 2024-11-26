interface QuizQuestionProps {
  inputName: string;
  question: string;
  questionNumber: number;
  option1: string;
  option2: string;
  option3?: string;
  option4?: string;
}

function QuizQuestion({
  inputName,
  question,
  questionNumber,
  option1,
  option2,
  option3,
  option4,
}: QuizQuestionProps) {

  return (
    <>
      <div className="my-5">
        <p className="lead font-weight-normal">
          {questionNumber}. {question}
        </p>
        <div className="form-check my-2 text-white-50">
          <input type="radio" name={inputName} value="A" />
          <label className="form-check-label">{option1}</label>
        </div>
        <div className="form-check my-2 text-white-50">
          <input type="radio" name={inputName} value="B" />
          <label className="form-check-label">{option2}</label>
        </div>
        <div className={`form-check my-2 text-white-50 ${!option3 ? "d-none" : ""}`}>
          <input type="radio" name={inputName} value="C" />
          <label className="form-check-label">{option3}</label>
        </div>
        <div className={`form-check my-2 text-white-50 ${!option4 ? "d-none" : ""}`}>
          <input type="radio" name={inputName} value="D" />
          <label className="form-check-label">{option4}</label>
        </div>
      </div>
    </>
  )
}

export default QuizQuestion;

// add an if conditional for the amount of questions asked if 2 questions are asked d-none on the class of the other input