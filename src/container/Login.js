import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div>
      <form>
        <label>Username</label>
        <input type="text" name="username" value={username} onChange={handleUsername} />
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />
        <input type="submit" value="Login" />
        <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default Login;
