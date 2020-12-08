import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { registerActionCreator, loginActionCreator } from '../action/actionCreator'

const Login = (props) => {
  useEffect(() => {
    if(props.user)
      props.history.push("/profile")
  }, [props.user])

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
    props.login(username, password)
  }

  const register = (event) => {
    event.preventDefault()
    props.register(username, password)
  }

  return (
    <div>
      <form>
        <label>Username</label>
        <input type="text" name="username" value={username} onChange={handleUsername} />
        <br />
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />
        <br />
        <input type="submit" value="Login" onClick={(e) => login(e)} />
        <input type="submit" value="Register" onClick={(e) => register(e)} />
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
      login: (username, password) => dispatch(loginActionCreator(username, password)),
      register: (username, password) => dispatch(registerActionCreator(username, password))
  }
}

export default connect(msp, mdp)(Login)
