import AdminPanel from "@component/admincomponents/AdminPanel";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/user-login");
  }

  return <AdminPanel />;
};
export default page;
