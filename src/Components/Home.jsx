import React, { useState, useEffect } from 'react';
import MovieRow from './MovieRow';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows?page=${page}`)
      .then(res => res.json())
      .then(data => setMovies(data.slice(0, 50))); 
  }, [page]);

  return (
    <div className="pb-20">
      
      <div className="h-[70vh] bg-cover bg-center flex items-end p-10 bg-[url('https://images.alphacoders.com/691/691657.jpg')]">
        <div className="bg-black/40 p-6 rounded-lg">
          <h1 className="text-white text-5xl font-bold mb-4">Unlimited movies,<br/>TV shows and more</h1>
          <button className="bg-white text-black px-8 py-2 font-bold rounded hover:bg-gray-300">Play</button>
          <button className="bg-gray-500/50 text-white px-8 py-2 font-bold rounded ml-4 hover:bg-gray-500">More Info</button>
        </div>
      </div>

      
      <MovieRow title="Trending Now" data={movies.slice(0, 15)} />
      <MovieRow title="Top Rated" data={movies.slice(15, 30)} />

      
      <div className="flex justify-center items-center gap-6 mt-10">
        <button 
          disabled={page === 0}
          onClick={() => setPage(p => p - 1)}
          className="bg-zinc-800 text-white px-6 py-2 rounded disabled:opacity-30"
        >
          Previous
        </button>
        <span className="text-white font-bold text-xl">Page {page}</span>
        <button 
          onClick={() => setPage(p => p + 1)}
          className="bg-zinc-800 text-white px-6 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;