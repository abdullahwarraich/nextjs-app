import React from 'react';

export interface UserDetailsProps {
  user: {
    _id: string;
    username: string;
    email: string;
    phone: string;
    address: string;
  };
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-semibold text-gray-600">ID:</p>
        <p className="text-lg font-medium text-gray-900">{user._id}</p>
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-600">Username:</p>
        <p className="text-lg font-medium text-gray-900">{user.username}</p>
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-600">Email:</p>
        <p className="text-lg font-medium text-gray-900">{user.email}</p>
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-600">Phone:</p>
        <p className="text-lg font-medium text-gray-900">{user.phone}</p>
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-600">Address:</p>
        <p className="text-lg font-medium text-gray-900">{user.address}</p>
      </div>
    </div>
  );
};

export default UserDetails;
