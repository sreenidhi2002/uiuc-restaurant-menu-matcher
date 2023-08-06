import React from 'react';
import { Component } from 'react';
import AppHeader from '../assets/AppHeader.js';
import './detailView.css';
import PropTypes from 'prop-types';
import withRouter from '../withRouter.js';
import Ambar from '../scraped_menus/Ambar India.json';
import Bangkok from '../scraped_menus/Bangkok Thai.json';
import Basil from '../scraped_menus/Basil Thai.json';
import Cravings from '../scraped_menus/Cravings.json';
import Dennys from '../scraped_menus/Denny\'s.json';
import Kohinoor from '../scraped_menus/Kohinoor Indian Restaurant.json';
import LaiLai from '../scraped_menus/Lai Lai Wok.json';
import Mandarin from '../scraped_menus/Mandarin Wok.json';
import Midsummer from '../scraped_menus/Midsummer Lounge.json';
import Panda from '../scraped_menus/Panda Express.json';
import Rosatis from '../scraped_menus/Rosati\'s Pizza.json';
import Shawarma from '../scraped_menus/Shawarma Joint.json';
import Signature from '../scraped_menus/Signature Grill.json';
import Subway from '../scraped_menus/Subway.json';
import authContext from '../assets/user_database/authContext.js'
import axios from '../assets/user_database/axios.js'

import BangkokReviews from '../assets/reviews/bangkok_thai_reviews.json'
import CravingsReviews from '../assets/reviews/cravings_reviews.json'
import KohinoorReviews from '../assets/reviews/kohinoor.json'
import LaiLaiWokReviews from '../assets/reviews/lai_lai_wok_reviews.json'
import MidsummerReviews from '../assets/reviews/mid_summer_reviews.json'
import ShawarmaReviews from '../assets/reviews/shawarma_join.json'
import SignatureGrillReviews from '../assets/reviews/sig_grill.json'

const URL = '/api/users/'


class DetailPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            state: "",
            type: "",
            menu: [{
                category: "",
                items: [{
                    description: "",
                    ingredients: "",
                    price: "",
                    title: ""
                }]
            }],
            menu_present: false,
            showReviews: false,
            showMenu: true,
            loading : false,
            loaded : false,
            favorited: false,
            favorites: []
        };
        this.handleShowMenu = this.handleShowMenu.bind(this);
        this.handleShowReviews = this.handleShowReviews.bind(this);
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    handleShowReviews (){
        this.setState({showReviews: true});
        this.setState({showMenu: false});
    }

    handleShowMenu (){
        this.setState({showReviews: false});
        this.setState({showMenu: true});

    }
    
    async loadFavAsync(_id){
        if(_id !== ''){
            try {
            this.setState({loading : true})
            const response = await axios.get(URL+_id, {'replace' : true})
            console.log(response)
            let favorites = response?.data?.data.favorites.sort()
            this.setState({favorites: favorites, loaded : true, loading:false, favorited:favorites.includes(this.props.params.id)})
            }catch(err){
            console.log(err)
            this.setState({loading:false})
            }
            }
    }
    loadFavorites(_id){
        if(!this.state.loading && !this.state.loaded){
            this.loadFavAsync(_id)
        }
        return <></>
    }
    async unfavorite(elem, username, password, _id){
        const index = this.state.favorites.indexOf(elem)
        let favorites = this.state.favorites
        favorites.splice(index, 1)
        this.setState({favorites : favorites})
        try{
        const response = await axios.put(URL+_id, {"username":username, "password":password, "favorites":this.state.favorites})
        console.log(response)
        }catch(err){
        console.log(err)
        this.setState({loading:false})
        }
    }
    async favorite(elem, username, password, _id){
        let favorites = this.state.favorites
        favorites.push(elem)
        this.setState({favorites : favorites})
        try{
        const response = await axios.put(URL+_id, {"username":username, "password":password, "favorites":this.state.favorites})
        console.log(response)
        }catch(err){
        console.log(err)
        this.setState({loading:false})
        }
    }
    handleFavorite (username, password, _id){
        const favoriteState= this.state.favorited;
        const url_name = this.props.params.id;
        if(favoriteState){
            this.unfavorite(url_name, username, password, _id);
            this.setState({favorited: false});
        } else {
            this.favorite(url_name, username, password, _id);
            this.setState({favorited: true});
        }
    }

    componentDidMount(){
        const url_name = this.props.params.id;
        this.setState({name: url_name});
        if(url_name === "Ambar India"){
            this.setState({name: Ambar.name, type: Ambar.type, state: Ambar.state, menu: Ambar.menu, menu_present: true});
        }
        if(url_name === "Bangkok Thai"){
            this.setState({name: Bangkok.name, type: Bangkok.type, state: Bangkok.state, menu: Bangkok.menu, reviews: BangkokReviews.reviews, menu_present: true});
        }
        if(url_name === "Basil Thai"){
            this.setState({name: Basil.name, type: Basil.type, state: Basil.state, menu: Basil.menu, menu_present: true});
        }
        if(url_name === "Cravings"){
            this.setState({name: Cravings.name, type: Cravings.type, state: Cravings.state, menu: Cravings.menu, reviews: CravingsReviews.reviews, menu_present: true});
        }
        if(url_name === "Denny's"){
            this.setState({name: Dennys.name, type: Dennys.type, state: Dennys.state, menu: Dennys.menu, menu_present: true});
        }
        if(url_name === "Kohinoor Indian Restaurant and Lounge"){
            this.setState({name: Kohinoor.name, type: Kohinoor.type, state: Kohinoor.state, menu: Kohinoor.menu, reviews: KohinoorReviews.reviews, menu_present: true});
        }
        if(url_name === "Lai Lai Wok"){
            this.setState({name: LaiLai.name, type: LaiLai.type, state: LaiLai.state, menu: LaiLai.menu, reviews: LaiLaiWokReviews.reviews, menu_present: true});
        }
        if(url_name === "Mandarin Wok"){
            this.setState({name: Mandarin.name, type: Mandarin.type, state: Mandarin.state, menu: Mandarin.menu, menu_present: true});
        }
        if(url_name === "Mid-Summer Lounge"){
            this.setState({name: Midsummer.name, type: Midsummer.type, state: Midsummer.state, menu: Midsummer.menu, reviews: MidsummerReviews.reviews, menu_present: true});
        }
        if(url_name === "Panda Express"){
            this.setState({name: Panda.name, type: Panda.type, state: Panda.state, menu: Panda.menu, menu_present: true});
        }
        if(url_name === "Rosati's Pizza"){
            this.setState({name: Rosatis.name, type: Rosatis.type, state: Rosatis.state, menu: Rosatis.menu, menu_present: true});
        }
        if(url_name === "Shawarma Joint"){
            this.setState({name: Shawarma.name, type: Shawarma.type, state: Shawarma.state, menu: Shawarma.menu, reviews: ShawarmaReviews.reviews, menu_present: true});
        }
        if(url_name === "Signature Grill"){
            this.setState({name: Signature.name, type: Signature.type, state: Signature.state, menu: Signature.menu, reviews: SignatureGrillReviews.reviews, menu_present: true});
        }
        if(url_name === "Subway"){
            this.setState({name: Subway.name, type: Subway.type, state: Subway.state, menu: Subway.menu, menu_present: true});
        }
    }

    render(){
        const { name, menu, reviews, showMenu, showReviews, favorited, menu_present} = this.state;
        return (
            <main>
            <authContext.Consumer>{({username, password, _id, setUsername, setPassword, setID})=>(
                <>
                <AppHeader />
                {this.loadFavorites(_id)}
                <div class="detail-view-content">
                    <div class="content-box">
                        <div class="box-inner">
                            <div class="restaurant-header">
                                <h1 class="rest_title">{name}</h1>
                                {favorited ? 
                                <button onClick={()=>{this.handleFavorite(username,password,_id)}} className="color_button favorite">Unfavorite</button> :
                                <button onClick={()=>{this.handleFavorite(username,password,_id)}} className="color_button unfavorite">Favorite this restaurant!</button>
                                }

                            </div>
                            <div class="inner-content-box">
                                <div class="inner-content-header">
                                    <div class="nav-option">
                                        <button onClick={this.handleShowMenu} class="detail-reviews">Menu</button>
                                        <button onClick={this.handleShowReviews} class="detail-reviews">Reviews</button>                                       
                                    </div>
                                </div>
                                {showMenu &&
                                <div class="inner-contents">
                                    {!menu_present &&
                                            <div class="no_menu">
                                             <h1>Oops! Sorry, there is no menu for this restaurant yet.</h1>
                                             </div>
                                    }
                                    {menu_present && menu.map((foodCategory) => 
                                            <div key={foodCategory.category}> 
                                                <div class="category-title">
                                                    <h3>{foodCategory.category}</h3>
                                                </div>
                                                {foodCategory.items.map((dish) => 
                                                    <div key={dish.title}>
                                                        <div class="menu-slider">
                                                            <h4>{dish.title}</h4> 
                                                            <div class = "price-format">
                                                                <h4>${dish.price}</h4>
                                                            </div>
                                                        </div>
                                                        <div class="dish-description">
                                                            <h5>{dish.description}</h5>
                                                        </div>
                                                    </div>
                                                )} 
                                            </div>
                                    )}

                                    </div>
                            
                                }

                                {showReviews && 
                                    <div class="inner-contents">
                                        
                                        {reviews && reviews.map((eachReview) => 
                                            <div key={eachReview.id} class="each_review"> 
                                                <div class="category-title">
                                                    <h3>{eachReview.user.name}</h3>
                                                </div>
                                                <div class="category-rating">
                                                    <h4>Rating: {eachReview.rating}/5</h4>
                                                </div>
                                                <div class="category-text">
                                                    <h4>{eachReview.text}</h4>
                                                </div>
                                            </div>
                                        )}

                                        {!reviews && 
                                            <div>
                                                <h1>Oops! Sorry, there are no reviews for this restaurant yet.</h1>
                                            </div>
                                        }


                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )}</authContext.Consumer>
            </main>
        );
    }
}

    
export default withRouter(DetailPage);
// export default DetailPage;
