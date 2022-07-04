import React, { useState } from 'react';
import { useEffect } from 'react';
// import { Input } from '../../../components/Input/Index';
import { Button } from '../../../components/Button/Index';

export const FormLogin = () => {
  const [data, setData] = useState({
    email: {
      value: '',
      isError: false,
      msg: '',
    },
    password: {
      value: '',
      isError: false,
      msg: '',
    },
  });

  const [checkPassword, setCheckPassword] = useState(false)
  const [checkEmail, setCheckEmail] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const changeValue = (field) => (value) => {
    setData({
      ...data,
      [field]: {
        ...data[field],
        value: value,
      },
    });
  };
  
  useEffect(()=>{
    const pInput = document.getElementById('password-input');
    const eInput = document.getElementById('email-input');
    const autoCheck = () => { 
        setCheckEmail(eInput.value.length < 4 || eInput.value.length > 60); 
        setCheckPassword(pInput.value.length < 4 || pInput.value.length > 60) 
      };

      eInput.addEventListener('input', autoCheck);
      pInput.addEventListener('input', autoCheck);

      return() =>{
        eInput.removeEventListener('input', autoCheck);
        pInput.removeEventListener('input', autoCheck);
      }
  }, [])
  
  return (
    <div id='login-container'>
        <form className='login-form'>
        <h2>Sign In</h2>
      <input
        id='email-input'
        name={'email'}
        placeholder={'Email...'}
        data={data.email}
        handleChange={changeValue('email')}
      />
      {checkEmail && <span className='error-password'>Please enter a valid email or phone number.</span>}
      <input
        id='password-input'
        name={'password'}
        placeholder={'********'}
        type={'password'}
        data={data.password}
        handleChange={changeValue('password')}
        
      />
      {checkPassword && <span className='error-password'>Your password must contain between 4 and 60 characters.</span>}
      <Button text='Submit' handleClick={handleSubmit}/>
    </form>
    </div>
  );
};