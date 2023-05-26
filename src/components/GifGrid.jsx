import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";

export const GifGrid = ( { category } ) => {

    const [images, setImages] = useState([]); 

    const getImages = async() => {
      const newImages = await getGifs( category );
      setImages( newImages );
    }

    // useEffect sirve para disparar efectos secundarios en cualquier punto
    useEffect( () => {
      getImages();
    }, []);


    console.log('state images ->', images);

  return (
    <>
      <ol>
        {
          images.map((img) => (
            <li key={ img.id }>
              <img src={img.url} />
              <p>{ img.title }</p>
           </li>
           )
          )
        }
      </ol>
    </>
  )
}
