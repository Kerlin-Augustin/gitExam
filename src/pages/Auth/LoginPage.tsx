import { useState } from "react";
import PrimarySubmitButton from "../../components/Buttons/PrimarySubmitButton"
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Hello')
  }

  const navigate = useNavigate()

  return (
    <>
      <div className="text-center my-5 rounded border">
        <form className="" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Username</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <PrimarySubmitButton
            buttonColor={"#0D6EFD"}
            text={"Login"}
            textColor={"white"}
          />
        </form>
        <p><span>Sign up</span> or Login with <span style={{cursor: 'pointer', color: '#6441a5', textDecoration: 'underline'}} onClick={() => console.log("Add Twitch Auth")}>Twitch</span></p>
        <p>Back to <span style={{cursor: 'pointer', color: '#0D6EFD', textDecoration: 'underline'}} onClick={() => navigate("/")}>Exam</span></p>
      </div>
    </>
  )
}

export default LoginPage
