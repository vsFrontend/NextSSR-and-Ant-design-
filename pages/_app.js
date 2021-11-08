import "../styles/globals.css";
import "antd/dist/antd.css";
import { CollapseDrawerProvider } from "~/context/CollapseDrawer";

function MyApp({ Component, pageProps }) {
  return (
    <CollapseDrawerProvider>
      <Component {...pageProps} />
    </CollapseDrawerProvider>
  );
}

export default MyApp;
