"use client";
import { useRouter } from "next/navigation";

const Nav = () => {
  return (
    <div>
      <nav>Siderbar</nav>
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <nav>
        <footer> footer</footer>
      </nav>
    </div>
  );
};

const UserLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};
export default UserLayout;
