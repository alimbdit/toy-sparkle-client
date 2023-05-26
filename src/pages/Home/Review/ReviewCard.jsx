import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ReviewCard = ({singleReview}) => {
    const {id, name, photo, rating, review} = singleReview;

    const defaultItemStyles = {
        itemShapes: ThinStar,
        itemStrokeWidth: 1,
        activeFillColor: "#ffb23f",
        activeStrokeColor: "#e17b21",
        inactiveFillColor: "#fff7e1",
        inactiveStrokeColor: "#e17b21",
      };

      
  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])

    return (
        <div className="card rounded-md w-full bg-base-100 shadow-xl  border border-orange-700" data-aos="zoom-in">
            <figure className="px-10 pt-7">
              <img
                src={photo}
                alt="Shoes"
                className="rounded-full w-20 h-20"
              />
            </figure>
            <div className=" px-3 pb-4  flex flex-col items-center text-center">
             
              <Rating
                  style={{ maxWidth: 100 }}
                  itemStyles={defaultItemStyles}
                  value={Math.round(parseFloat(rating)) || 0}
                  readOnly
                />
              <p className="mt-1">{review}</p>
              
            </div>
          </div>
    );
};

export default ReviewCard;