"use client";
import { downloadVCard } from "@/app/utils/vcard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Globe, Calendar, Briefcase, TrendingUp, Phone, Mail, Linkedin, ArrowRight, Facebook, LinkedinIcon, Atom, Youtube } from "lucide-react";
import Profile from '../../../../public/images/nangmyintzu.jpg'
type Params = Promise<{ slug: string }>;


export default function DigitalCard(props: { params: Params }) {
    const corporateLinks = [
        { title: 'Portfolio', icon: <Globe size={18} className="text-slate-500 group-hover:text-amber-500" />, url: 'https://nangmyintzu.vercel.app/' },
        { title: 'Tiktok', icon: <Calendar size={18} className="text-slate-500 group-hover:text-amber-500" />, url: 'https://www.tiktok.com/@nmz6464?_r=1&_t=ZS-94i4kKHBpdU' },
        // { title: 'WeTech', icon: <TrendingUp className="text-slate-500 group-hover:text-amber-500" />, url: 'https://www.facebook.com/share/1HxKwZSuzV/' },
        // { title: 'Awareness for Excellence - A4E', icon: <Atom className="text-slate-500 group-hover:text-amber-500" />, url: 'https://www.facebook.com/share/1AQscyqqiV/' },
    ];

    const socialLinks = [
        { platform: "Viber", icon: <Briefcase />, url: "viber://add?number=09259599508" },
        { platform: "Facebook", icon: <Facebook />, url: "https://www.facebook.com/share/1AQscyqqiV/" },
        { platform: "Linkedin", icon: <LinkedinIcon />, url: "https://www.linkedin.com/in/nangmyintzu/" },
        { platform: "Telegram", icon: '', url: "https://t.me/+959259599508" },
        { platform: "Youtube", icon: <Youtube />, url: "https://www.youtube.com/@nangmyintzu8203" },
    ];
    // Use React.use() to unwrap the params promise safely
    const params = React.use(props.params);

    const customer = {
        name: "Nang Myintzu",
        title: "Full Stack Developer",
        email: "nangmyintzu89@gmail.com",
        phone: "09259599508"
    };

    const handleSaveContact = () => {
        downloadVCard(customer);
    };

    return (
        <div className="min-h-screen bg-[#0f172a] flex justify-center items-start sm:py-10">

            <div className="w-full max-w-[450px] bg-[#1e293b] flex flex-col  sm:min-h-0 sm:rounded-[2rem] shadow-2xl overflow-hidden border border-slate-700">

                <div className="relative h-40 bg-slate-800">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    <div className="absolute -bottom-14 left-8">
                        <div className="w-28 h-28 rounded-2xl border-4 border-[#1e293b] overflow-hidden shadow-2xl bg-slate-700">
                            <Image src={Profile} width={500} height={500} alt="Nang Myintzu" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <div className="mt-16 px-8">
                    <h1 className="text-2xl font-bold text-white tracking-tight">Nang Myintzu</h1>

                    <div className="flex items-center gap-2 mt-2 text-amber-500">
                        <i className="fas fa-building text-xs"></i>
                        <span className="text-xs font-bold uppercase">NMZ</span>
                    </div>
                </div>

                <div className="px-8 mt-8 grid grid-cols-2 gap-3">
                    <a href="tel:09259599508" className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex flex-col gap-2 hover:bg-slate-700/50 transition-all">
                        <i className="fas fa-phone-alt text-amber-500"></i>
                        <span className="text-slate-300 text-xs font-semibold">Call Direct</span>
                    </a>
                    <a href="mailto:nangmyintzu89@gmail.com" className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex flex-col gap-2 hover:bg-slate-700/50 transition-all">
                        <i className="fas fa-envelope text-amber-500"></i>
                        <span className="text-slate-300 text-xs font-semibold">Send Email</span>
                    </a>

                    <a href="https://www.linkedin.com/in/nangmyintzu/" target="__blank" className="col-span-2 bg-[#0077b5] p-4 rounded-xl flex items-center justify-between group transition-all">
                        <div className="flex items-center gap-5 text-white">
                            <i className="fa-brands fa-linkedin text-[25px]" ></i>
                            <span className="font-bold">Professional Network</span>
                        </div>
                        <i className="fas fa-arrow-right text-white/50 group-hover:translate-x-1 transition-transform"></i>
                    </a>


                </div>

                <div className="px-8 mt-8 pb-10 space-y-6 bg-slate-900 text-white">
                    <section>
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-8 mb-4">
                            Corporate Links
                        </h3>
                        <div className="space-y-2">
                            {corporateLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className="flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-700 rounded-xl text-slate-200 hover:border-amber-500/50 transition-all group"
                                >
                                    {link.icon}
                                    <span className="text-sm font-medium">{link.title}</span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Quote Section */}
                    <section className="bg-slate-800/80 p-6 rounded-2xl border-l-4 border-amber-500">
                        <p className="text-slate-300 text-sm leading-relaxed italic">
                            "Driving operational excellence and strategic growth through innovative leadership and a commitment to data-driven results."
                        </p>
                    </section>

                    {/* Social Links Section */}
                    {socialLinks.length > 0 && (
                        <div className="flex justify-center gap-6 pt-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-500 hover:text-white transition-colors cursor-pointer"
                                >
                                    {
                                        social.platform == 'Telegram' &&
                                        <span className="bg-[#64758A] hover:text-amber-500">

                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_155_486)"><path fillRule="evenodd" clipRule="evenodd" d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM15.5375 11.0737C14.0786 11.6805 11.1627 12.9365 6.78987 14.8417C6.07979 15.124 5.70782 15.4003 5.67396 15.6704C5.61673 16.1269 6.18839 16.3066 6.96684 16.5514C7.07273 16.5847 7.18244 16.6192 7.29492 16.6558C8.0608 16.9047 9.09103 17.196 9.62661 17.2075C10.1124 17.218 10.6547 17.0177 11.2533 16.6067C15.3389 13.8488 17.448 12.4548 17.5804 12.4247C17.6738 12.4035 17.8032 12.3769 17.891 12.4548C17.9787 12.5328 17.97 12.6804 17.9608 12.72C17.9041 12.9614 15.6602 15.0476 14.4989 16.1272C14.1369 16.4638 13.8801 16.7025 13.8276 16.757C13.71 16.8792 13.5902 16.9947 13.475 17.1058C12.7635 17.7917 12.2299 18.306 13.5045 19.146C14.1171 19.5496 14.6072 19.8834 15.0962 20.2164C15.6302 20.5801 16.1629 20.9428 16.852 21.3946C17.0276 21.5097 17.1953 21.6292 17.3586 21.7457C17.9801 22.1887 18.5384 22.5868 19.2282 22.5233C19.6291 22.4864 20.0431 22.1095 20.2533 20.9854C20.7503 18.3289 21.727 12.5731 21.9528 10.2012C21.9726 9.99341 21.9477 9.72746 21.9277 9.61072C21.9077 9.49397 21.866 9.32763 21.7142 9.2045C21.5345 9.05867 21.257 9.02792 21.133 9.0301C20.5688 9.04004 19.7032 9.34102 15.5375 11.0737Z" fill="currentColor" /></g><defs><clipPath id="clip0_155_486"><rect width="30" height="30" fill="white" /></clipPath></defs></svg>
                                        </span>
                                    }
                                    {
                                        social.platform == "Facebook" &&
                                        <span className="bg-[#64758A] hover:text-amber-500">

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
                                        </span>
                                    }
                                    {
                                        social.platform == 'Viber' &&
                                        <span className="bg-[#64758A] hover:text-amber-500">

                                            <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.1239 0.712061C15.4049 -0.237354 10.5044 -0.237354 5.78534 0.712061C3.69808 1.18677 1.06632 3.84513 0.612566 5.93384C-0.204189 10.0163 -0.204189 14.1938 0.612566 18.2762C1.15707 20.365 3.78883 23.0233 5.78534 23.498C5.87609 23.498 5.96684 23.593 5.96684 23.6879V29.6692C5.96684 29.954 6.32984 30.1439 6.51135 29.8591L9.23386 26.9159C9.23386 26.9159 11.4119 24.5424 11.7749 24.1626C11.7749 24.1626 11.8656 24.0677 11.9564 24.0677C14.6789 24.1626 17.4921 23.8778 20.2147 23.4031C22.3019 22.9284 24.9337 20.27 25.3874 18.1813C26.2042 14.0988 26.2042 9.92139 25.3874 5.8389C24.8429 3.84513 22.2112 1.18677 20.1239 0.712061ZM20.2147 18.5611C19.7609 19.5105 19.2164 20.27 18.3089 20.7447C18.0367 20.8397 17.7644 20.9346 17.4921 21.0295C17.1291 20.9346 16.8569 20.8397 16.5846 20.7447C13.6806 19.5105 10.9581 17.8015 8.78011 15.3331C7.60035 13.9089 6.60209 12.2949 5.78534 10.586C5.42234 9.73151 5.05934 8.97197 4.78709 8.1175C4.51483 7.35797 4.96858 6.59844 5.42234 6.02879C5.87609 5.45914 6.42059 5.07937 7.05585 4.79455C7.5096 4.50972 7.96335 4.69961 8.32635 5.07937C9.05236 6.02879 9.77836 6.9782 10.3229 8.02256C10.6859 8.68715 10.5951 9.44668 9.95986 9.92139C9.77836 10.0163 9.68761 10.1113 9.50611 10.3012C9.41536 10.3961 9.23385 10.491 9.1431 10.6809C8.9616 10.9657 8.9616 11.2506 9.05235 11.5354C9.77836 13.719 11.1396 15.428 13.2269 16.3774C13.5899 16.5673 13.8621 16.6622 14.3159 16.6622C14.9511 16.5673 15.2234 15.8078 15.6771 15.428C16.1309 15.0482 16.6754 15.0482 17.2199 15.3331C17.6736 15.6179 18.1274 15.9976 18.6719 16.3774C19.1257 16.7572 19.5794 17.042 20.0332 17.4218C20.3054 17.6117 20.3962 18.0864 20.2147 18.5611ZM16.4031 11.4405C16.2216 11.4405 16.3124 11.4405 16.4031 11.4405C16.0401 11.4405 15.9494 11.2506 15.8586 10.9657C15.8586 10.7759 15.8586 10.491 15.7679 10.3012C15.6771 9.92139 15.4956 9.54162 15.1326 9.2568C14.9511 9.16186 14.7696 9.06691 14.5881 8.97197C14.3159 8.87703 14.1344 8.87703 13.8621 8.87703C13.5899 8.78209 13.4991 8.59221 13.4991 8.30738C13.4991 8.1175 13.7714 7.92762 13.9529 7.92762C15.4049 8.02256 16.4939 8.87703 16.6754 10.6809C16.6754 10.7759 16.6754 10.9657 16.6754 11.0607C16.6754 11.2506 16.5846 11.4405 16.4031 11.4405ZM15.4956 7.26303C15.0419 7.07314 14.5881 6.88326 14.0436 6.78832C13.8621 6.78832 13.5899 6.69338 13.4084 6.69338C13.1361 6.69338 12.9546 6.50349 13.0454 6.21867C13.0454 5.93384 13.2269 5.74396 13.4991 5.8389C14.4066 5.93384 15.2234 6.12373 16.0401 6.50349C17.6736 7.35797 18.5812 8.78209 18.8534 10.6809C18.8534 10.7759 18.8534 10.8708 18.8534 10.9657C18.8534 11.1556 18.8534 11.3455 18.8534 11.6303C18.8534 11.7253 18.8534 11.8202 18.8534 11.9152C18.7627 12.2949 18.1274 12.3899 18.0366 11.9152C18.0366 11.8202 17.9459 11.6303 17.9459 11.5354C17.9459 10.6809 17.7644 9.82645 17.4014 9.06691C16.8569 8.21244 16.2216 7.64279 15.4956 7.26303ZM20.3962 12.9595C20.1239 12.9595 19.9424 12.6747 19.9424 12.3899C19.9424 11.8202 19.8517 11.2506 19.7609 10.6809C19.3979 7.64279 17.0384 5.17431 14.2251 4.6996C13.7714 4.60466 13.3176 4.60466 12.9546 4.50972C12.6824 4.50972 12.3194 4.50972 12.2286 4.12996C12.1379 3.84513 12.4101 3.56031 12.6824 3.56031C12.7731 3.56031 12.8639 3.56031 12.8639 3.56031C16.5846 3.65525 13.0454 3.56031 12.8639 3.56031C16.6754 3.65525 19.8517 6.31361 20.4869 10.3012C20.5777 10.9657 20.6684 11.6303 20.6684 12.3899C20.8499 12.6747 20.6684 12.9595 20.3962 12.9595Z" fill="currentColor" />

                                            </svg>
                                        </span>



                                    }
                                    {
                                        social.platform == "Tiktok" && <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.3407 0H16.2848V20.4347C16.2848 22.8696 14.3402 24.8696 11.9203 24.8696C9.50042 24.8696 7.55586 22.8696 7.55586 20.4347C7.55586 18.0435 9.45721 16.0869 11.7907 16V10.8696C6.6484 10.9565 2.5 15.1739 2.5 20.4347C2.5 25.7392 6.73482 30 11.9636 30C17.1922 30 21.427 25.6957 21.427 20.4347V9.9565C23.3284 11.3478 25.6619 12.1739 28.125 12.2174V7.08696C24.3223 6.95652 21.3407 3.82608 21.3407 0Z" fill="#64758A" />
                                        </svg>

                                    }
                                    {
                                        social.platform == "Linkedin" &&
                                        <span className="bg-[#64758A] hover:text-amber-500">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM7.6875 12.4688V22.5H10.875V12.4688H7.6875ZM7.5 9.28125C7.5 10.3125 8.25 11.0625 9.28125 11.0625C10.3125 11.0625 11.0625 10.3125 11.0625 9.28125C11.0625 8.25 10.3125 7.5 9.28125 7.5C8.34375 7.5 7.5 8.25 7.5 9.28125ZM19.3125 22.5H22.3125V16.3125C22.3125 13.2187 20.4375 12.1875 18.6562 12.1875C17.0625 12.1875 15.9375 13.2187 15.6562 13.875V12.4688H12.6562V22.5H15.8437V17.1563C15.8437 15.75 16.7812 15 17.7187 15C18.6562 15 19.3125 15.4688 19.3125 17.0625V22.5Z" fill="currentColor" />
                                            </svg>


                                        </span>
                                    }
                                    {
                                        social.platform == "WhatsApp" &&
                                        <span className="bg-[#64758A] hover:text-amber-500">

                                            <svg width="30" height="30" viewBox="0 0 30 30" className="hover:text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 30L2.10875 22.2962C0.807498 20.0413 0.12375 17.485 0.125 14.8637C0.12875 6.66875 6.79749 0 14.9912 0C18.9675 0.00125 22.7 1.55 25.5074 4.36C28.3137 7.17 29.8587 10.905 29.8574 14.8775C29.8537 23.0738 23.1849 29.7425 14.9912 29.7425C12.5037 29.7413 10.0525 29.1175 7.88123 27.9325L0 30ZM8.24623 25.2413C10.3412 26.485 12.3412 27.23 14.9862 27.2313C21.7962 27.2313 27.3437 21.6887 27.3474 14.875C27.3499 8.0475 21.8287 2.5125 14.9962 2.51C8.18123 2.51 2.63749 8.0525 2.63499 14.865C2.63374 17.6462 3.44874 19.7287 4.81749 21.9075L3.56874 26.4675L8.24623 25.2413ZM22.48 18.4113C22.3875 18.2563 22.14 18.1637 21.7675 17.9775C21.3962 17.7913 19.57 16.8925 19.2287 16.7687C18.8887 16.645 18.6412 16.5825 18.3925 16.955C18.145 17.3263 17.4325 18.1637 17.2162 18.4113C17 18.6588 16.7825 18.69 16.4112 18.5037C16.04 18.3175 14.8425 17.9263 13.4237 16.66C12.32 15.675 11.5737 14.4587 11.3575 14.0863C11.1412 13.715 11.335 13.5138 11.52 13.3288C11.6875 13.1625 11.8912 12.895 12.0775 12.6775C12.2662 12.4625 12.3275 12.3075 12.4525 12.0588C12.5762 11.8113 12.515 11.5938 12.4212 11.4075C12.3275 11.2225 11.585 9.39375 11.2762 8.65C10.9737 7.92625 10.6675 8.02375 10.44 8.0125L9.72748 8C9.47998 8 9.07748 8.0925 8.73748 8.465C8.39748 8.8375 7.43748 9.735 7.43748 11.5638C7.43748 13.3925 8.76873 15.1587 8.95373 15.4062C9.13998 15.6537 11.5725 19.4062 15.2987 21.015C16.185 21.3975 16.8775 21.6262 17.4162 21.7975C18.3062 22.08 19.1162 22.04 19.7562 21.945C20.47 21.8387 21.9537 21.0462 22.2637 20.1787C22.5737 19.31 22.5737 18.5662 22.48 18.4113Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                    }

                                </a>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-auto p-6 bg-slate-900/50 backdrop-blur-md">
                    <button type="button" onClick={handleSaveContact}
                        className="block text-center w-full bg-amber-500 hover:bg-amber-600 text-slate-900 py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-lg shadow-amber-500/20">

                        Save to Contacts
                    </button>

                </div>

            </div>
        </div>
    );
}