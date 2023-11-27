import React from 'react';
import useUpcomingAppointents from '../../../components/hooks/useUpcomingAppointents';
import { format } from 'date-fns';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const AllAppointment = () => {
    const axiosSecuire = useAxiosSecure();
    const [upcomingAppointments, loading, refetch] = useUpcomingAppointents();

    const formatDate = (dateString) => {
        const parsedDate = new Date(dateString);
        return format(parsedDate, 'MMMM dd, yyyy');
    };

    // handle cancel appointment
    const handleCancel = async (_id) => {
        console.log(_id);
        const res = await axiosSecuire.patch(`bookings/${_id}`);
        if (res) {
            toast.success('Appointment cancel successfully.');
            refetch();
        }
    }

    return (
        <div className="overflow-x-auto">
            {upcomingAppointments.length < 1 ? <>
                <div className='w-full h-[90vh] flex items-center justify-center'>
                    <p>No data found.</p>
                </div>
            </> : <>
                <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Test Name</th>
                            <th className="border border-gray-300 px-4 py-2">Mobile</th>
                            <th className="border border-gray-300 px-4 py-2">Date</th>
                            <th className="border border-gray-300 px-4 py-2">Selected Time</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                            <th className="border border-gray-300 px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {upcomingAppointments.map((appointment, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                                <td className="border border-gray-300 px-4 py-2 text-center">{appointment.name}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{appointment.email}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{appointment.testName}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{appointment.mobile}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{formatDate(appointment.date)}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{appointment.time}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    {appointment.status}
                                </td>
                                <td onClick={() => handleCancel(appointment._id)} className="border border-gray-300 px-4 py-2 text-center cursor-pointer">{appointment?.status == 'Canceled' ? '--' : 'Cancel'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>}
        </div>
    );
};

export default AllAppointment;