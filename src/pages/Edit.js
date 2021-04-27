import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import MovieForm from '../components/MovieForm';


const Edit = () => {

  return (
    <div className="row d-flex justify-content-center">
      <h1 className="text-center m-5">Editar película</h1>
      <div className="col-12 col-lg-8 col-xl-7">
          <MovieForm/>
      </div>
    </div>
  );
};

export default Edit;
