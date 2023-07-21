import React from "react";
import Items from "@/app/Components/Items";

async function getData() {
    const res = await fetch('https://fakestoreapi.com/products')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

async function Products(){
    const data = await getData()
    const mappedData= data.map(info=><Items info={info}/>)
    return(
        <>
            <div className="relative">
                <div className='absolute top-16 grid grid-flow-row auto-rows-max sm:grid-cols-4 sm:gap-10 items-center p-2 m-2'>
                    {mappedData}
                </div>
            </div>
        </>
    )
}

export default Products

   
