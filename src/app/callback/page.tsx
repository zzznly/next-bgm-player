"use client";

import { saveToken, saveTokenParams } from "@/utils/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async (code: string | null, state: string | null) => {
      try {
        if (!code || !state) {
          setError("Missing code or state.");
          setLoading(false);
          return;
        }

        const response = await fetch(
          `/api/auth/callback?code=${code}&state=${state}`
        );
        const data = await response.json();
        saveToken(data.access_token);
        router.push("/");
      } catch (error) {
        console.error("# error: ", error);
        setError(error.message);
        throw error;
      } finally {
        setLoading(false);
      }
    };

    fetchToken(code, state);
  }, [searchParams]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>Authenticated successfully!</div>;
}
