
import Profile from '../../../../public/images/zwe_aung.jpg'
import Template7 from '@/components/templates/Template7';

const myLinks = [
    { platform: 'Facebook', color: 'text-blue-600', label: 'Facebook', url: "https://www.facebook.com/share/1AkxfNBFKW/" },
    { platform: 'Viber', color: 'text-indigo-400', label: 'Viber', url: "viber://add?number=09979052919" },
    { platform: 'Telegram', color: 'text-blue-400', label: 'Telegram', url: "https://t.me/zweaung_nova_edu" },
];


const myData = {
    name: "Zwe Aung",
    title: "Founder & CEO of NOVA Education Services",
    email: "zweaung.nova.edu@gmail.com",
    phone: "09794363231",
    address: "No.404 B, Tayza Street, 35 Ward, North Dagon."
};
export default function DigitalCard() {
  
    return (
        <Template7  customer={myData} socialLinks={myLinks} profileImage={Profile} />
    )
}

