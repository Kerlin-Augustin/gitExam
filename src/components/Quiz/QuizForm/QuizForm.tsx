import QuizQuestion from "../QuizQuestions/QuizQuestion";

function QuizForm() {

  const correctAnswers: string[] = [
    'A',
    'B',
    'C',
    'B',
    'A',
    'D',
    'B',
    'D',
    'C',
    'D',
    'A',
    'D',
    'D',
    'B',
    'B',
    'C',
    'B',
    'A',
    'C',
    'B',
    'C',
    'A',
    'D',
    'A',
    'B'
  ]

  let userAnswer: { [key: string]: string }[] = [];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    userAnswer = []

    const formData: { [key: string]: string } = {};
    const formElements = event.currentTarget.elements;

    for (let i = 0; i < formElements.length - 1; i++) {
      const element = formElements[i] as HTMLInputElement;
      if (element.checked) {
        formData[element.name] = element.value;
      }
    }

    userAnswer.push(formData)

    let score: number = 0;
    correctAnswers.forEach((correct, index) => {
      const questionKey = `q${index + 1}`;
      if (formData[questionKey] === correct) {
        score++;
      }
    });

    const percentScore = (score / correctAnswers.length) * 100;
    console.log(`Score: ${percentScore}%`);

    scrollTo(0, 0)
  }

  return (
    <>
      <div className="quiz py-4 bg-primary">
        <div className="container">
          <h2 className="my-5 text-white">
            Just a little practice...
          </h2>
          <form className="quiz-form text-light" onSubmit={handleSubmit}>
            <QuizQuestion
              inputName="q1"
              question="What is git?"
              questionNumber={1}
              option1="A Version Control System."
              option2="A request to fetch data!"
              option3="Graphical Interface Transfer."
              option4="All of the above."
            />
            <QuizQuestion
              inputName="q2"
              question="What is the terminal?"
              questionNumber={2}
              option1="A place at the airport."
              option2="A GUI that takes in commands!"
              option3="None of the above."
              option4="A list of terms!"
            />
            <QuizQuestion
              inputName="q3"
              question="What software actually runs on the terminal?"
              questionNumber={3}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q4"
              question="What software actually runs on the terminal?"
              questionNumber={4}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q5"
              question="What software actually runs on the terminal?"
              questionNumber={5}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q6"
              question="What software actually runs on the terminal?"
              questionNumber={6}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q7"
              question="What software actually runs on the terminal?"
              questionNumber={7}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q8"
              question="What software actually runs on the terminal?"
              questionNumber={8}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q9"
              question="What software actually runs on the terminal?"
              questionNumber={9}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q10"
              question="What software actually runs on the terminal?"
              questionNumber={10}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q11"
              question="What software actually runs on the terminal?"
              questionNumber={11}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q12"
              question="What software actually runs on the terminal?"
              questionNumber={12}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q13"
              question="What software actually runs on the terminal?"
              questionNumber={13}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q14"
              question="What software actually runs on the terminal?"
              questionNumber={14}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q15"
              question="What software actually runs on the terminal?"
              questionNumber={15}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q16"
              question="What software actually runs on the terminal?"
              questionNumber={16}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q17"
              question="What software actually runs on the terminal?"
              questionNumber={17}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q18"
              question="What software actually runs on the terminal?"
              questionNumber={18}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q19"
              question="What software actually runs on the terminal?"
              questionNumber={19}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q20"
              question="What software actually runs on the terminal?"
              questionNumber={20}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q21"
              question="What software actually runs on the terminal?"
              questionNumber={21}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q22"
              question="What software actually runs on the terminal?"
              questionNumber={22}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q23"
              question="What software actually runs on the terminal?"
              questionNumber={23}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q24"
              question="What software actually runs on the terminal?"
              questionNumber={24}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q25"
              question="What software actually runs on the terminal?"
              questionNumber={25}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <div className="text-center">
              <input
                type="submit"
                className="btn btn-light"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default QuizForm;

// work on tracking the answers of the submission and showing the score block when submitted