import {useEffect,useRef,useState} from 'react';
import { projectFirestore } from '../fireBase/Config';

 export const useColllection = (collection,_query,_orderBy) => {
     const[documents,setDocuments]=useState(null);
     const[error,setError]=useState(null)
     const query =useRef(_query).current;
     const orderBy=useRef(_orderBy).current;


     useEffect(()=>{
         let ref=projectFirestore.collection(collection)
         if(query){
             ref=ref.where(...query)
         }
         if(orderBy){
             ref=ref.orderBy(...orderBy)
         }
         const unSubscrib=ref.onSnapshot((onSnapshot)=>{
             let result=[]
             onSnapshot.docs.forEach(doc=>{
                 result.push({...doc.data(),id:doc.id})
             })
             //update The state
             setDocuments(result)
             setError(null)

         },(error)=>{
             console.log(error)
             setError('Data could not Featch ')
         })
         //cleanUp Function and unmount
         return ()=> unSubscrib()
     },[collection,query,orderBy])
  return {documents,error}
};

