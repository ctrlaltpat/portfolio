// import Header from "@/components/layout/ui/Header";
// import Footer from "@/components/layout/ui/Footer";
import "./styles/globals.css";
import "./styles/main.scss";
import { Metadata } from "next/types";
import { Montserrat, Roboto, Handlee } from "next/font/google";
import { cx } from "@/utils/styles";

const montser = Montserrat({
  variable: "--main-font",
  subsets: ["latin"],
});

const robo = Roboto({
  weight: "300",
  variable: "--btn-font",
  subsets: ["latin"],
});

const hand = Handlee({
  weight: "400",
  variable: "--hand-font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CtrlAltPat",
  description: "Portfolio",
};

// TODO: more meta, try View Transitions API

export default function RootLayout({
  // children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx(montser.variable, robo.variable, hand.variable)}
    >
      <body>
        {/* <Header /> */}
        {/* <main className="container">{children}</main> */}
         <main>🏳️</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
