import { useEffect, useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../hooks/useMenu";


const PopularMenu = () => {
    const [menu, loading] = useMenu();
    const popular = menu?.filter((item) => item.category === 'popular');

    return (
        <div className="max-w-6xl mx-auto py-16">
            <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                {
                    popular?.map((item) => <MenuItem key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default PopularMenu;