import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Ratings = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="font-size-[2rem] text-yellow-500" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="font-size-[2rem] text-yellow-500" />
        ) : (
          <AiOutlineStar className="font-size-[2rem] text-yellow-500" />
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center">
      {ratingStar}
      <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
        {reviews} reviews
      </p>
    </div>
  );
};

export default Ratings;
