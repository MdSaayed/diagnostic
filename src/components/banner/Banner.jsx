

const Banner = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-4 py-16 max-w-6xl mx-auto">
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold">World-Class<br/> health care for<br/> everyone</h1>
                    <p>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic, we never stop finding answers for patients.</p>
                    <button className="uppercase text-white bg-[#0067FF] py-1 px-8 rounded-full">All test</button>
                </div>
                <div className="flex gap-4">
                    <div>
                        <img src="https://i.ibb.co/3Mrcqtn/Group-18536.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-4 mt-8">
                        <img src="https://i.ibb.co/dGKRf8v/Group-18537.png" alt="" />
                        <img src="https://i.ibb.co/Jj7F40y/Group-18538.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;