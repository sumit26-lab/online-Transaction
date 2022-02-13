import { useContext } from "react";
import {AuthContxt} from '../Componed/context/AuthContext'
const useAuthanticatContxt = () => {
    const context = useContext(AuthContxt)
    if(!context){
        throw new Error('useAuthication Must be inside AuthContextProvider')
    }
  return context
};

export default useAuthanticatContxt;
