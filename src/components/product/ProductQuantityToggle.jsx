import { FaMinus, FaPlus } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ProductQuantityToggle = ({ quantity, handleDecrease, handleIncrease }) => {

    
  return (
    <div className="flex mt-2 items-center gap-[1rem]">
      <button
        onClick={(e) => {
            e.preventDefault()
            handleDecrease();
        }}
      >
        <FaMinus />
      </button>
      <p className="border-2 border-black/50 px-2">
      {quantity}
      </p>
      <button
        onClick={(e) => {
            e.preventDefault()
            handleIncrease();
        }}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default ProductQuantityToggle;
