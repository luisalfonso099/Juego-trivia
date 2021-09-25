import { data } from "./data";
import { useState } from "react";
import Juego from "./components/Juego";
import "./App.css";
function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState([]);
  const [inicio, setInicio] = useState(false);
  const [categoria, setCategoria] = useState("");
  const extraerCategorias = data.map((item) => item.categoria);
  const recortadoDeCategorias = new Set(extraerCategorias);
  const categorias = [...recortadoDeCategorias];

  const selecionarCategoria = (e) => {
    let categoria = e.target.innerHTML;
    const seleccionada = data.filter((item) => item.categoria === categoria);
    setCategoriaSeleccionada(seleccionada.sort());
    setCategoria(categoria);
    setInicio(true);
  };

  return (
    <div className="container-app ">
      {!inicio ? (
        <div className="panel animate__animated animate__zoomIn">
          <h1 className="comienzo-h1">Para comenzar elige una categoria</h1>
          {categorias.map((item) => (
            <button
              key={item}
              className="btn-category"
              onClick={selecionarCategoria}
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
