import React from 'react';

const SignUpForm = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6">Welcome to TaskList Pro</h1>
        <div className="mb-4">
          <input
            type="email"
            placeholder="name@yourcompany.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 mb-4 w-full">
          Continue with Email
        </button>
        <div className="flex justify-center mb-4">
          <span className="text-gray-500 mx-2">OR</span>
        </div>
        <button className="bg-white text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors duration-300 mb-2 w-full">
          Continue with Google
        </button>
        <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300 w-full">
          Continue with Apple
        </button>
        <div className="mt-6 text-center">
          <span className="text-gray-500">Already have an account?</span>
          <a href="#" className="text-blue-500 ml-2">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;