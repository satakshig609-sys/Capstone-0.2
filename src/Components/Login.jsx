// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ setLogin, setUser }) => {
//   const [form, setForm] = useState({ name: '', age: '', address: '', interest: '', email: '', phone: '' });
//   const navigate = useNavigate();

//   const handleSimpleLogin = () => {
//     setUser(form);
//     setLogin(true);
//     navigate('/browse');
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen pt-20">
//       <div className="bg-gray-900 p-8 rounded-lg w-96 shadow-2xl">
//         <h2 className="text-3xl font-bold mb-6 text-red-600">Sign In</h2>
//         {['name', 'age', 'address', 'interest', 'email', 'phone'].map((field) => (
//           <input 
//             key={field}
//             className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white"
//             placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//             onChange={(e) => setForm({...form, [field]: e.target.value})}
//           />
//         ))}
//         <button 
//           onClick={handleSimpleLogin}
//           className="w-full bg-red-600 p-3 rounded font-bold hover:bg-red-700 transition"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Login;






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLogin, setUser }) => {
  const [formData, setFormData] = useState({
    name: '', age: '', address: '', interest: '', email: '', phone: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Check if at least name and email are there (simple validation)
    if (formData.name && formData.email) {
      setUser(formData); // Send data to App.jsx state
      setLogin(true);    // Set loggedIn to true
      navigate('/browse'); // Go to browse page
    } else {
      alert("Please enter your name and email!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black/60 pt-20">
      <div className="bg-black/80 p-10 rounded-md w-full max-w-md border border-gray-800">
        <h2 className="text-white text-3xl font-bold mb-8">User Details</h2>
        
        <div className="space-y-4">
          <input name="name" placeholder="Full Name" onChange={handleInputChange} className="w-full p-3 bg-zinc-700 text-white rounded outline-none" />
          <input name="age" placeholder="Age" onChange={handleInputChange} className="w-full p-3 bg-zinc-700 text-white rounded outline-none" />
          <input name="address" placeholder="Address" onChange={handleInputChange} className="w-full p-3 bg-zinc-700 text-white rounded outline-none" />
          <input name="interest" placeholder="Interests (e.g. Action, Horror)" onChange={handleInputChange} className="w-full p-3 bg-zinc-700 text-white rounded outline-none" />
          <input name="email" placeholder="Email" onChange={handleInputChange} className="w-full p-3 bg-zinc-700 text-white rounded outline-none" />
          <input name="phone" placeholder="Phone Number" onChange={handleInputChange} className="w-full p-3 bg-zinc-700 text-white rounded outline-none" />
          
          <button 
            onClick={handleLogin}
            className="w-full bg-red-600 text-white font-bold py-3 rounded mt-4 hover:bg-red-700 transition"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;