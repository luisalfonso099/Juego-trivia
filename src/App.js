import { data } from "./data";
import { useState } from "react";
import Juego from "./Juego";
function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState([]);
  const [inicio, setInicio] = useState(false);
  const [categoria, setCategoria] = useState("");
  const extraerCategorias = data.map((item) => item.categoria);
  const recortadoDeCategorias = new Set(extraerCategorias);
  const categorias = [...recortadoDeCategorias];

  const evento = (e) => {
    let categoria = e.target.innerHTML;
    const seleccionada = data.filter((item) => item.categoria === categoria);
    setCategoriaSeleccionada(seleccionada.sort());
    setCategoria(categoria);
    setInicio(true);
  };

  return (
    <div className="container d-flex justify-content-center text-center ">
      {!inicio ? (
        <div className="d-flex flex-column">
          <h1 className="p-3 border-bottom border-danger">
            Para comenzar elige una categoria
          </h1>
          {categorias.map((item) => (
            <button
              key={item}
              className="btn btn-outline-primary text-dark fs-4 my-2"
              onClick={evento}
            >
              {item}
            </button>
          ))}
        </div>
      ) : (
        <Juego
          data={categoriaSeleccionada}
          categoria={categoria}
          inicio={inicio}
          setInicio={setInicio}
        />
      )}
    </div>
  );
}

export default App;
