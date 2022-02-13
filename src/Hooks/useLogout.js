import { ProjectAuth } from "../fireBase/Config";
import useAuthanticatContxt from '../Hooks/useAuthanticatContxt'
import { useEffect, useState } from "react";

const useLogout = () => {
    const[IsCencalled,setIsCencalled]=useState(false)
    const [IsLoading,setIsLoading]=useState (false)
    const[error,setError]=useState (null)
    const {dispatch}=useAuthanticatContxt()
    const logout=async()=>{
        setError(null)
        setIsLoading(true)
        try{

            await ProjectAuth.signOut()

            //Dispatch
            dispatch({type:"LOGOUT"})

            //UpdateState
            if(!IsCencalled){

                setIsLoading(false)
                setError(null)
            }

        }catch(erorr)
        { if(!IsCencalled){

            console.log(erorr.message)
            setError(error.message)
            setIsLoading(false)
        }
        }
    

    }
    useEffect(()=>{
        return ()=>{
            setIsCencalled(true)
        }

    })

  return {logout,IsLoading,error};
};

export default useLogout;
