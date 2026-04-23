"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {  Phone, Mail, ArrowRight } from "lucide-react";
import { downloadVCard } from "@/app/utils/vcard";
import { getSocialIcon } from "@/app/utils/social";


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
}
export default function Template3({ data }: { data: DigitalCardProps }) {
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
    <div className="min-h-screen bg-[#0f172a] flex justify-center items-start sm:py-10">
      <div className="w-full max-w-[450px] bg-[#1e293b] flex flex-col sm:rounded-[2rem] shadow-2xl overflow-hidden border border-slate-700">
        
        {/* Header/Cover */}
        <div className="relative h-40 bg-slate-800">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="absolute -bottom-14 left-8">
            <div className="w-28 h-28 rounded-2xl border-4 border-[#1e293b] overflow-hidden shadow-2xl bg-slate-700">
              <Image src={data.profileImage} width={500} height={500} alt={data.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <div className="mt-16 px-8">
          <h1 className="text-2xl font-bold text-white tracking-tight">{data.name}</h1>
          <p className="text-slate-400 text-sm mt-1">{data.title}</p>
          {data.company && (
            <div className="flex items-center gap-2 mt-2 text-amber-500">
              <span className="text-xs font-bold uppercase">{data.company}</span>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="px-8 mt-8 grid grid-cols-2 gap-3">
          <a href={`tel:${data.phone}`} className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex flex-col gap-2 hover:bg-slate-700/50 transition-all text-amber-500">
            <Phone size={18} />
            <span className="text-slate-300 text-xs font-semibold">Call Direct</span>
          </a>
          <a href={`mailto:${data.email}`} className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex flex-col gap-2 hover:bg-slate-700/50 transition-all text-amber-500">
            <Mail size={18} />
            <span className="text-slate-300 text-xs font-semibold">Send Email</span>
          </a>
        </div>

        <div className="px-8 mt-8 pb-10 space-y-6 bg-slate-900 text-white">
          <section>
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-8 mb-4">Links</h3>
            <div className="space-y-2">
              {data.corporateLinks.map((link, i) => (
                <Link key={i} href={link.url} className="flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-700 rounded-xl text-slate-200 hover:border-amber-500/50 transition-all group">
                  {link.icon}
                  <span className="text-sm font-medium">{link.title}</span>
                  <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </section>

          {data.bio && (
            <section className="bg-slate-800/80 p-6 rounded-2xl border-l-4 border-amber-500">
              <p className="text-slate-300 text-sm leading-relaxed italic">"{data.bio}"</p>
            </section>
          )}

          <div className="flex justify-center gap-6 pt-4">
            {data.socialLinks.map((social, i) => (
              <a key={i} href={social.url} target="_blank" className="text-slate-500 hover:text-amber-500 transition-colors">
                <span className="bg-[#64758A] hover:text-amber-500">
                  {getSocialIcon(social.platform)}
                </span>
                 

              </a>
            ))}
          </div>
        </div>

        {/* Footer Action */}
        <div className="mt-auto p-6 bg-slate-900/50 backdrop-blur-md">
          <button onClick={handleSaveContact} className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-lg shadow-amber-500/20 cursor-pointer">
            Save to Contacts
          </button>
        </div>
      </div>
    </div>
  );
}