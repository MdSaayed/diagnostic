import { FaEdit } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import { Link } from "react-router-dom";

const MangeItem = ({ item, handleDeleteMenu }) => {
    const { name, image, price, _id } = item;
    return (
        <tr key={_id} className="border-t text-black border-t-gray-200">
            <td className="py-2 px-4"><img className="w-24" src={image} alt="" /></td>
            <td className="py-2 px-4">{name}</td>
            <td className="py-2 px-4">{price}</td>
            <td className="py-2 px-4 cursor-pointer text-orange-600"><Link to={`/dashboard/updateItem/${_id}`}><FaEdit /></Link> </td>
            <td className="py-2 px-4">
                <button className="text-orange-600 py-1 px-2 ml-2 rounded-md">
                    <IoTrash onClick={() => handleDeleteMenu(_id)} />
                </button>
            </td>
        </tr>
    );
};

export default MangeItem;