import FacebookIcon from "@/components/icons/FacebookIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import TelegramIcon from "@/components/icons/TelegramIcon";
import TiktokIcon from "@/components/icons/TiktokIcon";
import ViberIcon from "@/components/icons/ViberIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import WeChatIcon from "@/components/icons/WeChatIcon";
import GlobeIcon from "@/components/icons/GlobeIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";

export const getSocialIcon = (platform: string) => {
  // Case insensitive ဖြစ်အောင် အကုန်လုံးကို lowercase ပြောင်းပြီး စစ်ပါမယ်
  const p = platform.toLowerCase();
  
  switch (p) {
    case 'facebook': return <FacebookIcon />;
    case 'viber': return <ViberIcon />;
    case 'telegram': return <TelegramIcon />;
    case 'tiktok': return <TiktokIcon />;
    case 'whatsapp': return <WhatsAppIcon />;
    case 'linkedin': return <LinkedInIcon />;
    case 'wechat': return <WeChatIcon />;
    case 'company': return <GlobeIcon />;
    case 'youtube': return <YoutubeIcon />;
    default: return null;
  }
};

export const getPlatformColor = (platform: string) => {
  const p = platform.toLowerCase();
  
  switch (p) {
    case 'facebook': return 'bg-[#1877F2]';
    case 'viber': return 'bg-[#7360F2]'; // Viber color
    case 'instagram': return 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600';
    case 'tiktok': return 'bg-black';
    case 'telegram': return 'bg-[#0088cc]';
    case 'wechat': return 'bg-[#07C160]'; // WeChat green
    case 'whatsapp': return 'bg-[#25D366]'; // WhatsApp green
    case 'youtube': return 'bg-[#FF0000]';
    default: return 'bg-slate-600';
  }
};