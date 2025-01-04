import { RouteObject } from "react-router-dom";
import LoginPage from "../pages/Auth/LoginPage";
import QuizForm from "../pages/QuizForm/QuizForm";

const routes: RouteObject[] = [
  { path: "/", element: <QuizForm /> },
  { path: "/login", element: <LoginPage /> },
];

export default routes;
