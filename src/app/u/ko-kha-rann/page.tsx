import ProfileImg from '../../../../public/images/ko_kha_rann.png';
import Template5 from '@/components/templates/Template5';



const myData = {
    name: "ကိုခရမ်း",
    title: "",
    email: "kharannmm@gmail.com",
    phone: "09777888254, 09444333254",
    description: "...",
    company: "https://www.facebook.com/share/1DeZXuc5U4/",
    profileImage: ProfileImg,
    address: "ရှေ့ဆောင် Plastic အမှတ်(၂၅/၄) အိမ်မြင့်စံရွာ၊ တံတားဦး၊ မန္တလေးမြို့",
    bio: "မိတ်ဆွေသစ်ဖြစ်ရတာ ဝမ်းသာပါတယ်။ အချိန်မရွေး ဆက်သွယ်လိုက်ပါ!\n• Let's connect and share some great ideas!",
    corporateLinks: [],
    socialLinks: [

        { platform: "Viber", url: "viber://chat?number=959777888254" },
        { platform: "Facebook", url: "https://www.facebook.com/share/181zBpcTuK/?mibextid=wwXIfr" },

        { platform: "Telegram", url: "https://t.me/Kharann" },

        { platform: "TikTok", url: 'https://www.tiktok.com/@wai.yan.htoo.aung0?_r=1&_t=ZS-95lyicngigu' },
    ],
    linkedinLink: "",
};
export default function Page() {
    return <Template5 data={myData} />;
}