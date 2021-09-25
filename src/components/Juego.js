import React, { useState } from "react";
import Progreso from "./Progreso";
import Resultado from "./Resultado";
import "./Juego.css";
const Juego = ({ data, categoria, setInicio }) => {
  const [correcta, setCorrecta] = useState(0);
  const [incorrecta, setInorrecta] = useState(0);
  const preguntaRandom = Math.floor(Math.random() * data.length);
  const una = [data[preguntaRandom]];
  const respuesta = (e) => {
    setTimeout(() => {
      let resp = e.target.innerHTML;
      if (resp === una[0].respuesta) {
        setCorrecta(correcta + 10);
      } else {
        setInorrecta(incorrecta + 10);
      }
      data.splice(preguntaRandom, 1);
    }, 500);
  };
  const arrayPreguntas = (data) => {
    if (data.length > 0) {
      let respuestas = [
        una[0].respuesta,
        una[0].incorrecta1,
        una[0].incorrecta2,
        una[0].incorrecta3,
      ];
      return respuestas.sort();
    }
  };
  const totalPuntuacion = correcta + incorrecta;
  return (
    <div className="conteiner-juego animate__animated animate__zoomIn">
      {totalPuntuacion !== 100
        ? una.map((item) => (
            <div className="d-flex flex-column h-auto" key={item.pregunta}>
              {item.imagen ? (
                <img
                  className="rounded h-25 my-4"
                  alt="imagen de pregunta"
                  src={item.imagen}
                />
              ) : (
                <h1 className="fs-1 mb-5 fw-italic bg-warning text-light p-3">
                  {item.categoria}
                </h1>
              )}
              <h1>{item.pregunta}</h1>
            </div>
          ))
        : null}
      {totalPuntuacion < 100 ? (
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: `${totalPuntuacion}%` }}
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="10"
          >
            {totalPuntuacion}%
          </div>
        </div>
      ) : (
        <Progreso correcta={correcta} incorrecta={incorrecta} />
      )}

      {totalPuntuacion !== 100
        ? arrayPreguntas(data).map((respuestaS) => {
            return (
              <div key={respuestaS} className="d-flex flex-column">
                <button
                  key={respuestaS}
                  className="btn btn-outline-info  my-2 text-dark fs-4"
                  onClick={respuesta}
                >
                  {respuestaS}
                </button>
              </div>
            );
          })
        : null}
      {totalPuntuacion === 100 && (
        <Resultado
          correcta={correcta}
          setInicio={setInicio}
          categoria={categoria}
          incorrecta={incorrecta}
        />
      )}
    </div>
  );
};

export default Juego;
