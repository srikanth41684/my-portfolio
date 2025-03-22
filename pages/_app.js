import Header from "@/components/header/header";
import "@/styles/globals.css";
import { globalStyles } from "@/styles/globalStyles";
import { darkTheme } from "@/styles/themeStyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {darkTheme}
      </style>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
