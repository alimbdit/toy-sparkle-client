import Banner from "../../../components/Banner/Banner";
import ChoseUs from "../../../components/ChoseUs/ChoseUs";
import ToyTabs from "../../../components/ToyTabs/ToyTabs";
import Gallery from "../Gallery/Gallery";
import Review from "../Review/Review";


const Home = () => {
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