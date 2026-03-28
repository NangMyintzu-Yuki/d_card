export const downloadVCard = (customer: { name: string; phone: string; email: string; title: string, address?:string }) => {
  // iOS needs the 'N' property (Name) separated by semicolons: Last;First;Middle;Prefix;Suffix
  // Since we have a full string, we'll put the whole name in the 'First' slot for simplicity
  const nameParts = customer.name.split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  // CRITICAL: No spaces at the start of these lines! 
  // Use \r\n (Carriage Return + Line Feed) for maximum compatibility
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${lastName};${firstName};;;`,
    `FN:${customer.name}`,
    `ORG:${customer.title}`,
    `TEL;TYPE=CELL:${customer.phone}`,
    `EMAIL;TYPE=INTERNET:${customer.email}`,
    `ADR;TYPE=WORK:;;${customer?.address || ''}`,
    "END:VCARD"
  ].join("\r\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${customer.name.replace(/\s+/g, '_')}.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};