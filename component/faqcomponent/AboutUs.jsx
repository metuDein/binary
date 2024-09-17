import React from "react";

const AboutUs = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      //   style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-5 md:px-10 lg:px-20 text-white">
        <h1 className="text-5xl font-bold text-center mb-10">
          About Horizonmarketcapital
        </h1>
        <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed mb-8">
          Horizonmarketcapital was founded in 2016 with a vision to provide
          innovative financial solutions in the realms of copy trading and cloud
          mining. Our mission is to empower both novice and experienced traders
          with the tools and expertise needed to navigate the ever-evolving
          cryptocurrency landscape.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              At Horizonmarketcapital, we envision a world where everyone can
              access secure and user-friendly platforms to participate in
              cryptocurrency trading and mining. We are committed to staying at
              the forefront of innovation in this space, continuously improving
              our services to meet the needs of our users.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to provide reliable, high-quality services that
              empower our clients to succeed in the digital finance market. We
              aim to offer transparent, fast, and secure platforms for copy
              trading and cloud mining, driven by our commitment to customer
              success and security.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Experienced Team</h3>
              <p className="leading-relaxed">
                Our team consists of experts in trading, blockchain, and
                financial technologies, ensuring you're in safe hands.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Cutting-Edge Technology
              </h3>
              <p className="leading-relaxed">
                We leverage the latest technology to deliver a seamless
                experience in copy trading and cloud mining.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Customer Support</h3>
              <p className="leading-relaxed">
                Our dedicated support team is available 24/7 to help you with
                any inquiries or challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
