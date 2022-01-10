import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signUpUser } from '../services/users';

export default function SignUp() {
  [email, setEmail] = useState('');
  [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await signUpUser(email, password);
    console.log(resp);
  };
  return (
    <div>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
