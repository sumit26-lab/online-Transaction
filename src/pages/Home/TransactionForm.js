import { useEffect, useState } from 'react';
import { useFireStore } from '../../Hooks/useFireStore';

const TransactionForm = ({uid}) => {
    const [Name, setName] = useState('')
    const [Amount, setAmout] = useState('')
    const{addDocument,response }=useFireStore('Transation')

    const OnsubmitHandler=(e)=>{
        
        e.preventDefault()
        addDocument({
            uid,
            Name,
            Amount,
           
        })
        

    }
  
    useEffect(()=>{
        if(response.success){
            setName('')
            setAmout('')
        }

    },[response.success])
    return ( 
    <>

        <h3>Add To Transaction</h3>
        <form onSubmit={OnsubmitHandler}>
            <label>
                <span>Transaction Name:</span>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={Name}
                    required

                />
            </label>
            <label>
                <span>Transaction Amout:</span>
                <input
                    type="number"
                    onChange={(e) => setAmout(e.target.value)}
                    value={Amount}
                    required

                />
            </label>
                <button>Add-Transaction</button>
        </form>

    </>
    )

};

export default TransactionForm;
