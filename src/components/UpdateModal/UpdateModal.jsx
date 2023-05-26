import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const UpdateModal = ({myToy, handleUpdate}) => {
    // console.log(myToy?.price)

    const {user} = useContext(AuthContext);

    const {price, _id, description, quantity} = myToy;
    

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();
      

     const  updateSubmit = data => {
        handleUpdate(data)
        const modalId = document.getElementById(`update-toy-${_id}`);
        if(modalId){
            modalId.checked = false
        }
      }
    

    return (
    //     <div className="bg-rose-100 bg-opacity-25 pb-16">
    //   {/* <h2 className="text-center text-5xl font-bold text-violet-700 py-5 ">
    //     Update Toy
    //   </h2> */}
      
    // </div>
    <div className="bg-neutral-200 mx-5 lg:mx-10 rounded-md my-5 py-10  px-5 lg:px-20">
    <form onSubmit={handleSubmit(updateSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}

     

      <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 w-full mb-3">
       
      <input
            className="hidden"
            {...register("_id")}
            value={_id}
          />
        <div className="flex flex-col w-full">
          <label
            className=""
            htmlFor=""
          >
            <span className="text-lg font-medium text-violet-700 mb-1  pl-2">Price</span>
            </label>
          <input
            className="input input-bordered focus:outline-0 w-full "
            placeholder="Price"
            defaultValue={price}
            {...register("price")}
          />
         
         
        </div>
      </div>

     

      <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 w-full mb-3">
        
        <div className="flex flex-col w-full">
          <label
            
            htmlFor=""
          >
            <span className="text-lg font-medium text-violet-700 mb-1 pl-2">Available Quantity</span>
          
          
          </label>
          <input
          defaultValue={quantity}
            className="input input-bordered focus:outline-0 w-full "
            placeholder="Available Quantity"
            {...register("quantity")}
          />
         
        </div>
      </div>

      <div className="w-full flex flex-col">
      <label
            
            htmlFor=""
          >
            <span className="text-lg font-medium text-violet-700  pl-2">Detail Description</span>
            </label>
        <textarea
        defaultValue={description}
          className="input input-bordered focus:outline-0 mt-1 w-full h-20 py-2"
          placeholder="Detail Description"
          {...register("description")}
        />
        
       
      </div>

      {/* include validation with required or other standard HTML validation rules */}
      

      <input className="w-full py-2 cursor-pointer bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-xl font-medium my-3" type="submit" value="UPDATE" />
    </form>
  </div>
    );
};

export default UpdateModal;


 {/* <div className="px-5">
          <h1 className="text-4xl font-bold text-center text-amber-500 uppercase my-8">
            Terms and Conditions
          </h1>
          <h2 className="text-xl font-medium text-red-500 text-center mb-6">
            Welcome to our food website. By using our website, you agree to
            comply with and be bound by the following terms and conditions of
            use, which together with our privacy policy, govern our relationship
            with you in relation to this website.
          </h2>

          <ul className="px-5 list-decimal mb-20 text-lg text-gray-600 space-y-1">
            <li>
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </li>
            <li>
              This website uses cookies to monitor browsing preferences. If you
              do allow cookies to be used, personal information may be stored by
              us for use by third parties.
            </li>
            <li>
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness, or
              suitability of the information and materials found or offered on
              this website for any particular purpose. You acknowledge that such
              information and materials may contain inaccuracies or errors and
              we expressly exclude liability for any such inaccuracies or errors
              to the fullest extent permitted by law.
            </li>
            <li>
              Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products,
              services, or information available through this website meet your
              specific requirements.
            </li>
            <li>
              This website contains material which is owned by or licensed to
              us. This material includes, but is not limited to, the design,
              layout, look, appearance, and graphics. Reproduction is prohibited
              other than in accordance with the copyright notice, which forms
              part of these terms and conditions.
            </li>
            <li>
              All trademarks reproduced on this website which are not the
              property of, or licensed to, the operator are acknowledged on the
              website.
            </li>
            <li>
              Unauthorised use of this website may give rise to a claim for
              damages and/or be a criminal offense.
            </li>
            <li>
              From time to time, this website may also include links to other
              websites. These links are provided for your convenience to provide
              further information. They do not signify that we endorse the
              website(s). We have no responsibility for the content of the
              linked website(s).
            </li>
            <li>
              Your use of this website and any dispute arising out of such use
              of the website is subject to the laws of [insert country or
              state].
            </li>
          </ul>
        </div> */}