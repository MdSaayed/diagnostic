import Swal from "sweetalert2";
import useAxiosSecure from "../../components/hooks/useAxiosSecure";
import useCart from "../../components/hooks/useCart";
import Table from "./table";

const Cart = () => {
    const [cart, refetch] = useCart();
    const cartTotal = cart?.reduce((total, item) => total + item.price, 0);
    const axiosSecuire = useAxiosSecure();

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                axiosSecuire.delete(`carts/${_id}`);
                refetch();
            }
        });
    }

    return (
        <div>
            <div className="flex justify-between">
                <h2 className="text-2xl font-medium">Cart Item: {cart.length}</h2>
                <h2 className="text-2xl font-medium">Total Price {cartTotal}</h2>
                <button className="bg-orange-500 p-1 px-3 rounded-sm text-white">Pay</button>
            </div>
            <div className="py-8">
                {
                    cart?.map((item, idx) => <Table key={item._id} item={item} handleDelete={handleDelete} />)
                }
            </div>
        </div>

    );
};

export default Cart;