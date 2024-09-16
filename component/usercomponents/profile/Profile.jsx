"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import BalanceComponent from "./components/BalanceComponent";
import { ExpandableCardDemo } from "./components/TransactionTab";
import { getServerSession } from "next-auth";
import { useDataContext } from "@component/context/DataProvider";
import Dashboard from "./components/Dashboard";

const Profile = () => {
  const { currentUser, currentUserTransactions, allTransactions } =
    useDataContext();
  const tx = allTransactions.filter(
    (tx) => tx.userId?._id === currentUser?._id
  );

  const userData = {
    email: "user@example.com",
    username: "user123",
    firstname: "John",
    lastname: "Doe",
    roles: { User: 2001 },
    balances: {
      profit: 100,
      expectedTrading: 500,
      expectedMining: 300,
      trading: 200,
      mining: 150,
      deposit: 1000,
      bonus: 50,
      bitcoin: 0.5,
      ethereum: 1.2,
      litecoin: 2.0,
      monero: 3.0,
      ripple: 1000,
      zcash: 0.3,
    },
    accountType: { starter: true, bronze: false, silver: false, gold: false },
    phoneNumber: "123-456-7890",
    location: "New York, USA",
  };

  return (
    <main className="w-full min-h-screen">
      <section className="max-w-5xl sm:max-w-xl mx-auto p-3 rounded-md flex flex-wrap gap-">
        <h2
          className="text-3xl font-mono max-w-5xl"
          style={{
            color: "#5F5DB1",
            padding: "0 40px",
          }}
        >
          Dashboard
        </h2>
        <Dashboard userData={userData} />
      </section>
      <section className="">
        <h3 className="text-xl font-bold text-center text-black underline my-3">
          {" "}
          Recent Transactions{" "}
        </h3>
        <ExpandableCardDemo tx={tx || []} />
      </section>
    </main>
  );
};
export default Profile;
