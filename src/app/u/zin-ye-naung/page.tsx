import ProfileImg from "../../../../public/images/zin_ye_naung.jpg";
import { Globe } from "lucide-react";
import Template3 from "@/components/templates/Template3";


const userData = {
    name: "Zin Ye Naung",
    title: "",
    company: "GP Uniform & Printing \n Thahtaykyite Food Manufacturing \n New Msme Public Company",
    profileImage: ProfileImg,
    email: "zinyenaung.geology@gmail.com",
    phone: "09259355858",
    bio: "ဦးဇင်ရဲနောင်သည် (SME Supporter) ပြည်တွင်းအသေးစားစက်မှုလက်မှုလုပ်ငန်းများကို ကူညီပေးနေသူတစ်ဦးဖြစ်ပြီး smeများ၏ စာရွက်စာတမ်းခိုင်မာရေး၊ စျေးကွက်ခိုင်မာရေးနှင့် ဘဏ်ချေးငွေများကို ကူညီပေးနေသူဖြစ်ပါသည်။ New Msme အများပိုင်ကုမ္ပဏီလီမိတက်၏ ဒုဥက္ကဌဖြစ်သလို GP Uniform & Printing, သူဌေးကြိုက်စားသောက်ကုန်လုပ်ငန်း စသည့်စီးပွါးရေးလုပ်ငန်းများကို ဦးဆောင်လုပ်ကိုင်နေသူတစ်ဦးလည်း ဖြစ်ပါသည်။\nSMEနှင့် လူငယ်များအတွက် လူငယ်စကားဝိုင်း၊ မိုးရာသီစျေးပွဲတော်နှင့် စကားဝိုင်း၊ New Msme စျေးပွဲတော်၊ အသေးစားစက်မှုလက်မှုTalk Show, LatPhet Talk, SME စကားဝိုင်း, Community TeaTalk စသည်များဖြင့် SME Communityအတွက် ဖန်တီးအကျိုးပြုပေးနေသူ တစ်ဦးလည်း ဖြစ်ပါသည်။",
    corporateLinks: [
        { title: 'New Msme', icon: <Globe size={18} className="text-slate-500 group-hover:text-amber-500" />, url: 'https://www.facebook.com/share/1Dyesv9L8r/?mibextid=wwXIfr' },
        { title: 'GP Uniform & Printing', icon: <Globe size={18} className="text-slate-500 group-hover:text-amber-500" />, url: 'https://www.facebook.com/share/1CoZeTE9xH/?mibextid=wwXIfr' },
        { title: 'သူဌေးကြိုက်', icon: <Globe size={18} className="text-slate-500 group-hover:text-amber-500" />, url: 'https://www.facebook.com/share/1DpjZmfMiw/?mibextid=wwXIfr' },
      

    ],
    socialLinks: [
        { platform: "Facebook", url: "https://www.facebook.com/share/1A7617vTv3/?mibextid=wwXIfr" },
        // { platform: "Linkedin", url: "https://www.linkedin.com/in/nangmyintzu/" },
        { platform: "TikTok", url: "https://www.tiktok.com/@dy3wt9qm8ola?_r=1&_t=ZS-95p7pfUt2W4" },
        
        // { platform: "Viber", url: "viber://chat?number=959259599508" },
        // { platform: "Telegram", url: "https://t.me/+959259599508" },
    ],
    // linkedinUrl: 'https://www.linkedin.com/in/nangmyintzu/'
};

export default function Page() {
    return <Template3 data={userData} />
}