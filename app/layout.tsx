import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./styles/globals.css";
import "./styles/layout.scss";
import "./styles/app.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`cap-bg container`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
