import war from "../assets/war.jpg";

const CartItemCard = () => {
  return (
    <div className="border-2 border-purple-500 w-full px-4 py-4 font-serif mb-8 mt-28">
      <div className="w-full flex ">

        {/* Image div  */}
        <div className="flex flex-col justify-center items-center mr-8">
          <img className=" h-48 w-96" src={war} alt="war" />
          <p className="border border-purple-300 rounded-full px-2 py-1 mt-1 cursor-pointer">X</p>
        </div>

        {/* Item name and detail  */}
        <div className="flex gap-16 ">
          {/* item Tag  */}
          <div>
            <p>Name:</p>
            <p>Size:</p>
            <p>Licence</p>
          </div>
          {/* Item Value  */}
          <div>
            <p>alphe</p>
            <p>44 mb</p>
            <p>Free to use</p>
          </div>
        </div>

        {/* price  */}
        <div className="flex  w-full justify-end ">
        <p className=" font-semibold text-lg">10 rs</p>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
