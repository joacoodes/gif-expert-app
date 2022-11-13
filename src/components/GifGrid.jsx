import { getGifs } from "../helpers/getGifs";
import { useEffect } from "react";

export const GifGrid = ( {category} ) => {

    // useEffect sirve para disparar efectos secundarios en cualquier punto

    useEffect( () => {
      getGifs(category);
    }, []);

  return (
    <>
        <h3> {category} </h3>
        <p> Hola Mundo </p>
    </>
  )
}
