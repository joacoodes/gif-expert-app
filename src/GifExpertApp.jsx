import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = ( newCategory ) => {
    //categories.push( newCategory );

    if( categories.includes(newCategory) ) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>Gif Expert App</h1>
      
      <AddCategory onNewCategory = { onAddCategory } />

      {
        categories.map( ( category ) => (
            <GifGrid 
              key={ category } 
              category={ category }
            />
          )
        )
      }
    </>
  )
}
