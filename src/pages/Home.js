import React, { useEffect, useState } from 'react';
import moviesService from '../API/services/movies'
import Card from '../components/Card';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
   if (refresh) {
     setMovies([]);
     const fetchMovies = async () => {
        const { data } = await moviesService.getAll();
        setMovies(data.data)
     };
     fetchMovies();
     setRefresh(false)
   }
  }, [refresh]);

  return (
    <div className="container">
      <h2 className="text-center my-5">Nuestras películas (todo legal)</h2>
      <section className="row">
          <Card/>
      </section>
    </div>
  );
};

export default Home;
