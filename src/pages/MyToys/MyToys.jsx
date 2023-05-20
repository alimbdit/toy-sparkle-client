import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "../../components/MyToysRow/MyToysRow";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [sort, setSort] = useState("");
  const [myToys, setMyToys] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);
  console.log(myToys);

  const handleSort = async (sortText) => {
    setSort(sortText);
    await fetch(`http://localhost:5000/toys/${user?.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ sortText }),
    })
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              
              const remaining = myToys.filter(
                (booking) => booking._id !== id 
              );
              setMyToys(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              
            }
          });
        
      }
    });
  };

  //   const handleSort = (tabName) => {
  //     setActiveTab(tabName);
  //   };
  return (
    <div className="bg-rose-100 bg-opacity-25 pb-16">
      <h2 className="text-center text-5xl font-bold text-violet-700 py-5 ">
        My Toys
      </h2>
      <div className="bg-neutral-200 mx-1 lg:mx-5 rounded-md my-5 py-10  px-2 lg:px-10">
        <div className="btn-group mb-2">
          <button
            onClick={() => handleSort("ascending")}
            className={`rounded-s ${
              sort == "ascending" ? "btn-sort" : "btn-sort-hover "
            }`}
          >
            Ascending
          </button>
          <button
            onClick={() => handleSort("descending")}
            className={`rounded-e ${
              sort == "descending" ? "btn-sort" : "btn-sort-hover "
            }`}
          >
            Descending
          </button>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-orange-600 ">
                <th className="text-base text-center">Toy</th>
                <th className="text-base">Seller</th>
                <th className="text-base">Price & Rating</th>
                <th className="text-base ">In Stock</th>
                <th className="text-base text-center">Detail Info</th>
                {/* <th className="text-base"></th> */}
                <th></th>
              </tr>
            </thead>
            <tbody className="w-full">
              {user &&
                myToys?.map((myToy) => (
                  <MyToysRow key={myToy._id} myToy={myToy} handleDelete={handleDelete}></MyToysRow>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
