"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _axios = _interopRequireDefault(require("axios"));

var fs = _interopRequireWildcard(require("fs"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
var apiKey = '7VY600ypNJuTNCzvU3KtQbSr3DnLEGSoJHH_j5MrOroZjxoYDjlbr8MfmBcW7B857qK_Ep08gDKFfhYictGjwq2zTFFqxWwoxCXD6wAPXlgV_97tZKmpaCFFv8eXY3Yx';
var config = {
  headers: {
    Authorization: "Bearer ".concat(apiKey)
  },
  params: {
    term: "rosati",
    sort_by: "rating",
    limit: 50,
    location: "urbana"
  }
}; // get general data w/ parameters -> businesses/search
// get reviews -> businesses/{id}/reviews

_axios["default"].get("https://api.yelp.com/v3/businesses/search", config).then(function (response) {
  //console.log(response.data); //These are the results sent back from the API!
  fs.writeFile('rosati.json', JSON.stringify(response.data), function (err) {
    console.log(err);
  });
});