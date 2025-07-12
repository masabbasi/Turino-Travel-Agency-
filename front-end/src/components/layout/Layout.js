"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "@layout/Header";
import Footer from "@layout/Footer";

import styles from "@layout/Layout.module.css";

const queryClient = new QueryClient();

function Layout({ children }) {
  return (
    <div>
      <div className={styles.container}>
        <QueryClientProvider client={queryClient}>
          <Header />
        </QueryClientProvider>
      </div>
      <div className={styles.container}>
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
