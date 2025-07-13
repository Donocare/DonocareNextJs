import Link from "next/link";

const services = [
  {
    name: "GST Registration & Filing",
    href: "/financial-consulting/gst-registration",
    gradient: "from-fuchsia-500 to-purple-600",
  },
  {
    name: "ITR Return",
    href: "/financial-consulting/itr-return",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    name: "TDS Return",
    href: "/financial-consulting/tds-return",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    name: "Account Management",
    href: "/financial-consulting/account-management",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    name: "Other Services",
    href: "/financial-consulting/other-services",
    gradient: "from-rose-500 to-red-600",
  },
  {
    name: "Talk with Experts",
    href: "/financial-consulting/talk-to-experts",
    gradient: "from-cyan-500 to-indigo-500",
  },
];

export default function financialconsulting() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-200 via-pink-200 to-yellow-100 py-16 px-6">
      <h1 className="text-5xl font-extrabold text-center text-purple-800 mb-14 drop-shadow-lg">
        💼 Financial Consulting Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${service.gradient} text-white p-6 rounded-3xl shadow-2xl backdrop-blur-sm bg-opacity-90 hover:scale-105 transition duration-300 flex flex-col justify-between`}
          >
            <div>
              <h2 className="text-2xl font-bold mb-3 drop-shadow-md">{service.name}</h2>
              <p className="text-sm opacity-90">Click below to explore this service.</p>
            </div>

            <div className="mt-6">
              <Link href={service.href}>
                <button className="w-full bg-white text-black font-semibold py-2 px-4 rounded-xl shadow hover:bg-yellow-100 hover:text-purple-700 transition duration-300">
                  🚀 Explore Service
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
