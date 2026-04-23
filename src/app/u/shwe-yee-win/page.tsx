import Template7 from '@/components/templates/Template7';
import ProfileImg from '../../../../public/images/shweyeewin.jpg';

const myData = {
    name: "Shwe Yee Win",
    title: "Founder Of WeGrow Myanmar",
    email: "shweyeewin.wegrow@gmail.com",
    phone: "09974133003",
    description: "Founder of WeGrow Myanmar...",
    followUrl: "https://www.facebook.com/share/1DeZXuc5U4/"
};
//  const corporateLinks = [
//         { title: 'Company Website', icon: <Globe size={18} className="text-slate-500 group-hover:text-amber-500" />, url: 'https://www.facebook.com/share/1DeZXuc5U4/' },
//         { title: 'WeGrow', icon: <Calendar size={18} className="text-slate-500 group-hover:text-amber-500" />, url: 'https://www.facebook.com/share/1DeZXuc5U4/' },
//         { title: 'WeTech', icon: <TrendingUp className="text-slate-500 group-hover:text-amber-500" />, url: 'https://www.facebook.com/share/1HxKwZSuzV/' },
//         { title: 'Awareness for Excellence - A4E', icon: <Atom className="text-slate-500 group-hover:text-amber-500" />, url: 'https://www.facebook.com/share/1EEqNicLMs/' },
//     ];

const myLinks = [
    
     { platform: "Viber", label:'Viber', color:'text-purple-600', url: "viber://add?number=09974133003" },
        { platform: "Facebook",label:"Facebook", color:"text-blue-600", url: "https://www.facebook.com/share/1KSC1gD3Wd/" },
        { platform: "Linkedin",label:"Linkedin",color:"text-[#0077B5]", url: "https://www.linkedin.com/in/shwe-yee-win-767aaa160" },
        { platform: "Telegram", label:"Telegram",color:"bg-[#0088CC] text-[#0088CC]", url: "https://t.me/+959974133003" },
        { platform: "WhatsApp", label:"WhatsApp",color:"text-green-600", url: "https://wa.me/959671496721" },
];

export default function Page() {
    return <Template7 customer={myData} socialLinks={myLinks} profileImage={ProfileImg} />;
}