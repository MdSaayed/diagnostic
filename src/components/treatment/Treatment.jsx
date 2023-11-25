import SectionHeading from "../sectionTitle/SectionHeading";


const Treatment = () => {
    return (
        <div className="max-w-6xl mx-auto pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                    <SectionHeading heading={`Get virtual treatment <br/> anytime.`} desc={`<li>Schedule the appointment directly.</li><li>Search for your physician here, and contact their office.</li></li><li>View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.</li>`} />
                    <button className="bg-[#0067FF] py-2 px-6 text-white mt-8 rounded-full">Learn More</button>
                </div>
                <div>
                    <img src="https://i.ibb.co/XVw6WKM/Group-18665.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Treatment;