import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddress, fetchPhone, fetchEmail } from "../redux/slice/Conatctdetailsslice";
import { fetchSocialMedia } from "../redux/slice/Socialmedia.slice";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowRight, FaYoutube, FaAddressBook, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {

    const dispatch = useDispatch();
    const { address, phone, email, loading, error } = useSelector((state) => state.contactdetails);
    const { facebook, instagram, youtube, twitter } = useSelector((state) => state.socialmedia);

    useEffect(() => {
        dispatch(fetchAddress());
        dispatch(fetchPhone());
        dispatch(fetchEmail());
        dispatch(fetchSocialMedia());
    }, [dispatch]);

    const contactDetails = [
        {
            icon: <FaAddressBook />,
            title: "Address",
            description: address?.[0]?.title || "Not available",
        },
        {
            icon: <FaPhone />,
            title: "Phone",
            description: phone?.[0]?.title ? `+91 ${phone[0].title}` : "Not available",
        },
        {
            icon: <FaEnvelope />,
            title: "Email",
            description: email?.[0]?.title || "Not available",
        }
    ];

    if (loading.address || loading.phone || loading.email) return <p className="text-white text-center py-4">Loading contact details...</p>;
    if (error.address || error.phone || error.email) return <p className="text-red-500 text-center py-4">Error loading contact details</p>;

    return (
        <footer className="bg-[#D4AD76] text-gray-800 py-14 px-6 font-overlock text-lg">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Work Hours */}
                <div className="md:text-end">
                    <h2 className="text-2xl font-bold mb-6">WORK HOURS</h2>
                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold">Monday - Thursday</p>
                            <p className="text-base">0600 - 1800 hrs</p>
                        </div>
                        <div>
                            <p className="font-semibold">Friday & Saturday</p>
                            <p className="text-base">0600 - 0900 hrs</p>
                        </div>
                    </div>
                </div>
                {/* About Section */}
                <div className="bg-white/20  rounded-xl p-8">
                    <img src="/LOGO (6).png" alt="logo" className="h-22 mb-6" />
                    <p className="text-xl mb-4 leading-relaxed">
                        We at <strong>Maharidhivedvyasa foundation</strong> provide various services tailored to your needs. Let’s talk and find the best way for you to spend your time here.
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed">
                        Phasellus et nisl tellus. Etiam facilisis eu nisi scelerisque faucibus. Proin semper suscipit magna, nec imperdiet lacus semper vitae. Sed hendrerit enim non justo posuere placerat eget purus mauris.
                    </p>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">CONTACT US</h2>
                    <div className="space-y-4 text-base">
                        {contactDetails.map((detail, index) => (
                            <div key={index} className='mb-4'>
                                <div className='flex items-center gap-2'>
                                    {detail.icon}
                                    <h3 className='font-bold'>{detail.title}</h3>
                                </div>
                                <p className=''>{detail.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            {/* Footer Bottom */}
            <div className="mt-12">
                <div className="bg-[#C48C52] text-center text-base text-white py-4 rounded-md">
                    © 2023 Maharidhivedvyasa foundation. Made by DesignThemes.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
