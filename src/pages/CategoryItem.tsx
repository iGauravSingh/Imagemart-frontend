
import Navbar from "../components/Navbar"

import { categories } from "../utils/data";
import ImageCard from "../components/ImageCard";
import { useParams } from "react-router-dom";



const CategoryItem = () => {

  const cat = useParams()



  return (
    <div className="">
        <Navbar />
        <div className=" ml-8 mt-8 font-serif font font-semibold text-2xl ">
          <h3>Category item : {cat.cat}</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-16">
            {categories[0].imageArr.map(igg => (
                <div key={igg.id}><ImageCard name={igg.imageName} img={igg.link} /></div>
            ))}
        </div>
    </div>
  )
}

export default CategoryItem