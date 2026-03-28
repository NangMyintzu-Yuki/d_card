"use client"
import React from 'react'
import { Phone, Mail, ChevronRight, Facebook, Instagram, Send, LinkedinIcon, Briefcase, Youtube, Link, ExternalLink, Music2 } from 'lucide-react';
import Profile from '../../../../public/images/zwe_aung.jpg'
import { downloadVCard } from '@/app/utils/vcard';
import Image from 'next/image';

type Params = Promise<{ slug: string }>;
export default function DigitalCard(props: { params: Params }) {

    const socialLinks = [
        { platform: 'Facebook', color: 'text-blue-600', label: 'Facebook', url: "https://www.facebook.com/share/1AkxfNBFKW/" },
        { platform: 'Viber', color: 'text-indigo-400', label: 'Viber', url: "viber://add?number=09979052919" },
        // instagram: { color: 'text-red-400', label: 'Instagram' },
        // tiktok: {  color: 'text-black', label: 'TikTok' },
        { platform: 'Telegram', color: 'text-blue-400', label: 'Telegram', url: "@zweaung_nova_edu" },
    ];
    // const PLATFORM_CONFIG: Record<string, {  color: string, label: string, url:string }> = {
    //     facebook: {  color: 'text-blue-600', label: 'Facebook' , url:"https://www.facebook.com/share/1AkxfNBFKW/" },
    //     viber: {  color: 'text-indigo-400', label: 'Viber', url: "viber://add?number=09979052919" },
    //     // instagram: { color: 'text-red-400', label: 'Instagram' },
    //     // tiktok: {  color: 'text-black', label: 'TikTok' },
    //     telegram: { color: 'text-blue-400', label: 'Telegram', url: "@zweaung_nova_edu"},
    // };

    const customer = {
        name: "Zwe Aung",
        title: "Founder & CEO of NOVA Education Services",
        email: "zweaung.nova.edu@gmail.com",
        phone: "09794363231",
        address: "No.404 B, Tayza Street, 35 Ward, North Dagon."
    };

    const handleSaveContact = () => {
        downloadVCard(customer);
    };
    return (
        <section className="min-h-screen bg-[#f8fafc] flex justify-center">
            <div className="w-full max-w-[500px] bg-white flex flex-col min-h-screen shadow-2xl">

                <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-rose-500 p-0.5">
                            <div className="relative w-full h-full">
                                <Image
                                    src={Profile}
                                    alt="Profile"
                                    fill
                                    className="rounded-full object-cover border-2 border-white"
                                />
                            </div>
                        </div>
                        <h2 className="text-sm font-bold text-gray-800 tracking-tight">
                            Zwe Aung
                        </h2>
                    </div>
                    <a
                        href="https://www.facebook.com/share/1AkxfNBFKW/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900 text-white text-xs px-4 py-2 rounded-full font-bold hover:bg-gray-800 transition-all inline-block"
                    >
                        Follow
                    </a>
                </div>

                <div className="px-6 py-8 bg-gradient-to-b from-gray-50 to-white">
                    <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
                        Let's build something <span className="text-orange-500">incredible</span> together.
                    </h1>
                    <p className="mt-4 text-gray-600 leading-relaxed text-justify">
                        Founder & CEO of NOVA Education Services, leading the development of innovative and scalable education systems. With over 7 years of experience in academic leadership and curriculum design, specializes in international education frameworks, institutional strategy, and building high-quality learning environments.
                    </p>
                </div>

                <div className="px-6 pb-12 space-y-6">
                    <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Priority Contact</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <a href={`tel:09794363231`} className="p-4 rounded-2xl bg-orange-50 border border-orange-200 flex flex-col gap-2 items-center justify-center shadow-lg">
                                <Phone size={20} className="text-orange-500" />
                                <span className="text-xs font-bold text-gray-800">Call Me</span>
                            </a>
                            <a href={`mailto:zweaung.nova.edu@gmail.com`} className="p-4 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col gap-2 items-center justify-center shadow-lg">
                                <Mail size={20} className="text-blue-500" />
                                <span className="text-xs font-bold text-gray-800">Send Mail</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Social Network</h3>
                        <div className="space-y-3">
                            {socialLinks?.map((link, index) => {
                                // const config = PLATFORM_CONFIG[link.platform];
                                // if (!config) return null;

                                return (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-4 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-md hover:-translate-y-0.5 transition-all "
                                    >
                                        <div className={`w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-xl ${link.color}`}>
                                            {
                                                link.platform == "Facebook" &&
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_155_492)">
                                                        <path d="M15 0C6.7158 0 0 6.7158 0 15C0 22.0344 4.8432 27.9372 11.3766 29.5584V19.584H8.2836V15H11.3766V13.0248C11.3766 7.9194 13.6872 5.553 18.6996 5.553C19.65 5.553 21.2898 5.7396 21.9606 5.9256V10.0806C21.6066 10.0434 20.9916 10.0248 20.2278 10.0248C17.7684 10.0248 16.818 10.9566 16.818 13.3788V15H21.7176L20.8758 19.584H16.818V29.8902C24.2454 28.9932 30.0006 22.6692 30.0006 15C30 6.7158 23.2842 0 15 0Z" fill="currentColor" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_155_492">
                                                            <rect width="30" height="30" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>

                                            }
                                            {
                                                link.platform == 'Viber' &&

                                                <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.1239 0.712061C15.4049 -0.237354 10.5044 -0.237354 5.78534 0.712061C3.69808 1.18677 1.06632 3.84513 0.612566 5.93384C-0.204189 10.0163 -0.204189 14.1938 0.612566 18.2762C1.15707 20.365 3.78883 23.0233 5.78534 23.498C5.87609 23.498 5.96684 23.593 5.96684 23.6879V29.6692C5.96684 29.954 6.32984 30.1439 6.51135 29.8591L9.23386 26.9159C9.23386 26.9159 11.4119 24.5424 11.7749 24.1626C11.7749 24.1626 11.8656 24.0677 11.9564 24.0677C14.6789 24.1626 17.4921 23.8778 20.2147 23.4031C22.3019 22.9284 24.9337 20.27 25.3874 18.1813C26.2042 14.0988 26.2042 9.92139 25.3874 5.8389C24.8429 3.84513 22.2112 1.18677 20.1239 0.712061ZM20.2147 18.5611C19.7609 19.5105 19.2164 20.27 18.3089 20.7447C18.0367 20.8397 17.7644 20.9346 17.4921 21.0295C17.1291 20.9346 16.8569 20.8397 16.5846 20.7447C13.6806 19.5105 10.9581 17.8015 8.78011 15.3331C7.60035 13.9089 6.60209 12.2949 5.78534 10.586C5.42234 9.73151 5.05934 8.97197 4.78709 8.1175C4.51483 7.35797 4.96858 6.59844 5.42234 6.02879C5.87609 5.45914 6.42059 5.07937 7.05585 4.79455C7.5096 4.50972 7.96335 4.69961 8.32635 5.07937C9.05236 6.02879 9.77836 6.9782 10.3229 8.02256C10.6859 8.68715 10.5951 9.44668 9.95986 9.92139C9.77836 10.0163 9.68761 10.1113 9.50611 10.3012C9.41536 10.3961 9.23385 10.491 9.1431 10.6809C8.9616 10.9657 8.9616 11.2506 9.05235 11.5354C9.77836 13.719 11.1396 15.428 13.2269 16.3774C13.5899 16.5673 13.8621 16.6622 14.3159 16.6622C14.9511 16.5673 15.2234 15.8078 15.6771 15.428C16.1309 15.0482 16.6754 15.0482 17.2199 15.3331C17.6736 15.6179 18.1274 15.9976 18.6719 16.3774C19.1257 16.7572 19.5794 17.042 20.0332 17.4218C20.3054 17.6117 20.3962 18.0864 20.2147 18.5611ZM16.4031 11.4405C16.2216 11.4405 16.3124 11.4405 16.4031 11.4405C16.0401 11.4405 15.9494 11.2506 15.8586 10.9657C15.8586 10.7759 15.8586 10.491 15.7679 10.3012C15.6771 9.92139 15.4956 9.54162 15.1326 9.2568C14.9511 9.16186 14.7696 9.06691 14.5881 8.97197C14.3159 8.87703 14.1344 8.87703 13.8621 8.87703C13.5899 8.78209 13.4991 8.59221 13.4991 8.30738C13.4991 8.1175 13.7714 7.92762 13.9529 7.92762C15.4049 8.02256 16.4939 8.87703 16.6754 10.6809C16.6754 10.7759 16.6754 10.9657 16.6754 11.0607C16.6754 11.2506 16.5846 11.4405 16.4031 11.4405ZM15.4956 7.26303C15.0419 7.07314 14.5881 6.88326 14.0436 6.78832C13.8621 6.78832 13.5899 6.69338 13.4084 6.69338C13.1361 6.69338 12.9546 6.50349 13.0454 6.21867C13.0454 5.93384 13.2269 5.74396 13.4991 5.8389C14.4066 5.93384 15.2234 6.12373 16.0401 6.50349C17.6736 7.35797 18.5812 8.78209 18.8534 10.6809C18.8534 10.7759 18.8534 10.8708 18.8534 10.9657C18.8534 11.1556 18.8534 11.3455 18.8534 11.6303C18.8534 11.7253 18.8534 11.8202 18.8534 11.9152C18.7627 12.2949 18.1274 12.3899 18.0366 11.9152C18.0366 11.8202 17.9459 11.6303 17.9459 11.5354C17.9459 10.6809 17.7644 9.82645 17.4014 9.06691C16.8569 8.21244 16.2216 7.64279 15.4956 7.26303ZM20.3962 12.9595C20.1239 12.9595 19.9424 12.6747 19.9424 12.3899C19.9424 11.8202 19.8517 11.2506 19.7609 10.6809C19.3979 7.64279 17.0384 5.17431 14.2251 4.6996C13.7714 4.60466 13.3176 4.60466 12.9546 4.50972C12.6824 4.50972 12.3194 4.50972 12.2286 4.12996C12.1379 3.84513 12.4101 3.56031 12.6824 3.56031C12.7731 3.56031 12.8639 3.56031 12.8639 3.56031C16.5846 3.65525 13.0454 3.56031 12.8639 3.56031C16.6754 3.65525 19.8517 6.31361 20.4869 10.3012C20.5777 10.9657 20.6684 11.6303 20.6684 12.3899C20.8499 12.6747 20.6684 12.9595 20.3962 12.9595Z" fill="currentColor" />

                                                </svg>



                                            }
                                            {
                                                link.platform == 'Telegram' &&

                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_155_486)"><path fillRule="evenodd" clipRule="evenodd" d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM15.5375 11.0737C14.0786 11.6805 11.1627 12.9365 6.78987 14.8417C6.07979 15.124 5.70782 15.4003 5.67396 15.6704C5.61673 16.1269 6.18839 16.3066 6.96684 16.5514C7.07273 16.5847 7.18244 16.6192 7.29492 16.6558C8.0608 16.9047 9.09103 17.196 9.62661 17.2075C10.1124 17.218 10.6547 17.0177 11.2533 16.6067C15.3389 13.8488 17.448 12.4548 17.5804 12.4247C17.6738 12.4035 17.8032 12.3769 17.891 12.4548C17.9787 12.5328 17.97 12.6804 17.9608 12.72C17.9041 12.9614 15.6602 15.0476 14.4989 16.1272C14.1369 16.4638 13.8801 16.7025 13.8276 16.757C13.71 16.8792 13.5902 16.9947 13.475 17.1058C12.7635 17.7917 12.2299 18.306 13.5045 19.146C14.1171 19.5496 14.6072 19.8834 15.0962 20.2164C15.6302 20.5801 16.1629 20.9428 16.852 21.3946C17.0276 21.5097 17.1953 21.6292 17.3586 21.7457C17.9801 22.1887 18.5384 22.5868 19.2282 22.5233C19.6291 22.4864 20.0431 22.1095 20.2533 20.9854C20.7503 18.3289 21.727 12.5731 21.9528 10.2012C21.9726 9.99341 21.9477 9.72746 21.9277 9.61072C21.9077 9.49397 21.866 9.32763 21.7142 9.2045C21.5345 9.05867 21.257 9.02792 21.133 9.0301C20.5688 9.04004 19.7032 9.34102 15.5375 11.0737Z" fill="currentColor" /></g><defs><clipPath id="clip0_155_486"><rect width="30" height="30" fill="white" /></clipPath></defs></svg>
                                            }
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-sm font-bold text-gray-800">{link.label}</h4>
                                        </div>
                                        <ExternalLink size={20} className="ml-auto text-gray-300" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="sticky bottom-4 px-6 mt-auto">
                    <button type="button" onClick={handleSaveContact}
                        className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold shadow-xl shadow-orange-500/30 hover:bg-orange-600 active:scale-95 transition-all flex items-center justify-center gap-2">

                        Save to Contacts
                    </button>

                </div>

                <div className="py-4 text-center">
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                        © 2026 Zwe Aung
                    </p>
                </div>
            </div>
        </section>
    )
}

