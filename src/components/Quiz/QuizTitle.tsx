import { useNavigate } from "react-router-dom";
import PrimarySubmitButton from "../Buttons/PrimarySubmitButton";

interface QuizTitleProps {
  title: string;
}

function QuizTitle({
  title
}: QuizTitleProps) {

  const navigate = useNavigate()

  return (
    <>
      <div style={{display: "flex", justifyContent: "flex-end"}}>
        <PrimarySubmitButton
          buttonColor="#0D6EFD"
          onClick={() => navigate("/login")}
          text="Login"
          textColor="white"
        />
        <PrimarySubmitButton
          buttonColor="#0D6EFD"
          onClick={() => navigate("/signup")}
          text="Sign Up"
          textColor="white"
        />
      </div>
      <div className="intro bg-white text-center">
        <div className="container">
          <h2 className="text-primary display-3 mb-4">{title}</h2>
        </div>
      </div>
    </>
  )
}

export default QuizTitle
