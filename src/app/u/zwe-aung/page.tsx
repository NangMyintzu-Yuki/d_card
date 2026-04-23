
import Profile from '../../../../public/images/zwe_aung.jpg'
import Template7 from '@/components/templates/Template7';

const myLinks = [
    { platform: 'Facebook', url: "https://www.facebook.com/share/1AkxfNBFKW/" },
    { platform: 'Viber', url: "viber://add?number=09979052919" },
    { platform: 'Telegram',  url: "https://t.me/zweaung_nova_edu" },
];


const myData = {
    name: "Zwe Aung",
    title: "Founder & CEO of NOVA Education Services",
    email: "zweaung.nova.edu@gmail.com",
    phone: "09794363231",
    address: "No.404 B, Tayza Street, 35 Ward, North Dagon.",
    corporateLinks: [],
    profileImage:Profile,
    socialLinks:myLinks,
};
export default function DigitalCard() {
  
    return (
        <Template7  data={myData}  />
    )
}

