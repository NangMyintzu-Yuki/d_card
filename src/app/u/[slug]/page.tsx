"use client";
import { downloadVCard } from "@/app/utils/vcard";
import React from "react"; // Import React to use the .use() hook

// Define the type for the params promise
type Params = Promise<{ slug: string }>;

export default function DigitalCard(props: { params: Params }) {
  // Use React.use() to unwrap the params promise safely
  const params = React.use(props.params);
  const slug = params.slug;

  const customer = {
    name: slug.replace(/-/g, ' ').toUpperCase(),
    title: "Project Manager",
    email: "contact@example.com",
    phone: "+1 234 567 890"
  };

  const handleSaveContact = () => {
    downloadVCard(customer);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 text-black font-sans">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        <div className="px-6 py-8 relative">
          <div className="absolute -top-12 left-6 h-24 w-24 rounded-full border-4 border-white bg-indigo-500 shadow-md flex items-center justify-center text-3xl font-bold text-white">
            {customer.name[0]}
          </div>

          <div className="mt-12">
            <h1 className="text-2xl font-bold">{customer.name}</h1>
            <p className="text-blue-600 font-medium">{customer.title}</p>
          </div>

          <div className="mt-6">
            <button 
              onClick={handleSaveContact}
              className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-black transition active:scale-95"
            >
              Add to Contacts
            </button>
          </div>
          
          <div className="mt-6 space-y-2 border-t pt-4 text-gray-700">
             <p>📧 {customer.email}</p>
             <p>📞 {customer.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}