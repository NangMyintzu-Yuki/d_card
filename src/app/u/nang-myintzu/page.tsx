import ProfileImg from "../../../../public/images/nangmyintzu.jpg";
import { Globe, Youtube } from "lucide-react";
import Template3 from "@/components/templates/Template3";
import Template1 from "@/components/templates/Template1";
import Template2 from "@/components/templates/Template2";
import Template4 from "@/components/templates/Template4";
import Template5 from "@/components/templates/Template5";
import Template6 from "@/components/templates/Template6";
import Template7 from "@/components/templates/Template7";

const userData = {
    name: "Nang Myintzu",
    title: "Full Stack Developer",
    company: "NMZ",
    profileImage: ProfileImg,
    email: "nangmyintzu89@gmail.com",
    phone: "09259599508",
    bio: "Driving operational excellence and strategic growth through innovative leadership and a commitment to data-driven results.",
    corporateLinks: [
        { title: 'Portfolio', icon: <Globe size={18} className="text-slate-500 group-hover:text-amber-500" />, url: 'https://nangmyintzu.vercel.app/' },
        { title: 'Youtube', icon: <Youtube size={18} className="text-slate-500 group-hover:text-amber-500" />, url: 'https://www.youtube.com/@nangmyintzu8203' },
    ],
    socialLinks: [
        { platform: "Facebook", url: "https://www.facebook.com/share/1AQscyqqiV/" },
        { platform: "Linkedin", url: "https://www.linkedin.com/in/nangmyintzu/" },
        { platform: "TikTok", url: "https://www.tiktok.com/@nmz6464?_r=1&_t=ZS-94i4kKHBpdU" },
        { platform: "Viber", url: "viber://add?number=%2B9599259599508" },
        { platform: "Telegram", url: "https://t.me/+959259599508" },
    ],
    linkedinUrl: 'https://www.linkedin.com/in/nangmyintzu/'
};

export default function Page() {
    //   return <Template3 data={userData} />;
    return <Template3 data={userData} />
}