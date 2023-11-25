import SectionHeading from "../sectionTitle/SectionHeading";


const Proud = () => {
    return (
        <div className="max-w-6xl mx-auto pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                    <img src="https://i.ibb.co/LJF636r/Group-18664.png" alt="" />
                </div>
                <div>
                    <SectionHeading heading={`Proud to be one of the <br /> nation's best`} desc={`For 30 years in a row, U.S. News & World Report has recognized us as one of the best public's hospitals in the Nation and #1 in Texas. <br /> <br />Our best is something we strive for each day, caring for our patients—not looking back at what we accomplished but towards what we can do tomorrow. Providing the best`} />
                    <button className="bg-[#0067FF] py-2 px-6 text-white mt-8 rounded-full">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Proud;