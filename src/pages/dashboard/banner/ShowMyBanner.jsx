import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { FaRegEdit } from "react-icons/fa";


const ShowMyBanner = () => {
    const axiosSecure = useAxiosSecure();
    const { data: banners = [], isLoading, isError } = useQuery({
        queryKey: ['banners'],
        queryFn: async () => {
            const res = await axiosSecure.get('/banners');
            return res.data;
        },
    });

    // get active banner id
    const { data: bannerId = [] } = useQuery({
        queryKey: ['bannerId'],
        queryFn: async () => {
            const res = await axiosSecure.get('/activeBanner');
            return res.data[0]._id;
        },
    });



    const [selectedBanner, setSelectedBanner] = useState(null);

    const handleBannerSelect = async (id, bannerId) => {
        setSelectedBanner((prevSelected) => (prevSelected === bannerId ? null : bannerId));

        const activeBannerId = { bannerId: id };
        const res = await axiosSecure.patch(`/activeBanner/${bannerId}`, activeBannerId);
        if (res) {
            toast.success('Banner is activated.');
        }

    };

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {banners.map((item) => (
                    <div key={item._id} className="border grid grid-cols-2 relative">
                        <div className="flex flex-col justify-center gap-2 pl-4">
                            <h1 className="text-xl font-bold leading-6">
                                {item.bannerHeading.length > 8
                                    ? item.bannerHeading.slice(8) + '..'
                                    : item.bannerHeading}
                            </h1>
                            <p className="overflow-ellipsis">
                                {item.bannerDesc.length > 30
                                    ? item.bannerDesc.slice(0, 30) + '...'
                                    : item.bannerDesc}
                            </p>
                            <Link to={`/${item.btnLink}`}>
                                <button className="bg-blue-600 rounded px-2 text-white">
                                    All Test
                                </button>
                            </Link>
                        </div>
                        <div className="absolute top-0 right-0 m-2">
                            <Link to={`/dashboard/updateBanner/${item._id}`}><FaRegEdit /></Link>
                            <label>
                                <input
                                    type="radio"
                                    name="selectedBanner"
                                    defaultChecked={bannerId === item._id}
                                    onChange={() => handleBannerSelect(item._id, bannerId)}
                                />
                            </label>
                        </div>
                        <div>
                            <img src={item.bannerImg} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowMyBanner;
