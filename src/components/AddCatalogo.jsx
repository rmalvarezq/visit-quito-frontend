import { useState } from "react";

export function AddCatalogo({ onNewCatalogo }) {
  const [inputValue, setInputValue] = useState("One punch");

  const onInputChange = (event) => {
    setInputValue(event.target.value); //envía el dato del input
  };
  const onSubmit = (event) => {
    event.preventDefault(); //evita que se recargue la página cuando se envía un formulario
    const inputValue2 = inputValue.trim();
    if (inputValue2.length <= 1) return; //valida que no venga vacío
    // setCatalogos((catalogos) => [inputValue, ...catalogos]);
    onNewCatalogo(inputValue2);
    setInputValue("");
  };

  return (
    // <form onSubmit={(event) => onSubmit(event)}>//lo mismo que abajo
    <form onSubmit={onSubmit}>
      <h1>AddCatalogo</h1>
      <input
        type="text"
        placeholder="Ingresa texto"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}
