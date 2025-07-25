"use client";

import Header from "@layout/Header";
import Footer from "@layout/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from "@layout/Layout.module.css";

const queryClient = new QueryClient();

function Layout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <div className={styles.container}>
          <Header />
        </div>
        <div className={styles.container}>
          {children}
          <Footer />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default Layout;
