import React from 'react';
import {Component } from 'react';
import AppHeader from '../assets/AppHeader.js';
import './SignPage.css'
import axios from '../assets/user_database/axios.js'
import authContext from '../assets/user_database/authContext.js';
const URL = '/api/users'


class SignUpPage extends Component{
    constructor(props){
        super(props)
        this.state ={
            username : '',
            password : '',
            errorMsg : '',
            success : false
        }
    }
    async handleSubmit(e, setUsername, setPassword, setID){
        e.preventDefault()
        try {
            const response = await axios.post(URL,
                {"username" : this.state.username, "password" : this.state.password})
            const _id = response?.data?.data._id
            setUsername(this.state.username)
            setPassword(this.state.password)
            setID(_id)
            this.setState({username : '', password : '', success : true, errorMsg : ''})
        }catch(err){
            console.log(err)
            if(!err?.response){
                this.setState({errorMsg : 'No response'})
            }else{
                this.setState({errorMsg : err.response?.data.message})
            }
        }
    }
    render(){
        return (
            <authContext.Consumer>
            {({username, password, _id, setUsername, setPassword, setID})=>(
                <>
                <AppHeader/>
                <div className="SignPage">
                    <div className="SignContainer">
                        <h2>Sign Up</h2>
                        {username !== "" ? (<h2>Signed in as {username}!</h2>) : (<></>)}
                        {this.state.success ? (<h2>Account Created!</h2>) : (<></>)}
                        {this.state.errorMsg !== "" ? (<h2>{this.state.errorMsg}</h2>) : (<></>)}
                        <form onSubmit={(e)=>this.handleSubmit(e,setUsername, setPassword, setID)}>
                            <input type="text" autoComplete="off" onChange={(e)=>this.setState({username : e.target.value})} value={this.state.username} placeholder="Enter username"></input>
                            <input type="text" onChange={(e)=>this.setState({password : e.target.value})} value={this.state.password} placeholder="Enter password"></input>
                            <button className = "color_button">Submit</button>
                        </form>
                    </div>
                </div>
                </>
                )
            }
            </authContext.Consumer>
        )
    }
}

export default SignUpPage;
