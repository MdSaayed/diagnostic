import React from 'react';
import { IoTrash } from "react-icons/io5";

const UserTable = ({ user, handleDeleteUser, handleMakeAdmin }) => {
    const { name, email, _id, role } = user;
    return (
        <tr key={_id} className="border-t text-black border-t-gray-200">
            <td className="py-2 px-4">{name}</td>
            <td className="py-2 px-4">{email}</td>
            <td onClick={()=>handleMakeAdmin(_id)} className="py-2 px-4 cursor-pointer text-orange-600">{role ? role : 'Make Admin'}</td>
            <td className="py-2 px-4">
                <button className="text-orange-600 py-1 px-2 ml-2 rounded-md">
                    <IoTrash onClick={() => handleDeleteUser(_id)} />
                </button>
            </td>
        </tr>
    );
};

export default UserTable;