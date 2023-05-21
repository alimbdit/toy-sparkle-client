import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";



const AddToy = () => {
  const { user } = useContext(AuthContext);

  const swalObj = {
    position: "center",
    icon: "success",
    title: "Great Job",
    text: "Toy Added Successful!",
    showConfirmButton: false,
    timer: 1500,
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data)

    fetch('http://localhost:5000/toys', {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result => {
        // console.log(result)
        if(result.acknowledged){

            Swal.fire(swalObj);
        }
        reset();
    })

  };

  return (
    <div className="bg-rose-100 bg-opacity-25 pb-16">
      <h2 className="text-center text-5xl font-bold text-violet-700 py-5 ">
        Add A Toy
      </h2>
      <div className="bg-neutral-200 mx-5 lg:mx-10 rounded-md my-5 py-10  px-5 lg:px-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}

          <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 w-full mb-3">
            <div className="flex flex-col w-full">
              <label
                htmlFor=""
                
              >
                {" "}
                <span className="text-lg font-medium text-violet-700 mb-1 pl-2">Toy Name</span>
              
              <input
                className="input input-bordered focus:outline-0 w-full"
                placeholder="Toy Name"
                {...register("toyName", { required: true })}
              />
              </label>
              {errors.toyName && <span className="text-rose-600 pl-2 mt-1">This field is required</span>}
            </div>

            <div className="flex flex-col w-full">
              <label
                
                htmlFor=""
              >
                <span className="text-lg font-medium text-violet-700 mb-1 pl-2">Seller Name</span>
             
              <input
                className="input input-bordered focus:outline-0 w-full "
                placeholder="Seller Name"
                {...register("sellerName", { required: true })}
              />
               </label>
               {errors.sellerName && <span className="text-rose-600 pl-2 mt-1">This field is required</span>}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 w-full mb-3">
            <div className="flex flex-col w-full">
              <label
                
                htmlFor=""
              >
                <span className="text-lg font-medium text-violet-700 mb-1 pl-2">Seller Email</span>
              
              <input
                className="input input-bordered focus:outline-0 w-full "
                value={user?.email}
                placeholder="Seller Email"
                {...register("sellerEmail")}
              />
              </label>
              {/* {errors.sellerEmail && <span className="text-rose-600 pl-2 mt-1">This field is required</span>} */}
            </div>

            <div className="flex flex-col w-full">
              <label
                className=""
                htmlFor=""
              >
                <span className="text-lg font-medium text-violet-700 mb-1  pl-2">Price</span>
              
              <input
                className="input input-bordered focus:outline-0 w-full "
                placeholder="Price"
                {...register("price", { required: true })}
              />
              </label>
              {errors.price && <span className="text-rose-600 pl-2 mt-1">This field is required</span>}
            </div>
          </div>

          <div className=" flex flex-col lg:flex-row gap-3 lg:gap-10 mb-3">
            <div className=" w-full lg:w-1/3">
              <label className="flex flex-col"
                
                htmlFor=""
              >
                <span className="text-lg font-medium text-violet-700  pl-2">Sub Category</span>
              
              <select  placeholder="Select Sub Category"
                className="select-bordered focus:outline-0 select text-base font-normal "
                {...register("subCategory", { required: true })}
              >
                <option disabled selected></option>
                <option value="Science Kits">Science Kits</option>
                <option value="Math Learning Toys">Math Learning Toys</option>
                <option value="Engineering Kits">Engineering Kits</option>
                
              </select>
              </label>
              {errors.subCategory && <span className="text-rose-600 pl-2 mt-1">This field is required</span>}
            </div>

            <div className="flex flex-col w-full lg:w-2/3">
              <label
                
                htmlFor=""
              >
                <span className="text-lg font-medium text-violet-700 mb-1 pl-2">Toy Photo URL</span>
              
              <input
                className="input input-bordered focus:outline-0 w-full "
                placeholder="Toy Photo URL"
                {...register("toyPhoto", { required: true })}
              />
              </label>
              {errors.toyPhoto && <span className="text-rose-600 pl-2 mt-1">This field is required</span>}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 w-full mb-3">
            <div className="flex flex-col w-full">
              <label
                
                htmlFor=""
              >
                <span className="text-lg font-medium text-violet-700 mb-1 pl-2">Rating</span>
              
              <input
                className="input input-bordered focus:outline-0 w-full "
                placeholder="Rating"
                {...register("rating", { required: true })}
              />
              </label>
              {errors.rating && <span className="text-rose-600 pl-2 mt-1">This field is required</span>}
            </div>
            <div className="flex flex-col w-full">
              <label
                
                htmlFor=""
              >
                <span className="text-lg font-medium text-violet-700 mb-1 pl-2">Available Quantity</span>
              
              <input
                className="input input-bordered focus:outline-0 w-full "
                placeholder="Available Quantity"
                {...register("quantity", { required: true })}
              />
              </label>
              {errors.quantity && <span className="text-rose-600 pl-2 mt-1">This field is required</span>}
            </div>
          </div>

          <div className="w-full">
          <label
                
                htmlFor=""
              >
                <span className="text-lg font-medium text-violet-700  pl-2">Detail Description</span>
              
            <textarea
              className="input input-bordered focus:outline-0 mt-1 w-full h-20 py-2"
              placeholder="Detail Description"
              {...register("description", { required: true })}
            />
            </label>
            {errors.description && <span className="text-rose-600 pl-2 mt-1">This field is required</span>}
          </div>

          {/* include validation with required or other standard HTML validation rules */}
          

          <input className="w-full py-3 cursor-pointer bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-xl font-medium my-3" type="submit" value="ADD" />
        </form>
      </div>
    </div>
  );
};

export default AddToy;
