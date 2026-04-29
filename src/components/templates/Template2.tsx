"use client"

import { getPlatformColor, getSocialIcon } from '@/app/utils/social';
import { downloadVCard } from '@/app/utils/vcard';
import { ArrowRight, Facebook, Mail, Phone, Share2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import FacebookIcon from '../icons/FacebookIcon';
import GlobeIcon from '../icons/GlobeIcon';
interface DigitalCardProps {
  name: string;
  title: string;
  company?: string;
  company_logo?:any;
  profileImage: any;
  email: string;
  phone: string;
  bio?: string;
  address?: string;
  corporateLinks: { title: string; icon: React.ReactNode; url: string }[];
  socialLinks: { platform: string; url: string }[];
  linkedinUrl?: string;
  websiteLink?: string;
}
const Template2 = ({ data }: { data: DigitalCardProps }) => {
  const handleSaveContact = () => {
    downloadVCard({
      name: data.name,
      title: data.title,
      email: data.email,
      phone: data.phone,
      address: data.address,
      profileImage:data.profileImage,
    });
  };
  const handleWeChatClick = (id: string) => {
    navigator.clipboard.writeText(id); // ID ကို copy ကူးမယ်
    alert("WeChat ID copied: " + id);
    //  window.location.href = "weixin://"; // App ကို ဖွင့်မယ်
  };
  const facebookLink = data.socialLinks?.find(link => link.platform.toLowerCase() == 'facebook')?.url;
  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-start sm:py-10">
      <div className="w-full max-w-[480px] bg-white sm:rounded-[2.5rem] shadow-xl flex flex-col min-h-screen sm:min-h-[850px] overflow-hidden">

        {/* FIXED HEADER SECTION */}
        <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-100 p-6 flex items-center gap-2 xs:gap-4">
          <div className="w-16 h-16 rounded-full border-2 border-indigo-500 p-0.5 flex-shrink-0">
            <Image
              src={data.profileImage}
              alt={data.name}
              width={64}
              height={64}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900 leading-none">{data.name}</h1>
            <p className="text-indigo-600 text-[8px] font-semibold mt-1 uppercase tracking-wider whitespace-wrap xs:whitespace-nowrap whitespace-pre-line">{data.title}</p>
          </div>
          {facebookLink && (
            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto bg-[#1877F2]/10 p-3 rounded-full text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300"
              title="Follow on Facebook"
            >
              <FacebookIcon />
            </a>
          )}

        </div>

        <div className="p-6 space-y-8">
          {/* Direct Contact */}
          <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Direct Contact</h2>
            <div className="grid grid-cols-1 gap-3">
              <a href={`mailto:${data.email}`} className="flex items-center gap-4 p-4 bg-indigo-50 rounded-2xl border border-indigo-100 group">
                <Mail size={18} className="text-indigo-500" />
                <span className="text-gray-700 font-medium text-sm truncate">{data.email}</span>
                <ArrowRight size={16} className="ml-auto text-indigo-300 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={`tel:${data.phone}`} className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 group">
                <Phone size={18} className="text-emerald-500" />
                <span className="text-gray-700 font-medium text-sm">{data.phone}</span>
                <ArrowRight size={16} className="ml-auto text-emerald-300 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Social Ecosystem */}
          <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Social Ecosystem</h2>
            <div className="space-y-3">
              {data.socialLinks?.map((link, idx) => {
                if (link.platform.toLowerCase() === "wechat") {
                  return (
                    <a key={idx} href={link.url} target="_blank" onClick={() => handleWeChatClick(link.url)}
                      className="flex items-center p-4 rounded-2xl hover:bg-gray-50 border border-gray-100 transition-all shadow-sm hover:shadow-md">
                      <div className={`w-10 h-10 ${getPlatformColor(link.platform)} rounded-xl flex items-center justify-center text-white shadow-lg shadow-gray-200`}>
                        {getSocialIcon(link.platform)}
                      </div>
                      <span className="ml-4 text-gray-800 font-semibold capitalize">{link.platform}</span>
                      <span className="ml-auto text-xs text-gray-400 font-medium">
                        {
                          link.platform.toLowerCase() === "viber" ? "Send Message" :
                            link.platform.toLowerCase() === "youtube" ? "Subscribe" :
                              link.platform.toLowerCase() === "tiktok" ? "Watch" : "Follow"
                        }
                      </span>
                    </a>
                  )
                }
                return (<a key={idx} href={link.url} target="_blank"
                  className="flex items-center p-4 rounded-2xl hover:bg-gray-50 border border-gray-100 transition-all shadow-sm hover:shadow-md">
                  <div className={`w-10 h-10 ${getPlatformColor(link.platform)} rounded-xl flex items-center justify-center text-white shadow-lg shadow-gray-200`}>
                    {getSocialIcon(link.platform)}
                  </div>
                  <span className="ml-4 text-gray-800 font-semibold capitalize">{link.platform}</span>
                  <span className="ml-auto text-xs text-gray-400 font-medium">
                    {
                      link.platform.toLowerCase() === "viber" ? "Send Message" :
                        link.platform.toLowerCase() === "youtube" ? "Subscribe" :
                          link.platform.toLowerCase() === "tiktok" ? "Watch" : "Follow"
                    }
                  </span>
                </a>)
              }
              )}
              {
                data?.websiteLink && 
              <a  target="_blank" href={data.websiteLink}
                      className="flex items-center p-4 rounded-2xl hover:bg-gray-50 border border-gray-100 transition-all shadow-sm hover:shadow-md">
                      <div className={`w-10 h-10  rounded-xl flex items-center justify-center text-white shadow-lg shadow-gray-200`}>
                        {
                          data?.company_logo && <Image src={data.company_logo} alt={data.company || "Company"} className='rounded-xl' />
                        }
                      </div>
                      <span className="ml-4 text-gray-800 font-semibold capitalize">{data.company}</span>
                      <span className="ml-auto text-xs text-gray-400 font-medium">
                        Watch
                      </span>
                    </a>
              }
            </div>
          </div>

          {/* Bio & CTA Section */}
          <div className="bg-slate-900 rounded-[2rem] p-8 text-white">
            <h3 className="text-xl font-bold mb-2">My Work</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 whitespace-pre-line">
              {data.bio}
            </p>
            <button
              onClick={handleSaveContact}
              className="w-full py-3 bg-white text-slate-900 rounded-xl font-bold transition-all duration-300 active:scale-95 text-lg cursor-pointer"
            >
              Save to Contacts
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 mt-auto border-t border-gray-100 text-center">
          <p className="text-gray-300 text-[10px] tracking-widest uppercase">
            © 2026 {data.name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Template2
