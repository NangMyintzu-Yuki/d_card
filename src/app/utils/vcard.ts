export const downloadVCard = async (customer: {
  name: string;
  phone: string | string[]; // string သို့မဟုတ် string array လက်ခံမယ်
  email: string;
  title: string;
  address?: string;
  profileImage?: string;
}) => {
  const nameParts = customer.name.split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  // ဖုန်းနံပါတ်တွေကို Array အဖြစ် အရင်ပြောင်းမယ် (comma နဲ့လာရင်လည်း split လုပ်မယ်)
  const phoneNumbers = Array.isArray(customer.phone) 
    ? customer.phone 
    : customer.phone.split(", ").map(p => p.trim());

  // vCard အခြေခံ line များ
  const vcardLines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${lastName};${firstName};;;`,
    `FN:${customer.name}`,
    `ORG:${customer.title}`,
  ];
  if (customer.profileImage) {
    try {
      const base64Photo = await getBase64Image(customer.profileImage);
      // PHOTO;TYPE=JPEG;ENCODING=b: ပြီးရင် base64 string ကို ကပ်ထည့်ရပါမယ်
      vcardLines.push(`PHOTO;TYPE=JPEG;ENCODING=b:${base64Photo}`);
    } catch (error) {
      console.error("Failed to load image for vCard", error);
    }
  }

 phoneNumbers.forEach((num, index) => {
    const type = index === 0 ? "CELL" : "WORK";
    if (num) vcardLines.push(`TEL;TYPE=${type}:${num}`);
  });

  vcardLines.push(`EMAIL;TYPE=INTERNET:${customer.email}`);
  if (customer.address) vcardLines.push(`ADR;TYPE=WORK:;;${customer.address};;;;`);
  
  vcardLines.push("END:VCARD");

  const vcard = vcardLines.join("\r\n");
  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${customer.name.replace(/\s+/g, "_")}.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

const getBase64Image = async (url: string): Promise<string> => {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      // "data:image/jpeg;base64,..." ထဲက data အစိတ်အပိုင်းကိုပဲ ယူမယ်
      const base64String = (reader.result as string).split(',')[1];
      resolve(base64String);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};