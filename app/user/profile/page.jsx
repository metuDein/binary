import Profile from "@component/usercomponents/profile/Profile";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/user-login");
  }

  return <Profile />;
};
export default page;
