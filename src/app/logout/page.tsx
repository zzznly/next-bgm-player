"use client";

import { removeTokenParams } from "@/utils/auth";
import { useRouter } from "next/navigation";

export default function Logout() {
  // ? https://accounts.spotify.com/logout

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("https://open.spotify.com/logout", {
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      removeTokenParams();
      router.push("/");
    } catch (error) {
      console.error("# error: ", error);
      throw error;
    }
  };

  handleLogout();

  return <div>Processing Logout...</div>;
}
