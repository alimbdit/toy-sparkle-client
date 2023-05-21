
import Lottie from "lottie-react";
import loading from "../../public/loading.json";

const Loader = () => {
    return (
        <div className='flex justify-center items-center'>
            <Lottie className=" lg:w-1/4 " animationData={loading} loop={true} />
        </div>
    );
};

export default Loader;