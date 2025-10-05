"use client";

import dynamic from "next/dynamic";
import React from "react";
import { Home, Rocket, User, Building } from 'lucide-react';
import LandingPage from "../components/tokenverse/LandingPage";
import MissionDashboard from "../components/tokenverse/MissionDashboard";
import UserDashboard from "../components/tokenverse/UserDashboard";
import BrandDashboard from "../components/tokenverse/BrandDashboard";
import { APP_NAME } from "~/lib/constants";

// note: dynamic import is required for components that use the Frame SDK
const Demo = dynamic(() => import("~/components/Demo"), {
  ssr: false,
});

export default function App(
  { title }: { title?: string } = { title: APP_NAME }
) {
  // Tokenverse navigation
  const [page, setPage] = React.useState<'landing' | 'mission' | 'user' | 'brand'>('landing');
  const pages = [
    { key: 'landing', label: 'Home', icon: Home },
    { key: 'mission', label: 'Missions', icon: Rocket },
    { key: 'user', label: 'User', icon: User },
    { key: 'brand', label: 'Brand', icon: Building },
  ];
  return (
    <div className="min-h-screen bg-[#0D111C] text-white">
      <main className="py-10 pb-24">
        {page === 'landing' && <LandingPage />}
        {page === 'mission' && <MissionDashboard />}
        {page === 'user' && <UserDashboard />}
        {page === 'brand' && <BrandDashboard />}
      </main>
      <nav className="fixed bottom-0 left-0 right-0 flex justify-around py-2 bg-[#0D111C] border-t border-blue-900/30">
        {pages.map(p => (
          <button
            key={p.key}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg font-semibold transition-colors ${page === p.key ? 'text-[#0052FF]' : 'text-gray-400 hover:text-blue-300'}`}
            onClick={() => setPage(p.key as any)}
          >
            <p.icon className="w-6 h-6" />
            <span className="text-xs">{p.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
