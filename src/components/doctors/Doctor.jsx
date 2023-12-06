import { GiRoundStar } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";

const Doctor = ({ doctor }) => {
    const { name, department, location, speciality, phone, email, address, about, hospitalAffiliation, image, bgColor, textColor, totalPatients } = doctor;


    return (
        <div className="text-[#181A1E] p-4 rounded-md flex flex-col  shadow hover:shadow-md">
            <img className="w-full" src={image} alt="" />
            <div>
                <h2 className="text-2xl font-bold mt-4 mb-2">{name}</h2>
                <div className="flex justify-between">
                    <button style={{ backgroundColor: bgColor, color: textColor }} className="px-4 py-1 rounded-sm">{department}</button>
                    <div className="flex items-center">
                        <GiRoundStar className="text-[#FEB60D] mr-3" />
                        <div>
                            <span className="font-bold">4.8</span>
                            <span>(177)</span>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <div>
                        <h2 className="text-[1rem] font-bold">{totalPatients}+ Patients</h2>
                        <p>{location}</p>
                    </div>
                    <div className=" flex flex-col items-center py-2">
                        <IoIosArrowRoundForward className="text-3xl w-6 h-6 rounded-full border hover:text-white hover:bg-[#0067FF]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;