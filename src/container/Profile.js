import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { registerActionCreator, loginActionCreator } from '../action/actionCreator'

const Profile = (props) => {

  return (
    <div>
      Profile
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
  }
}

export default connect(msp, mdp)(Profile)
