"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  // Cek jika token tidak tersimpan di local storage saat komponen dimuat
  const storedToken = localStorage.getItem("token");
  //   if (!storedToken) {
  //     // Jika token tidak ditemukan, redirect ke halaman login
  //     router.push("/");
  //     return null; // Mengembalikan null agar komponen tidak ditampilkan saat redirect sedang berlangsung
  //   }
  //   useEffect(() => {
  //     // Cek jika token tidak tersimpan di local storage saat komponen dimuat
  //     const storedToken = localStorage.getItem("token");
  //     if (!storedToken) {
  //       // Jika token tidak ditemukan, redirect ke halaman login
  //       router.push("/");
  //     }
  //   }, []);

  return (
    <div>
      <h1>iko nyo {storedToken}</h1>
      {/* Konten dashboard */}
    </div>
  );
};

export default Dashboard;
