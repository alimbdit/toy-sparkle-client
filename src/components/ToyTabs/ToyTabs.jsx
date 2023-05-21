import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const ToyTabs = () => {
  const [toys, setToys] = useState();
  const [activeTab, setActiveTab] = useState("Science Kits");

  useEffect(() => {
    fetch(`http://localhost:5000/toyBySubCategory/${activeTab}`)
    .then(res => res.json())
    .then(result => setToys(result))
  }, [activeTab])

  const handleTab = (status) => {
    setActiveTab(status)
  }

  console.log(toys)
  return (
    <div>
        <h2 className="text-center text-5xl font-bold text-violet-700 py-5 ">
        Shop By Category
      </h2>
      <div className="tabs flex justify-center mb-2">
        <a onClick={() => handleTab("Science Kits")} className={`tab tab-lifted tab-lg ${activeTab === "Science Kits" ? " tab-active active-tab" : "inactive-tab"}`}>Science Kits</a>
        <a onClick={() => handleTab("Math Learning Toys")} className={`tab tab-lifted tab-lg ${activeTab === "Math Learning Toys" ? "active-tab tab-active" : "inactive-tab"}`}>Math Learning Toys</a>
        <a onClick={() => handleTab("Engineering Kits")} className={`tab tab-lifted tab-lg ${activeTab === "Engineering Kits" ? " tab-active active-tab" : "inactive-tab"}`}>Engineering Kits</a>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-5 lg:gap-20 my-10 px-5">
        {
            toys?.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
        }
      </div>
    </div>
  );
};

export default ToyTabs;
