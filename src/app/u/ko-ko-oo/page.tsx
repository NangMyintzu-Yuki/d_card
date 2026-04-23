import ProfileImg from '../../../../public/images/ko_ko_oo.jpg';
import Template2 from '@/components/templates/Template2';



const myData = {
    name: "Ko Ko Oo",
    title: "Kids World Education (Founder)",
    email: "ukkomyanmar@gmail.com",
    phone: "09777710428",
    description: "...",
    company: "Kids World Education",
    profileImage: ProfileImg,
    address: "Hlaing thar yar T/P",
    bio: "Kids World Education (Founder)",
    corporateLinks: [],
    socialLinks: [
        { platform: "Viber", url: "viber://add?number='959777704428" },
        { platform: "Facebook", url: "https://www.facebook.com/share/1DaW1EFmdd" },
        {platform:"Company" ,url:"http://kidsworldeducation.net"},
        { platform: "TikTok", url: 'https://www.tiktok.com/@kids.world.educat8?_r=1&_t=ZS-95lzDfQYuGO' },
        { platform: "Youtube", url: 'https://youtube.com/@kidsworldeducation?feature=shared' },
    ],
    linkedinLink: "",
};
export default function Page() {
    return <Template2 data={myData} />;
}