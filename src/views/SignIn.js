import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signInUser } from '../services/users';

export default function SignIn() {
  [email, setEmail] = useState('');
  [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await signInUser(email, password);
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
