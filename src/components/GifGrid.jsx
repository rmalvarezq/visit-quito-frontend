import { GifItem } from "../components/GifItem.jsx";
import { useFetchGifs } from "../hooks/useFetchGifs.js";

export const GifGrid = ({ catalogo }) => {
  const { images, isLoading } = useFetchGifs(catalogo);

  return (
    <>
      <h3>{catalogo}</h3>
      <div className="card-grid">
        {
            isLoading && <h2>Cargando....</h2>
        }
        {
            images.map((image) => (
            <GifItem key={image.id} {...image} />
            ))
        }
      </div>
    </>
  );
};
