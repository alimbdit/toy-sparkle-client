import React, { useEffect } from "react";
import sc1 from "../../../assets/images/science/sc1.jpg";
import sc2 from "../../../assets/images/science/sc2.jpg";
import sc3 from "../../../assets/images/science/sc3.jpg";
import sc4 from "../../../assets/images/science/sc4.jpg";
import sc5 from "../../../assets/images/science/sc5.jpg";
import sc6 from "../../../assets/images/science/sc6.jpg";
import en1 from "../../../assets/images/engineering/en1.jpg";
import en2 from "../../../assets/images/engineering/en2.jpg";
import en3 from "../../../assets/images/engineering/en3.jpg";
import en4 from "../../../assets/images/engineering/en4.jpg";
import en5 from "../../../assets/images/engineering/en5.jpg";
import en6 from "../../../assets/images/engineering/en6.jpg";
import mt1 from "../../../assets/images/math/mt1.jpg";
import mt2 from "../../../assets/images/math/mt2.jpg";
import mt3 from "../../../assets/images/math/mt3.jpg";
import mtland from "../../../assets/images/math/mtland.jpg";
import mtrect from "../../../assets/images/math/mtrect.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])


  return (
    <div className=" bg-rose-100 bg-opacity-25 py-10 pb-16">
        <h2 className="text-center text-5xl font-bold text-violet-700 dark-heading py-5 ">
        Photo Gallery
      </h2>
        <div className="component">
      <div className="grid grid-cols-2 lg:flex lg:flex-row gap-1">
        <div className="" data-aos="flip-right"
     data-aos-easing="ease-out-cubic">
          <img className="w-56 h-52 shadow-lg border" src={sc1} alt="" />
        </div>
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic">
          <img className="w-56  h-52 shadow-lg border" src={sc2} alt="" />
        </div>
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic">
          <img className="w-56 h-52 shadow-lg border" src={sc3} alt="" />
        </div>
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic">
          <img className="w-56 h-52 shadow-lg border" src={sc4} alt="" />
        </div>
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic">
          <img className="w-56 h-52 shadow-lg border" src={mt1} alt="" />
        </div>
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic">
          <img className="w-56 h-52  shadow-lg border" src={mt2} alt="" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-1 mt-1">
        <div className="flex-1" data-aos="flip-up"
     data-aos-easing="ease-out-cubic">
          <img className="w-full h-64 shadow-lg  border" src={mtland} alt="" />
        </div>
        <div className="flex-1" data-aos="flip-up"
     data-aos-easing="ease-out-cubic">
          <img className="h-64 w-full shadow-lg border flex-1" src={en1} alt="" />
        </div>
        <div className="flex-1" data-aos="flip-up"
     data-aos-easing="ease-out-cubic">
          <img className="h-64 w-full shadow-lg border flex-1" src={en2} alt="" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-1 mt-1">
        <div className="flex-1" data-aos="zoom-in-left">
          <img className="w-full h-[260px] shadow-lg border" src={mtrect} alt="" />
        </div>
        <div className="grid mb-1 grid-cols-2 gap-1 h-64">
            <img src={en5} className="shadow-lg border w-56 lg:w-36 h-32" alt="" data-aos="zoom-in"/>
            <img src={en6} className="shadow-lg border w-56 lg:w-36 h-32" alt="" data-aos="zoom-in"/>
            <img src={mt3} className="shadow-lg border w-56 lg:w-36 h-32" alt="" data-aos="zoom-in"/>
            <img src={en4} className="shadow-lg border w-56 lg:w-36 h-32" alt="" data-aos="zoom-in" />
     </div>
        <div className="flex-1" data-aos="zoom-in-right">
          <img className="w-full h-[260px]  shadow-lg border flex-1" src={en3} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gallery;
