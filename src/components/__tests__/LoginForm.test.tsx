import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import LoginForm from '../LoginForm';

describe('LoginForm', () => {
it('renders username and password fields correctly', () => {
    render(<LoginForm onLogin={jest.fn()} />);

    // Check if the username and password labels are rendered
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    // Check if the input fields are rendered
    const usernameInput = screen.getByRole('textbox', { name: /username/i });
    const passwordInput = screen.getByLabelText(/password/i);
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    // Check if the login button is rendered
    const loginButton = screen.getByTestId('login-button-id');
    expect(loginButton).toBeInTheDocument();
  });

  it('calls onLogin with correct arguments when the form is submitted', async () => {
    const mockOnLogin = jest.fn();
    render(<LoginForm onLogin={mockOnLogin} />);

    // Fill in the username and password fields
    const usernameInput = screen.getByRole('textbox', { name: /username/i });
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    // Submit the form
    const loginButton = screen.getByTestId('login-button-id');
    fireEvent.click(loginButton);

    // Check if onLogin is called with the correct arguments
    expect(mockOnLogin).toHaveBeenCalledWith('testuser', 'testpassword');
  });

})