import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  // const session = await getServerSession();

  // if (!session) {
  //   redirect("/user-login");
  // }
  return <div>page</div>;
};
export default page;
