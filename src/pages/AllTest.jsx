import useTest from "../components/hooks/useTest";
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { format } from 'date-fns';
import { Link } from "react-router-dom";
import { RiArrowRightUpLine } from "react-icons/ri";




const AllTest = () => {
    const [tests] = useTest();

    const formatDate = (dateString) => {
        const parsedDate = new Date(dateString);
        return format(parsedDate, 'MMMM dd, yyyy');
    };

    return (
        <div className="max-w-6xl mx-auto py-16">
            <h2 className="text-3xl font-bold text-center pb-6">All Test</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tests.map(item => <>
                    <div className="flex gap-4 shadow-sm rounded border">
                        <div><img className="w-32 h-full rounded-l" src={item?.image} alt="" /></div>
                        <div className="py-2">
                            <h2 className="font-bold">{item.testName}</h2>
                            <div className="flex gap-4 mb-2">
                                <div className="flex gap-2 items-center"><IoMdTime className="text-[13px]"></IoMdTime> <span className="text-[12px]">{item?.slot}</span></div>
                                <div className="flex gap-2 items-center"><SlCalender className="text-[10px]" /> <span className="text-[12px]">{formatDate(item?.date)}</span></div>
                            </div>
                            <div>
                                <Link to={`/tests/details/${item?._id}`}><span className="text-blue-600 flex text-[12px] items-center gap-3">Details<RiArrowRightUpLine /></span></Link>
                            </div>
                        </div>
                    </div>
                </>)}
            </div>
        </div>
    );
};

export default AllTest;