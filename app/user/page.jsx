import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useDataContext } from "@component/context/DataProvider";
import Loader from "@component/loader/Loader";

const page = () => {
  const { appLoading } = useDataContext();
  if (appLoading) return <Loader />;

  return <div>page</div>;
};
export default page;
