import Button from "../components/Button";
import CartItemCard from "../components/CartItemCard";
import Navbar from "../components/Navbar";

const ShopingCartPage = () => {
  return (
    <div>
      <Navbar />
      <div className=" min-h-screen w-screen flex justify-center mt-16 font-serif">
        <div className="flex flex-col items-center w-[50%]">
          <div className=" w-full">
            <h1 className=" font-semibold text-4xl">Shoping Basket</h1>
          </div>

          <div className="w-full flex justify-between items-center mt-4">
            <p>Items selected for purchase: 2</p>
            <p className=" pr-8 font-medium text-3xl">
              Subtotal: ₹46,000.00 INR
            </p>
          </div>

          <div className="w-full flex justify-end mt-12">
            <Button heading="Continue with purchace" color="purple" />
          </div>

          <CartItemCard />
        </div>
      </div>
    </div>
  );
};

export default ShopingCartPage;
