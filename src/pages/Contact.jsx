
import SectionHeading from './../components/sectionHeading/SectionHeading';

const Contact = () => {
    return (
        <div className="max-w-6xl mx-auto py-16">
            <SectionHeading heading={`Contact us`} textStyle='center' />
            <div className='flex items-center flex-col md:flex-row justify-center gap-8 py-8'>
                <div className='flex items-center justify-center gap-6'>
                    <img src='https://i.ibb.co/4RMvJDY/Group-123.png' alt="" />
                    <div className=' flex-col gap-4'>
                        <p>Phone</p>
                        <p>01750848833</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-6'>
                    <img src='https://i.ibb.co/XZk9gmm/Group-122.png' alt="" />
                    <div className=' flex-col gap-4'>
                        <p>Email</p>
                        <p>mdsayed.contact@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='py-8'>
                <form >
                    <div className='flex gap-0 md:gap-6 flex-col md:flex-row'>
                        <div className='flex flex-col w-full'>
                            <label className='font-bold mb-1' htmlFor="name">Name</label>
                            <input className='border w-full rounded-md py-2 px-4' type="text" name='name' placeholder='Enter Your Name' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='font-bold mb-1' htmlFor="name">Email</label>
                            <input className='border w-full rounded-md py-2 px-4' type="text" name='email' placeholder='Enter Your email' />
                        </div>
                    </div>
                    <div className='flex gap-0 md:gap-6 mt-6 flex-col md:flex-row'>
                        <div className='flex flex-col w-full'>
                            <label className='font-bold mb-1' htmlFor="name">Phone</label>
                            <input className='border w-full rounded-md py-2 px-4' type="text" name='phone' placeholder='Enter Your Phone' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='font-bold mb-1' htmlFor="name">Subject</label>
                            <input className='border w-full rounded-md py-2 px-4' type="text" name='subject' placeholder='Enter Your Subject' />
                        </div>
                    </div>
                    <div className='flex gap-0 md:gap-6 mt-6 flex-col md:flex-row'>
                        <div className='flex flex-col w-full'>
                            <label className='font-bold mb-1' htmlFor="name">Message</label>
                            <textarea className='border w-full rounded-md py-2 px-4' id="" cols="30" rows="8" type="text" name='phone' placeholder='Write Your Message' />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <input className='text-white bg-blue-700 mt-6 rounded-md py-2 px-8 text-center' type="submit" value="Send Message" />
                    </div>
                </form>
            </div>
            <div className='my-12'>
                <img src="https://i.ibb.co/W6f60Lg/Rectangle.png" alt="" />
            </div>
        </div>
    );
};

export default Contact;