const Cover = ({ img, title, desc, divHeight }) => {
    const backgroundStyle = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        height: divHeight,
    };

    return (
        <div className="flex items-center justify-center" style={backgroundStyle}>
            <div className="bg-[#00000096] w-full max-w-6xl mx-auto text-white p-12">
                <h2 className="text-center text-4xl font-bold">{title}</h2>
                <p className="text-center mt-2">{desc}</p>
            </div>
        </div>
    );
};

export default Cover;
