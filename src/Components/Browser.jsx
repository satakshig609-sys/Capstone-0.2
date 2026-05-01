// import { useState,useEffect } from "react";

// import Browse from "../Comp0nents/Browser"

// function Post() {
//     const [post, setPost] = useState([]);
//     const [load, setLoad] = useState(false);
//     const [err, setErr] = useState(false);

//     const[page,setPage] = useState(1);
//     // const getData =(api) => 
//     const getData = () => {
//         return fetch("https://api.tvmaze.com/search/shows?q=girls").then((res) => res.json());

//         //return promise with fulfiled state
//     }

//     useEffect(() => {
//         fetchAndGetPost()

//     },[page])

//     const fetchAndGetPost = async () => {
//         try {
//             setLoad(true);
//             const data = await getData();
//             console.log(data); //[{},{},...,{}]

//             setPost(data);
//             setLoad(false);
//         } catch (error) {
//             // console.log(error)
//             setErr(true);
//             setLoad(false);
//             console.log(error)
//         }
//     }

//     if (load) {
//         return <h1>Loading....</h1>
//     }
    


//     if (err) {
//         return <h2>Something went wrong...</h2>
//     }

//     return (
//         <div>
//             <h3>Welcom to the post component</h3>
//             <button onClick={fetchAndGetPost}>GET POST</button>
//             <hr />
//             <div style={{ 
//     display: "display", 
//     flexWrap: "wrap", 
//     gap: "10px", 
//     padding: "20px", 
//     backgroundColor: "#111" 
// }}>
//     {post?.map((el) => {
//         const { show } = el;
//         return (
//             <div key={show.id} style={{
//                 width: "200px",
//                 backgroundColor: "#181818",
//                 borderRadius: "4px",
//                 overflow: "hidden",
//                 cursor: "pointer",
//                 transition: "transform 0.3s ease",
//                 boxShadow: "0px 4px 10px rgba(0,0,0,0.5)"
//             }}
//             // Simple hover effect
//             onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
//             onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1.0)"}
//             >
//                 {/* Poster Image */}
//                 <img 
//                     src={show.image?.medium || "https://via.placeholder.com/210x295?text=No+Image"} 
//                     alt={show.name} 
//                     style={{ width: "100%", height: "280px", objectFit: "cover" }}
//                 />

//                 {/* Content Details */}
//                 <div style={{ padding: "12px" }}>
//                     <h4 style={{ margin: "0 0 8px 0", fontSize: "14px", color: "#fff" }}>
//                         {show.name}
//                     </h4>
                    
//                     <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px" }}>
//                         <span style={{ color: "#46d369", fontWeight: "bold" }}>
//                             {show.rating?.average ? `${show.rating.average * 10}% Match` : "New"}
//                         </span>
//                         <span style={{ border: "1px solid #777", padding: "0 4px", fontSize: "10px" }}>
//                             {show.language}
//                         </span>
//                     </div>

//                     <p style={{ 
//                         fontSize: "11px", 
//                         color: "#aaa", 
//                         marginTop: "8px",
//                         display: "-webkit-box",
//                         WebkitLineClamp: "2",
//                         WebkitBoxOrient: "vertical",
//                         overflow: "hidden" 
//                     }}>
//                         {show.genres?.join(" • ")}
//                     </p>
//                 </div>
//             </div>
//         );
//     })}
// </div>
          
//         </div>
//     )
    
// }

// export default Post;

import React, { useState, useEffect } from 'react';


const Browser = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  const filteredMovies = movies.filter(movie => 
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  return (
    <div className=" min-h-screen bg-[#141414] text-red">
    
      <div className="flex gap-4 mb-8 justify-center">
        <input 
          className="bg-zinc-800 text-white p-3 rounded w-full max-w-md border border-zinc-700 outline-none focus:border-red-600"
          placeholder="Search movies..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {filteredMovies?.map(movie => (
          <div key={movie.id} className="cursor-pointer hover:scale-105 transition duration-300">
            <img 
              src={movie.image?.medium} 
              className="rounded-md w-full shadow-lg" 
              alt={movie.name} 
            />
            <p className="text-xs mt-2 font-bold truncate">{movie.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 

export default Browser;





