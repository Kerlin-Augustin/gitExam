import { Routes, Route } from "react-router-dom"
import QuizForm from "./components/Quiz/QuizForm/QuizForm"
import LoginPage from "./components/Auth/LoginPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<QuizForm />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
