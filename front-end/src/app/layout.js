import "./globals.css";
import { vazirmatn } from "@utils/fonts";
import Layout from "@layout/Layout";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Tourino",
  description: "Tourino Website Descriptions",
};
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <Layout>{children}</Layout>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
