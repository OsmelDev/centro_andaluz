"use client";

import Sidebar from "@/components/dashboard-page/Sidebar";
import React, { useEffect, useState } from "react";
import "@/app/globals.css";
import { useAuthStore } from "@/store/auth.store";
import ErrorPage from "@/components/ErrorPage";
import LoadingComponent from "@/components/LoadingComponent";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) return <LoadingComponent />;
  
  if (!user) return <ErrorPage />;
  
  return (
    <div className="grid grid-cols-5  relative bg-background max-h-screen h-screen ">
      <Sidebar />
      <div className="w-full col-span-5 md:col-span-5 lg:col-span-4 max-h-full h-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}
