import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Tarjeta from "./Orquestador/Tarjeta";
import Form2 from "./Orquestador/form2";
import Obras from "./data.json";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="pagina">

      <header className="hero">
        <h1>GalHelyColl</h1>
        <p>Tienda de arte</p>
      </header>

      <main className="productos">

        {Obras.map((obra) => (
          <Tarjeta
            key={obra.id}
            title={obra.title}
            descripcion={obra.descripcion}
            color={obra.color}
            img={obra.img}
          />
        ))}

      </main>

      <Form2 />

    </div>
  </StrictMode>
);