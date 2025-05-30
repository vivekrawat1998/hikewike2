import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import Profile from "../ui/Profile";
import { base_url } from '../redux/Baseurl';

export default function Contactus() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState({ type: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: "", message: "" });

        try {
            const res = await fetch(`${base_url}/contactQuery`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus({ type: "success", message: "Message sent successfully!" });
                setFormData({ name: "", phone: "", email: "", message: "" });
            } else {
                const err = await res.json();
                throw new Error(err.message || "Something went wrong");
            }
        } catch (error) {
            setStatus({ type: "error", message: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid w-full place-items-center">
            <div className="md:w-[90%] bg-[#F5F0E3] py-10">
                <Profile text={"Contact Us"} />
                <div className="flex flex-col md:flex-row bg-[#f8f0df] p-6 md:p-12 gap-10">
                    {/* Left form section */}
                    <form onSubmit={handleSubmit} className="md:w-2/3 space-y-6">
                        <h2 className="text-3xl font-semibold tracking-wider">Make a Reservation</h2>

                        {/* Success/Error Messages */}
                        {status.message && (
                            <p className={`font-medium ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
                                {status.message}
                            </p>
                        )}

                        {/* Name */}
                        <div className="relative">
                            <input
                                name="name"
                                type="text"
                                placeholder="Your Name (required)"
                                className="w-full border p-2 pl-10 rounded"
                                onChange={handleChange}
                                value={formData.name}
                                required
                            />
                            <FaUser className="absolute top-3 left-3 text-gray-500" />
                        </div>

                        {/* Phone */}
                        <div className="relative">
                            <input
                                name="phone"
                                type="tel"
                                placeholder="Your Phone Number (required)"
                                className="w-full border p-2 pl-10 rounded"
                                onChange={handleChange}
                                value={formData.phone}
                                required
                            />
                            <FaPhone className="absolute top-3 left-3 text-gray-500" />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email (required)"
                                className="w-full border p-2 pl-10 rounded"
                                onChange={handleChange}
                                value={formData.email}
                                required
                            />
                            <FaEnvelope className="absolute top-3 left-3 text-gray-500" />
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Your Message (required)"
                                className="w-full border px-10 py-2 rounded"
                                onChange={handleChange}
                                value={formData.message}
                                required
                            ></textarea>
                            <MdMessage className="absolute top-3 left-3 text-gray-500" />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded font-semibold shadow disabled:opacity-50"
                        >
                            {loading ? "Submitting..." : "BOOK AN APPOINTMENT"}
                        </button>
                    </form>

                    {/* Right section */}
                    <div className="md:w-1/3 space-y-6 text-center">
                        <img
                            src="/bg3.jpg" 
                            alt="Gift a Yoga Pack"
                            className="rounded shadow-lg w-full"
                        />
                        <h3 className="text-xl font-bold">Gift a Yoga Pack</h3>
                        <p className="text-sm text-gray-700">
                            Surprise your loved ones with the gift of wellness. Our Yoga Pack includes guided sessions, mats,
                            and tools to bring peace, balance, and strength to everyday life.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
