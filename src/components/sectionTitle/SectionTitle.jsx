

const SectionTitle = ({ heading, subHeading, texColor }) => {
    return (
        <div style={{ color: texColor }} className="flex flex-col items-center py-8">
            <p className="text-yellow-600 mb-2 z-50">{subHeading}</p>
            <h2 className="text-3xl z-50 font-semibold inline-block border-y-2 px-8 py-2">{heading}</h2>
        </div>
    );
};

export default SectionTitle;