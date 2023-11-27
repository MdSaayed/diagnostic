import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { MdKeyboardArrowDown } from "react-icons/md";
import SectionHeading from '../sectionHeading/SectionHeading';

const Faq = () => {
    return (
        <div className='max-w-6xl mx-auto py-16'>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className='flex justify-center'>
                    <img className="h-3/4" src="https://i.ibb.co/CMh1Mzr/Images.png" alt="" />
                </div>
                <div className="pt-16 md:pt-0 md:pl-8">
                    <SectionHeading heading={`Most questions by our<br/> beloved patients`} />
                    <Accordion className="mt-8">
                        <AccordionItem className="mb-4">
                            <AccordionItemHeading>
                                <AccordionItemButton className="border py-2 px-4 rounded flex items-center justify-between">
                                    <span>01    What is your medical care?</span>
                                    <span className="ml-2"><MdKeyboardArrowDown /></span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="px-4">
                                <p className="text-gray-700">
                                    One Medical was founded on a better model of care – one designed around patients’ needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem className="mb-4">
                            <AccordionItemHeading>
                                <AccordionItemButton className="border py-2 px-4 rounded flex items-center justify-between">
                                    <span>01    What is your medical care?</span>
                                    <span className="ml-2"><MdKeyboardArrowDown /></span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="px-4">
                                <p className="text-gray-700">
                                    One Medical was founded on a better model of care – one designed around patients’ needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem className="mb-4">
                            <AccordionItemHeading>
                                <AccordionItemButton className="border py-2 px-4 rounded flex items-center justify-between">
                                    <span>01    What is your medical care?</span>
                                    <span className="ml-2"><MdKeyboardArrowDown /></span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="px-4">
                                <p className="text-gray-700">
                                    One Medical was founded on a better model of care – one designed around patients’ needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem className="mb-4">
                            <AccordionItemHeading>
                                <AccordionItemButton className="border py-2 px-4 rounded flex items-center justify-between">
                                    <span>01    What is your medical care?</span>
                                    <span className="ml-2"><MdKeyboardArrowDown /></span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="px-4">
                                <p className="text-gray-700">
                                    One Medical was founded on a better model of care – one designed around patients’ needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem className="mb-4">
                            <AccordionItemHeading>
                                <AccordionItemButton className="border py-2 px-4 rounded flex items-center justify-between">
                                    <span>01    What is your medical care?</span>
                                    <span className="ml-2"><MdKeyboardArrowDown /></span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="px-4">
                                <p className="text-gray-700">
                                    One Medical was founded on a better model of care – one designed around patients’ needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem className="mb-4">
                            <AccordionItemHeading>
                                <AccordionItemButton className="border py-2 px-4 rounded flex items-center justify-between">
                                    <span>01    What is your medical care?</span>
                                    <span className="ml-2"><MdKeyboardArrowDown /></span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="px-4">
                                <p className="text-gray-700">
                                    One Medical was founded on a better model of care – one designed around patients’ needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;
