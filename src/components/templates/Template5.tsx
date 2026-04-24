"use client"

import { getSocialIcon } from '@/app/utils/social';
import { downloadVCard } from '@/app/utils/vcard';
import { ChevronRight, Download, ExternalLink, Mail, Phone } from 'lucide-react';
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
  corporateLinks?: { title: string; icon: React.ReactNode; url: string }[];
  socialLinks?: { platform: string; url: string }[];
  linkedinUrl?:string;
}
const Template5 = ({ data }: { data: DigitalCardProps }) => {
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
    window.location.href = "weixin://"; // App ကို ဖွင့်မယ်
};
  return (
   <div className="min-h-screen bg-[#faf9f6] flex justify-center items-start sm:py-10 px-0 sm:px-4">
      <div className="w-full max-w-[480px] bg-white flex flex-col min-h-screen sm:min-h-0 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
        
        {/* HERO IMAGE SECTION */}
        <div className="relative h-96 group overflow-hidden">
          <Image 
            src={data?.profileImage} 
            alt={data?.name} 
            fill
            className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
            <h1 className="text-white text-4xl font-serif italic tracking-tight leading-none">
              {data?.name}
            </h1>
            <p className="text-white/80 text-sm mt-3 font-light tracking-[0.2em] uppercase">
              {data?.title}
            </p>
          </div>
        </div>

        {/* BIO SECTION */}
        <div className="p-8">
          <p className="text-gray-500 text-sm leading-relaxed font-light border-l-2 border-gray-200 pl-4 whitespace-pre-line">
            {data?.bio ? (data?.bio.length > 500 ? `${data.bio.substring(0, 500)}...` : data.bio) : "Creative professional focused on excellence and design."}
          </p>
        </div>

        {/* CONTACT ACTIONS */}
        <div className="px-8 pb-10 grid grid-cols-2 gap-4">
          <a 
            href={`tel:${data?.phone}`}
            className="col-span-2 flex items-center justify-between p-6 bg-white border-2 border-gray-100 rounded-3xl hover:border-black transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Contact me anytime</p>
                <p className="text-xs text-gray-400 font-medium">{data?.phone}</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-gray-300 group-hover:text-black transition-colors" />
          </a>

          <a 
            href={`mailto:${data?.email}`}
            className="col-span-2 flex items-center justify-between p-6 bg-white border-2 border-gray-100 rounded-3xl hover:border-black transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Available for Commissions</p>
                <p className="text-xs text-gray-400 font-medium">{data?.email}</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-gray-300 group-hover:text-black transition-colors" />
          </a>

          {/* SOCIAL LINKS ROW */}
          {data?.socialLinks && (
            <div className="col-span-2 flex justify-center gap-8 py-6">
              {data?.socialLinks.map((link, idx) => {
                if (link.platform.toLowerCase() === "wechat") {
        return (
            
            <a 
                  key={idx} 
                  href={link.url} 
                  onClick={() => handleWeChatClick(link.url)}
                  target="_blank"
  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-black transition-colors transform hover:scale-110 transition-transform"
                >
                  {getSocialIcon(link.platform)}
                </a>
        );
    } 
    return (

                <a 
                  key={idx} 
                  href={link.url} 
                  target="_blank"
  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-black transition-colors transform hover:scale-110 transition-transform"
                >
                  {getSocialIcon(link.platform)}
                </a>
    )
              }
              )}
            </div>
          )}
        </div>

        {/* MINIMAL FOOTER / SAVE CONTACT */}
        <div className="p-6 mt-auto bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {data?.name}
          </span>
          <button 
            onClick={handleSaveContact}
            className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Save to Contacts
          </button>
        </div>
      </div>
    </div>
  )
}

export default Template5
