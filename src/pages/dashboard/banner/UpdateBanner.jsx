import React from 'react';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';

const UpdateBanner = () => {
    const { bannerHeading, bannerDesc, bannerImg, btnLink,_id } = useLoaderData();
    console.log(bannerHeading);
    const axiosSecuire = useAxiosSecure();

    const handleUpdateBanner = async (e) => {
        e.preventDefault();
        const form = e.target;
        const bannerHeading = form.bannerHeading.value;
        const bannerImg = form.bannerImg.value;
        const btnLink = form.btnLink.value;
        const bannerDesc = form.bannerDesc.value;

        const updateBanner = { bannerHeading, bannerImg, btnLink, bannerDesc }

        const res = await axiosSecuire.put(`/banners/${_id}`, updateBanner);
        if (res) {
            toast.success('Banner update successfully.');
        }
    }


    return (
        <div>
            <form onSubmit={handleUpdateBanner}>
                <div className="mb-2">
                    <label className="font-bold" htmlFor="bannerHeading">Banner Heading</label><br />
                    <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" defaultValue={bannerHeading} placeholder="Banner Heading" type="text" name="bannerHeading" />
                </div>
                <div className="mb-2">
                    <label className="font-bold" htmlFor="bannerImg">Banner Image</label><br />
                    <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" defaultValue={bannerImg} placeholder="Banner Img Url" type="text" name="bannerImg" />
                </div>
                <div className="mb-2">
                    <label className="font-bold" htmlFor="btnLink">Banner Btn Link</label><br />
                    <input className="py-1 px-4 border focus:outline-none rounded-sm w-full" defaultValue={btnLink} placeholder="Banner Btn Link" type="link" name="btnLink" />
                </div>
                <div className="mb-2">
                    <label className="font-bold" htmlFor="bannerDesc">Banner Description</label>
                    <textarea className="py-1 px-4 border focus:outline-none rounded-sm w-full" defaultValue={bannerDesc} placeholder="Banner description" name="bannerDesc" id="" rows="5"></textarea>
                </div>
                <div>
                    <input className="bg-[#0067FF] text-white rounded py-1 px-6" type="submit" value="Update Banner" />
                </div>
            </form>
        </div>
    );
};
export default UpdateBanner;