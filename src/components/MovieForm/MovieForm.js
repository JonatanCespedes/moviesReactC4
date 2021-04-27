import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Input from '../Input';
import Button from '../Button';
import Select from '../Select';


const MovieForm = () => {

  return (
    <form className="row">
      <Input
        className="col-12 col-sm-6"
        name="title"
        label="Título"
        placeholder="Ej. Harry Potter..."
        type="text"
      />
      <Input
        className="col-12 col-sm-6"
        name="rating"
        label="Rating"
        placeholder="Ej. 8"
        type="number"
      />
      <Input
        className="col-12 col-sm-6"
        name="awards"
        label="Premios"
        placeholder="Ej. 2"
        type="number"
      />
      <Input
        className="col-12 col-sm-6"
        name="release_date"
        label="Fecha de estreno"
        type="date"
      />
      <Input
        className="col-12 col-sm-6"
        name="length"
        label="Duración"
        placeholder="Ej. 120"
        type="text"
      />
        <Select
          className="col-12 col-sm-6"
          name="genre_id"
          label="Género"
          placeholder="Selecciona un género"
          type="text"
        />
      <Button type="submit"/>
    </form>
  );
};

export default MovieForm;
