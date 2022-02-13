import {useEffect, useState} from 'react';
import  {ProjectAuth} from '../fireBase/Config'
 import useAuthanticatContxt from '../Hooks/useAuthanticatContxt'

export const useSignup = () => {
    const[IsCencalled,setIsCencalled]=useState(false)
    const [IsLoading,setIsLoading]=useState (false)
    const[error,setError]=useState (null)
    const {dispatch}=useAuthanticatContxt()
    
    const signup= async (email,password,displayName) =>{
        setError(null)
        setIsLoading(true)
        try{
            const res = await ProjectAuth.createUserWithEmailAndPassword(email,password)
            console.log(res.user)
            if(!res){
                throw new Error('Could Not Completed SignUp')
            }
            //ADD DISPLAY NAME FOR USER----->
            await  res.user.updateProfile({displayName})

             //ADD To Dispatch in CustomeHook
             dispatch({ type:"LOGIN", payload:res.user})
             if(!IsCencalled){

                 setIsLoading(false)
                 setError(null)
             }
        }
        catch(err){
            if(!IsCencalled){
            console.log(err)
            setError(err.message)
            setIsLoading(false)
            }
        }

    }
    useEffect(()=>{
        return(()=>{
            setIsCencalled(true)
        })
    })
  return {IsLoading,error,signup}
};

export default useSignup;
