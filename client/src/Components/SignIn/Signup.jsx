import React from "react";

const Signup = () => {

  return (
    <form className="p-4 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Username</label>
        <input
          type="text"
          className="w-full border rounded-lg p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          className="w-full border rounded-lg p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
