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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#efeeec'}}>
        <div className="text-center rounded border" style={{boxShadow: '10px 5px 5px #0D6EFD', width: '35em', background: 'white' }}>
          <form onSubmit={handleSubmit}>
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
          <p className="mt-3">
            <span style={{ cursor: 'pointer', color: '#0D6EFD' }} onClick={() => console.log('Create Sign Up page')}>Sign up</span> or Login with <span style={{ cursor: 'pointer', color: '#6441a5', textDecoration: 'underline' }} onClick={() => console.log("Add Twitch Auth")}>Twitch</span></p>
          <p>Back to <span style={{ cursor: 'pointer', color: '#0D6EFD', textDecoration: 'underline' }} onClick={() => navigate("/")}>Exam</span></p>
        </div>
      </div>
    </>
  )
}

export default LoginPage
