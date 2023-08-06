import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import SignInPage from "./pages/SignInPage.js";
import SignUpPage from "./pages/SignUpPage.js";
import './App.css';
import {React, Component} from 'react';
import UserProfile from './pages/UserProfile.js';
import DetailPage from "./pages/detailView.js";
import authContext from "./assets/user_database/authContext.js";
import DetailPageReviews from "./yelp_models/DetailViewReviews.js";

class App extends Component{
  setUsername = e => {console.log("Username set to " + e); this.setState({username: e})}
  setPassword = e => {console.log("Password set to " + e); this.setState({password: e})}
  setID = e => {console.log("ID set to " + e); this.setState({_id: e})}
  state = {
    username : "",
    password : "",
    _id : "",
    setUsername : this.setUsername,
    setPassword : this.setPassword,
    setID : this.setID
  }
  render(){
    return (
      <authContext.Provider value = {this.state}>
        <Router basename={process.env.PUBLIC_URL}>
        <main className="App">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/sign-in" element={<SignInPage/>}/>
              <Route path="/sign-up" element={<SignUpPage/>}/>
              <Route path="/user-profile" element={<UserProfile />}/>
              {/* <Route path="/list-view" element={<RestaurantListView />}/> */}
              <Route path="/detail-view" element={<DetailPage />}/>
              <Route path="/detail-view/:id" element={<DetailPage />}/>
              <Route path="/detail-view-reviews" element={<DetailPageReviews />}/>
            </Routes>
        </main>
        </Router>
      </authContext.Provider>
    );
  }
}

export default App;
