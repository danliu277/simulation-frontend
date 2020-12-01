import { useState } from "react";
import { connect } from 'react-redux';
import { registerActionCreator, loginActionCreator } from '../action/actionCreator'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const login = (event) => {
    event.preventDefault()
    console.log("login")
  }

  const register = (event) => {
    event.preventDefault()
    console.log("register")
  }

  return (
    <div>
      <form>
        <label>Username</label>
        <input type="text" name="username" value={username} onChange={handleUsername} />
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />
        <input type="submit" value="Login" onClick={login} />
        <input type="submit" value="Register" onClick={register} />
      </form>
    </div>
  )
}

const msp = state => {
  return {
      user: state.user
  }
}

const mdp = (dispatch) => {
  return {
      login: (username, password) => dispatch(registerActionCreator(username, password)),
      register: (username, password) => dispatch(loginActionCreator(username, password))
  }
}

export default connect(msp, mdp)(Login)
