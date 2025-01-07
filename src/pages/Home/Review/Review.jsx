import { useEffect, useState } from "react";
import Loader from "../../../components/Loader";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("https://toy-sparkle-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
//   console.log(reviews);

  if (!reviews) {
    return <Loader></Loader>;
  }

  return (
    <div className="bg-rose-100 bg-opacity-25 py-10">
      <h2 className="text-center text-5xl font-bold text-violet-700 py-5 dark-heading ">
        Customers Reviews
      </h2>
      <div className=" mx-1 lg:mx-5 rounded-md mb-5 py-10  px-2 lg:px-10">
        <div className=" w-full flex flex-col lg:flex-row gap-5">
          {reviews &&
            reviews?.map((singleReview) => (
              <ReviewCard
                key={singleReview.id}
                singleReview={singleReview}
              ></ReviewCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
