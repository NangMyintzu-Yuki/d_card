export const downloadVCard = (customer: { name: string; phone: string; email: string; title: string }) => {
  // The VCF format requires specific line breaks and tags
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${customer.name}
ORG:${customer.title}
TEL;TYPE=CELL:${customer.phone}
EMAIL:${customer.email}
END:VCARD`;

  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = window.URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${customer.name.replace(/\s+/g, '_')}.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};