import React from "react";

const Resultado = ({ categoria, setInicio, correcta, incorrecta }) => {
  return (
    <div>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {correcta < 50 ? (
              `Parece que ${categoria}, No es tu mejor categoria`
            ) : (
              <h3>Nada mal</h3>
            )}
          </li>
          <li className="list-group-item">
            {correcta}% De respuestas Correctas
          </li>
          <li className="list-group-item">
            {incorrecta}% De respuestas incorrectas
          </li>
        </ul>
      </div>
      <button className="btn btn-dark mt-4" onClick={() => setInicio(false)}>
        Volver al Inicio
      </button>
    </div>
  );
};

export default Resultado;
