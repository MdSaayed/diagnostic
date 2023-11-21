import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'

const Banner = () => {
    return (
        <div className="">
            <Carousel>
                <div>
                    <img src="https://i.ibb.co/3vrrTmp/03.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/mz67h6b/04.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/1b8rgD8/05.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/GRCHF7f/06.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/Pw6BxqZ/banner.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/h8XMWLH/01.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/6nVjYcB/02.jpg" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
