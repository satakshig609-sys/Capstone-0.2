// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useState, useContext } from 'react';
// import { ThemeContext } from './Context/ThemeContext';

// // Import all your components from the Compnents folder
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Login from './Components/Login';
// import Browser from './Components/Browser';
// import Account from './Components/Account';

// function App() {
//   // Global States: These live here so ALL pages can access them
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userData, setUserData] = useState(null);
//   const { isDarkMode } = useContext(ThemeContext);

//   return (
//     <div className={isDarkMode ? 'bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
//       <Router>
//         {/* Navbar stays at the top of every page */}
//         <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        
//         <Routes>
//           {/* 1. Public Home Page */}
//           <Route path="/" element={<Home />} />

//           {/* 2. Login Page - Pass functions to update state */}
//           <Route path="/login" element={<Login setLogin={setIsLoggedIn} setUser={setUserData} />} />

//           {/* 3. Protected Browse Page - If not logged in, go to Login */}
//           <Route 
//             path="/browse" 
//             element={isLoggedIn ? <Browser /> : <Navigate to="/login" />} 
//           />

//           {/* 4. Account Page - Pass the user data collected at Login */}
//           <Route path="/account" element={<Account user={userData} />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;




import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';

// Fixing the folder name to match your "Compnents" folder
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Browser from './Components/Browser';
import Account from './Components/Account';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const { isDarkMode } = useContext(ThemeContext);

  return (
  
    <div className={`min-h-screen w-full transition-colors duration-500 ${isDarkMode ? 'bg-[#141414] text-white' : 'bg-white text-black'}`}>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        
    
        <div className="pt-20 px-4"> 
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/login" element={<Login setLogin={setIsLoggedIn} setUser={setUserData} />} />
            
          
            <Route 
              path="/browse" 
              element={isLoggedIn ? <Browser /> : <Navigate to="/login" />} 
            />
            
            <Route path="/account" element={<Account user={userData} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;