import PrimarySubmitButton from "../Buttons/PrimarySubmitButton";

interface QuizTitleProps {
  title: string;
}

function QuizTitle({
  title
}: QuizTitleProps) {

  return (
    <>
      <div style={{display: "flex", justifyContent: "flex-end"}}>
        <PrimarySubmitButton
          buttonColor="#0D6EFD"
          text="Login"
          textColor="white"
        />
        <PrimarySubmitButton
          buttonColor="#0D6EFD"
          text="Sign Up"
          textColor="white"
        />
      </div>
      <div className="intro py-3 bg-white text-center">
        <div className="container">
          <h2 className="text-primary display-3 my-4">{title}</h2>
        </div>
      </div>
    </>
  )
}

export default QuizTitle

// get rid of white space at the tip of the title