// import {useState, useEffect} from 'react'
// import axios from 'axios'

// const apiKey = 'E2hfOuq4JMlDAZwWCNaejzN23sf713oXrRVFL_EMxOVz9T6izGssTe1DA57mNfBdYtwtNTqYdtFfoXPwY447rPF3XBXkJQ581oSSXdS7S1clG64nX6uFilw4uk-WY3Yx';
// const baseURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/";

// function fetchByID(id) {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${apiKey}`
//     },

//     params: {
//       term: "restaurants",
//       location: `${id}`,
//     },
//   }

//   axios.get(`${baseURL}${id}/reviews`, config).then(res => {
//     return res.data
//   })
// }

// function useYelpAPI() {
//   const [restaurants, setRestaurants] = useState({
//     'champaign': [],
//     'urbana': [],
//   })

//   function fetchByLocation(loc) {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${apiKey}`
//       },

//       params: {
//         term: "restaurants",
//         location: `${loc}`,
//       },
//     }

//     return axios.get(`${baseURL}search`, config)
//   }

//   useEffect(() => {
//       function fetchAll() {
//         let promises = [
//           fetchByLocation("champaign"),
//           fetchByLocation("urbana"),
//         ]
  
//         Promise.all(promises).then(res => {
//           console.log(res)
//           let data = [] 
//           for (let i = 0; i < res.length; i++) {
//             data.push(res[i].data.businesses)
//           }
//           setRestaurants(data)
//         });
//       }
//       fetchAll();
//     }, [])
  
//     return restaurants;
// }

// export {useYelpAPI, fetchByID};


// // export default function useYelpAPI() {
// //   const [restaurants, setRestaurants] = useState({
// //     'champaign': [],
// //     'urbana': [],
// //   })

// //   const config = {
// //     headers: {
// //       Authorization: `Bearer ${apiKey}`,
// //       "accept": "application/json",
// //       "x-requested-with": "xmlhttprequest",
// //       "Access-Control-Allow-Origin": "*",
// //     },
// //     params: {
// //       term: "restaurants",
// //       location: "urbana",
// //     },
// //   };
  
// //   axios
// //   .get(baseURL, config)
// //   .then((response) => {
// //     console.log(response.data); //These are the results sent back from the API!
// //   });

// //   // function fetchByLocation(loc) {
// //   //   const config = {
// //   //     headers: {
// //   //       Authorization: `Bearer ${apiKey}`
// //   //     },

// //   //     params: {
// //   //       term: "restaurants",
// //   //       location: "champaign",
// //   //     },
// //   //   }
// //   //   console.log("working")

// //   //   axios.get("https://api.yelp.com/v2/businesses/search", config)
// //   //   .then(res => {
// //   //     res.setHeader("Access-Control-Allow-Origin", "*");
// //   //     console.log("TEST")
// //   //     console.log(res.data)
// //   //   })
// //   //   // console.log()
// //   //   // return axios.get(`${baseURL}businesses/search`, config)
// //   // }

// //   // fetchByLocation("champaign")

// //   // useEffect(() => {
// //   //   function fetchAll() {
// //   //     let promises = [
// //   //       fetchByLocation("champaign"),
// //   //       fetchByLocation("urbana"),
// //   //     ]

// //   //     console.log("ok")
// //   //     console.log(promises)

// //   //     Promise.all(promises).then(res => {
// //   //       console.log("hi")
// //   //       let data = [] 
// //   //       for (let i = 0; i < res.length; i++) {
// //   //         data.push(res.data)
// //   //       }
// //   //       setRestaurants(data)
// //   //     });
// //   //   }
// //   //   fetchAll();
// //   // }, [])

// //   return restaurants;
// // }

// // // get general data w/ parameters -> businesses/search
// // // get reviews -> businesses/{id}/reviews




// import axios from 'axios'
// import * as fs from 'fs';

// const apiKey = '7VY600ypNJuTNCzvU3KtQbSr3DnLEGSoJHH_j5MrOroZjxoYDjlbr8MfmBcW7B857qK_Ep08gDKFfhYictGjwq2zTFFqxWwoxCXD6wAPXlgV_97tZKmpaCFFv8eXY3Yx';

// const config = {
//   headers: {
//     Authorization: `Bearer ${apiKey}`
//   },
//   params: {
//     term: "restaurants",
//     sort_by: "rating",
//     limit: 50,
//     location: "urbana",
//   },
// };

// // get general data w/ parameters -> businesses/search
// // get reviews -> businesses/{id}/reviews

// axios
// .get("https://api.yelp.com/v3/businesses/search", config)
// .then((response) => {
//   //console.log(response.data); //These are the results sent back from the API!
//   fs.writeFile('urbana_new.json', JSON.stringify(response.data), function (err) {
//     console.log(err);
//   });
// });



