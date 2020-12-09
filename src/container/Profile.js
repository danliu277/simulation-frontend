import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { setUserActionCreator } from '../action/actionCreator'

const Profile = (props) => {
  useEffect(() => {
    if(!props.user)
      props.history.push("/login")
  }, [props.user])

  return (
    <div>
      Profile
      <input type="submit" value="Log Out" onClick={() => props.logout()} />
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
    logout: () => dispatch(setUserActionCreator(null)),
  }
}

export default connect(msp, mdp)(Profile)
