import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Loader from "../../components/Loader";
import useTitle from "../../hooks/useTitle";

const AllToy = () => {
  const AllToys = useLoaderData();

  useTitle("All Toys")

  const [toys, setToys] = useState(AllToys);
  const [searchName, setSearchName] = useState("");

  if(!toys){
    return <Loader></Loader>
  }

  //   console.log(toys);

  const handleSearch = () => {
    fetch(`https://toy-sparkle-server.vercel.app/toysByName/${searchName}`)
    .then(res => res.json())
    .then(result => {
        setToys(result)
    })

  }

  return (
    <div className="bg-rose-100 bg-opacity-25 pb-16">
      <h2 className="text-center text-5xl font-bold text-violet-700 py-5 ">
        All Toy
      </h2>
      <div className="bg-neutral-200 mx-1 lg:mx-5 rounded-md my-5 py-10  px-2 lg:px-10">
        
          <div className="input-group justify-center mb-5 ">
            <input 
            onChange={(e) => setSearchName(e.target.value)}
              type="text"
              placeholder="Search…"
              className="input input-bordered  focus:outline-offset-0"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
       

        <div className="overflow-x-auto w-full">
          <table className="table w-full ">
            {/* head */}
            <thead>
              <tr className="text-orange-600">
                <th className="text-base">#</th>
                <th className="text-base">Seller</th>
                <th className="text-base">Toy Name</th>
                <th className="text-base">Sub-Category</th>
                <th className="text-base ">Available Quantity</th>
                <th className="text-base">Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {toys?.map((toy, index) => (
                <tr key={toy?._id} className="text-neutral-700">
                  <th>{index + 1}</th>
                  <td className="font-bold">{toy?.sellerName}</td>
                  <td className="font-bold">{toy?.toyName}</td>
                  <td className="font-bold">{toy?.subCategory}</td>
                  <td className="font-bold">{toy?.quantity}</td>
                  <td className="font-bold">${toy?.price}</td>
                  <th>
                    <Link to={`/toy/${toy._id}`} className="btn-detail">Details</Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToy;
