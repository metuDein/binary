import "@styles/globals.css";
import { DataProvider } from "@component/context/DataProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackgroundGradientAnimationDemo from "@components/example/background-gradient-animation-demo";
import TradingViewWidget from "@component/tradingviewwidget/TradingViewWidget";

export const metadata = {
  title: "start Investments",
  description:
    "Join the future of finance with our trusted crypto trading and mining investment platform. Maximize your returns with expert strategies, real-time insights, and secure transactions. Start earning today with the power of cryptocurrency!RooLayOut",
};

const RooLayout = ({ children }) => {
  return (
    <html lang="en">
      <DataProvider>
        <body>
          <TradingViewWidget />
          <main className="w-full max-h-screen main_background">
            {children}
          </main>
          <ToastContainer />
        </body>
      </DataProvider>
    </html>
  );
};
export default RooLayout;
