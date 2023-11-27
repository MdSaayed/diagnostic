import DatePicker from "react-datepicker";
import useAxiosSecure from './../../../components/hooks/useAxiosSecure';
import { toast } from "react-toastify";
import { useState } from "react";


const AddTest = () => {
    const axiosSecuire = useAxiosSecure();
    const [date, setDate] = useState(null);
    const [slots, setSlots] = useState(null);
    console.log(date,slots);

    const handleAddTest = async (e) => {
        e.preventDefault();
        const form = e.target;
        const testName = form.testName.value;
        const image = form.image.value;
        const price = form.price.value;
        const details = form.details.value;

        const newTest = { testName, image, price, date, slots, details }

        const res = await axiosSecuire.post('/tests', newTest);
        if (res) {
            toast.success('Successfull added your test.');
        }
    }
    


    return (
        <div>
            <h2 className="text-2xl font-bold text-center py-8">Add A New Test</h2>
            <div className="flex items-center justify-center">
                <form onSubmit={handleAddTest} className="w-[400px]" action="">
                    <div className="mb-2">
                        <label className="font-bold" htmlFor="testName">Test name:</label><br />
                        <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" type="text" name="testName" />
                    </div>
                    <div className="mb-2">
                        <label className="font-bold" htmlFor="image">Image Url</label><br />
                        <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" type="text" name="image" />
                    </div>
                    <div className="mb-2">
                        <label className="font-bold" htmlFor="price">Price*</label><br />
                        <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" type="number" name="price" />
                    </div>
                    <div className="mb-2">
                        <label className="font-bold" htmlFor="mobile">Date*</label><br />
                        <DatePicker selected={date} onChange={(date) => setDate(date)} className="py-1 px-4 border focus:outline-none rounded-sm w-full" />
                    </div>
                    <div className="mb-2">
                        <label className="font-bold" htmlFor="date">Slots*</label><br />
                        <input type="time" value={slots} onChange={(e) => setSlots(e.target.value)} className="py-[0.23rem] px-4 border focus:outline-none rounded-sm w-full" />
                    </div>
                    <div className="mb-2">
                        <label className="font-bold" htmlFor="details">Details</label>
                        <textarea className="py-1 px-4 border focus:outline-none rounded-sm w-full" name="details" id="" rows="5"></textarea>
                    </div>
                    <div>
                        <input className="bg-[#0067FF] text-white rounded py-1 px-6" type="submit" value="Add Test" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTest;



