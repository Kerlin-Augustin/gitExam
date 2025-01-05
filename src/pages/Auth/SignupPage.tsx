import { useState } from "react";
import PrimarySubmitButton from "../../components/Buttons/PrimarySubmitButton"
import { useNavigate } from "react-router-dom";

function SignupPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful!");
      } else {
        setMessage(data.error || "Login failed.");
      }
    } catch (error) {
      setMessage("An error occurred.");
    }
  
  }
  
  const navigate = useNavigate()

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#efeeec' }}>
        <div className="text-center rounded border" style={{ boxShadow: '10px 9px 5px #acacac, 0em 1px 5.4em #0D6EFD', width: '35em', background: 'white' }}>
          <form onSubmit={handleSubmit}>
            <h2 className="my-3">Sign Up</h2>
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
              text={"Sign Up"}
              textColor={"white"}
              buttonWidth={'13.3em'}
            />
          </form>
          <p>{message}</p>
          <p className="mt-3">
            <span>Sign up</span> or <span style={{ cursor: 'pointer', color: '#0D6EFD' }} onClick={() => navigate("/login")}>Login</span> with <span style={{ cursor: 'pointer', color: '#6441a5', textDecoration: 'underline' }} onClick={() => console.log("Add Twitch Auth")}>Twitch</span></p>
          <p>Back to <span style={{ cursor: 'pointer', color: '#0D6EFD', textDecoration: 'underline' }} onClick={() => navigate("/")}>Exam</span></p>
        </div>
      </div>
    </>
  )
}

export default SignupPage
