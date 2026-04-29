import ProfileImg from '../../../../public/images/ko_ko_oo.jpg';
import Template2 from '@/components/templates/Template2';

import CompanyLogo from '../../../../public/images/ko_ko_oo_companay_logo.jpg'

const myData = {
    name: "Ko Ko Oo",
    title: "Kids World Education (Founder)",
    email: "ukkomyanmar@gmail.com",
    phone: "09777710428",
    description: "...",
    company: "Kids World Education",
    profileImage: ProfileImg,
    company_logo: CompanyLogo,
    address: "Hlaing thar yar T/P",
    bio: "Kids World Education ဟာ \n 👉 ကလေးများအတွက် အခြေခံပညာရေးကို ပျော်ရွှင်စရာနည်းလမ်းတွေနဲ့ သင်ကြားပေးဖို ရည်ရွယ်ထားတဲ့ educational platform တစ်ခု ဖြစ်ပါတယ်။ \n \n Mission (ရည်မှန်းချက်) \n  ကလေးတွေကို fun + easy learning နဲ့ သင်ပေးခြင်း \n Early childhood development ကို ထောက်ပံ့ခြင်း \n Language, creativity, thinking skills တိုးတက်စေခြင်း",
    corporateLinks: [],
    socialLinks: [
        { platform: "Viber", url: "viber://chat?number=959777710428" },
        // { platform: "Facebook", url: "https://www.facebook.com/share/1DaW1EFmdd" },
        { platform: "Facebook", url:"https://www.facebook.com/share/1DXiDGqPkh/"},
        {platform:"Company" ,url:"http://kidsworldeducation.net"},
        { platform: "TikTok", url: 'https://www.tiktok.com/@kids.world.educat8?_r=1&_t=ZS-95lzDfQYuGO' },
        { platform: "Youtube", url: 'https://youtube.com/@kidsworldeducation?feature=shared' },
    ],
    linkedinLink: "",
    websiteLink:"https://softedify.top/resource/kidsworldeduction/app_collection_qr"
};
export default function Page() {
    return <Template2 data={myData} />;
}