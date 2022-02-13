import { createContext,useReducer } from 'react';
import React from 'react';
import { useEffect } from 'react';
import { ProjectAuth} from '../../fireBase/Config';


export const  AuthContxt =createContext()
 export const authReducer=(state,action)=>{
     switch(action.type){
         case 'LOGIN':
             return{...state, user :action.payload}

             case 'LOGOUT':
                 return{...state,user:null}
                 case "Auth_IS_Ready":
                     return{...state,user:action.payload,authISReady:true}
         default:
             return state
     }

}
export const AuthContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(authReducer,{
        user:null,
        authISReady:false
    })
    useEffect(()=>{
        const unSub=ProjectAuth.onAuthStateChanged((user)=>{
            dispatch({type:"Auth_IS_Ready",payload:user})

            unSub()
        })
    },[])
    console.log('AuthContextProvider',state)
 return(<AuthContxt.Provider value={{...state,dispatch}}>
     {children}
 </AuthContxt.Provider>)
}

