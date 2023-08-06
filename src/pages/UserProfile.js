import React, { Component} from 'react'; 
import {Link} from "react-router-dom"
import './UserProfile.css';
import AppHeader from '../assets/AppHeader.js';
import authContext from '../assets/user_database/authContext.js';
import axios from '../assets/user_database/axios.js';
const URL = '/api/users/'

class UserProfile extends Component{
  constructor(props){
    super(props)
    this.state={
      favorites : [],
      edited_favorites : [],
      errorMsg : '',
      loading : false,
      loaded : false,
      password : '',
      new_password : '',
      password_hidden : true
    }
  }
  async changePassword(_id, username, setPassword){
    console.log("changing password to " + this.state.new_password)
    try {
      const response = await axios.put(URL+_id, {"username":username, "password":this.state.password, "newPassword":this.state.new_password})
      console.log(response)
      setPassword(this.state.new_password)
      this.setState({password:'', new_password:'', errorMsg : 'Password Changed!'})
    }catch(err){
      console.log(err)
      if(!err?.response){
          this.setState({errorMsg : 'No response', loading:false})
      }else{
          this.setState({errorMsg : err.response?.data.message, loading:false})
      }
    }

  }
  async loadFavorites(_id){
    try {
      this.setState({loading : true})
      const response = await axios.get(URL+_id, {'replace' : true})
      let favorites = response?.data?.data.favorites.sort()
      this.setState({favorites: favorites, edited_favorites: JSON.parse(JSON.stringify(favorites)), loaded : true, loading:false})
    }catch(err){
      console.log(err)
      this.setState({loading:false})
    }
  }
  async unfavorite(elem, username, password, _id){
    const index = this.state.edited_favorites.indexOf(elem)
    let edited_favorites = this.state.edited_favorites
    edited_favorites.splice(index, 1)
    this.setState({edited_favorites : edited_favorites})
    try{
      const response = await axios.put(URL+_id, {"username":username, "password":password, "favorites":this.state.edited_favorites})
      console.log(response)
    }catch(err){
      console.log(err)
      this.setState({loading:false})
    }
  }
  async refavorite(elem, username, password, _id){
    let edited_favorites = this.state.edited_favorites
    edited_favorites.push(elem)
    this.setState({edited_favorites : edited_favorites})
    try{
      const response = await axios.put(URL+_id, {"username":username, "password":password, "favorites":this.state.edited_favorites})
      console.log(response)
    }catch(err){
      console.log(err)
      this.setState({loading:false})
    }
  }
  getFavorites(username, password, _id){
    if(!this.state.loaded && !this.state.loading){
      this.loadFavorites(_id)
    }
    if(this.state.loading){
      return (<h1>Loading...</h1>)
    }else{
      return (<div className="favoriteList">{this.state.favorites.map((elem)=>{return (
      <div className="favoriteItem">
        <Link to={"/detail-view/"+elem}><h2>{elem}</h2></Link>
        {this.state.edited_favorites.includes(elem) ? 
        (<button onClick={()=>{this.unfavorite(elem, username, password, _id)}} className="color_button unfavorite">unfavorite</button>) : 
        (<button onClick={()=>{this.refavorite(elem, username, password, _id)}} className="color_button favorite">refavorite</button>)}
      </div>
      )})}</div>)
    }
  }
  render(){
  return (
    <>
    <authContext.Consumer>
    {({username, password, _id, setUsername, setPassword, setID})=>(
      <>
      {_id === '' ? (<><Link to="/" className="color_button" id="returnHome">Not logged in, return to Home</Link></>) : (<>
      <AppHeader />
      <div className="UserProfilePage">
        <div className="UserProfileContainer">
              <div className="UserInfoContainer">
                <div className="ProfilePic">
                  
                </div>
                <div className="UserInfo">
                  <h1>{username}</h1>
                  <button onClick={()=>{this.setState({password_hidden:false})}} className="color_button" id="password_button">Change Password</button>
                  {this.state.password_hidden ? (<></>) : (
                  <div className="passwordChangeForm">
                    <span onClick={()=>this.setState({password_hidden:true})} className="close">&times;</span>
                    <div>
                      <h1>Change Password</h1>
                      {this.state.errorMsg === '' ? (<></>) : (<h3>{this.state.errorMsg}</h3>)}
                    </div>
                    <form id="flex_form" onSubmit={(e) => {e.preventDefault(); this.changePassword(_id, username, setPassword)}}>
                        <input type="text" onChange={(e)=>this.setState({password : e.target.value})} value={this.state.password} placeholder="Enter old password"></input>
                        <input type="text" onChange={(e)=>this.setState({new_password : e.target.value})} value={this.state.new_password} placeholder="Enter new password"></input>
                        <button className="color_button unfavorite">Submit</button>
                    </form>
                  </div>
                  )}
                </div> 
                
              </div>
              <div className="UserFaves">
                  <div className="favoriteList">
                  <h1>Favorite Restaurants</h1>
                  </div>
                  {this.getFavorites(username, password, _id)}
              </div>
        </div> 
      </div>
      </>
      )}
      </>
      )}
      </authContext.Consumer>
    </>
  );
}
}

export default UserProfile;