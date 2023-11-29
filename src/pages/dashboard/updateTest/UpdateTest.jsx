import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { format } from 'date-fns';


const UpdateTest = () => {
    const axiosSecuire = useAxiosSecure();
    const [newDate, setNewDate] = useState(null);
    const [time, setItme] = useState(null);
    const { testName, image, price, date, details, slot, _id } = useLoaderData();

    const handleUpdateTest = async (e) => {
        e.preventDefault();
        const form = e.target;
        const testName = form.testName.value;
        const image = form.image.value;
        const price = form.price.value;
        const details = form.details.value;
        const slot = form.slot.value;

        const updateTest = { testName, image, price, date, time, slot, details }

        const res = await axiosSecuire.put(`/tests/${_id}`, updateTest);
        if (res) {
            toast.success('Test update successfully.');
        }
    }

    const formatDate = (dateString) => {
        const parsedDate = new Date(dateString);
        return format(parsedDate, 'MMMM dd, yyyy');
    };


    return (
        <div className="py-8">
            <h2 className="text-2xl font-bold text-center py-8">Update Test</h2>
            <div className="flex items-center justify-center">
                <form onSubmit={handleUpdateTest} className="w-[400px]" action="">
                    <div className="mb-2">
                        <label className="font-bold" htmlFor="testName">Test name:</label><br />
                        <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" type="text" defaultValue={testName} name="testName" />
                    </div>
                    <div className="mb-2">
                        <label className="font-bold" htmlFor="image">Image Url</label><br />
                        <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" type="text" defaultValue={image} name="image" />
                    </div>
                    <div className="mb-2">
                        <label className="font-bold" htmlFor="price">Price*</label><br />
                        <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" type="number" defaultValue={price} name="price" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mb-2">
                            <label className="font-bold" htmlFor="mobile">Date*</label><br />
                            <DatePicker defaultValue={formatDate(date)} selected={newDate} onChange={(newDate) => setNewDate(newDate)} className="py-1 px-4 border focus:outline-none rounded-sm w-full" />
                        </div>
                        <div className="mb-2 w-full">
                            <label className="font-bold" htmlFor="date">Time*</label><br />
                            <input type="time" value={time} onChange={(e) => setItme(e.target.value)} className="py-[0.23rem] px-4 border focus:outline-none rounded-sm w-full" />
                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="font-bold" htmlFor="slot">Slots*</label><br />
                        <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" defaultValue={slot} type="number" name="slot" required />
                    </div>
                    <div className="mb-2">
                        <label className="font-bold" htmlFor="details">Details</label>
                        <textarea className="py-1 px-4 border focus:outline-none rounded-sm w-full" defaultValue={details} name="details" id="" rows="5"></textarea>
                    </div>
                    <div>
                        <input className="bg-[#0067FF] text-white rounded py-1 px-6" type="submit" value="Update Test" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTest;



