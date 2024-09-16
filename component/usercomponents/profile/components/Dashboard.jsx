import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Balance Overview Cards */}
        <div className="col-span-4 lg:col-span-1 bg-gray-800 rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold">Account Balance</h3>
          <p className="text-3xl font-bold mt-4">$0.00</p>
        </div>
        <div className="col-span-4 lg:col-span-1 bg-gray-800 rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold">Expected Mining</h3>
          <p className="text-3xl font-bold mt-4">$0.00</p>
        </div>
        <div className="col-span-4 lg:col-span-1 bg-gray-800 rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold">Bonus Balance</h3>
          <p className="text-3xl font-bold mt-4">$0.00</p>
        </div>
        <div className="col-span-4 lg:col-span-1 bg-gray-800 rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold">Total Mining</h3>
          <p className="text-3xl font-bold mt-4">$0.00</p>
        </div>
      </div>

      {/* Trading Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="col-span-2 bg-gray-800 rounded-lg p-6">
          <h3 className="text-white text-xl font-semibold mb-4">
            Trading Overview
          </h3>
          {/* Embed a trading chart widget here */}
          <div className="bg-gray-700 rounded h-64"></div>
        </div>

        {/* Live Crypto Prices */}
        <div className="bg-gray-800 rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold">Live Crypto Prices</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex justify-between">
              <span>BTC</span>
              <span>$26,000.00</span>
            </li>
            <li className="flex justify-between">
              <span>ETH</span>
              <span>$1,800.00</span>
            </li>
            <li className="flex justify-between">
              <span>LTC</span>
              <span>$90.00</span>
            </li>
            {/* Add more crypto as needed */}
          </ul>
        </div>
      </div>

      {/* Withdraw Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-800 rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold">Withdraw and Earnings</h3>
          <div className="mt-4">
            <button className="w-full bg-blue-600 p-2 rounded-lg">
              Withdraw Now
            </button>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold">Withdraw Referral Bonuses</h3>
          <div className="mt-4">
            <button className="w-full bg-blue-600 p-2 rounded-lg">
              Withdraw Now
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-gray-800 rounded-lg p-6 mt-6 text-white">
        <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
        <div className="bg-gray-700 p-4 rounded-lg h-32"></div>
      </div>
    </div>
  );
};

export default Dashboard;
