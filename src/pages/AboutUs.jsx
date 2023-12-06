import AboutBanner from "../components/banner/AboutBanner";
import SectionHeading from './../components/sectionHeading/SectionHeading';
import Review from './../components/review/Review';


const AboutUs = () => {
    return (
        <div className="mx-w-6xl mx-auto">
            <AboutBanner />
            <div className="py-16 max-w-6xl mx-auto">
                <SectionHeading heading={`The History of our<br/> Medical care`} textStyle='center' />
                <div className="py-8">
                    <h2 className="font-bold text-xl my-2">Our Story</h2>
                    <p>For 30 years in a row, U.S. News & World Report has recognized us as one of the best public's hospitals in the Nation and #1 in Texas.<br /> Our best is something we strive for each day, caring for our patients—not looking back at what we accomplished but towards what we can do tomorrow. Providing the best<br />Whatever the need, Grady fulfills it – even as we continue to raise the bar for medical care in the region. The world’s leading physicians come to Grady to practice here, teach here, and save patients whose conditions are beyond the capabilities of other hospitals.</p>
                    <div className="py-8">
                        <img src="https://i.ibb.co/X2sS9NC/Group-18583-1.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto">
                <SectionHeading heading={`Built by patients, for<br/> patients.`} desc={`Patient-driven platform, designed by and for individuals,<br/> prioritizing an empathetic and user-friendly healthcare experience.`} textStyle='center' />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
                    <div className="rounded px-4 py-8 bg-[#01B5C5] text-white">
                        <h2 className="text-center text-5xl font-extrabold mb-2">2.4M</h2>
                        <p className="text-center">Platform for 2.4M, Johns Hopkins Medicine redefines healthcare, ensuring active patient participation in well-being.</p>
                    </div>
                    <div className="rounded px-4 py-8 bg-[#9771FF] text-white">
                        <h2 className="text-center text-5xl font-extrabold mb-2">903 K</h2>
                        <p className="text-center">Profound influence: 2.4M served, 280K ER visits. Johns Hopkins Medicine excels in diverse medical needs and urgent scenarios.</p>
                    </div>
                    <div className="rounded px-4 py-8 bg-[#FF9500] text-white">
                        <h2 className="text-center text-5xl font-extrabold mb-2">148 K</h2>
                        <p className="text-center">Johns Hopkins Medicine provides compassionate care for 2.4M patients, emphasizing user-friendly experiences and support for diverse medical conditions.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl-mx-auto">
                <Review />
            </div>
        </div>
    );
};

export default AboutUs;