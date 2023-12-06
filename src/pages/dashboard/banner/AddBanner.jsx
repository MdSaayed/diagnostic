import { toast } from "react-toastify";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";


const AddBanner = () => {
    const axiosSecuire = useAxiosSecure();

    const handleAddBanner = async (e) => {
        e.preventDefault();
        const form = e.target;
        const bannerHeading = form.bannerHeading.value;
        const bannerImg = form.bannerImg.value;
        const btnLink = form.btnLink.value;
        const bannerDesc = form.bannerDesc.value;

        const newbanner = { bannerHeading, bannerImg, btnLink, bannerDesc }

        const res = await axiosSecuire.post('/banners', newbanner);
        if (res) {
            toast.success('Successfully added your banner.');
        }
    }


    return (
        <div>
            <form onSubmit={handleAddBanner}>
                <div className="mb-2">
                    <label className="font-bold" htmlFor="bannerHeading">Banner Heading</label><br />
                    <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" placeholder="Banner Heading" type="text" name="bannerHeading" />
                </div>
                <div className="mb-2">
                    <label className="font-bold" htmlFor="bannerImg">Banner Image</label><br />
                    <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" placeholder="Banner Img Url" type="text" name="bannerImg" />
                </div>
                <div className="mb-2">
                    <label className="font-bold" htmlFor="btnLink">Banner Btn Link</label><br />
                    <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" placeholder="Banner Btn Link" type="link" name="btnLink" />
                </div>
                <div className="mb-2">
                    <label className="font-bold" htmlFor="bannerDesc">Banner Description</label>
                    <textarea className="py-1 px-4 border focus:outline-none rounded-sm w-full" placeholder="Banner description" name="bannerDesc" id="" rows="5"></textarea>
                </div>
                <div>
                    <input className="bg-[#0067FF] text-white rounded py-1 px-6" type="submit" value="Add Banner" />
                </div>
            </form>
        </div>
    );
};

export default AddBanner;