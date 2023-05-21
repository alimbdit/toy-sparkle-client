import { useContext, useEffect } from "react";
import Banner from "../../../components/Banner/Banner";
import ChoseUs from "../../../components/ChoseUs/ChoseUs";
import ToyTabs from "../../../components/ToyTabs/ToyTabs";
import useTitle from "../../../hooks/useTitle";
import Gallery from "../Gallery/Gallery";
import Review from "../Review/Review";
import { AuthContext } from "../../../Providers/AuthProvider";


const Home = () => {
    useTitle("Home")
    const {user} = useContext(AuthContext);
    
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ToyTabs></ToyTabs>
            <Review></Review>
            <ChoseUs></ChoseUs>
        </div>
    );
};

export default Home;