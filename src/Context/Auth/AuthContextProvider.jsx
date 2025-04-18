import React, { useEffect, useState } from 'react'
import { CreateAuthContext } from './CreateAuthContext'


const AuthContextProvider = ({children}) => {

  const [user , setuser] = useState(null);

  const isUser = localStorage.getItem("user");


  const authUser = () =>{
    try {
      if(isUser){
        setuser(JSON.parse(isUser));
      }else{
        setuser(null);
      }
    } catch (error) {
      setuser(null);
    }
  };


  useEffect( () =>{
    authUser();
  } ,[]);

  const logOut = () =>{
    localStorage.removeItem("user");
    setuser(null);
  }

  return (
    <CreateAuthContext.Provider value={{user , setuser , logOut}}>
        {children}
    </CreateAuthContext.Provider>
  )
}

export default AuthContextProvider