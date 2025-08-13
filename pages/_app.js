import "../styles/index.css";
import RefreshHandler from "../RefrshHandler";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyApp({ Component, pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Component {...pageProps} isAuthenticated={isAuthenticated} />
      <ToastContainer />
    </>
  );
}
