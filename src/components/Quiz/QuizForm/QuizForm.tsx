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

    for (let i = 0; i < formElements.length -1; i++) {
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
              question="What is git?"
              option1="A Version Control System."
              option2="A request to fetch data!"
              option3="Graphical Interface Transfer."
              option4="All of the above."
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