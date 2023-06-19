"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavbarDashboard from "@/components/NavbarDashboard";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      // Jika token tidak tersimpan di local storage, redirect ke halaman login
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    // Tampilkan indikator loading saat menunggu pengecekan status login
    return <div></div>;
  }

  const storedToken = localStorage.getItem("token");
  if (!storedToken) {
    // Jika token tidak tersimpan di local storage, tampilkan pesan bahwa akses ke halaman dashboard tidak diizinkan
    return <div>Akses ditolak. Silakan login untuk mengakses halaman ini.</div>;
  }

  // Jika token tersimpan di local storage, tampilkan layout halaman dashboard
  return (
    <section>
      <NavbarDashboard />
      {children}
    </section>
  );
};

export default DashboardLayout;
