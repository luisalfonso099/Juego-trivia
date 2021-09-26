import React from "react";
import "./Resultado.css";

const Resultado = ({ categoria, setInicio, correcta, incorrecta }) => {
  return (
    <div>
      <div className="">
        <h4 className="">
          {correcta < 50 ? (
            `Parece que ${categoria}, No es tu mejor categoria`
          ) : (
            <h3>Nada mal</h3>
          )}
        </h4>
        <h4 className="">{correcta}% De respuestas Correctas</h4>
        <h4 className="">{incorrecta}% De respuestas incorrectas</h4>
      </div>
      <button className="btn-volver" onClick={() => setInicio(false)}>
        Volver al Inicio
      </button>
    </div>
  );
};

export default Resultado;
