"use client";
import { getSocialIcon } from '@/app/utils/social';
import { downloadVCard } from '@/app/utils/vcard';
import { ArrowRight, Building2, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
interface DigitalCardProps {
  name: string;
  title: string;
  company?: string;
  profileImage: any; 
  email: string;
  phone: string;
  bio?: string;
  address?:string;
  corporateLinks: { title: string; icon: React.ReactNode; url: string }[];
  socialLinks: { platform: string; url: string }[];
  linkedinUrl?:string;
}
export default function Template6({ data }: { data: DigitalCardProps }) {
const handleSaveContact = () => {
        downloadVCard({
          name: data.name,
          title: data.title,
          email: data.email,
          phone: data.phone,
          address: data.address,
        });
      };
    const handleWeChatClick = (id: string) => {
    navigator.clipboard.writeText(id); // ID ကို copy ကူးမယ်
    alert("WeChat ID copied: " + id + ". Opening WeChat, please search for it."); 
   //  window.location.href = "weixin://"; // App ကို ဖွင့်မယ်
};
  return (
  <div className="min-h-screen bg-gray-100 flex justify-center sm:py-10 sm:px-4">
      <div className="w-full max-w-[400px] bg-white sm:rounded-[2.5rem] shadow-2xl overflow-hidden sm:border-[8px] sm:border-[#1a2332] flex flex-col">
        
        {/* Navy Header Section */}
        <div className="bg-[#0a1128] p-8 pb-20 relative">
          <div className="flex items-center justify-between gap-2 mb-8">
            {data.socialLinks?.map((link, idx) => {
              if (link.platform.toLowerCase() === "wechat") {
              return (
<a 
                key={idx} 
                href={link.url} onClick={()=>handleWeChatClick(link.url)}
                target="_blank" 
                className="text-[#d4af37] hover:text-[#b38f2d] transition-colors"
              >
                {getSocialIcon(link.platform)}
              </a>
              )
              }
              return (<a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                className="text-[#d4af37] hover:text-[#b38f2d] transition-colors"
              >
                {getSocialIcon(link.platform)}
              </a>)
            }

              )}
          </div>

          <div className="text-white">
            <h1 className="text-2xl font-semibold leading-tight">
              {data.name}
            </h1>
            <p className="text-[#d4af37] font-medium mt-1 whitespace-pre-line">{data.title}</p>
            <p className="text-white/80 font-light text-sm">{data.company}</p>
          </div>

          {/* Luxury Animated Profile Image Container */}
          <div className="absolute -bottom-16 right-4 w-44 h-44">
            {/* Pulse Rings */}
            <div className="absolute inset-0 rounded-full border border-[#d4af37]/30 scale-110 animate-[ping_3s_ease-in-out_infinite]"></div>
            <div className="absolute inset-0 rounded-full border border-[#d4af37]/20 scale-125"></div>

            <div className="relative w-full h-full rounded-full border-4 border-white overflow-hidden z-10 shadow-xl bg-gray-200">
              <Image 
                src={data.profileImage} 
                alt={data.name} 
                width={176} 
                height={176} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="pt-20 px-8 pb-8">
          <p className="text-[#1a2332] text-sm font-medium leading-relaxed max-w-[70%] line-clamp-3 whitespace-pre-line">
            {data.bio}
          </p>
        </div>

        {/* Contact Details */}
        <div className="px-8 space-y-6 mb-10">
          <ContactItem icon={<Phone size={18} />} value={data.phone} label="Work" />
          <ContactItem icon={<Mail size={18} />} value={data.email} label="Work" />
          {data.address && (
            <ContactItem icon={<MapPin size={18} />} value={data.address} label="Address" />
          )}
        </div>

        {/* Footer Button */}
        <div className="px-8 pb-10 mt-auto">
          <button 
            onClick={handleSaveContact}
            className="w-full bg-[#0a1128] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#162240] transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            Save to Contacts
          </button>
        </div>
      </div>
    </div>
  )
}
const ContactItem = ({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-12 h-12 bg-[#0a1128] rounded-full flex items-center justify-center text-[#d4af37] flex-shrink-0 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="overflow-hidden">
      <p className="text-[#1a2332] font-semibold text-sm truncate">{value}</p>
      <p className="text-gray-400 text-xs">{label}</p>
    </div>
  </div>
);
