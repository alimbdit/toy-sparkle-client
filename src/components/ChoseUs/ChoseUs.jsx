import { FaDollarSign, FaServicestack, FaSwatchbook, FaSeedling } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ChoseUs = () => {

    useEffect(() => {
        AOS.init({duration: 1000});
      }, [])

  return (
    <div className=" my-10 lg:mt-16 lg:mb-28">
      <div className=" component gap-10 flex flex-col lg:flex-row items-center ">
        <div className="w-full text-center lg:text-end" >
          <h2 className="text-5xl font-bold text-violet-700 dark-heading mb-5" data-aos="fade-down">
            Why Chose Us
          </h2>
          <p className="text-lg text-neutral-700 dark-text" data-aos="fade-up">
            We prioritize the safety and happiness of your little ones. Our toys
            go through rigorous quality checks to ensure they meet the highest
            standards. We carefully select toys from reputable brands known for
            their craftsmanship and commitment to quality.{" "}
          </p>
          <p className="text-lg text-neutral-700 dark-text" data-aos="fade-up">
            We offer an extensive selection of toys that cater to all ages and
            interests. From classic favorites to the latest trends, our
            collection is thoughtfully curated to bring joy and spark
            imagination. Whether it&apos;s action figures, board games, or
            creative playsets, we have something to captivate every child&apos;s
            heart.
          </p>
          {/* <p className="text-lg text-neutral-700">
          We believe in the power of play as a tool for learning. Many of our toys are designed to foster creativity, problem-solving skills, and cognitive development. With our educational toys, you can inspire curiosity and provide valuable learning experiences for your children.
          </p> */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
          <div className="shadow-lg text-white p-5 bg-orange-600 rounded-es-3xl rounded-se-3xl border text-center" data-aos="zoom-in-left">
            <div className="flex justify-center ">
              <FaDollarSign className="text-6xl bg-white text-orange-400 p-2 rounded-full mb-1"></FaDollarSign>
            </div>
            <div>
              {" "}
              <hr className="opacity-30 mx-auto my-2" />
            </div>
            <h3 className="text-2xl font-medium mb-1">Competitive Pricing</h3>
            <p className="">
              For the importance of affordability. We offer
              competitive pricing without compromising on quality.
            </p>
          </div>
          <div className="shadow-lg text-white p-5 bg-orange-600 rounded-es-3xl rounded-se-3xl border text-center" data-aos="zoom-in-left">
            <div className="flex justify-center ">
              <FaServicestack className="text-6xl bg-white text-orange-400 p-2 rounded-full mb-1"></FaServicestack>
            </div>
            <div >
              {" "}
              <hr className="opacity-30 mx-auto my-2" />
            </div>
            <h3 className="text-2xl font-medium mb-1">Excellent Service</h3>
            <p>
              Our friendly and knowledgeable customer service team is ready to
              assist you with any concerns.
            </p>
          </div>
          <div className="shadow-lg text-white p-5 bg-orange-600 rounded-es-3xl rounded-se-3xl border text-center" data-aos="zoom-in-left">
          <div className="flex justify-center ">
              <FaSwatchbook className="text-6xl bg-white text-orange-400 p-2 rounded-full mb-1"></FaSwatchbook>
            </div>
            <div >
              {" "}
              <hr className="opacity-30 mx-auto my-2" />
            </div>
            <h3 className="text-2xl font-medium mb-1">Educational Value</h3>
            <p>
               Our
              collection includes toys that stimulate creativity and critical thinking skills.
            </p>
          </div>
          <div className="shadow-lg text-white p-5 bg-orange-600 rounded-es-3xl rounded-se-3xl border text-center" data-aos="zoom-in-left">
          <div className="flex justify-center ">
              <FaSeedling className="text-6xl bg-white text-orange-400 p-2 rounded-full mb-1"></FaSeedling>
            </div>
            <div >
              {" "}
              <hr className="opacity-30 mx-auto my-2" />
            </div>
            <h3 className="text-2xl font-medium mb-1">Quality and Safety</h3>
            <p>
            Each product
              undergoes thorough testing to ensure it meets stringent safety
              standards.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseUs;
