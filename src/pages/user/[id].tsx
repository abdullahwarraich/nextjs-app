import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head'
import UserDetails, { UserDetailsProps } from '../../components/UserDetails';


const UserDetailPage: React.FC<UserDetailsProps> = ({ user }) => (
  <>
    <Head>
      <title>User Details</title>
    </Head>
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-md bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4 text-center">User Details</h2>
      <UserDetails user={user} />
    </div>
  </>
);

export const getServerSideProps: GetServerSideProps<UserDetailsProps> = async ({ params }) => {
  const userId = params?.id;

  const response = await fetch(`http://localhost:3000/api/user/${userId}`);
  const data = await response.json();

  return {
    props: {
      user: data.user,
    },
  };
};

export default UserDetailPage;
