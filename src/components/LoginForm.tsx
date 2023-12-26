import React, { useState } from 'react';
import FormInput from './FormInput';

interface LoginFormProps {
  onLogin: (username: string, password: string) => Promise<void>;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await onLogin(username, password);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 max-w-md mx-auto shadow-md rounded-md">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <FormInput label="Username" type="text" value={username} onChange={setUsername} />
          <FormInput label="Password" type="password" value={password} onChange={setPassword} />
          <div>
            <button
              data-testid="login-button-id"
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>

      </div>
    </div>

  );
};

export default LoginForm;