import SectionTitle from "../sectionTitle/SectionTitle";

const Featured = () => {
    return (
        <div className="relative bg-cover bg-center pb-8" style={{ backgroundImage: "url('https://i.ibb.co/BCbLfnv/featured.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <SectionTitle className='z-50' texColor={'#FFF'} subHeading={'---Check it out---'} heading={'FROM OUR MENU'} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto py-12 relative z-20">
                <div>
                    <img src="https://i.ibb.co/BCbLfnv/featured.jpg" alt="" />
                </div>
                <div className="text-white">
                    <p>March 20, 2023</p>
                    <h2 className="text-3xl">WHERE CAN I GET SOME?</h2>
                    <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="border-b-2 text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
