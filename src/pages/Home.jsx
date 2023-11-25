import Banner from '../components/banner/Banner';
import Reviews from '../components/reviews/Reviews';
import Services from '../components/services/Services';
import Proud from '../components/proud/Proud';
import MedicalService from '../components/medicalService/MedicalService';
import Treatment from '../components/treatment/Treatment';
import Doctors from '../components/doctors/Doctors';
import Faq from '../components/faq/Faq';
import Review from '../components/review/Review';
import FeaturedStories from '../components/featuredStories/FeaturedStories';
import Facilities from '../components/facilities/Facilities';

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

