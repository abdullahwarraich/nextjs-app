import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import FormInput from '../FormInput';

test('FormInput renders correctly', () => {
  const label = 'Username';
  const type = 'text';
  const value = 'test';
  const onChange = jest.fn();

  render(<FormInput label={label} type={type} value={value} onChange={onChange} />);

  // Check if the label is rendered
  expect(screen.getByText(label)).toBeInTheDocument();

  // Check if the input element is rendered with the correct attributes
  const inputElement = screen.getByRole('textbox', { name: label });
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute('type', type);
  expect(inputElement).toHaveAttribute('id', label.toLowerCase());
  expect(inputElement).toHaveAttribute('value', value);

  // Simulate a change event and check if the onChange callback is called
  fireEvent.change(inputElement, { target: { value: 'new value' } });
  expect(onChange).toHaveBeenCalledWith('new value');
});
