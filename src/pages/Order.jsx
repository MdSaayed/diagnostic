import useMenu from "../components/hooks/useMenu";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCart from "../components/foodCard/FoodCart";
import Cover from "../components/cover/Cover";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['dessert', 'pizza', 'soup', 'salad'];
    const { category } = useParams();
    const initialIdx = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIdx);
    const [menu] = useMenu();
    
    const dessert = menu?.filter((item) => item?.category === 'dessert');
    const pizza = menu?.filter((item) => item?.category === 'pizza');
    const soup = menu?.filter((item) => item?.category === 'soup');
    const salad = menu?.filter((item) => item?.category === 'salad');

    return (
        <div>
            <div>
                <Cover img="https://i.ibb.co/0cmLM1Z/Rectangle-1.png" title="OUR SHOP" desc="Would you like to try a dish?" divHeight="600px" />
                <div className="max-w-6xl mx-auto py-16">
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <Tab>Dessert</Tab>
                            <Tab>Pizza</Tab>
                            <Tab>Soup</Tab>
                            <Tab>Salad</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {dessert.map(item => <FoodCart key={item._id} item={item} />)}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {pizza.map(item => <FoodCart key={item._id} item={item} />)}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {soup.map(item => <FoodCart key={item._id} item={item} />)}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {salad.map(item => <FoodCart key={item._id} item={item} />)}
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Order;
