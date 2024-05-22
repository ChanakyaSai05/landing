import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { Nunito, Reem_Kufi } from "next/font/google";
import { useEffect } from "react";
import Icons from "@/components/Icons";

// Define the Nunito font with the specified weights and subsets
const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

// Define the Reem Kufi font with the specified weights and subsets
const reemKufi = Reem_Kufi({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <main className={`${nunito.className} ${reemKufi.className}`}>
      <Component {...pageProps} />
      <Icons />
    </main>
  );
}
