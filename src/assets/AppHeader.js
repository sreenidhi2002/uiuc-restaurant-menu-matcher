import React from 'react'
import { Component } from 'react'
import {Link} from "react-router-dom"
import './AppHeader.css'
import authContext from './user_database/authContext.js'

class AppHeader extends Component{
    render(){
    return (
    <authContext.Consumer>{({username, password, _id, setUsername, setPassword, setID})=>(
    <div className="header">
        <Link to="/" className="appLogo">
            <img src="https://cdn-icons-png.flaticon.com/512/3448/3448609.png" alt="UIUC Menu Matcher"/>
        </Link>
        <div className="loginbuttons">
            {username !== "" ? (
                <>
                <Link to="/user-profile" className="color_button user_profile">{username}</Link>
                <button onClick={()=>{setUsername(""); setPassword(""); setID("")}} className="color_button sign_out">Sign Out</button>
                </>
            ) : (
            <>
            <Link to="/sign-in" className="color_button sign_in">Sign In</Link>
            <Link to="/sign-up" className="color_button sign_up">Sign Up</Link>
            </>
            )}
        </div>
    </div>
    )
    }</authContext.Consumer>
    )}
}
export default AppHeader;