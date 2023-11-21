import { Link } from "react-router-dom";
import Cover from "../cover/Cover";
import MenuItem from "../popularMenu/MenuItem";

const MenuCategory = ({ coverImg, title, desc, divHeight, items }) => {
    return (
        <div>
            <Cover img={coverImg} title={title} desc={desc} divHeight={divHeight} />
            <div className="py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto py-8">
                    {
                        items?.map((item) => <MenuItem key={item._id} item={item} />)
                    }
                </div>
                <div className="flex justify-center">
                    <Link to={`/order/${title}`}><button className="hover:bg-[#111827] bg-[#E8E8E8] border-b border-[#BB8506] rounded px-2 py-1 hover:text-white">ORDER YOUR FAVOURITE FOOD</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;
