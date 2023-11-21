import { Helmet } from "react-helmet-async";
import Cover from "../components/cover/Cover";
import Menu from "../components/menu/Menu";


const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro boss | Our menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div>
                <Cover img={'https://i.ibb.co/dD9dqy3/banner3.jpg'} title={'OUR MENU'} desc={'Would you like to try a dish?'} divHeight={'600px'} />
            </div>
            <Menu />
        </div>
    );
};

export default OurMenu;
