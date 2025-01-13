import { RouteObject } from "react-router-dom";
import LoginPage from "../pages/Auth/LoginPage";
import QuizForm from "../pages/QuizForm/QuizForm";
import SignupPage from "../pages/Auth/SignupPage";

const routes: RouteObject[] = [
  { path: "/", element: <QuizForm /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
];

export default routes;
