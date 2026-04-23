import Template7 from '@/components/templates/Template7';
import ProfileImg from '../../../../public/images/shweyeewin.jpg';
//  const corporateLinks = [
    //         { title: 'Company Website', icon: <Globe size={18} className="text-slate-500 group-hover:text-amber-500" />, url: 'https://www.facebook.com/share/1DeZXuc5U4/' },
    //         { title: 'WeGrow', icon: <Calendar size={18} className="text-slate-500 group-hover:text-amber-500" />, url: 'https://www.facebook.com/share/1DeZXuc5U4/' },
    //         { title: 'WeTech', icon: <TrendingUp className="text-slate-500 group-hover:text-amber-500" />, url: 'https://www.facebook.com/share/1HxKwZSuzV/' },
    //         { title: 'Awareness for Excellence - A4E', icon: <Atom className="text-slate-500 group-hover:text-amber-500" />, url: 'https://www.facebook.com/share/1EEqNicLMs/' },
    //     ];
    
    const myLinks = [
        
        { platform: "Viber",  url: "viber://chat?number=95974133003" },
        { platform: "Facebook",url: "https://www.facebook.com/share/1DeZXuc5U4/" },
        { platform: "Linkedin", url: "https://www.linkedin.com/in/shwe-yee-win-767aaa160" },
        { platform: "Telegram",url: "https://t.me/+959974133003" },
        { platform: "WhatsApp", url: "https://wa.me/959671496721" },
    ];
    
    const myData = {
        name: "Shwe Yee Win",
        title: "Founder Of WeGrow Myanmar",
        email: "shweyeewin.wegrow@gmail.com",
        phone: "09974133003",
        description: "Founder of WeGrow Myanmar...",
        profileImage: ProfileImg,
        socialLinks: myLinks,
        corporateLinks: [],
    };

export default function Page() {
    return <Template7 data={myData} />;
}