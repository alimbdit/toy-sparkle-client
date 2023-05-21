import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ToyDetails = () => {
  const toy = useLoaderData();
  const navigate = useNavigate();
  const {
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

  console.log(typeof parseFloat(rating));
  //   console.log(toy);

  const defaultItemStyles = {
    itemShapes: ThinStar,
    itemStrokeWidth: 1,
    activeFillColor: "#ffb23f",
    activeStrokeColor: "#e17b21",
    inactiveFillColor: "#fff7e1",
    inactiveStrokeColor: "#e17b21",
  };

  return (
    <div className=" bg-rose-100 bg-opacity-25">
      <div className=" component">
        <div className="mx-auto lg:w-2/3  rounded-md my-5 py-10  px-2 lg:px-10">
          <div className="card rounded-md w-full  lg:flex-row-reverse bg-base-100 shadow-xl overflow-hidden relative ">
            <figure className="lg:rounded-ss-none object-cover w-full lg:rounded-e-md rounded-t ">
              <img
                className=" object-cover  h-full w-full "
                src={toyPhoto}
                alt="Album"
              />
            </figure>
            <div className="card-body  w-full">
              <button
                onClick={() => {
                  navigate(-1);
                }}
                className="flex items-center "
              >
                <FaArrowCircleLeft className="mr-1 text-2xl duration-300 text-violet-500 hover:text-indigo-500" />
              </button>
              <h2 className="text-2xl font-bold text-orange-500">{toyName}</h2>
              {/* <hr /> */}

              <p className=" text-lg text-orange-700">
                {/* <h3 className="text-lg  text-neutral-800 font-medium">
                  Product Info
                </h3> */}
                {description?.split(" ").length > 20
                  ? description?.split(" ").slice(0, 20).join(" ") + "..."
                  : description}
              </p>
              <hr />
              <div>
                <h3 className="text-lg  text-orange-700">
                  <span className="text-orange-800 font-medium">
                    Seller Name:
                  </span>{" "}
                  {sellerName}
                </h3>
                <h3 className="text-lg  text-orange-700">
                  <span className="text-orange-800 font-medium">
                    Seller Email:
                  </span>{" "}
                  {sellerEmail}
                </h3>

                <h3 className="text-lg  text-orange-700">
                  <span className="text-orange-800 font-medium">Price:</span> $
                  {price}
                </h3>
                <h3 className="text-lg  text-orange-700">
                  <span className="text-orange-800 font-medium">
                    Available Quantity:
                  </span>{" "}
                  {quantity}
                </h3>
              </div>
              {/* <hr /> */}
              <div className="flex justify-between">
                <Rating
                  style={{ maxWidth: 150 }}
                  itemStyles={defaultItemStyles}
                  value={Math.round(parseFloat(rating)) || 0}
                  readOnly
                />

                <button className="btn-violet">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
