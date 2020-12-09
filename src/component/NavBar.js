import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    console.log(props)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className={`nav-item ${props.location && props.location.pathname === '/' && 'active'}`}>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    {
                        props.user ?
                        <li className={`nav-item ${props.location && props.location.pathname === '/profile' && 'active'}`}>
                            <Link to="/profile" className="nav-link">Profile</Link>
                        </li> :
                        <li className={`nav-item ${props.location && props.location.pathname === '/login' && 'active'}`}>
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    }
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

const msp = state => {
    return {
        user: state.user
    }
}

export default connect(msp)(NavBar)