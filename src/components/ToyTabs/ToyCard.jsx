import  { useEffect } from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const ToyCard = ({toy}) => {
    const {
        _id,
        toyName,
        sellerName,
        sellerEmail,
        price,
        subCategory,
        toyPhoto,
        rating,
        quantity,
        description,
      } = toy;
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
    <div className="card  w-full  bg-base-100 dark:bg-gray-100 shadow-xl" data-aos="fade-left">
      <figure className="h-80 relative">
        <img
        className="object-cover  h-full w-full "
          src={toyPhoto}
          alt="Toy Photo"
        />
      </figure>
      <div className="card-body  items-center text-center">
        <h2 className="card-title text-3xl font-semibold text-neutral-800">{toyName}</h2>
        <h3 className="text-xl font-medium text-neutral-600 ">Price: ${price}</h3>
        <Rating
                  style={{ maxWidth: 150 }}
                  itemStyles={defaultItemStyles}
                  value={Math.round(parseFloat(rating)) || 0}
                  readOnly
                />
       
                

                <Link to={`/toy/${_id}`} className="bg-orange-500 w-full px-5 py-2 duration-300 text-white font-medium rounded-lg text-lg text-center hover:bg-amber-500 mt-2">View Details</Link>
                
             
      </div>
    </div>
  );
};

export default ToyCard;
