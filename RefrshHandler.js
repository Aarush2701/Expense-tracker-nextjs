import { useEffect } from "react";
import { useRouter } from "next/router";

export default function RefreshHandler({ setIsAuthenticated }) {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
      if (
        router.pathname === "/" ||
        router.pathname === "/login" ||
        router.pathname === "/signup"
      ) {
        router.push("/home");
      }
    }
  }, [router, setIsAuthenticated]);

  return null;
}
