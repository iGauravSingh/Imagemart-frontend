
interface CategoryProps {
    category: string,
    image: string
}


const Category = ({category, image}: CategoryProps) => {
  return (
    <div>
        <div className=" cursor-pointer">
            <h3>{category}.</h3>
            <img src={image} alt={category} width={500} height={200} />
        </div>
        {/* // category card */}

    </div>
  )
}

export default Category