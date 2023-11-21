import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";


const FoodCart = ({ item }) => {
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [, refetch] = useCart();
    const axiosSecuire = useAxiosSecure();
    const { name, recipe, image, price, _id } = item;

    const handleAddToCarts = () => {
        if (user && user?.email) {
            const cartItem = {
                menuId: _id,
                name,
                recipe,
                image,
                price,
                email: user?.email
            }
            axiosSecuire.post('/carts', cartItem)
                .then(res => {
                    refetch();
                    toast('Product added to the carts')
                })
                .catch(err => console.log(err))
        } else {
            Swal.fire({
                title: "You are not login",
                text: "First login and then add to cart",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signin', { state: { from: location } });
                }
            });
        }
    }

    return (
        <div className="bg-[#F3F3F3] rounded-sm">
            <div>
                <img className="w-full" src={image} alt="" />
            </div>
            <div className="flex items-center flex-col p-4">
                <h2 className="text-xl text-center">{name}</h2>
                <p className="my-2 text-center">{recipe}</p>
                <button onClick={handleAddToCarts} className="hover:bg-[#111827] bg-[#E8E8E8] border-b border-[#BB8506] rounded px-2 py-1 hover:text-white">Add to cart</button>
            </div>
        </div>
    );
};

export default FoodCart;