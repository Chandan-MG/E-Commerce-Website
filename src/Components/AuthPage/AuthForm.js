import { useState, useRef, useContext } from 'react';

import './AuthForm.css';
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.js';
import AuthContext from './Auth-Context';

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const emailInputRef =  useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler =(event)=>{
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    let url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCMiBeqYWzNFH0oUHL8f_fV1zZ8cXp7QDI';
    fetch(url,
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response =>{
        setIsLoading(false);
        if(response.ok){
          return response.json();
        }
        else{
          return response.json().then((data)=>{
            let errorMessage = 'Authentication failed...';
            
            throw new Error(errorMessage);
          })
        }
      }
    ).then(data=>{
      authCtx.login(data.idToken);
      authCtx.email(enteredEmail);
      history.push('/store');
    //   console.log(data.idToken);
    }).catch(err=>{
      alert(err.message);
    })
  }


  return (
    <section className='auth'>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className='control'>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className='actions'>
          {!isLoading && <button type='submit'>{isLogin? 'Login' : 'Create Account'}</button>}
          {isLoading && <p style={{color: 'white'}}>Sending request....</p>}
          <button
            type='button'
            className='toggle'
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
