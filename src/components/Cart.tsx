import { RiShoppingCartFill } from "react-icons/ri";

interface CartProps {
  size: number;
  color?: string | null;
}

const Cart = ({ size, color = null }: CartProps) => {
  return (
    <div className=" relative">
      <div>
        <RiShoppingCartFill size={size} color={color} />
      </div>
      <div className=" h-4 w-4 bg-red-500 absolute -top-2 -right-2 rounded-full flex justify-center items-center">
        <p className="text-sm text-white">
          1
        </p>
      </div>
    </div>
  );
};

export default Cart;
