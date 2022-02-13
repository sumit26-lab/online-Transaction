import React from 'react';
//style
import styles from './Home.module.css'
import { useFireStore } from '../../Hooks/useFireStore';
const TransactionList = ({ transaction }) => {
  const { DeletedDoc}=useFireStore('Transation')
  const result=[]
  transaction.forEach(element => {
    result.push(element)
    
  });
  console.log("resu",result)

  return (
  <ul className={styles.transactions}>
    {transaction.map((transaction) =>

      <li key={transaction.id}>
        <p className={styles.name}>{transaction.Name}</p>
        <p></p>
        <p className={styles.amount}>{transaction.Amount}</p>
        <button onClick={()=>DeletedDoc(transaction.id)}>x</button>
      </li>

    )}

  </ul>);
};

export default TransactionList;
