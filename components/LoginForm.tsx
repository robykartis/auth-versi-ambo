"use client";
import React, { useState, useEffect } from "react";
import endpoint from "@/lib/axios";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await endpoint.post("api/login", {
        email,
        password,
      });

      // Tangkap token dari respons
      const token = response.data.access_token;
      console.log("Token:", token);
      localStorage.setItem("token", token);
      router.push("/dashboard");
      // Simpan token di local storage atau state aplikasi
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      // Cek jika token tersimpan di local storage saat komponen dimuat
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        console.log("Stored Token:", storedToken);
        // Lakukan sesuatu dengan token yang tersimpan
        router.push("/dashboard");
      } else {
        // Jika tidak ada token tersimpan, redirect ke halaman login
        router.push("/login");
      }
    };

    checkToken();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl mb-4">Formulir Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
