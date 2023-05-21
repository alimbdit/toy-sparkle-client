import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import Loader from "../Loader";

const ToyTabs = () => {
  const [toys, setToys] = useState();
  const [activeTab, setActiveTab] = useState("Science Kits");

  useEffect(() => {
    fetch(`https://toy-sparkle-server.vercel.app/toyBySubCategory/${activeTab}`)
    .then(res => res.json())
    .then(result => setToys(result))
  }, [activeTab])

  const handleTab = (status) => {
    setActiveTab(status)
  }
  if(!toys){
    return <Loader></Loader>
  }

  console.log(toys)
  return (
    <div className="mt-10 mb-20">
        <h2 className="text-center text-5xl font-bold text-violet-700 py-5 ">
        Shop By Category
      </h2>
      <div className="tabs flex flex-col lg:flex-row items-center justify-center mb-2">
        <a onClick={() => handleTab("Science Kits")} className={`tab tab-lifted tab-lg ${activeTab === "Science Kits" ? " tab-active active-tab" : "inactive-tab"}`}>Science Kits</a>
        <a onClick={() => handleTab("Math Learning Toys")} className={`tab tab-lifted tab-lg ${activeTab === "Math Learning Toys" ? "active-tab tab-active" : "inactive-tab"}`}>Math Learning Toys</a>
        <a onClick={() => handleTab("Engineering Kits")} className={`tab tab-lifted tab-lg ${activeTab === "Engineering Kits" ? " tab-active active-tab" : "inactive-tab"}`}>Engineering Kits</a>
      </div>
      <div className="component">
      <div className=" grid grid-cols-1 lg:grid-cols-3 items-center lg:justify-start gap-5  my-10 px-5">
        {
            toys?.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
        }
      </div>
      </div>
    </div>
  );
};

export default ToyTabs;
