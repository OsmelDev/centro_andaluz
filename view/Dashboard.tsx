"use client";

import DasboardHeader from "@/components/dashboard-page/DasboardHeader";
import DashboardMain from "@/components/dashboard-page/DashboardMain";
import { useAuthStore } from "@/store/auth.store";
import React from "react";

const Dashboard = () => {
  const { user } = useAuthStore();

  if (!user) return <h1>asdasd</h1>;

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white h-full flex flex-col overflow-hidden">
      <DasboardHeader user={user} />
      <DashboardMain />
    </div>
  );
};

export default Dashboard;
