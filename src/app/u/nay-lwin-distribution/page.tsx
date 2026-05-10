import ProfileImg from '../../../../public/images/nay_lwin_distribution.jpg';
import Template2 from '@/components/templates/Template2';

import CompanyLogo from '../../../../public/images/nay_lwin_distribution.jpg';
import Template1 from '@/components/templates/Template1';

const myData = {
    name: "Nay Lwin Distribution",
    title: "Nay Lwin Distribution",
    email: "naywinnaung10@gmail.com",
    phone: "09755855959",
    description: "...",
    company: "",
    profileImage: ProfileImg,
    company_logo: CompanyLogo,
    address: "No. 490. Yaw Min Gyi Uphoe Hlaing Road, East Dagon Township, Yangon, Myanmar",
    bio: "",
    corporateLinks: [],
    socialLinks: [
        // { platform: "Facebook", url:"https://www.facebook.com/share/1CUkBcETBJ/", name: "Kids World Education"},
        { platform: "Facebook", url:"https://www.facebook.com/share/1UX2C3kCmV/", name: "Kids World Entertainment"},
        { platform: "TikTok", url: 'https://www.tiktok.com/@kids.world.entert1?_r=1&_t=ZS-964Um4DdHmO', name: "Kids World Education" },
        { platform: "Youtube", url: 'https://youtube.com/@kidsworldeducation?feature=shared', name: "Kids World Education" },
        { platform: "Viber", url: "viber://chat?number=959777710428" },
        {platform:"Company" ,url:"https://kidsworldeducation.net/app-home/",name:"kidsworldeducation.net"},
    ],
    linkedinLink: "",
    websiteLink:"https://kidsworldeducation.net/app_collection_qr/",
    websiteName:"E-learning for kids",
};
export default function Page() {
    return <Template1 data={myData} />;
}
