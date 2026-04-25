"use client";
import React, { useState, useEffect } from 'react';
import { Phone, Mail, ExternalLink, Facebook, Send, MessageCircle } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { downloadVCard } from '@/app/utils/vcard';
import { getPlatformColor, getSocialIcon } from '@/app/utils/social';

interface DigitalCardProps {
    name: string;
    title: string;
    company?: string;
    profileImage: any;
    email: string;
    phone: string;
    bio?: string;
    address?: string;
    corporateLinks: { title: string; icon: React.ReactNode; url: string }[];
    socialLinks: { platform: string; url: string }[];
    linkedinUrl?: string;
}
const handleWeChatClick = (id: string) => {
    navigator.clipboard.writeText(id); // ID ကို copy ကူးမယ်
    alert("WeChat ID copied: " + id); 
   //  window.location.href = "weixin://"; // App ကို ဖွင့်မယ်
};
// ၂။ Reusable Component
export default function Template7({ data }: { data: DigitalCardProps }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSaveContact = () => {
        downloadVCard({
            name: data.name,
            title: data.title,
            email: data.email,
            phone: data.phone,
            address: data.address,
        });
    };

    const facebookLink = data.socialLinks?.find(
        link => link.platform.toLowerCase() === 'facebook'
    )?.url;

    return (
        <section className="min-h-screen bg-[#f8fafc] flex justify-center">
            <div className="w-full max-w-[500px] bg-white flex flex-col min-h-screen shadow-2xl relative">

                {/* Sticky Header */}
                <div className={`sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 p-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-400 to-rose-500 p-0.5">
                            <div className="relative w-full h-full">
                                <Image src={data.profileImage} alt={data.name} fill className="rounded-full object-cover border-2 border-white" />
                            </div>
                        </div>
                        <h2 className="text-lg font-bold text-gray-800 tracking-tight">{data.name}</h2>
                    </div>
                    {facebookLink && (
                        <a href={facebookLink} target="_blank" className="bg-gray-900 text-white text-xs px-4 py-2 rounded-full font-bold">Follow</a>
                    )}
                </div>

                <div className={`transition-all text-center flex flex-col justify-center items-center duration-700 ease-in-out ${isScrolled ? "scale-50 opacity-0 h-0 overflow-hidden" : "scale-100 opacity-100 h-auto pt-1"}`}>
                    <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-orange-400 to-rose-500 p-1 shadow-2xl mb-6">
                        <div className="relative w-full h-full">
                            <Image src={data.profileImage} alt={data.name} fill className="rounded-full object-cover border-4 border-white" priority />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 tracking-tight uppercase">{data.name}</h2>
                    <p className="text-sm font-bold text-black/40 tracking-tight mb-8 px-4">{data.title}</p>
                </div>

                <div className={`px-6 py-8 transition-all duration-500 ${isScrolled ? 'mt-10' : 'mt-4'}`}>
                    <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
                        Let's build something <span className="text-orange-500">incredible</span> together.
                    </h1>
                    {data.bio && (
                        <p className="mt-4 text-gray-600 leading-relaxed text-justify whitespace-pre-line">
                            {data.bio}
                        </p>
                    )}
                </div>

                <div className="px-6 pb-24 space-y-6">
                    <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Priority Contact</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <a href={`tel:${data.phone}`} className="p-4 rounded-2xl bg-orange-50 border border-orange-200 flex flex-col gap-2 items-center justify-center shadow-lg active:scale-95 transition-transform">
                                <Phone size={20} className="text-orange-500" />
                                <span className="text-xs font-bold text-gray-800">Call Me</span>
                            </a>
                            <a href={`mailto:${data.email}`} className="p-4 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col gap-2 items-center justify-center shadow-lg active:scale-95 transition-transform">
                                <Mail size={20} className="text-blue-500" />
                                <span className="text-xs font-bold text-gray-800">Send Mail</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Social Network</h3>
                        <div className="space-y-3">
                            {data.socialLinks.map((link, index) => {
                                  if (link.platform.toLowerCase() === "wechat") {
                                return (<a key={index} href={link.url} onClick={()=>handleWeChatClick(link.url)} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center p-4 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-md hover:-translate-y-0.5 transition-all">
                                    <span className="text-[#64758A] hover:text-amber-500">
                                       {getSocialIcon(link.platform)}
                                    </span>
                                    <div className="ml-4">
                                        <h4 className="text-sm font-bold text-gray-800">{link.platform}</h4>
                                    </div>
                                    <ExternalLink size={20} className="ml-auto text-gray-300" />
                                </a>)  
                                }
                                return(
<a key={index} href={link.url} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center p-4 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-md hover:-translate-y-0.5 transition-all">
                                    <span className="text-[#64758A] hover:text-amber-500">
                                       {getSocialIcon(link.platform)}
                                    </span>
                                    <div className="ml-4">
                                        <h4 className="text-sm font-bold text-gray-800">{link.platform}</h4>
                                    </div>
                                    <ExternalLink size={20} className="ml-auto text-gray-300" />
                                </a>
                                )
                            }
                                )}
                        </div>
                    </div>
                </div>

                {/* Fixed Bottom Button */}
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[450px] px-6">
                    <button type="button" onClick={handleSaveContact}
                        className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold shadow-xl shadow-orange-500/30 hover:bg-orange-600 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
                        Save to Contacts
                    </button>
                </div>

                <div className="py-8 text-center">
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                        © {new Date().getFullYear()} {data.name}
                    </p>
                </div>
            </div>
        </section>
    );
}