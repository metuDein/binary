"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { useSession } from "next-auth/react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const { data: session } = useSession();

  const [allUsers, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [appLoading, setAppLoading] = useState(true);
  const [allTransactions, setAllTransactions] = useState([]);
  const [allTraders, setAllTraders] = useState([]);
  const [allCopiers, setAllCopiers] = useState([]);
  const [allSubscription, setAllSubscription] = useState([]);
  const [currentUserTransactions, setCurrentUserTransactions] = useState([]);
  const [btcRate, setBtcRate] = useState(null);
  const [ethRate, setEthRate] = useState(null);
  const [ltcRate, setLtcRate] = useState(null);
  const [xmrRate, setXmrRate] = useState(null);
  const [xrpRate, setXrpRate] = useState(null);
  const [zecRate, setZecRate] = useState(null);

  const getAllUsers = async () => {
    try {
      const response = await fetch("/api/auth/getusers");
      const data = await response.json();
      console.log(data);
      setAllUsers(data.users);
    } catch (error) {
      console.error(error.message);
    }
  };
  const getUser = async () => {
    try {
      const response = await fetch("/api/auth/getcurrentuser");
      const data = await response.json();
      console.log(data);
      setCurrentUser(data.user);
    } catch (error) {
      console.error(error.message);
    }
  };
  const getTransactions = async () => {
    try {
      const response = await fetch("/api/deposits");
      const data = await response.json();
      console.log(data);
      setAllTransactions(data.tx || []);
      const userTx = allTransactions.filter(
        (item) => item.userId._id === currentUser._id
      );
      setCurrentUserTransactions(userTx);
    } catch (error) {
      console.error(error.message);
    }
  };
  const getTraders = async () => {
    try {
      const response = await fetch("/api/traders");
      const data = await response.json();
      console.log(data);
      setAllTraders(data.traders || []);
    } catch (error) {
      console.error(error.message);
    }
  };
  const getSubscriptions = async () => {
    try {
      const response = await fetch("/api/subscribe");
      const data = await response.json();
      console.log(data);
      setAllSubscription(data.subscriptions || []);
    } catch (error) {
      console.error(error.message);
    }
  };
  const getCopiers = async () => {
    try {
      const response = await fetch("/api/copytrader");
      const data = await response.json();
      console.log(data);
      setAllCopiers(data.copyTradings || []);
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchCryptoRates = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,monero,ripple,zcash&vs_currencies=usd"
      );
      const data = await response.json();

      // Set the rates for each cryptocurrency in their respective state
      setBtcRate(data.bitcoin.usd);
      setEthRate(data.ethereum.usd);
      setLtcRate(data.litecoin.usd);
      setXmrRate(data.monero.usd);
      setXrpRate(data.ripple.usd);
      setZecRate(data.zcash.usd);
    } catch (error) {
      console.error("Error fetching crypto rates:", error);
    }
  };

  useEffect(() => {
    getUser();
    getCopiers();
    getTraders();
    getAllUsers();
    getTransactions();
    getSubscriptions();
    setAppLoading(false);

    setInterval(() => {
      getUser();
      getCopiers();
      getTraders();
      getAllUsers();
      getTransactions();
      getSubscriptions();
      setAppLoading(false);
      fetchCryptoRates();
    }, 180000);
  }, []);

  return (
    <DataContext.Provider
      value={{
        currentUser,
        allUsers,
        currentUserTransactions,
        appLoading,
        allTransactions,
        setAppLoading,
        allTraders,
        allCopiers,
        allSubscription,
        btcRate,
        ethRate,
        ltcRate,
        xmrRate,
        xrpRate,
        zecRate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

export const useDataContext = () => useContext(DataContext);
