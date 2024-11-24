import QuizQuestion from "../QuizQuestions/QuizQuestion";

function QuizForm() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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