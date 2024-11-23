
interface QuizTitleProps {
  title: string;
}

function QuizTitle ({
  title
}: QuizTitleProps) {

  return (
    <>
      <div className="intro py-3 bg-white text-center">
        <div className="container">
          <h2 className="text-primary display-3 my-4">{title}</h2>
        </div>
      </div>
    </>
  )
}

export default QuizTitle