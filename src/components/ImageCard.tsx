import Cart from "./Cart";

interface ImageCardProps {
  name: string;
  img: string;
}

const ImageCard = ({ name, img }: ImageCardProps) => {
  return (
    <div>
      <div className=" relative">
        <img className=" w-[500px] h-[250px]" src={img} alt={name} />
        <div className=" absolute h-8 w-8 right-2 top-2 px-1 py-1 hover:backdrop-brightness-50 flex items-center justify-center cursor-pointer">
          <Cart size={25} color={'white'} />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
