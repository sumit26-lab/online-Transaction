import {useState,useEffect} from 'react';
import { ProjectAuth, projectFirestore } from '../fireBase/Config';
import useAuthanticatContxt from './useAuthanticatContxt';

const useLogin = () => {
    const[IsCencalled,setIsCencalled]=useState(false)
    const [IsLoading,setIsLoading]=useState (false)
    const[error,setError]=useState (null)
    const{dispatch}=useAuthanticatContxt()
    const login =async(email,password)=>{
        setError(null)
        setIsLoading(true)
         //login the user
          try
          {
            const res=  await ProjectAuth.signInWithEmailAndPassword(email,password)
              //Dispatch The Login User
              dispatch({ type:"LOGIN",payload:res.user})
              //update The State
              if(!IsCencalled){
                  setIsLoading(false)
                  setError(null)
              }
          }
          catch(err){
            if(!IsCencalled){
                console.log(err.message)
                setIsLoading(false)
                setError(err.message)
            }

          }

    }
    //cleanUp Function
    useEffect(()=>{
        return ()=>setIsCencalled(true)
    },[])

    
  return {login,error,IsLoading}
};

export default useLogin;
