import { FaEdit } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";

const MangeItem = ({ item }) => {
    const { name, image, price, _id } = item;
    return (
        <tr key={_id} className="border-t text-black border-t-gray-200">
            <td className="py-2 px-4"><img className="w-24" src={image} alt="" /></td>
            <td className="py-2 px-4">{name}</td>
            <td className="py-2 px-4">{price}</td>
            <td className="py-2 px-4 cursor-pointer text-orange-600"><FaEdit /></td>
            <td className="py-2 px-4">
                <button className="text-orange-600 py-1 px-2 ml-2 rounded-md">
                    <IoTrash />
                </button>
            </td>
        </tr>
    );
};

export default MangeItem;