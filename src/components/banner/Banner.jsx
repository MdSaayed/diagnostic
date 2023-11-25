import { Link } from "react-router-dom";

const Banner = () => {
    const backgroundImageUrl = 'https://i.ibb.co/d45cNSw/k4lmtg-1024x1000.png';

    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden', // Ensure that the image doesn't overflow the container
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'rgba(0, 0, 255, 0.2)', // Blue-700 overlay color (adjust the alpha value as needed)
        zIndex: 1,
    };

    const contentStyle = {
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-85%, 50%)',
        zIndex: 2,
        textAlign: 'left',
        color: 'white',
    };

    const backgroundStyle = {
        width: '100%',
        height: '100%',
        background: `url(${backgroundImageUrl}) top center / cover no-repeat`,
        zIndex: 0,
    };

    return (
        <div style={containerStyle}>
            <div style={overlayStyle}></div>
            <div style={contentStyle}>
                <div className="space-y-5">
                    <h1 className="font-bold text-6xl">Your health is our top priority</h1>
                    <p>Unlock a healthier you with our comprehensive medical services. Enjoy an exclusive <span className="bg-yellow-400 rounded-sm px-1">30%</span> discount on all our services. Your well-being is our top priority, and we're here to provide you with the answers and care you need. Take the first step toward a healthier life today!</p>
                    <Link to='/allTest'><button className="bg-blue-700 rounded mt-4 py-1 px-6 uppercase">All tests</button></Link>
                </div>
            </div>
            <div style={backgroundStyle}></div>
        </div>
    );
};

export default Banner;
