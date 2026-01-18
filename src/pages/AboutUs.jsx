import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// Placeholder images - using simple colored divs or placeholders normally, 
// using generic URLs here for demonstration if needed, or local assets if I knew them.
// For now, I will use placeholders and text description as per the design.

const teamData = {
    "Head Office (Kathmandu)": [
        { name: "Sailesh Raj Kunwar", role: "Administrator", image: "https://ui-avatars.com/api/?name=Sailesh+Raj+Kunwar&background=random" },
        { name: "Khima Oli", role: "Dy. Administrator", image: "https://ui-avatars.com/api/?name=Khima+Oli&background=random" },
        { name: "Janak Pokhrel", role: "Head Legal Officer", image: "https://ui-avatars.com/api/?name=Janak+Pokhrel&background=random" },
        { name: "Salik Ram Subedi", role: "Senior Engineer", image: "https://ui-avatars.com/api/?name=Salik+Ram+Subedi&background=random" },
        // Add more mock data as needed to fill grid
    ],
    "Branch Office Bhaktapur": [
        { name: "Ram Kumar", role: "Branch Manager", image: "https://ui-avatars.com/api/?name=Ram+Kumar&background=random" },
        { name: "Sita Devi", role: "Accountant", image: "https://ui-avatars.com/api/?name=Sita+Devi&background=random" },
    ],
    "Branch Office Lalitpur": [
        { name: "Hari Prasad", role: "Officer", image: "https://ui-avatars.com/api/?name=Hari+Prasad&background=random" },
    ]
};

const AboutUs = () => {
    const [selectedOffice, setSelectedOffice] = useState("Head Office (Kathmandu)");

    return (
        <div className="w-full font-sans">
            {/* 1. Header Section */}
            <div className="bg-[#FAF3E8] py-12 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">About</h1>
                <p className="text-gray-600 text-sm">
                    Safeguarding Nepal's cultural, social and religious heritage through guthi traditions.
                </p>
            </div>

            {/* 2. Introduction Section */}
            <section className="bg-[#004282] text-white py-16">
                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1544816664-5047b700f146?q=80&w=2070&auto=format&fit=crop"
                            alt="Kathmandu Durbar Square"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Introduction</h2>
                        <p className="mb-4 leading-relaxed text-blue-100">
                            Guthi Sansthan is a government institution established to preserve and manage the cultural, religious, and social heritages of Nepal. It oversees guthi lands, conducts traditional rituals, and supports the protection of temples, festivals, and cultural practices that have been passed down for centuries.
                        </p>
                        <p className="leading-relaxed text-blue-100">
                            Through its work, Guthi Sansthan ensures that heritage is not only preserved as monuments but lived as traditions — connecting communities with their cultural roots.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Our Story Section */}
            <section className="bg-[#FAEEDD] py-16 text-gray-800">
                <div className="max-w-[1400px] mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <p className="mb-4 leading-relaxed">
                                Guthi Sansthan was founded to safeguard one of Nepal's oldest cultural traditions — the Guthi system.
                            </p>
                            <p className="mb-4 leading-relaxed">
                                From the sacred courtyards of Kathmandu Valley to community festivals across the country, our journey reflects Nepal's cultural soul.
                            </p>
                            <p className="leading-relaxed">
                                Over the decades, Guthi Sansthan has become more than an administrative body — it is a guardian of heritage, a preserver of traditions, and a bridge between the past and the present.
                            </p>
                        </div>
                        <div className="order-1 md:order-2">
                            <img
                                src="https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=2070&auto=format&fit=crop"
                                alt="Temple Structure"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Message from Governing Authority */}
            <section className="bg-[#FAF3E8] py-16">
                <div className="max-w-[1400px] mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12">Message from Governing Authority</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Message Card */}
                        <div className="bg-white p-8 rounded-lg shadow-sm text-left border-l-4 border-orange-400">
                            <span className="text-4xl text-orange-400 font-serif">“</span>
                            <p className="text-gray-600 mb-6 italic">
                                Guthi Sansthan is entrusted with the sacred duty of protecting Nepal's heritage. We are committed to safeguarding the guthis, rituals, and cultural assets for future generations. With community participation and government support, we continue this legacy with pride and responsibility.
                            </p>
                            <h4 className="font-bold text-gray-800">Chairperson</h4>
                        </div>

                        {/* Image Card */}
                        <div className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center">
                            <div className="w-32 h-32 bg-gray-600 rounded-full flex items-center justify-center overflow-hidden">
                                {/* Placeholder for Person Image */}
                                <svg className="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-px bg-gray-200 w-full"></div>

            {/* 5. Organizational Structure */}
            <section className="bg-[#FAF3E8] py-16">
                <div className="max-w-[1400px] mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12">Guthi Sansthan : Headquarters Organizational Structure</h2>

                    {/* Tier 1 */}
                    <div className="flex justify-center gap-8 mb-8 flex-wrap">
                        <MemberCard name="Ramesh Kumar Pokharel" role="Chairperson" />
                        <MemberCard name="Shri Shailesh Raj Kunwar" role="Chief Administrator Officer" />
                    </div>

                    {/* Tier 2 */}
                    <div className="flex justify-center gap-8 mb-8 flex-wrap">
                        <MemberCard name="Ani Narayan Acharya" role="Assistant Secretary" />
                        <MemberCard name="Shambhu Raj Regmi" role="Training/Internal Judicial Service Department" />
                        <MemberCard name="Dr. Suresh Suras Shrestha" role="Assistant Secretary" />
                        <MemberCard name="Shiv Prasad Regmi" role="Director General" />
                    </div>

                    {/* Tier 3 */}
                    <div className="flex justify-center gap-8 flex-wrap">
                        <MemberCard name="Shanta Wasti (Bhattarai)" role="Assistant Secretary" />
                        <MemberCard name="Kali Das Devkota" role="Member, Guthi Executive Committee" />
                        <MemberCard name="Bikesh Shakya" role="Member, Guthi Executive Committee" />
                    </div>

                </div>
            </section>

            {/* 6. Our Team */}
            <section className="bg-[#FAEEDD] py-16">
                <div className="max-w-[1400px] mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Team</h2>

                    {/* Dropdown Filter */}
                    <div className="flex justify-end mb-12">
                        <div className="relative inline-block text-left w-64">
                            <div className="relative">
                                <select
                                    value={selectedOffice}
                                    onChange={(e) => setSelectedOffice(e.target.value)}
                                    className="block w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline appearance-none cursor-pointer"
                                >
                                    {Object.keys(teamData).map((office) => (
                                        <option key={office} value={office}>{office}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <ChevronDown size={16} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamData[selectedOffice]?.map((member, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden text-center pb-6">
                                <div className="bg-blue-100/50 pt-8 pb-0 flex justify-center rounded-t-[50%] mx-4 mt-4 mb-4">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                                    />
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg">{member.name}</h3>
                                <p className="text-gray-500 text-sm mt-1">{member.role}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
};

// Helper component for Org Structure
const MemberCard = ({ name, role, img }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm w-64 flex flex-col items-center">
        <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center overflow-hidden">
            {img ? (
                <img src={img} alt={name} className="w-full h-full object-cover" />
            ) : (
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            )}
        </div>
        <h4 className="font-bold text-sm text-gray-800">{name}</h4>
        <p className="text-xs text-orange-500 mt-1">{role}</p>
    </div>
);

export default AboutUs;
