import "@styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TradingViewWidget from "@component/tradingviewwidget/TradingViewWidget";
import Navbar from "@component/navbarandfooter/Navbar";
import { getServerSession } from "next-auth";
import Nav from "@component/navbarandfooter/Nav";
import Link from "next/link";
import { DataProvider } from "@component/context/DataProvider";
import Provider from "@component/context/Provider";

export const metadata = {
  title: "Infinite firms",
  description:
    "Join the future of finance with our trusted crypto trading and mining investment platform. Maximize your returns with expert strategies, real-time insights, and secure transactions. Start earning today with the power of cryptocurrency!RooLayOut",
};

const RootLayout = async ({ children }) => {
  const session = await getServerSession();

  return (
    <Provider>
      <DataProvider>
        <html lang="en">
          <body className="">
            <Navbar />
            <main
              className="bg-gray-200"
              style={{
                paddingTop: "60px",
              }}
            >
              {children}
            </main>
            <ToastContainer />
          </body>
        </html>
      </DataProvider>
    </Provider>
  );
};
export default RootLayout;
