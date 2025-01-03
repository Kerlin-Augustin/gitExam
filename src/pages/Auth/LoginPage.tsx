import { useState } from "react";
import PrimarySubmitButton from "../../components/Buttons/PrimarySubmitButton"
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Hello')
  }
  
  const navigate = useNavigate()

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#efeeec' }}>
        <div className="text-center rounded border" style={{ boxShadow: '10px 9px 5px #acacac, 0em 1px 5.4em #0D6EFD', width: '35em', background: 'white' }}>
          <form onSubmit={handleSubmit}>
            <h2 className="my-3">Login</h2>
            <div className="mb-4">
              <p style={{marginRight: '10em', marginBottom: '0em'}}><label className="block text-gray-700">Email:</label></p>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <p style={{marginRight: '8em', marginBottom: '0em'}}><label className="block text-gray-700">Password:</label></p>
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
              buttonWidth={'13.3em'}
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
