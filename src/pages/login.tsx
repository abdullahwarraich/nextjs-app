import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import LoginForm from '@/components/LoginForm';

const LoginPage: React.FC = () => {
  const router = useRouter();

  const handleLogin = async (username: string, password: string) => {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();

      router.push(`/user/${data.user._id}`);
    } else {
      // Handle authentication error
      window.alert('Authentication failed');
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm onLogin={handleLogin} />
    </>
  );
};

export default LoginPage;