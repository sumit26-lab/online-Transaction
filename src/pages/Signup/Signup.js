import styles from '../Signup/Signup.module.css';
import {useState} from 'react';
import { useSignup } from '../../Hooks/useSignup'

const Signup = () => {
    const[displayName,setDisplayName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const{IsLoading,error,signup}=useSignup()
     const Hanlersubmit=(e)=>{
        e.preventDefault()
        signup(email,password,displayName)

     }
  return <form onSubmit={Hanlersubmit} className={styles['signup-from']}>
      <h2>Signup</h2>
      <label>
          <span>DisplayName</span>
          <input
          type="text"
          onChange={(e)=>setDisplayName(e.target.value)}
          value={displayName}
          />
      </label>
      <label>
          <span>Eamil</span>
          <input
          type="email"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          />
      </label>
      <label >
          <span>Password</span>
          <input
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          />
      </label>
      {!IsLoading &&<button className='btn'>Signup</button>}
      {IsLoading && <button className='btn' disabled>Loading</button>}
      { error &&<p>{error}</p>}
  </form>;
};

export default Signup;
