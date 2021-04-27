import { format } from 'date-fns';
import Button from '../../components/Button';

const card = ({ movie, handleDeleteMovie }) => {
  const formatDate = (date) => {
    const newDate = new Date(date);
    return format(newDate, 'dd-MM-yyyy');
  };

  return (
    <div className="col-12 col-md-4 col-lg-3 mb-1 h-100 my-4">
      <div className="card-body shadow">
        <h5 className="card-title">Titulo</h5>
        <h6 className="card-subtitle mb-2 text-muted">
         Fecha
        </h6>
          <p className="card-text">Género: </p>
        <p className="card-text">Duración: </p>
        <p className="card-text">Rating: </p>
        <p className="card-text">Premios: </p>
        <div className="d-flex justify-content-between">
          <Button
            className="btn btn-secondary"
            to={`/edit/`}
            text="EDITAR"
          />
          <Button
            type="button"
            className="btn btn-danger"
            text="ELIMINAR"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal`}
          />
        </div>
      </div>
      <div
        className="modal fade"
        id={`exampleModal`}
        tabIndex="-1"
        aria-labelledby={`exampleModalLable`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`exampleModalLable`}>
                ¿ESTÁS SEGUR@ QUE QUERÉS ELIMINAR?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">NO HAY VUELTA ATRÁS!</div>
            <div className="modal-footer">
              <Button
                type="button"
                className="btn btn-secondary"
                text="ME ASUSTÉ"
                data-bs-dismiss="modal"
              />
              <Button
                type="button"
                text="BORRALO PERR@!"
                onClick={() => handleDeleteMovie()}
                className="btn btn-danger"
                data-bs-dismiss="modal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;