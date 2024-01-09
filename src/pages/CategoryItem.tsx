import { useState } from "react";
import Navbar from "../components/Navbar"

import { categories } from "../utils/data";
import ImageCard from "../components/ImageCard";



const CategoryItem = () => {




  return (
    <div>
        <Navbar />
        <div className="flex flex-wrap gap-6 mt-16">
            {categories[0].imageArr.map(igg => (
                <div key={igg.id}><ImageCard name={igg.imageName} img={igg.link} /></div>
            ))}
        </div>
    </div>
  )
}

export default CategoryItem