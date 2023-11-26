import { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";

const Appointment = () => {
    const testName = ["Please select", "Blood Checkup", "Diabetology", "Endocrinology", "Vaccination Center", "Interventional Cardiology", "Pulmonology", "Gastro Entorology", "Nephrology", "Psychiatry", "Obstetrics & Gynaecology", "Urology", "Physiotherapy", "Premarital Counseling"];

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState("12:00");

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const mobile = form.mobile.value;
        const selectedTest = form.testName.value;
        const message = form.message.value;
        console.log(name, email, mobile, selectedTest, selectedDate, selectedTime, message);
    };

    return (
        <div className="">
            <div className="max-w-6xl mx-auto py-16">
                <div className="flex items-center justify-center">
                    <form onSubmit={handleBooking} className="w-[400px]" action="">
                        <div className="mb-2">
                            <label className="font-bold" htmlFor="name">Name*</label> <br />
                            <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" type="text" name="name" />
                        </div>
                        <div className="mb-2">
                            <label className="font-bold" htmlFor="email">Email*</label><br />
                            <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" type="text" name="email" />
                        </div>
                        <div className="mb-2">
                            <label className="font-bold" htmlFor="email">Mobile*</label><br />
                            <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" type="text" name="mobile" />
                        </div>
                        <div className="mb-2">
                            <label className="font-bold" htmlFor="selectOption">Select a test:</label><br />
                            <select className="py-1 px-4 border focus:outline-none rounded-sm w-full" id="selectOption" name="testName" >{testName.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                            </select>
                        </div>
                        <div className="mb-2 flex gap-4">
                            <div>
                                <label className="font-bold" htmlFor="datePicker">Select a date: </label> <br />
                                <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} className="py-1 px-4 border focus:outline-none rounded-sm w-full" />
                            </div>
                            <div className="w-1/2">
                                <label className="font-bold" htmlFor="timePicker">Select a time:</label><br />
                                <input type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className="py-[0.23rem] px-4 border focus:outline-none rounded-sm w-full" />
                            </div>
                        </div>
                        <div className="mb-2">
                            <label className="font-bold" htmlFor="message">Message (optional)</label>
                            <textarea className="py-1 px-4 border focus:outline-none rounded-sm w-full" name="message" id="" rows="5"></textarea>
                        </div>
                        <div>
                            <input className="bg-[#0067FF] text-white rounded py-1 px-6" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
