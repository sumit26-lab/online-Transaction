import { useReducer, useEffect, useState } from "react";
import { projectFirestore ,timestap} from "../fireBase/Config";
const initiallState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}
//initialzeThe Reducer Function
const fireStoreReducer = (state, action) => {
    switch (action.type) {
        case "IS_PENDING":
            return { document:null, isPending: true ,error:null,succes:false}

        case "ADDED_DOCUMENT":
            return{
             error:null,isPending:false,success:true,document:action.payload
            }
            
        case "ERROR":
            return{
                isPending:false,document:null, succes:false,error:action.payload
            }
        case "DELETED":
            return{
                isPending:false,error:null,document:null,succes:true
            }




        default:
            return state
    }

}

//UseReducer
export const useFireStore = (collection) => {

    const [response, dispatch] = useReducer(fireStoreReducer, initiallState)
    const [isCancelled, setCancell] = useState(false)

    //collection on ref StoreData
    const ref = projectFirestore.collection(collection)
    //its Run Only Dispatch not A  Cancelled
    const dispatchIfNotCancelled = (Action) => {
        if (!isCancelled) {
            dispatch(Action)
        }
    }
    //Add Data on CollectionStoreAge
    const addDocument = async (doc) => {
        dispatch({ type: "IS_PENDING" })
        try {
            const date= new Date()
            const craetArt =timestap.fromDate(new Date(date))
            await ref.add({...doc,craetArt})
            dispatchIfNotCancelled({ type: "ADDED_DOCUMENT", payload: addDocument })


        }
        catch (err) {
            dispatch({type:"ERROR",payload:err.message})

        }
    }
    //DeletedDoc
    const DeletedDoc = async (id) => {
        dispatch({type:"IS_PENDING"})
        try{
            await ref.doc(id).delete();
            dispatchIfNotCancelled({type:"DELETED"})

        }
        catch(err){
            dispatchIfNotCancelled({type:"ERROR",payload:"could not delete This Time"})

        }

    }
    useEffect(() => {
        return () => setCancell(true)
    }, [])
    //ref.add()
    return { addDocument, DeletedDoc, response }
}

