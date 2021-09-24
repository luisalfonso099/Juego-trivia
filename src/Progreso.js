import React from "react";

const Progreso = ({ correcta, incorrecta }) => {
  return (
    <div>
      <h1>Resultado</h1>

      <div className="progress my-5">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${correcta}%` }}
          aria-valuenow="15"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {correcta}%
        </div>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: `${incorrecta}%` }}
          aria-valuenow="30"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {incorrecta}%
        </div>
      </div>
    </div>
  );
};

export default Progreso;
