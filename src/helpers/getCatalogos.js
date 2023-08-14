export const getGifts = async (catalogo) => {
  const url =
    //   "https://app.visitquito.ec/apiWagger/api/Catalogo/ObtenerCatalogoTipoLugar?estado=true";
    "http://localhost:44722/api/Catalogo/GetAllCatalogo";
  const resp = await fetch(url);

  if (resp.ok) {
    const data = await resp.json();
    const filterData = data.filter(
      (item) =>
        item.urlImagen !== null && item.estado === true && item.codigo !== null
    );
    const images = filterData.map((img) => ({
      id: img.idCatalogo,
      title: img.nombre,
      url: img.urlImagen,
    }));
    console.log(images);
    return images;
    //   console.log(filterData); // Aquí deberías ver los datos
  } else {
    console.error("Error en la respuesta:", resp.status, resp.statusText);
  }
};
