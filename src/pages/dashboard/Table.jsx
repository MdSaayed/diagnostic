import React from 'react';

const Table = ({ item, handleDelete }) => {
    const { name, image, price, _id } = item;
    return (
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b text-center">Image</th>
                    <th className="py-2 px-4 border-b text-center">Name</th>
                    <th className="py-2 px-4 border-b text-center">Price</th>
                    <th className="py-2 px-4 border-b text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr key={_id}>
                    <td className="py-2 px-4 border-b">
                        <div className="flex justify-center">
                            <img src={image} alt={name} className="w-24" />
                        </div>
                    </td>
                    <td className="py-2 px-4 border-b text-center">{name}</td>
                    <td className="py-2 px-4 border-b text-center">${price.toFixed(2)}</td>
                    <td className="py-2 px-4 border-b text-center">
                        <button onClick={() => handleDelete(_id)} className="bg-red-500 text-white py-1 px-2 rounded">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
