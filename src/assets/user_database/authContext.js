import {createContext} from 'react'

const authContext = createContext({
    username : "",
    password : "",
    _id : "",
    setUsername: ()=>{},
    setPassword: ()=>{},
    setID: ()=>{}
  })
export default authContext