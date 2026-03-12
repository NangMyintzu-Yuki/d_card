export default function DigitalCard({ params }: { params: { slug: string } }) {
  const customer = {
    name: params.slug,
    title: "Project Manager",
    email: "contact@example.com",
    phone: "+1 234 567 890"
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        <div className="px-6 py-8 relative">
          <div className="absolute -top-12 left-6 h-24 w-24 rounded-full border-4 border-white bg-gray-300 shadow-md"></div>
          <div className="mt-12">
            <h1 className="text-2xl font-bold text-gray-800">{customer.name}</h1>
            <p className="text-blue-600 font-medium">{customer.title}</p>
          </div>
          <div className="mt-6 space-y-3">
            <button className="w-full bg-gray-900 text-white py-2 rounded-lg font-semibold hover:bg-black transition">
              Save Contact
            </button>
            <div className="text-sm text-gray-600">
              <p>📧 {customer.email}</p>
              <p>📞 {customer.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}