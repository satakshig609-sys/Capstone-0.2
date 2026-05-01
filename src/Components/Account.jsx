import {Link} from 'react-router-dom'
import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext'; 

const Account = ({ user }) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  if (!user) return <div className="pt-24  text-2xl">Please login first!</div>;

  return (
    <div >
      <h1 >Profile Details</h1>
      <div className="mt-60 space-y-3 text-lg">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Interests:</strong> {user.interest}</p>
      </div>
      
      <button 
        onClick={toggleTheme}
        className="mt-8 w-full p-3 bg-white text-black font-bold rounded-lg hover:bg-gray-300"
      >
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode

        
      </button>
    </div>
  );
};
export default Account;

// className="pt-24 max-w-lg mx-auto p-6 bg-gray-800 rounded-xl shadow-lg"