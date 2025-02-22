import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./styles/globals.css";
import "./styles/layout.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`cap-bg container`}>
        {/* <Suspense fallback={<>Loading...</>}>
        <video className={styles.bgvideo} autoPlay loop muted preload='none'>
          <source
            src='https://strapi.apps.ctrlaltpat.com/uploads/1000053636_4089bad12d.MP4'
            type='video/mp4'
          />
        </video>
      </Suspense> */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
