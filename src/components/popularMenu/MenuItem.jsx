

const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="flex gap-4">
            <div>
                <img style={{ borderRadius: '0px 200px 200px 200px' }} className="w-[100px]" src={image} alt="" />
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <h2 className="text-2xl">{name}</h2>
                    <p>${price}</p>
                </div>
                <div>
                    <p>{recipe}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;