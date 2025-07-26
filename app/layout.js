import Header from "./_components/Layout/Header";
import Footer from "./_components/Layout/Footer";

import "./../sass/main.scss";

export const metadata = {
  title: "Purple Butterfly",
  description: "Coffee bouquets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
