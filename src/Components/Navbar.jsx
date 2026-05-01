import { Link } from "react-router-dom";
const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    return (
        <div className="fixed w-full flex items-center justify-between    from-black to-transparent z-50">

            {/* Left Side: Logo + Nav Links */}
            <div className="flex items-center space-x-8" justify-between>
                <h1 >
                    NETFLIX
                </h1>
                <Link to="/" className="hover:text-gray-300 transition">Home</Link>
                <Link to="/browse" className="hover:text-gray-300 transition">Browse</Link>
                <Link to="/account" className="bg-zinc-800 px-3 py-1 rounded text-xs uppercase font-bold text-white hover:bg-zinc-700 transition">
                    Account
                </Link>

                {isLoggedIn ? (
                    <button
                        onClick={() => setIsLoggedIn(false)}
                        className="bg-red-600 px-3 py-1 rounded text-xs font-bold text-white"
                    >
                        Log Out
                    </button>
                ) : (
                    <Link to="/login" className="text-sm text-white hover:underline">Sign In</Link>
                )}


                {/* Corrected: Both links are now in ONE flex container */}
                {/* <div className="flex gap-5 text-sm font-medium text-white">
                    
                </div>
                <div className="flex gap-5 text-sm font-medium text-white">
                    

                </div> */}

                
            {/* </div> */}

            {/* Right Side: Account + Login/Logout */}
            {/* <div className="flex gap-5 items-center"> */}
                
            </div>
        </div>
    );
};

export default Navbar;