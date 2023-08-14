import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getCatalogos";

export const useFetchGifs = (catalogo) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifts(catalogo);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, [catalogo]);

  return {
    images,
    isLoading,
  };
};
