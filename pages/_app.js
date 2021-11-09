import "../styles/globals.css";
import "antd/dist/antd.css";
import { CollapseDrawerProvider } from "~/context/CollapseDrawer";
import LoadingScreen from "../components/LoadingScreen";
import ProgressBar from "../components/ProgressBar";


function MyApp({ Component, pageProps }) {
  return (
    <CollapseDrawerProvider>
      <ProgressBar />
      <LoadingScreen />
      <Component {...pageProps} />
    </CollapseDrawerProvider>
  );
}

export default MyApp;
