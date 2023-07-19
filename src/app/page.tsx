"use client";
import { appRoutes } from "@/assets/constants/appRoutes";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace(appRoutes.food);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <CircularProgress />
    </main>
  );
}
