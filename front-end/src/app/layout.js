import "./globals.css";
import { vazirmatn } from "@utils/fonts";
import Layout from "@layout/layout";

export const metadata = {
  title: "Tourino",
  description: "Masoud Abbasi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <div className="container">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
