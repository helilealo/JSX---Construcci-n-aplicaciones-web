import "../Style/Tarjeta.css";

import Titulo from "../Componentes/Titulo";
import Imagen from "../Componentes/Imagen";
import Descripcion from "../Componentes/Descripcion";

export default function Tarjeta({ title, descripcion, img, color }) {
  return (
    <div className="tarjeta">

      <div
        className="imagen-producto"
        style={{ backgroundColor: color }}
      >
        <Imagen img={img} />
      </div>

      <div className="contenido">

        <Titulo title={title} />

        <Descripcion descripcion={descripcion} />

      </div>

    </div>
  );
}