import "./globals.css";
import { vazirmatn } from "@utils/fonts";
import Layout from "@layout/Layout";

export const metadata = {
  title: "Tourino",
  description: "Tourino Website Descriptions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
