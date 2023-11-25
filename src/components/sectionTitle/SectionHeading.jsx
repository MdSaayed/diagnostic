const SectionHeading = ({ heading, desc, textStyle }) => {
    const textPosition = {
        textAlign: textStyle,
        color: '#181A1E'
    };

    return (
        <div style={textPosition}>
            <h2 className="text-4xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: heading }} />
            <p dangerouslySetInnerHTML={{ __html: desc }}></p>
        </div>
    );
};

export default SectionHeading;

