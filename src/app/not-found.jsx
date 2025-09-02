import React from 'react';
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-7xl font-bold mb-4">404</h2>
      <p className="text-neutral-600 mb-6">
        This page doesn't exists. Or maybe it moved
      </p>
      <Link
        href={'/'}
        className="text-sm text-blue-500 hover:underline"
      >
        ← Back to home
      </Link>
    </div>
  );
};

export default NotFound;
