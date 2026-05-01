import React from 'react';

const MovieRow = ({ title, data }) => {
  return (
    <div className="py-4 bg-transparent">
      <h2 className="text-white text-xl font-bold ml-10 mb-2">{title}</h2>
      
    
      <div className="flex overflow-x-scroll scrollbar-hide px-10 gap-4 pb-5">
        {data?.slice(0, 15).map((movie) => (
          <div key={movie.id} className="flex-none w-40 md:w-52 group cursor-pointer">
            <img 
              src={movie.image?.medium || 'https://via.placeholder.com/210x295'} 
              alt={movie.name} 
              className="rounded-md w-full transition-transform duration-300 group-hover:scale-105 shadow-md"
            />
            <p className="text-gray-300 text-xs mt-2 truncate group-hover:text-white">
              {movie.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;