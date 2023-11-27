import Banner from '../components/banner/Banner';
import Services from '../components/services/Services';
import Proud from '../components/proud/Proud';
import Treatment from '../components/treatment/Treatment';
import Faq from '../components/faq/Faq';
import Review from '../components/review/Review';
import FeaturedStories from '../components/featuredStories/FeaturedStories';
import Facilities from '../components/facilities/Facilities';
import MedicalService from './../components/medicalService/MedicalService';
import Doctors from './../components/doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Proud />
            <MedicalService />
            <Treatment />
            <Doctors />
            <Faq />
            <Review />
            <FeaturedStories />
            <Facilities />
        </div>
    );
};

export default Home;

