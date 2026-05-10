import ProfileImg from '../../../../public/images/ko_ko_oo.jpg';
import Template2 from '@/components/templates/Template2';

import CompanyLogo from '../../../../public/images/ko_ko_oo_companay_logo.jpg'
import { platform } from 'os';

const myData = {
    name: "Ko Ko Oo",
    title: "Kids World Education\n(Founder)",
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
        { platform: "Facebook", url:"https://www.facebook.com/share/1CUkBcETBJ/", name: "Kids World Education"},
        { platform: "Facebook", url:"https://www.facebook.com/share/1UX2C3kCmV/", name: "Kids World Entertainment"},
        { platform: "TikTok", url: 'https://www.tiktok.com/@kids.world.entert1?_r=1&_t=ZS-964Um4DdHmO', name: "Kids World Education" },
        { platform: "Youtube", url: 'https://youtube.com/@kidsworldeducation?feature=shared', name: "Kids World Education" },
        // { platform: "Viber", url: "viber://chat?number=959777710428" },
        // { platform: "Facebook", url: "https://www.facebook.com/share/1DaW1EFmdd" },
        {platform:"Company" ,url:"https://kidsworldeducation.net/app-home/",name:"kidsworldeducation.net"},
    ],
    linkedinLink: "",
    websiteLink:"https://kidsworldeducation.net/app_collection_qr/",
    websiteName:"E-learning for kids",
    personalFacebookLink: "https://www.facebook.com/share/1EdfdTgVEB/"
};
export default function Page() {
    return <Template2 data={myData} />;
}
    // { platform: "Facebook", url: "https://www.facebook.com/share/1DaW1EFmdd" },