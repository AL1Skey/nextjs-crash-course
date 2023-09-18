import "./globals.css";
import { Inter } from "next/font/google";
import { Ubuntu } from "next/font/google";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({
  weight: "500",
  subsets: ["cyrillic", "cyrillic-ext"],
});
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}