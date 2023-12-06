import SectionHeading from "../sectionHeading/SectionHeading";
import useDoctors from "../hooks/useDoctors";
import Doctor from "./Doctor";



const Doctors = () => {
    const [doctors] = useDoctors();
    return (
        <div className="bg-gradient-to-l from-[#01b5c511]">
            <div className='max-w-6xl mx-auto py-16'>
                <SectionHeading heading={`Our great doctors`} desc={`Exceptional expertise and compassionate care <br/> our great doctors prioritize your health and well-being.`} textStyle='center' />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-16">
                    {doctors?.map(doctor => <Doctor key={doctor._id} doctor={doctor} />)}





                </div>
            </div>
        </div>
    );
};

export default Doctors;