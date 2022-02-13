import style from '../Home/Home.module.css'
 import React from 'react';
import TransactionForm from './TransactionForm';
import useAuthanticatContxt from '../../Hooks/useAuthanticatContxt'
import { useColllection } from '../../Hooks/useColllection';
import TransactionList from './TransactionList ';
 
 const Home = () => {
   const{user}=useAuthanticatContxt()
   const{documents,error}=useColllection('Transation',
   ["uid","==",user.uid],
   ["craetArt","desc"])
   return <div className={style.container}>
     <div className={style.content}>
       {error && <p>{error}</p>}
       {documents && <TransactionList transaction={documents}/>}
       transaction List 
     </div>
     <div className={style.sidebar}>
       <TransactionForm uid={user.uid}/>

     </div>
       
   </div>;
 };
 
 export default Home;
 