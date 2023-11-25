import React from 'react';
import { IoFileTrayStacked, IoTrash } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";

import Swal from 'sweetalert2';

const UserTable = ({ user, handleDeleteUser, handleMakeAdmin, handleStatus }) => {
    const { name, email, _id, role, status } = user;

    // handle user details
    const handlePopup = (user) => {
        const { name, email, _id, role, status, district, upazila, blood } = user;

        const content = `
            <div>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>District:</strong> ${district}</p>
                <p><strong>Upazila:</strong> ${upazila}</p>
                <p><strong>Blood gorup:</strong> ${blood}</p>
                <p><strong>Role:</strong> ${role}</p>
                <p><strong>Status:</strong> ${status}</p>
            </div>
        `;

        Swal.fire({
            title: 'User Information',
            html: content,
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
            },
            showConfirmButton: false,
            customClass: {
                closeButton: 'my-custom-close-button',
            },
            showCloseButton: true, // Show close button
        });
    };

    return (
        <tr key={_id} className="border-t text-black border-t-gray-200">
            <td className="py-2 px-4">{name}</td>
            <td className="py-2 px-4">{email}</td>
            <td onClick={() => handleMakeAdmin(_id)} className="py-2 px-4 cursor-pointer text-red-700">{role ? role : 'Make Admin'}</td>
            <td onClick={() => handleStatus(_id)} className="py-2 px-4 cursor-pointer">{status}</td>
            <td onClick={() => handlePopup(user)} className="py-2 px-4 cursor-pointer text-center"><FaRegEye /></td>
            <td className="py-2 px-4">
                <button className="text-red-700 py-1 px-2 ml-2 rounded-md">
                    <IoTrash onClick={() => handleDeleteUser(_id)} />
                </button>
            </td>
        </tr>
    );
};

export default UserTable;