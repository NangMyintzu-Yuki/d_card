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
    switch (platform) {
      case 'Facebook': return <FacebookIcon/>;
      case 'Viber': return <ViberIcon/>;
      case 'Telegram': return <TelegramIcon/>;
      case 'TikTok': return <TiktokIcon/>;
      case 'WhatsApp': return <WhatsAppIcon/>;
      case 'Linkedin' : return <LinkedInIcon/>;
      case "WeChat": return <WeChatIcon/>;
      case "Company": return <GlobeIcon/>;
      case "Youtube": return <YoutubeIcon/>;
      // case 'instagram': return <Instagram size={20} />;
      // case 'telegram': return <Send size={20} />;
      // default: return <MessageCircle size={20} />;
    }
  };


  export const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'Facebook': return 'bg-[#1877F2]';
      case 'Viber': return 'bg-indigo-600';
      case 'Instagram': return 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600';
      case 'Tiktok': return 'bg-black';
      case 'Telegram': return 'bg-[#5865F2]';
      case 'WeChat': return 'bg-[#5865F2]';
      case 'WhatsApp': return 'bg-[#5865F2]';
      default: return 'bg-slate-600';
    }
  };