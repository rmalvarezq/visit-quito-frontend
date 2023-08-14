import { PropTypes } from "prop-types";
import { useState } from "react";
import { AddCatalogo, GifGrid } from "./components";

export const Inicio = ({ value }) => {
  const onAddCatalogo = (newCatalogo) => {
    console.log(newCatalogo);
    setCatalogos([newCatalogo, ...catalogos]);
  };
  const [catalogos, setCatalogos] = useState(["jsx"]);

  return (
    <>
      Inicio
      <p>{value}</p>
      <span>----------------------------</span>
      {/* <AddCatalogo onNewCatalogo={(value) => onAddCatalogo(value)} /> */}
      <ol>
        {catalogos.map((catalogo) => (
          <GifGrid key={catalogo} catalogo={catalogo} />
        ))}
      </ol>
    </>
  );
};

Inicio.propTypes = {
  value: PropTypes.number,
};
