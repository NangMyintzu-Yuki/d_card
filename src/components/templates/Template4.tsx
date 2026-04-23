"use client"
import { getSocialIcon } from '@/app/utils/social';
import { downloadVCard } from '@/app/utils/vcard';
import { Mail, Phone, UserPlus } from 'lucide-react';
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
const Template4 = ({ data }: { data: DigitalCardProps }) => {
    const handleSaveContact = () => {
            downloadVCard({
              name: data.name,
              title: data.title,
              email: data.email,
              phone: data.phone,
              address: data.address,
            });
          };
  return (
   <div className="min-h-screen bg-[#121212] flex justify-center items-center py-6 px-4">
      <div className="w-full max-w-[420px] bg-[#1e1e1e] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
        
        {/* Gradient Header */}
        <div className="h-44 bg-gradient-to-br from-[#2c3e50] to-[#000000] relative">
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
            <div className="w-32 h-32 rounded-full border-4 border-[#1e1e1e] overflow-hidden shadow-xl bg-slate-800">
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

        {/* Name & Bio */}
        <div className="mt-20 text-center px-6">
          <h1 className="text-2xl font-bold text-white tracking-wide">{data.name}</h1>
          <p className="text-slate-300 text-lg mt-1 font-light italic leading-relaxed">
            {data.title}
          </p>
          {data.bio && (
            <p className="text-gray-400 text-xs mt-2 font-light leading-relaxed px-4">
              {data.bio}
            </p>
          )}
        </div>

        {/* Contact Links */}
        <div className="mt-8 px-6 space-y-3">
          <a href={`mailto:${data.email}`}
            className="flex items-center bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group">
            <div className="w-10 h-10 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={18} />
            </div>
            <div className="ml-4 text-left">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Email</p>
              <p className="text-white font-medium truncate max-w-[200px]">{data.email}</p>
            </div>
          </a>

          <a href={`tel:${data.phone}`}
            className="flex items-center bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group">
            <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone size={18} />
            </div>
            <div className="ml-4 text-left">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Phone</p>
              <p className="text-white font-medium">{data.phone}</p>
            </div>
          </a>
        </div>

        {/* Social Bar */}
        {data.socialLinks && data.socialLinks.length > 0 && (
          <div className="mt-8 px-6">
            <h2 className="text-center text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              Connect with me
            </h2>
            <div className="flex justify-around items-center bg-white/5 p-4 rounded-3xl border border-white/5">
              {data.socialLinks.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank"
                  className="text-gray-400 hover:text-white transition-colors p-2">
                  {getSocialIcon(link.platform)}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="p-6 mt-4">
          <button 
            onClick={handleSaveContact}
            className="text-center w-full py-4 bg-white text-black rounded-2xl font-bold shadow-lg hover:bg-gray-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <UserPlus size={20} />
            Save to Contacts
          </button>
        </div>
      </div>
    </div>
  )
}

export default Template4
