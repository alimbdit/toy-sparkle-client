import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
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
  console.log(toy);

  return (
    <div className=" bg-rose-100 bg-opacity-25">
      <div className=" component">
        <div className="mx-auto lg:w-2/3  rounded-md my-5 py-10  px-2 lg:px-10">
          <div className="card  w-full  lg:flex-row-reverse bg-base-100 shadow-xl">
            <figure className="lg:rounded-ss-none object-cover w-full lg:rounded-e-2xl relative">
              <img className="  " src={toyPhoto} alt="Album" />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">{toyName}</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
