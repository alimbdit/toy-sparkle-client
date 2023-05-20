import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import UpdateModal from "../UpdateModal/UpdateModal";

const MyToysRow = ({ myToy, handleDelete }) => {
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
  } = myToy;

  const defaultItemStyles = {
    itemShapes: ThinStar,
    itemStrokeWidth: 1,
    activeFillColor: "#ffb23f",
    activeStrokeColor: "#e17b21",
    inactiveFillColor: "#fff7e1",
    inactiveStrokeColor: "#e17b21",
  };

  return (
    <tr className="w-full">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-36 h-36 rounded">
              <img src={toyPhoto} alt="Toy Photo" />
            </div>
          </div>
          <div>
            <div className="font-bold text-xl">{toyName}</div>
            <div className="text-lg opacity-90">{subCategory}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="text-xl pl-2">{sellerName}</span>
        <br />
        <span className="badge mt-2 badge-ghost badge-md text-base">
          {sellerEmail}
        </span>
      </td>
      <td>
        <span className="text-lg">${price}</span>
        <br />
        <span>
          <Rating
            className="mt-2"
            style={{ maxWidth: 100 }}
            itemStyles={defaultItemStyles}
            value={Math.round(parseFloat(rating)) || 0}
            readOnly
          />
        </span>
      </td>
      <td className="text-lg">{quantity} </td>
      <td>
        <p className="w-30 whitespace-pre-line">
          {description?.split(" ").length > 20
            ? description?.split(" ").slice(0, 20).join(" ") + "..."
            : description}{" "}
        </p>
      </td>
      <th>
        {/* <button className="btn-update  mr-2" htmlFor="update-toy">
          Update
        </button> */}
       
        <label
          htmlFor="update-toy"
          className="btn-update cursor-pointer mr-2"
        >
          Update
        </label>
        
        <>
          <input
            type="checkbox"
            id="update-toy"
            className="modal-toggle"
          />
          <UpdateModal></UpdateModal>
        </>

        <button onClick={() => handleDelete(_id)} className="btn-delete">Delete</button>
      </th>
      
    </tr>
  );
};

export default MyToysRow;
