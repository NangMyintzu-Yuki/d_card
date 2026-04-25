"use client";

import React from "react";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  ChevronRight, 
  Linkedin, 
  FileText, 
  Mic2, 
  Layout,
  Facebook,
  Instagram,
  Send, // for Telegram
  MessageCircle // for Viber/others
} from "lucide-react";
import { downloadVCard } from "@/app/utils/vcard";
import { getSocialIcon } from "@/app/utils/social";

interface ProfessionalLink {
  title: string;
  desc: string;
  url: string;
  icon: React.ReactNode;
}

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
}
interface SocialLink {
  platform: 'facebook' | 'viber' | 'instagram' | 'tiktok' | 'telegram';
  url: string;
}



const Template1 = ({ data }: { data: DigitalCardProps }) => {

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
    alert("WeChat ID copied: " + id); 
   //  window.location.href = "weixin://"; // App ကို ဖွင့်မယ်
};
  return (
    <div className="min-h-screen bg-[#fcfaf9] flex justify-center items-start sm:py-10 px-0 sm:px-4 text-slate-900">
      <div className="w-full max-w-[450px] bg-white flex flex-col min-h-screen sm:min-h-0 sm:rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] overflow-hidden">
        
        {/* Banner Section */}
        <div className="relative h-56 bg-[#eaddd7]">
          <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center">
            <div className="w-32 h-32 rounded-full border-[6px] border-white overflow-hidden shadow-xl bg-gray-100">
              <Image 
                src={data.profileImage} 
                alt={data.name} 
                width={128} 
                height={128} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Header Info */}
        <div className="mt-20 px-8 text-center">
          <h1 className="text-3xl font-serif text-gray-900 leading-tight">{data.name}</h1>
          <p className="text-[#b5836d] text-[11px] font-bold uppercase tracking-[0.3em] mt-2">
            {data.title} @ {data.company}
          </p>
          <p className="text-gray-400 text-sm mt-4 leading-relaxed max-w-[80%] mx-auto font-light line-clamp-3">
            {data.bio}
          </p>
        </div>

        {/* Quick Contact Actions */}
        <div className="px-8 mt-10 grid grid-cols-2 gap-4">
          <a href={`tel:${data.phone}`} className="col-span-1 bg-gray-900 text-white p-5 rounded-2xl flex flex-col items-center gap-2 hover:bg-gray-800 transition-all shadow-lg shadow-gray-200">
            <Phone size={14} className="text-[#eaddd7]" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Consultation</span>
          </a>
          <a href={`mailto:${data.email}`} className="col-span-1 border border-gray-200 p-5 rounded-2xl flex flex-col items-center gap-2 hover:bg-gray-50 transition-all">
            <Mail size={14} className="text-[#b5836d]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Send Email</span>
          </a>
        </div>

        {/* Professional Links */}
        <div className="px-8 mt-8 pb-12 space-y-4">
          <h3 className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-4">Professional Presence</h3>
          
          {data.corporateLinks.map((link, idx) => (
            <a key={idx} href={link.url} className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl group hover:border-[#b5836d] transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#fcf7f5] rounded-xl flex items-center justify-center text-[#b5836d] group-hover:bg-[#b5836d] group-hover:text-white transition-all">
                  {link.icon}
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-gray-800">{link.title}</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">{link.title}</p>
                </div>
              </div>
              <ChevronRight size={12} className="text-gray-200 group-hover:text-[#b5836d] group-hover:translate-x-1 transition-all" />
            </a>
          ))}

          {/* Full Bio Quote */}
          <div className="mt-8 p-8 bg-[#fcf7f5] rounded-[2rem] border-t border-white shadow-inner">
            <p className="text-[#b5836d] font-serif italic text-lg text-center whitespace-pre-line">
              {data.bio}
            </p>
          </div>

<button onClick={handleSaveContact} className="bg-[#b5836d] text-white p-4 border border-[#b5836d] hover:bg-transparent hover:text-[#b5836d] rounded-lg cursor-pointer font-serif italic text-lg text-center transition-all duration-300 mt-10 w-full block cursor-pointer">
            Save to Contacts
          </button>
          
        </div>

        {/* Footer Socials */}
        {data.socialLinks && data.socialLinks.length > 0 && (
          <div className="p-8 mt-auto flex justify-center gap-8 border-t border-gray-50 bg-white">
            {data.socialLinks.map((social, idx) => {
              if (social.platform.toLowerCase() === "wechat") {
                return (<a key={idx} onClick={()=>handleWeChatClick(social.url)} href={social.url} target="_blank" className="text-gray-300 hover:text-[#b5836d] transition-colors">
                {getSocialIcon(social.platform)}
              </a>)
              }
              return (<a key={idx} href={social.url} target="_blank" className="text-gray-300 hover:text-[#b5836d] transition-colors">
                {getSocialIcon(social.platform)}
              </a>)
            }
              
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Template1;