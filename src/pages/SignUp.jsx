import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';
import { AuthContext } from './../provider/AuthProvider';
import useAxiosPublic from '../components/hooks/useAxiosPublic';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SignUp = () => {
    const { userSignUp, updateUserData, signOutUser } = useContext(AuthContext);
    const [avatar, setAvatar] = useState(null);
    const navigate = useNavigate();
    const [errPass, setErrPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [errName, setErrName] = useState('');
    const [errEmail, setErrEamil] = useState('');
    const axiosPublic = useAxiosPublic()
    const districts = ['Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Jamalpur', 'Kishoreganj', 'Madaripur', 'Manikganj', 'Munshiganj', 'Mymensingh', 'Narayanganj', 'Narsingdi', 'Netrokona', 'Rajbari', 'Shariatpur', 'Sherpur', 'Tangail', 'Bogra', 'Joypurhat', 'Naogaon', 'Natore', 'Nawabganj', 'Pabna', 'Rajshahi', 'Sirajgonj', 'Dinajpur', 'Gaibandha', 'Kurigram', 'Lalmonirhat', 'Nilphamari', 'Panchagarh', 'Rangpur', 'Thakurgaon', 'Barguna', 'Barisal', 'Bhola', 'Jhalokati', 'Patuakhali', 'Pirojpur', 'Bandarban', 'Brahmanbaria', 'Chandpur', 'Chittagong', 'Comilla', 'Cox\'s Bazar', 'Feni', 'Khagrachari', 'Lakshmipur', 'Noakhali', 'Rangamati', 'Habiganj', 'Maulvibazar', 'Sunamganj', 'Sylhet', 'Bagerhat', 'Chuadanga', 'Jessore', 'Jhenaidah', 'Khulna', 'Kushtia', 'Magura', 'Meherpur', 'Narail', 'Satkhira'];

    const upazilas = ['Birol', 'Bochaganj', 'Chirirbandar', 'Dinajpur-S', 'Fulbari', 'Ghoraghat', 'Hakimpur', 'Kaharol', 'Khanshama', 'Nawabganj', 'Parbatipur', 'Fulchari', 'Gaibandha-S', 'Gobindaganj', 'Palashbari', 'Sadullapur', 'Saghata', 'Sundarganj', 'Bhurungamari', 'Chilmari', 'Fulbari', 'Kurigram-S', 'Nageswari', 'Rajarhat', 'Rajibpur', 'Rowmari', 'Ulipur', 'Aditmari', 'Hatibandha', 'Kaliganj', 'Lalmonirhat-S', 'Patgram', 'Dimla', 'Domar', 'Jaldhaka', 'Kishoreganj', 'Bagatipara', 'Baraigram', 'Gurudaspur', 'Lalpur', 'Naldanga', 'Natore-S', 'Singra', 'Atghoria', 'Bera', 'Bhangura', 'Chatmohar', 'Faridpur', 'Ishwardi', 'Pabna-S', 'Santhia', 'Sujanagar', 'Bagha', 'Bagmara', 'Charghat', 'Durgapur', 'Godagari', 'Mohanpur', 'Paba', 'Puthia', 'Tanore', 'Belkuchi', 'Chowhali', 'Kamarkhand', 'Kazipur', 'Raiganj', 'Shahzadpur', 'Sirajganj-S', 'Tarash', 'Ullapara', 'Birampur', 'Birgan', 'Nalitabari', 'Sherpur-S', 'Sreebordi', 'Adamdighi', 'Bogura-S', 'Dhunot', 'Dhupchancia', 'Gabtali', 'Kahaloo', 'Nandigram', 'Sariakandi', 'Shajahanpur', 'Sherpur', 'Shibganj', 'Sonatala', 'Bholahat', 'Gomostapur', 'Nachol', 'Nawabganj-S', 'Shibganj', 'Akkelpur', 'Joypurhat-S', 'Kalai', 'Khetlal', 'Panchbibi', 'Atrai', 'Badalgachi', 'Dhamoirhat', 'Manda', 'Mohadevpur', 'Naogaon-S', 'Niamatpur', 'Patnitala', 'Porsha', 'Raninagar', 'Shapahar', 'Kaliganj', 'Satkhira-S', 'Shyamnagar', 'Tala', 'Bakshiganj', 'Dewanganj', 'Islampur', 'Jamalpur-S', 'Madarganj', 'Melendah', 'Sarishabari', 'Bhaluka', 'Dhobaura', 'Fulbaria', 'Gaffargaon', 'Gouripur', 'Haluaghat', 'Ishwarganj', 'Muktagacha', 'Mymensingh-S', 'Nandail', 'Phulpur', 'Tarakanda', 'Trishal', 'Atpara', 'Barhatta', 'Durgapur', 'Kalmakanda', 'Kendua', 'Khaliajuri', 'Madan', 'Mohanganj', 'Netrakona-S', 'Purbadhala', 'Jhenaigati', 'Nakla', 'Monirampur', 'Sarsha', 'Harinakunda', 'Jhenaidah-S', 'Kaliganj', 'Kotchandpur', 'Moheshpur', 'Shailkupa', 'Batiaghata', 'Dacope', 'Dighalia', 'Dumuria', 'Koira', 'Paikgacha', 'Phultala', 'Rupsa', 'Terokhada', 'Bheramara', 'Daulatpur', 'Khoksha', 'Kumarkhali', 'Kushtia-S', 'Mirpur', 'Magura-S', 'Mohammadpur', 'Salikha', 'Sreepur', 'Gangni', 'Meherpur-S', 'Mujib Nagar', 'Kalia', 'Lohagara', 'Narail-S', 'Assasuni', 'Debhata', 'Kalaroa', 'Damuddya', 'Goshairhat', 'Janjira', 'Naria', 'Shariatpur-S', 'Basail', 'Bhuapur', 'Delduar', 'Dhanbari', 'Ghatail', 'Gopalpur', 'Kalihati', 'Madhupur', 'Mirzapur', 'Nagarpur', 'Shakhipur', 'Tangail-S', 'Bagerhat-S', 'Chitalmari', 'Fakirhat', 'Kachua', 'Mollahat', 'Mongla', 'Morrelganj', 'Rampal', 'Sharankhola', 'Alamdanga', 'Chuadanga-S', 'Damurhuda', 'Jibannagar', 'Abhoynagar', 'Bagherpara', 'Chowgacha', 'Jashore-S', 'Jhikargacha', 'Keshabpur', 'Pakundia', 'Tarail', 'Kalkini', 'Madaripur-S', 'Rajoir', 'Shibchar', 'Daulatpur', 'Ghior', 'Harirampur', 'Manikganj-S', 'Saturia', 'Shivalaya', 'Singair', 'Gazaria', 'Lauhajong', 'Munshiganj-S', 'Sirajdikhan', 'Sreenagar', 'Tongibari', 'Araihazar', 'Bandar', 'Narayanganj-S', 'Rupganj', 'Sonargaon', 'Belabo', 'Monohardi', 'Narshingdi-S', 'Palash', 'Raipura', 'Shibpur', 'Baliakandi', 'Goalanda', 'Kalukhali', 'Pangsha', 'Rajbari-S', 'Bhedarganj', 'Rangamati-S', 'Dhamrai', 'Dohar', 'Keraniganj', 'Nawabganj', 'Savar', 'Alfadanga', 'Bhanga', 'Boalmari', 'Charbhadrasan', 'Faridpur-S', 'Madhukhali', 'Nagarkanda', 'Sadarpur', 'Saltha', 'Gazipur-S', 'Kaliakoir', 'Kaliganj', 'Kapasia', 'Sreepur', 'Gopalganj-S', 'Kasiani', 'Kotwalipara', 'Muksudpur', 'Tungipara', 'Austagram', 'Bajitpur', 'Bhairab', 'Hossainpur', 'Itna', 'Karimganj', 'Katiadi', 'Kishoreganj-S', 'Kuliarchar', 'Mithamoin', 'Nikli', 'Feni-S', 'Fulgazi', 'Porshuram', 'Sonagazi', 'Dighinala', 'Guimara', 'Khagrachari-S', 'Laxmichari', 'Mahalchari', 'Manikchari', 'Matiranga', 'Panchari', 'Ramgarh', 'Komol Nagar', 'Laxmipur-S', 'Raipur', 'Ramganj', 'Ramgati', 'Begumganj', 'Chatkhil', 'Companiganj', 'Hatiya', 'Kabir Hat', 'Noakhali-S', 'Senbag', 'Sonaimuri', 'Subarna Char', 'Baghaichari', 'Barkal', 'Belaichari', 'Juraichari', 'Kaptai', 'Kaukhali', 'Langadu', 'Nanniarchar', 'Rajosthali', 'Karnaphuli', 'Lohagara', 'Mirsharai', 'Patiya', 'Rangunia', 'Raojan', 'Sandwip', 'Satkania', 'Sitakunda', 'Chakoria', "Cox'S Bazar - S", 'Kutubdia', 'Moheskhali', 'Pekua', 'Ramu', 'Teknaf', 'Ukhiya', 'Barura', 'Brahmanpara', 'Burichong', 'Chandina', 'Chouddagram', 'Cumilla - S', 'Cumilla - S Daksin', 'Daudkandi', 'Debidwar', 'Homna', 'Laksham', 'Lalmai', 'Meghna', 'Monohorganj', 'Muradnagar', 'Nangalkot', 'Titas', 'Chhagalniya', 'Daganbhuiyan', 'Kawkhali', 'Mothbaria', 'Nazirpur', 'Nesarabad', 'Pirojpur - S', 'Zianagar', 'Akhaura', 'Ashuganj', 'B.Baria - S', 'Bancharampur', 'Bijoynagar', 'Kasba', 'Nabinagar', 'Nasirnagar', 'Sarail', 'Alikadam', 'Bandarban - S', 'Lama', 'Naikhyongchari', 'Rowangchari', 'Ruma', 'Thanchi', 'Chandpur - S', 'Faridganj', 'Haimchar', 'Haziganj', 'Kachua', 'Matlab(Dakshin)', 'Matlab(Uttar)', 'Shahrasti', 'Anwara', 'Banskhali', 'Boalkhali', 'Chandanish', 'Fatikchari', 'Hathazari', 'Amtali', 'Bamna', 'Barguna - S', 'Betagi', 'Patharghata', 'Taltali', 'Agailjhara', 'Babuganj', 'Bakerganj', 'Banaripara', 'Barishal - S', 'Gouranadi', 'Hizla', 'Mehendiganj', 'Muladi', 'Uzirpur', 'Bhola - S', 'Borhanuddin', 'Charfassion', 'Daulatkhan', 'Lalmohan', 'Monpura', 'Tazumuddin', 'Jhalokathi - S', 'Kathalia', 'Nalchity', 'Rajapur', 'Bauphal', 'Dashmina', 'Dumki', 'Galachipa', 'Kalapara', 'Mirjaganj', 'Patuakhali - S', 'Rangabali', 'Bhandaria'];
    const blood = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];



    const handleSingUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPass = formData.get('confirmPass');
        const district = formData.get('districtSelect');
        const blood = formData.get('blood');
        const upazila = formData.get('upazilaSelect');
        const role = 'user';
        const status = 'active';
        const avatarInput = form.querySelector('input[name="avatar"]');
        const avatarFile = { image: avatarInput.files[0] };

        try {
            const res = await axiosPublic.post(image_hosting_api, avatarFile, {
                headers: { "content-type": "multipart/form-data" }
            });

            const imageUrl = res.data.data.url;
            setAvatar(imageUrl);
            const userInfo = {
                email,
                district,
                upazila,
                blood,
                avatar: imageUrl,
                role,
                status,
            };
            await axiosPublic.post('/users', userInfo);
        } catch (error) {
            console.error('Error uploading image:', error);
        }



        setErrPass('');
        setErrName('');
        setErrEamil('');

        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (name == '') {
            setErrName('Name is required.')
        }
        if (email == '') {
            setErrEamil('Email is required.')
        }
        if (!pattern.test(password)) {
            setErrPass('Password must be minimum six characters, at least one uppercase letter, one lowercase letter and one special character.');
            return;
        }
        if (password !== confirmPass) {
            setConfirmPass('Password not matched');
            return;
        }


        if (name && email && password) {

            userSignUp(email, password).then(res => {
                toast.success('SignUp Successfully. Please login');
                updateUserData(name, avatar)
                    .then()
                    .catch()
                signOutUser();
                navigate('/signin');
                setErrPass('');
                setErrName('');
                setErrEamil('');

            })
                .catch(err => toast.warning(err.message));


        }
    }


    return (
        <div className="relative bg-[url('https://i.ibb.co/kMFCXF9/img-2.png')] bg-no-repeat bg-left-top bg-[#f3f3f3] dark:bg-[#121212]">
            <div className="absolute right-0 bottom-0 bg-[url('https://i.ibb.co/SBVLKSc/img-1.png')] bg-no-repeat bg-right-bottom w-1/2 h-1/2">
                {/* The above div creates the second background image on the right-bottom */}
            </div>
            <div className="flex items-center justify-center h-screen w-full max-w-6xl mx-auto">
                <div className='bg-white dark:bg-[#26272D] p-8 rounded shadow-md z-30'>
                    <div className='mb-6'>
                        <h2 className='text-xl text-center dark:text-white font-bold'>SIGNUP A NEW ACCOUNT</h2>
                    </div>
                    <form onSubmit={handleSingUp} className="w-[300px]
                    ">
                        <div className="relative mb-6">
                            <input className="border-b py-1 px-2 w-full focus:outline-none dark:bg-[#121212]" placeholder='Name' type="text" name="name" id="" /><br />
                            <AiOutlineUser className='absolute dark:text-white top-2 text-xl right-2' />
                            {
                                errName ? <p className="text-[12px] text-red-600">{errName}</p> : ''
                            }
                        </div>
                        <div className="relative mb-6">
                            <input
                                className="border-b py-1 px-2 w-full focus:outline-none dark:bg-[#121212]"
                                placeholder='Email Address'
                                type="email"
                                name="email"
                                id=""
                            />
                            <AiOutlineMail className='absolute dark:text-white top-2 text-xl right-2' />
                            {errEmail ? <p className="text-[12px] text-red-600">{errEmail}</p> : ''}
                        </div>

                        <div className="flex gap-4 mb-6">
                            <select
                                name="districtSelect"
                                className="block w-full mt-1 border-b py-1 px-2 focus:outline-none dark:bg-[#121212]"
                            >
                                <option value="" disabled selected>District</option>
                                {districts.map((district, index) => (
                                    <option key={index} value={district}>{district}</option>
                                ))}
                            </select>
                            <select
                                id="upazilaSelect"
                                className="block w-full mt-1 border-b py-1 px-2 focus:outline-none dark:bg-[#121212]"
                                name='upazilaSelect'
                            >
                                <option value="" disabled selected>Upazila</option>
                                {upazilas.map((upazila, index) => (
                                    <option key={index} value={upazila}>{upazila}</option>
                                ))}
                            </select>
                        </div>
                        <div  className="relative mb-6">
                            <select
                                id="upazilaSelect"
                                className="block w-full mt-1 border-b py-1 px-2 focus:outline-none dark:bg-[#121212]"
                                name='blood'
                            >
                                <option value="" disabled selected>Blood gorup</option>
                                {blood.map((bld, index) => (
                                    <option key={index} value={bld}>{bld}</option>
                                ))}
                            </select>
                        </div>
                        <div className="relative mb-6">
                            <input className="border-b py-1 px-2 w-full focus:outline-none dark:bg-[#121212]" placeholder='Password' type="password" name="password" id="" /><br />
                            <RiLockPasswordLine className='absolute dark:text-white  text-xl top-2 right-2' />
                            {
                                errPass ? <p className="text-[12px] text-red-600  -mb-[20px]">{errPass}</p> : ''
                            }
                        </div>
                        <div className="relative mb-6">
                            <input className="border-b py-1 px-2 w-full focus:outline-none dark:bg-[#121212]" placeholder='Confirm password' type="password" name="confirmPass" id="" /><br />
                            <RiLockPasswordLine className='absolute dark:text-white  text-xl top-2 right-2' />
                            {
                                confirmPass ? <p className="text-[12px] text-red-600  -mb-[20px]">{confirmPass}</p> : ''
                            }
                        </div>
                        <div className="mb-6">
                            <input className=" py-1 px-2 w-full focus:outline-none dark:bg-[#121212]" type="file" name="avatar" id="avatar" />
                        </div>


                        <div className="mb-6">
                            <input className='bg-[#153CF5] text-white  py-2 w-full rounded-sm cursor-pointer' type="submit" value="SignUp" />
                        </div>
                    </form>
                    <div>
                        <p className='text-center dark:text-white'>Already have an account? <Link to={'/signin'} className='cursor-pointer text-[#153CF5]'>SignIn here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;