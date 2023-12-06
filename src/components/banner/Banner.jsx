import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Banner = () => {
    const [displayBanner, setDisplayBanner] = useState([]);
    const [isActive, setIsActive] = useState(null);
    const axiosSecure = useAxiosSecure();
    const { data: banners = [], isLoading, isError } = useQuery({
        queryKey: ['banners'],
        queryFn: async () => {
            const res = await axiosSecure.get('/banners');
            return res.data;
        },
    });

    // get active banner id
    const { data: activeBannerId = [] } = useQuery({
        queryKey: ['bannerId'],
        queryFn: async () => {
            const res = await axiosSecure.get('/activeBanner');
            return res.data;
        },
    });

    useEffect(() => {
        if (activeBannerId !== undefined && Array.isArray(activeBannerId) && activeBannerId.length > 0) {
            const bannerId = activeBannerId.map(item => item?.bannerId);
            setIsActive(bannerId);
        }
    }, [activeBannerId]);

    useEffect(() => {
        if (isActive !== null) {
            const filter = banners?.filter(banner => banner?._id.includes(isActive));
            setDisplayBanner(filter);
        }
    }, [isActive, banners]);

    return (
        <div className="bg-gradient-to-r from-[#d0f8fc6c] to-[#fcebc4]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-4 py-16 max-w-6xl mx-auto">
                {displayBanner?.map(banner => (<>
                    <div key={banner?._id} className="space-y-4">
                        <h1 className="text-5xl font-bold">{banner?.bannerHeading}</h1>
                        <p>{banner.bannerDesc}</p>
                        <Link className="mt-8 block" to={`/${banner.btnLink}`}>
                            <button className="uppercase text-white bg-[#0067FF] py-1 px-8 rounded-full">All test</button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <img className="w-full" src={banner.bannerImg} alt="" />
                    </div>
                </>))}
            </div>
        </div>
    );
};

export default Banner;
