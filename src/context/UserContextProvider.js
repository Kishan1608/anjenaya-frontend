import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import domain from '../util/domain.js';

const UserContext = createContext();

const UserContextProvider = (props) => {
    const[user, setUser] = useState(undefined);
    
    async function getUser(){
        const userRes = await axios.get(`${domain}/auth/loggedIn`);
        setUser(userRes.data);
    }

    useEffect(() => {
        getUser();
    },[]);
  return (
    <UserContext.Provider value={{user,getUser}}>{props.children}</UserContext.Provider>
  )
}

export default UserContext;
export {UserContextProvider};