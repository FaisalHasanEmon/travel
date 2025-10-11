const ContactUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[url('/contactUs/contactUs.jpg')] bg-cover bg-center lg:bg-top min-h-[624px] flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">How can we help?</h1>
          <p className="mt-4 max-w-2xl mx-auto">
            Get connected to a specialist and we will get back to you as soon as
            possible.
          </p>
        </div>
      </div>

      {/* Offices Section */}
      <div className="bg-[#FFFFFF]  py-16 px-6">
        <div className="container px-5 mx-auto  rounded-xl shadow-[0_0_50px_#00000014] p-10 pb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Worldwide Offices
          </h2>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="rounded-lg p-6 shadow-[0_0_20px_rgba(0,0,0,0.10)] bg-white"
              >
                <h3 className="font-semibold mb-2">Corporate Headquarters</h3>
                <p>Savvy Tours</p>
                <p>example@gmail.com</p>
                <p>000-000-000</p>
                <p>205 Babcich St., 12th Floor</p>
                <p>Westin Palm Beach, FL 33431 US</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
