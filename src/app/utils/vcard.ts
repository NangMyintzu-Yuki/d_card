export const downloadVCard = (customer: {
  name: string;
  phone: string | string[]; // string သို့မဟုတ် string array လက်ခံမယ်
  email: string;
  title: string;
  address?: string;
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

  // ဖုန်းနံပါတ် တစ်ခုချင်းစီကို TEL line တစ်ကြောင်းစီအဖြစ် ထည့်မယ်
  phoneNumbers.forEach((num, index) => {
    // ပထမဆုံးနံပါတ်ကို CELL (Primary) ထားပြီး ကျန်တာတွေကို WORK သို့မဟုတ် VOICE လို့ သတ်မှတ်နိုင်ပါတယ်
    const type = index === 0 ? "CELL" : "WORK";
    if (num) {
      vcardLines.push(`TEL;TYPE=${type}:${num}`);
    }
  });

  vcardLines.push(`EMAIL;TYPE=INTERNET:${customer.email}`);
  if (customer.address) {
    vcardLines.push(`ADR;TYPE=WORK:;;${customer.address};;;;`);
  }
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