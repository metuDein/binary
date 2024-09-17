"use client";
import HomePage from "@component/HomePage";
import { useDataContext } from "@component/context/DataProvider";
import Loader from "@component/loader/Loader";

const page = () => {
  const { appLoading } = useDataContext();
  if (appLoading) return <Loader />;

  return <HomePage />;
};
export default page;
