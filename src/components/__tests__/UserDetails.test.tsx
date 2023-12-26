import React from 'react';
import { render, screen } from '@testing-library/react';
import UserDetails from '../UserDetails';

const sampleUser = {
    _id: '123',
    username: 'testuser',
    email: 'testuser@example.com',
    phone: '123-456-7890',
    address: '123 Main St',
};

describe('UserDetails', () => {
    it('renders user details correctly', () => {
        render(<UserDetails user={sampleUser} />);

        // Check if the user details are rendered
        expect(screen.getByText(/ID:/)).toBeInTheDocument();
        expect(screen.getByText(/Username:/)).toBeInTheDocument();
        expect(screen.getByText(/Email:/)).toBeInTheDocument();
        expect(screen.getByText(/Phone:/)).toBeInTheDocument();
        expect(screen.getByText(/Address:/)).toBeInTheDocument();

        // Check if the user values are rendered correctly
        expect(screen.getByText(sampleUser._id)).toBeInTheDocument();
        expect(screen.getByText(sampleUser.username)).toBeInTheDocument();
        expect(screen.getByText(sampleUser.email)).toBeInTheDocument();
        expect(screen.getByText(sampleUser.phone)).toBeInTheDocument();
        expect(screen.getByText(sampleUser.address)).toBeInTheDocument();
    });
});
