import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Home = () => {
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
