import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signInUser } from '../services/users';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signInUser(email, password);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>hello</h1>
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
