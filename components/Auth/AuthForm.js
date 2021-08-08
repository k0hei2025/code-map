import { useEffect, useRef, useState } from 'react';

import classes from './AuthForm.module.css';
import {authAction} from '../../store/authentication'
import {useDispatch , useSelector} from 'react-redux'

const AuthForm = () => {
 // const [isLogin, setIsLogin] = useState(true);
  const apiKey = 'AIzaSyDFgj3cq2lSpCOWefurgUeEGj1KHT1-Nck'


  const emailRef = useRef();
  const passwordRef  = useRef();

  const login = useSelector((state)=>state.auth.login)
  
  const dispatch = useDispatch();


  
   
  
  
   const switchAuthModeHandler = () => {
     
   dispatch(authAction.isLogin())
  console.log(login)
  };

  const submitHandler = async(event)=>{
   event.preventDefault();
   
   const emailData = emailRef.current.value;
  const passwordData = emailRef.current.value;
  if (login){
  
  }else {
  const data = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
  {
   method : 'POST',
   body: JSON.stringify({
     email : emailData,
     password : passwordData,
     returnSecureToken : true 
   }),
   headers:{
     'Content-Type': 'application/json'
   }
  })
  
  const resData = await data.json();

  console.log(resData);
   
  }
    
    
  }

  
  
  return (
    <body className={classes.body}>
    <section className={classes.auth}>
    <h3>Ready To Start Your Journey? You're in the right place </h3>
      <h1>{login ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}> 
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          <button>{login ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {login ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
    </body>
  );
};

export default AuthForm;
