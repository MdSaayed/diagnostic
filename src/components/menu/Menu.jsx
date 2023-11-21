import useMenu from "../hooks/useMenu";
import PopularMenu from "../popularMenu/PopularMenu";
import MenuCategory from "./MenuCategory";

const Menu = () => {
    const [menu, loading] = useMenu();
    const dessert = menu?.filter((item) => item?.category === 'dessert');
    const pizza = menu?.filter((item) => item?.category === 'pizza');
    const soup = menu?.filter((item) => item?.category === 'soup');
    const salad = menu?.filter((item) => item?.category === 'salad');

    return (
        <div>
            <PopularMenu />
            <MenuCategory items={dessert} title="dessert" coverImg="https://i.ibb.co/2FGgbKV/dessert-bg.jpg" desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." divHeight="500px" />
            <MenuCategory items={pizza} title="pizza" coverImg="https://i.ibb.co/2FGgbKV/dessert-bg.jpg" desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." divHeight="500px" />
            <MenuCategory items={soup} title="soup" coverImg="https://i.ibb.co/jZfkHwh/soup-bg.jpg" desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." divHeight="500px" />
            <MenuCategory items={salad} title="salad" coverImg="https://i.ibb.co/5TVCkGM/salad-bg.jpg" desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." divHeight="500px" />
        </div>
    );
};

export default Menu;
