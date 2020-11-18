import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
      <form>
        <label>Username</label>
        <input type="text" name="username" />
        <label>Password</label>
        <input type="password" name="password" />
        <input type="submit" value="login" />
      </form>
    </div>
  )
}

export default Login;
