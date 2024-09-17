"use client";
import React from "react";
import TradingViewMiniChartWidget from "@component/tradingviewwidget/TradingViewMiniChartWidget";
import { useDataContext } from "@component/context/DataProvider";

const Dashboard = ({ userdata }) => {
  const { currentUser, btcRate, ethRate, ltcRate, xmrRate, xrpRate, zecRate } =
    useDataContext();

  return (
    <div className="min-h-screen bg-gray-900 p-8 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
        {/* Balance Overview Cards */}
        <div className="col-span-4 lg:col-span-1 bg-gray-800 rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold">Profit Balance</h3>
          <p className="text-3xl font-bold mt-4">
            ${currentUser?.balances?.profit}
          </p>
        </div>
        <div className="col-span-4 lg:col-span-1 bg-gray-800 rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold">Expected Mining</h3>
          <p className="text-3xl font-bold mt-4">$0.00</p>
        </div>
        <div className="col-span-4 lg:col-span-1 bg-gray-800 rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold">Deposit Balance</h3>
          <p className="text-3xl font-bold mt-4">
            ${currentUser?.balances?.deposit}
          </p>
        </div>
        <div className="col-span-4 lg:col-span-1 bg-gray-800 rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold">Total Mining</h3>
          <p className="text-3xl font-bold mt-4">$0.00</p>
        </div>
      </div>

      {/* Trading Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-6">
        <div
          className="col-span-2 bg-gray-800 rounded-lg p-6"
          style={{
            gridColumn: "span 2",
            gridRow: "span 2",
            gap: "18px",
          }}
        >
          <h3 className="text-white text-xl font-semibold mb-4">
            Trading Overview
          </h3>
          {/* Embed a trading chart widget here */}
          <div
            className="bg-gray-700 rounded min-h-64 col-span-2"
            style={{
              gridColumn: "span 2",
              gridRow: "span 2",
              gap: "18px",
              minHeight: "399px",
            }}
          >
            <TradingViewMiniChartWidget />
          </div>
        </div>

        {/* Live Crypto Prices */}
        <div className="bg-gray-800 rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold">Live Crypto Prices</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex justify-between">
              <span>BTC</span>
              <span>${btcRate}</span>
            </li>
            <li className="flex justify-between">
              <span>ETH</span>
              <span>${ethRate}</span>
            </li>
            <li className="flex justify-between">
              <span>LTC</span>
              <span>${ltcRate}</span>
            </li>
            <li className="flex justify-between">
              <span>XMR</span>
              <span>${xmrRate}</span>
            </li>
            <li className="flex justify-between">
              <span>XRP</span>
              <span>${xrpRate}</span>
            </li>
            <li className="flex justify-between">
              <span>zec</span>
              <span>${zecRate}</span>
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
