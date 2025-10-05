import React from 'react';
import { motion } from 'framer-motion';

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D111C] to-[#0052FF] text-white flex flex-col items-center justify-start relative overflow-hidden w-full p-4">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-4 text-center neon-text drop-shadow-[0_0_10px_#0052FF]">User Dashboard</h1>
        <div className="flex gap-2 mb-6 justify-center w-full">
          <button className="flex-1 px-2 py-2 rounded-lg glassmorphic border border-blue-400/30 font-semibold text-xs sm:text-sm bg-[#0052FF] text-white">All Rewards</button>
          <button className="flex-1 px-2 py-2 rounded-lg glassmorphic border border-blue-400/30 font-semibold text-xs sm:text-sm bg-transparent text-blue-200">Token Rewards</button>
          <button className="flex-1 px-2 py-2 rounded-lg glassmorphic border border-blue-400/30 font-semibold text-xs sm:text-sm bg-transparent text-blue-200">NFT Rewards</button>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="card glassmorphic px-4 py-3 rounded-xl shadow-lg text-left backdrop-blur-md border border-blue-400/20">
            <div className="text-lg font-bold text-[#7F5FFF] mb-1">Base Brand NFT</div>
            <div className="text-sm mb-2 text-blue-100">You've collected the exclusive Base Brand NFT badge!</div>
            <span className="text-xs px-3 py-1 rounded-full bg-blue-900/40 inline-block">NFT Reward</span>
          </div>
          <div className="card glassmorphic px-4 py-3 rounded-xl shadow-lg text-left backdrop-blur-md border border-blue-400/20">
            <div className="text-lg font-bold text-[#7F5FFF] mb-1">Token Airdrop</div>
            <div className="text-sm mb-2 text-blue-100">You received 100 TVR tokens for joining!</div>
            <span className="text-xs px-3 py-1 rounded-full bg-blue-900/40 inline-block">Token Reward</span>
          </div>
        </div>
        <div className="mt-6 w-full">
          <div className="bg-gradient-to-r from-[#0052FF] to-[#7F5FFF] px-5 py-3 rounded-xl shadow-xl glassmorphic text-base font-bold border border-blue-400/30 text-center w-full max-w-xs mx-auto">
            Wallet Balance: <span className="text-[#00FFD0]">100 TVR</span>
            <button className="mt-1 text-xs text-blue-200 underline">View all assets</button>
          </div>
        </div>
      </div>
    </div>
  );
}
