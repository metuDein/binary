"use client";
import { auth } from "@app/firebase/config";
import useDataContext from "@component/hooks/useDataContext";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { userDetails } = useDataContext();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push("/user-login");
      console.log("user logged out");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <main className="bg-[#fefefe] flex items-center justify-center w-full min-h-screen">
      {userDetails ? (
        <div className="mx-auto p-4 flex flex-col items-center justify-center w-[400px]  bg-gray-200 shadow-2xl rounded-xl">
          <div className="p-2 flex flex-col mb-2">
            <h1>Welcome {userDetails?.firstname}</h1>
            <p>Email: {userDetails?.email}</p>
            <p>Firstname: {userDetails?.firstName}</p>
            <p>Lastname: {userDetails?.lastName}</p>
            <p>
              Roles:{" "}
              {userDetails?.roles.map((item) => (
                <span>{item},</span>
              ))}
            </p>
          </div>
          {userDetails?.roles.includes(5150) && (
            <div class="flex items-center justify-center">
              <Link
                to={"/profile/admin"}
                class="px-4 py-2 bg-blue-700 text-white rounded-md w-full"
              >
                Go to Admin Panel
              </Link>
            </div>
          )}
          <div class="flex items-center justify-center">
            <button
              onClick={() => handleLogout()}
              class="px-4 py-2 bg-blue-700 text-white rounded-md w-full"
            >
              Log out
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};
export default Profile;
