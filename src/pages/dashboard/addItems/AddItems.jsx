import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAxiosPublic from './../../../components/hooks/useAxiosPublic';
import useAxiosSecuire from '../../../components/hooks/useAxiosSecure'
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecuire = useAxiosSecuire();
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: { "content-type": "multipart/form-data" }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }

            const menuRes = await axiosSecuire.post('/menu', menuItem);
            if (menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    title: `${data.name} adde to the menu`,
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
            }
        }
    }

    return (
        <div>
            <SectionTitle heading='Add An Item' subHeading='Whats New' />
            <div className="flex items-center justify-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="font-medium" htmlFor="">Recipe Name</label>
                    <input className="border py-1 px-2 w-full mb-2" {...register("name")} placeholder="Recipe Name" />
                    <div className="flex gap-4">
                        <div>
                            <label className="font-medium" htmlFor="">Category</label>
                            <select className="border py-1 px-2 w-full mb-2" {...register("category")}>
                                <option value="pizza">Pizza</option>
                                <option value="dessert">Dessert</option>
                                <option value="soup">Soup</option>
                                <option value="salad">Salad</option>
                            </select>
                        </div>
                        <div>
                            <label className="font-medium" htmlFor="price">Price</label>
                            <input className="border py-1 px-2 mb-2 w-full" {...register("price")} type="number" placeholder="Price" />
                        </div>
                    </div>
                    <label className="font-medium" htmlFor="">Recipe Details</label>
                    <textarea className="border py-1 px-2 mb-2 w-full" {...register("recipe")} placeholder="Recipe Details"></textarea>
                    <input className="border py-1 px-2 mb-2 w-full" {...register("image")} type="file" id="" />
                    <input type="submit" value='Add item' className="bg-orange-600 text-white rounded-sm px-4 py-1" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;