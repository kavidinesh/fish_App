import React from "react";

export default function FishMarketHome() {
  return (
    <div className="w-full h-full relative">
      {/* Hero Section */}
      <div
        className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/608b0fe51df59a3e5c93bf8d/1619733009809-VN6JHR2JRIYWMDX5RMQF/salmon_cut_raw_seasonings.jpeg&quot')",
        }}
      >
        <div className="text-center px-6">
          <h1 className="text-5xl font-bold">Fresh Fish, Delivered to You</h1>
          <p className="mt-4 text-lg font-semibold">
            Buy and sell fresh seafood online with ease.
          </p>
          <button className="mt-6 px-6 py-3 bg-secondary rounded-lg text-black font-semibold hover:bg-clicked transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold">Fresh Seafood</h3>
              <p className="mt-2 text-gray-600">
                Directly sourced from trusted fishermen.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold">Fast Delivery</h3>
              <p className="mt-2 text-gray-600">
                Delivered fresh to your doorstep.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold">Secure Payments</h3>
              <p className="mt-2 text-gray-600">
                Multiple payment options for convenience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Start Selling Today!
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Join our marketplace and grow your seafood business.
          </p>
          <div className="max-w-xl mx-auto mt-8">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-md"
              />
              <button className="w-full bg-secondary text-black py-3 rounded-md font-semibold hover:bg-clicked transition">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2025 Fish Market. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
