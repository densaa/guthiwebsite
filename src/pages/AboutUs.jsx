import { ChevronDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import PageHeader from "../components/PageHeader";

// Asset Imports
import templeImg from "../assets/temple.png";
import cultureImg from "../assets/culturetwo.png";
import logoImg from "../assets/logo.png";

// People Assets
import meeting1 from "../assets/meetingone.png";
import meeting2 from "../assets/meetingtwo.png";
import meeting3 from "../assets/meetingthree.png";
import meeting4 from "../assets/meetingfour.png";

// Placeholder data for teams
const teamData = {
    "Head Office (Kathmandu)": [
        { name: "Sailesh Raj Kunwar", role: "Administrator", image: meeting1 },
        { name: "Khima Oli", role: "Dy. Administrator", image: meeting2 },
        { name: "Janak Pokhrel", role: "Head Legal Officer", image: meeting3 },
        { name: "Salik Ram Subedi", role: "Senior Engineer", image: meeting4 },
    ],
    "Branch Office Bhaktapur": [
        { name: "Ram Kumar", role: "Branch Manager", image: meeting2 },
        { name: "Sita Devi", role: "Accountant", image: meeting1 },
    ],
    "Branch Office Lalitpur": [
        { name: "Hari Prasad", role: "Officer", image: meeting3 },
    ]
};

const AboutUs = () => {
    const [selectedOffice, setSelectedOffice] = useState("Head Office (Kathmandu)");
    const { isDark } = useTheme();

    return (
        <section className={`min-h-screen ${isDark ? "bg-[#111827] text-gray-100" : "bg-[#FBF2E8] text-gray-800"}`}>

            {/* 1. Header Section */}
            <PageHeader
                title="About"
                subtitle="Safeguarding Nepal's cultural, social and religious heritage through guthi traditions."
            />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-20">

                {/* 2. Introduction Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-gray-100">
                    <div className="relative h-[400px] lg:h-auto">
                        <img
                            src={templeImg}
                            alt="Kathmandu Temple"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    <div className={`${isDark ? "bg-blue-900" : "bg-[#004282]"} p-12 lg:p-16 text-white flex flex-col justify-center`}>
                        <h2 className="text-3xl font-bold mb-6">Introduction</h2>
                        <p className="mb-6 leading-relaxed text-blue-100">
                            Guthi Sansthan is a government institution established to preserve and manage the cultural, religious, and social heritages of Nepal. It oversees guthi lands, conducts traditional rituals, and supports the protection of temples, festivals, and cultural practices that have been passed down for centuries.
                        </p>
                        <p className="leading-relaxed text-blue-100">
                            Through its work, Guthi Sansthan ensures that heritage is not only preserved as monuments but lived as traditions — connecting communities with their cultural roots.
                        </p>
                    </div>
                </div>

                {/* 3. Our Story Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src={cultureImg}
                            alt="Cultural Heritage"
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div>
                        <h2 className={`text-3xl font-bold mb-8 text-center lg:text-left ${isDark ? "text-white" : "text-[#2d4356]"}`}>Our Story</h2>
                        <div className={`space-y-6 text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                            <p className="leading-relaxed">
                                Guthi Sansthan was founded to safeguard one of Nepal's oldest cultural traditions — the Guthi system.
                            </p>
                            <p className="leading-relaxed">
                                From the sacred courtyards of Kathmandu Valley to community festivals across the country, our journey reflects Nepal's cultural soul.
                            </p>
                            <p className="leading-relaxed">
                                Over the decades, Guthi Sansthan has become more than an administrative body — it is a guardian of heritage, a preserver of traditions, and a bridge between the past and the present.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4. Message from Governing Authority */}
                <div>
                    <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? "text-white" : "text-[#2d4356]"}`}>Message from Governing Authority</h2>
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-10 rounded-2xl border ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
                        <div className="flex flex-col justify-center border-l-4 border-orange-500 pl-8">
                            <span className="text-6xl text-orange-500 font-serif leading-none mb-4">“</span>
                            <p className={`text-lg italic mb-6 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                                Guthi Sansthan is entrusted with the sacred duty of protecting Nepal's heritage. We are committed to safeguarding the guthis, rituals, and cultural assets for future generations. With community participation and government support, we continue this legacy with pride.
                            </p>
                            <div>
                                <h4 className={`font-bold text-xl ${isDark ? "text-white" : "text-[#2d4356]"}`}>Chairperson</h4>
                                <span className="text-orange-500 text-sm font-bold uppercase tracking-wider">Governing Body</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center rounded-xl min-h-[300px] overflow-hidden">
                            {/* Use an asset if available, otherwise generic person placeholder or logo */}
                            <img src={meeting3} alt="Chairperson" className="w-full h-full object-cover rounded-xl" />
                        </div>
                    </div>
                </div>

                {/* 5. Organizational Structure */}
                <div className="text-center">
                    <h2 className={`text-3xl font-bold mb-16 ${isDark ? "text-white" : "text-[#2d4356]"}`}>Guthi Sansthan : Headquarters Organizational Structure</h2>

                    <div className="space-y-12">
                        {/* Tier 1 */}
                        <div className="flex flex-wrap justify-center gap-10">
                            <MemberCard name="Ramesh Kumar Pokharel" role="Chairperson" img={meeting1} />
                            <MemberCard name="Shri Shailesh Raj Kunwar" role="Chief Administrator Officer" img={meeting2} />
                        </div>
                        {/* Tier 2 */}
                        <div className="flex flex-wrap justify-center gap-10">
                            <MemberCard name="Ani Narayan Acharya" role="Assistant Secretary" img={meeting3} />
                            <MemberCard name="Shambhu Raj Regmi" role="Training/Internal Judicial" img={meeting4} />
                            <MemberCard name="Dr. Suresh Suras Shrestha" role="Assistant Secretary" img={meeting1} />
                            <MemberCard name="Shiv Prasad Regmi" role="Director General" img={meeting2} />
                        </div>
                        {/* Tier 3 */}
                        <div className="flex flex-wrap justify-center gap-10">
                            <MemberCard name="Shanta Wasti (Bhattarai)" role="Assistant Secretary" img={meeting4} />
                            <MemberCard name="Kali Das Devkota" role="Executive Committee" img={meeting3} />
                            <MemberCard name="Bikesh Shakya" role="Executive Committee" img={meeting1} />
                        </div>
                    </div>
                </div>

                {/* 6. Our Team */}
                <div>
                    <h2 className={`text-3xl font-bold text-center mb-10 ${isDark ? "text-white" : "text-[#2d4356]"}`}>Our Team</h2>

                    {/* Filter */}
                    <div className="flex justify-end mb-8">
                        <div className="relative">
                            <select
                                value={selectedOffice}
                                onChange={(e) => setSelectedOffice(e.target.value)}
                                className={`appearance-none border pl-4 pr-10 py-2 rounded-lg cursor-pointer focus:outline-none focus:ring-1 focus:ring-orange-500 shadow-sm font-medium ${isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-200 text-gray-700"}`}
                            >
                                {Object.keys(teamData).map((office) => (
                                    <option key={office} value={office}>{office}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                                <ChevronDown size={16} />
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {teamData[selectedOffice]?.map((member, index) => (
                            <div key={index} className={`rounded-lg border p-6 text-center transition-all hover:-translate-y-1 ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center p-1">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full rounded-full object-cover border-2 border-orange-200"
                                    />
                                </div>
                                <h3 className={`font-bold text-lg mb-1 line-clamp-1 ${isDark ? "text-white" : "text-gray-800"}`}>{member.name}</h3>
                                <p className={`text-sm ${isDark ? "text-orange-400" : "text-orange-600"}`}>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

const MemberCard = ({ name, role, img }) => {
    const { isDark } = useTheme();
    return (
        <div className={`rounded-lg w-60 p-6 flex flex-col items-center border hover:bg-gray-50 transition-all ${isDark ? "bg-gray-800 border-gray-700 hover:bg-gray-700" : "bg-white border-gray-100"}`}>
            <div className="w-24 h-24 rounded-full mb-4 overflow-hidden border-2 border-orange-100">
                {/* Use real image if provided, else logo */}
                <img src={img || logoImg} alt={name} className="w-full h-full object-cover" />
            </div>
            <h4 className={`font-bold text-sm text-center mb-1 ${isDark ? "text-white" : "text-gray-800"}`}>{name}</h4>
            <p className="text-xs text-orange-500 font-bold text-center leading-tight">{role}</p>
        </div>
    );
};

export default AboutUs;
