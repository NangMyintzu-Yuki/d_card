import { platform } from 'os';
import ProfileImg from '../../../../public/images/ko_kaung_myat_thu.png';
import Template5 from '@/components/templates/Template5';



const myData = {
    name: "Ko Kaung Myat Thu",
    title: "",
    email: "kaungmyatthu1293@gmail.com",
    phone: "09403712296",
    description: "...",
    company: "https://www.facebook.com/share/1DeZXuc5U4/",
    profileImage: ProfileImg,
    address: "58th Streets , Btw 114th x 114th(D) Streets, CMTS , MDY.",
    bio: "A results-driven marketing and business development professional with experience in construction materials and retail industries, including cement, gypsum board, and liquor business operations. Skilled in digital marketing, brand building, and sales strategy, with a strong focus on driving business growth and market expansion. Passionate about innovation, customer engagement, and developing effective marketing campaigns that deliver measurable results.",
    corporateLinks: [],
    socialLinks: [

        { platform: "Viber", url: "viber://add?number='09403712296" },
        { platform: "Facebook", url: "https://www.facebook.com/kaungmyat.shine.982" },

        { platform: "Telegram", url: "https://t.me/Kwee_Kaung" },

        { platform: "TikTok", url: 'https://www.tiktok.com/@ck90934?_r=1&_t=ZS-95llhhbOuBN' },
        { platform: "WeChat", url: 'weixin://dl/chat?kaungmyatthu93' },
    ],
    linkedinLink: "",
};
export default function Page() {
    return <Template5 data={myData} />;
}