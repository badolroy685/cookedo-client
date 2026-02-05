
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const UserProfile = () => {
  const initialUsers = useLoaderData();
  console.log(initialUsers); // check if array or object

  const [user] = useState(initialUsers[0]); // use first element if array

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body items-center text-center">
          {/* Avatar */}
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={user?.photo || "https://i.ibb.co/2kRZ5qX/default-avatar.png"}
                alt="User Avatar"
              />
            </div>
          </div>

          {/* Name */}
          <h2 className="card-title mt-4 text-2xl font-bold">
            {user?.name || "User Name"}
          </h2>

          {/* Email */}
          <p className="text-base-content/70">
            {user?.email || "example@email.com"}
          </p>

          {/* Divider */}
          <div className="divider"></div>

          {/* Button inside the card */}
          <Link
            to="/"
            className="btn btn-primary btn-wide rounded-full mt-4"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
