import React from 'react'; 
import './RestaurantListView.css';
import AppHeader from '../assets/AppHeader.js'

//ok

export default function RestaurantListView() {
  return (
    <main>
    <AppHeader/>
    <div class="RestaurantListView">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />      
            <div class="Container">
              <div class="address_search_bar">
                <img src="location_icon.jpg" alt="Location"></img>
                  <form action="/action_page.php" id="search_field">
                    <input type="text" placeholder="Input an address here..." name="search" />
                    <button type="submit"><i class="fa fa-search"></i></button>
                  </form>
              </div>
              
                <div class="sorting_options">
                
                 Sort By:
                  <input type="radio" id="distance_radio_btn" name="distance" value="Distance" />
                  <label for="distance_radio_btn">Distance</label>
                  <input type="radio" id="rating_radio_btn" name="rating" value="Rating" />
                  <label for="rating_radio_btn">Rating</label>
                 
                  <div class="cuisine_drop_down_menu">
                    <label for="cuisine">Cuisine: </label>
                    <select name="cuisine" id="cuisine">
                      <option value="All" selected>All</option>
                      <option value="FastFood">Fast Food</option>
                      <option value="Pizza">Pizza</option>
                      <option value="Chinese">Chinese</option>
                      <option value="Indian">Indian</option>
                      <option value="Italian">Italian</option>
                    </select>
                  </div>
                </div>
              
                  <div class="RestaurantItem">
                     <div class="logo">
                      <img src="restaurant1.jpg" alt="Restaurant 1 logo"></img>
                    </div>
                    
                    <div class ="non_logo">
                    <div class="RestaurantName">
                      Panda Express
                    </div>
                    
                    <div class="RestaurantAddress">
                      <h4> 627 S Wright St, Champaign, IL 61820 </h4>
                    </div>
                    
                    <div class="RestaurantCuisine">
                      Chinese, Fast Food
                    </div>
                    
                    <div class="icons">
                      
                      <div class="icon_holder">
                        <img src="walking_man.jpg" alt="w_icon"></img>
                        1 min away
                      </div>
    
                      <div class="icon_holder">
                        <img src="menu_icon.jpg" alt="m_icon"></img>
                        Menu
                      </div>
    
                      <div class="icon_holder">
                        <img src="directions_icon.jpg" alt="d_icon"></img>
                        Directions
                      </div>
                      
                    </div>
                   </div>
                  </div>
            </div> 
          </div>
    </main>
    );

}