import React from 'react';
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-primary">404</h1>

        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-base-content/70 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or has been moved.
          Let’s get you back home safely.
        </p>

        <div className="mt-8">
          <Link to="/" className="btn btn-primary btn-wide rounded-full">
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;