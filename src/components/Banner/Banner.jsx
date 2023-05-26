import { useEffect } from "react";
import pic1 from "../../assets/images/1.png";
import pic2 from "../../assets/images/2.png";
import pic3 from "../../assets/images/3.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])

  return (
    <>
      <div className="carousel w-full h-full">
        <div
          id="slide1"
          className="carousel-item  relative w-full bg-violet-100 "
        >
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center justify-center w-full gap-5 lg:gap-20 my-5">
            <div className="w-3/4 lg:w-full ml-20" data-aos="fade-right">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-neutral-700 mb-5">
                Best Kids Store <br /> & Online Shop
              </h2>
              <p className="text-lg mb-5 ">
                {" "}
                Where Playtime Knows No Bounds! Explore our diverse collection
                of toys, from action figures to puzzles, sparking endless fun
                and laughter. Unleash imagination and embark on unforgettable
                adventures at ToyWorld. Let the joy begin!
              </p>
              <button className="btn-violet mb-5">Shop Now</button>
            </div>
            <div className="w-full justify-center lg:justify-start flex" data-aos="fade-left">
              <img src={pic3} className=" object-cover px-2" />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full bg-violet-100">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center justify-center w-full gap-5 lg:gap-20 my-5">
            <div className="w-3/4 lg:w-full ml-20" data-aos="fade-right">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-neutral-700 mb-5">
                Best Kids Store <br /> & Online Shop
              </h2>
              <p className="text-lg mb-5">
                {" "}
                Where Playtime Knows No Bounds! Explore our diverse collection
                of toys, from action figures to puzzles, sparking endless fun
                and laughter. Unleash imagination and embark on unforgettable
                adventures at ToyWorld. Let the joy begin!
              </p>
              <button className="btn-violet  mb-5">Shop Now</button>
            </div>
            <div className="w-full justify-center lg:justify-start flex" data-aos="fade-left">
              <img src={pic2} className="w-3/4" />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full bg-violet-100">
        <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center w-full gap-3 lg:gap-20 my-5">
            <div className="w-3/4 lg:w-full ml-20" data-aos="fade-right">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-neutral-700 mb-5">
                Best Kids Store <br /> & Online Shop
              </h2>
              <p className="text-lg mb-5">
                {" "}
                Where Playtime Knows No Bounds! Explore our diverse collection
                of toys, from action figures to puzzles, sparking endless fun
                and laughter. Unleash imagination and embark on unforgettable
                adventures at ToyWorld. Let the joy begin!
              </p>
              <button className="btn-violet  mb-5">Shop Now</button>
            </div>
            <div className="w-full justify-center lg:justify-start flex" data-aos="fade-left">
              <img src={pic1} className="object-cover " />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
