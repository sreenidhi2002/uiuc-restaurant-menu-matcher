// import React from 'react';
// import axios from 'axios'
// import {useParams} from 'react-router-dom';
// import {useState} from 'react';
// import { Link } from "react-router-dom"
// import './DetailViewReviews.css';


// // /* eslint-disable */
// // import React from 'react';
// // import axios from 'axios'
// // import {useParams} from 'react-router-dom';
// // import {useState, useEffect} from 'react';
// // import { Link } from "react-router-dom"
// // import './DetailViewReviews.css';

// import { useYelpAPI, fetchByID} from './yelp_reviews.js';

// const apiKey = 'E2hfOuq4JMlDAZwWCNaejzN23sf713oXrRVFL_EMxOVz9T6izGssTe1DA57mNfBdYtwtNTqYdtFfoXPwY447rPF3XBXkJQ581oSSXdS7S1clG64nX6uFilw4uk-WY3Yx';
// const baseURL = "https://fathomless-dawn-60952.herokuapp.com/https://api.yelp.com/v3/businesses/";



// // export default function useYelpAPIReviews() {
// //     const [reviews, setReviews] = useState({
// //       'reviews': []
// //     })

// //     console.log("WORKING")
// //     const test = useYelpAPI();
// //     console.log(test)

// //     var business_id = "KsgPDVYE2m_7e2729e8d0A"

// //     const test_reviews = useYelpAPI();
// //     console.log(test_reviews)

// // }



    
// const config_gen = {
//   headers: {
//     Authorization: `Bearer ${apiKey}`
//   },
//   params: {
//     term: "restaurants",
//     sort_by: "rating",
//     limit: 50
//   },
// };

// const config_review = {
//   headers: {
//     Authorization: `Bearer ${apiKey}`
//   }
// };

// // get general data w/ parameters -> businesses/search
// // get reviews -> businesses/{id}/reviews

// function DetailTest() {

//   var business_id = "KsgPDVYE2m_7e2729e8d0A"

//   const [data_a, setData] = useState([]);

//   const [data_name, setName] = useState([]);
//   const [data_num_reviews, setReviewCount] = useState();
//   const [data_rating, setRating] = useState();
//   const [data_phone, setPhone] = useState();
//   const [data_dist, setDistance] = useState();
//   const [data_is_closed, setClosed] = useState();
//   const [data_img, setImage] = useState();
//   const [data_address, setLocation] = useState();
//   const [data_city, setCity] = useState();

//   const [review_a_name, setReviewaName] = useState();
//   const [review_a_rating, setReviewaRating] = useState();
//   const [review_a_comment, setReviewaComment] = useState();

//   const [review_b_name, setReviewbName] = useState();
//   const [review_b_rating, setReviewbRating] = useState();
//   const [review_b_comment, setReviewbComment] = useState();

//   const [review_c_name, setReviewcName] = useState();
//   const [review_c_rating, setReviewcRating] = useState();
//   const [review_c_comment, setReviewcComment] = useState();

//     const getRestaurantInfo = () => {
//       fetch(`https://desolate-reef-51340.herokuapp.com/https://api.yelp.com/v3/businesses/${business_id}`, config_gen)
//         .then((response) => {
//           console.log("Success");
//           setData(response.data);
//           setName(response.data.name);
//           setReviewCount(response.data.review_count);
//           setRating(response.data.rating);
//           setPhone(response.data.phone);
//           setDistance(response.data.distance);
//           setClosed(response.data.is_closed);
//           setImage(response.data.image_url);
//           setLocation(response.data.location.address1);
//           setCity(response.data.location.city);
//         })
//         .catch((e) => {
//           console.log("Error");
//         });
//     };

//     const getReviews = () => {
//         fetch(`https://desolate-reef-51340.herokuapp.com/https://api.yelp.com/v3/businesses/${business_id}`, config_gen)
//           .then((response) => {
//             setReviewaName(response.data.reviews[0].text);
//             setReviewaRating(response.data.reviews[0].rating);
//             setReviewaComment(response.data.reviews[0].user.name);
        
//             setReviewbName(response.data.reviews[1].text);
//             setReviewbRating(response.data.reviews[1].rating);
//             setReviewbComment(response.data.reviews[1].user.name);
        
//             setReviewcName(response.data.reviews[2].text);
//             setReviewcRating(response.data.reviews[2].rating);
//             setReviewcComment(response.data.reviews[2].user.name);
//           })
//           .catch((e) => {
//             console.log("Error");
//           });
//       };
    
//     React.useEffect(() => getRestaurantInfo(), []);
//     React.useEffect(() => getReviews(), []);
// // };



// //   axios
// //   .get(`https://desolate-reef-51340.herokuapp.com/https://api.yelp.com/v3/businesses/${business_id}`, config_gen)
// //   .then((response) => {
// //     //console.log(response.data); //These are the results sent back from the API!
// //     setData(response.data);
// //     setName(response.data.name);
// //     setReviewCount(response.data.review_count);
// //     setRating(response.data.rating);
// //     setPhone(response.data.phone);
// //     setDistance(response.data.distance);
// //     setClosed(response.data.is_closed);
// //     setImage(response.data.image_url);
// //     setLocation(response.data.location.address1);
// //     setCity(response.data.location.city);
// //   }).catch(err => console.log(err));

// //   axios
// //   .get(`https://desolate-reef-51340.herokuapp.com/https://api.yelp.com/v3/businesses/${business_id}/reviews`, config_review)
// //   .then((response) => {
// //     console.log(response.data); //These are the results sent back from the API!

// //     setReviewaName(response.data.reviews[0].text);
// //     setReviewaRating(response.data.reviews[0].rating);
// //     setReviewaComment(response.data.reviews[0].user.name);

// //     setReviewbName(response.data.reviews[1].text);
// //     setReviewbRating(response.data.reviews[1].rating);
// //     setReviewbComment(response.data.reviews[1].user.name);

// //     setReviewcName(response.data.reviews[2].text);
// //     setReviewcRating(response.data.reviews[2].rating);
// //     setReviewcComment(response.data.reviews[2].user.name);

// //   }).catch(err => console.log(err));

//   return (
//     <div className='appdiv'>
      
//       <h1 className='detailTitle'> {data_name} </h1>

//       <div></div>
//         <div className='card'>
        
//         <div className='detailImg'>
//             <img alt="Restaurant Logo" src = {data_img} className="rest_picture"/>
//         </div>


//         <h3> Address: {data_address}, {data_city} </h3>
//         <h3> Phone Number: {data_phone} </h3>
//         <h4> Number of Reviews: {data_num_reviews} </h4>
//         <h4> Average Rating: {data_rating} </h4>



//         <div class="mytabs">
//             <input type="radio" id="tabfree" name="mytabs" checked="checked"/>
//             <label for="tabfree">Menu</label>
//             <div class="tab">
//             <h2>Menu</h2>
//             <p></p>
//             </div>

//             <input type="radio" id="tabsilver" name="mytabs"/>
//             <label for="tabsilver">Reviews</label>
//             <div class="tab">
//             <h2>Reviews</h2>
//                 <div className='columnDetail'> 
//                     <div className='rowDetail'> 
//                         {review_a_name} 
//                         <br></br>
//                         <b>Rating:</b> {review_a_rating}
//                         <br></br>
//                         <b>Comments:</b> {review_a_comment}
//                         <br></br>
//                     </div>

//                     <div className='rowDetail'> 
//                         {review_b_name} 
//                         <br></br>
//                         <b>Rating:</b> {review_b_rating}
//                         <br></br>
//                         <b>Comments:</b> {review_b_comment}
//                         <br></br>
//                     </div>

//                     <div className='rowDetail'> 
//                         {review_c_name} 
//                         <br></br>
//                         <b>Rating:</b> {review_c_rating}
//                         <br></br>
//                         <b>Comments:</b> {review_c_comment}
//                         <br></br>
//                     </div>
//                 </div>
//             </div>

//         </div>
      
//       </div>


//     </div>
//   );

// }

// export default DetailTest;
