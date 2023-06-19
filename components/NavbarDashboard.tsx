import React from "react";
import endpoint from "@/lib/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

function NavbarDashboard() {
  const router = useRouter();
  const logout = async () => {
    try {
      const response = await endpoint.post("api/logout");
      // Tangkap token dari respons

      localStorage.removeItem("token");
      router.push("/");
      // Simpan token di local storage atau state aplikasi
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Admin Dashboard
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarDashboard;
