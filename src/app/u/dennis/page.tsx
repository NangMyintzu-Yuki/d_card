import Template6 from '@/components/templates/Template6';
import ProfileImg from '../../../../public/images/dennis.jpg';



const myData = {
    name: "Dennis",
    title: "Founder of Baby Elephant \n (စားသောက်ကုန်လုပ်ငန်း)\n \n",
    email: "dennissai652003@gmail.com",
    phone: "09955157037, 09773485837", //09773485837
    description: "...",
    company: "",
    profileImage: ProfileImg,
    address: "No.207/Room.14/Pansodan Road(Middle)/Kyauktada Township/Yangon/Myanmar",
    bio: "Founder \n Taurus ♉ \n Be Happy 🍀",
    corporateLinks: [],
    socialLinks: [

        { platform: "Viber", url: "viber://chat?number=959955157037" },
        { platform: "Facebook", url: "https://www.facebook.com/share/1Ckmc4Njgq/" },

        { platform: "Telegram", url: "https://t.me/DNSai2357" },

        { platform: "TikTok", url: 'https://www.tiktok.com/@sai.mon877?_r=1&_t=ZS-95netBX3DhR' },
    ],
    linkedinLink: "",
};
export default function Page() {
    return <Template6 data={myData} />;
}