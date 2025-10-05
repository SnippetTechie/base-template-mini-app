
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const campaigns = [
  {
    id: 1,
    title: 'Base Brand NFT',
    type: 'NFT',
    description: 'Collect the exclusive Base Brand NFT badge!',
    media: '',
  },
  {
    id: 2,
    title: 'Token Airdrop',
    type: 'Token',
    description: 'Earn 100 TVR tokens for joining!',
    media: '',
  },
  {
    id: 3,
    title: 'Referral Mission',
    type: 'Token',
    description: 'Refer a friend and get 50 TVR!',
    media: '',
  },
];

const MissionDashboard = () => {
  const [filter, setFilter] = useState<'All' | 'Token' | 'NFT'>('All');
  const [selected, setSelected] = useState<number | null>(null);

  const filteredCampaigns = filter === 'All' ? campaigns : campaigns.filter(c => c.type === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D111C] to-[#0052FF] text-white flex flex-col items-center justify-start relative overflow-hidden w-full">
      <div className="w-full px-4 py-6 max-w-md mx-auto flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 neon-text text-center drop-shadow-[0_0_10px_#0052FF]">Mission Control</h2>
        {/* Filter Buttons - Stacked for mobile */}
        <div className="flex gap-2 mb-4 w-full justify-center">
          {['All', 'Token', 'NFT'].map(f => (
            <button
              key={f}
              className={`flex-1 px-2 py-2 rounded-lg glassmorphic border border-blue-400/30 font-semibold text-xs sm:text-sm ${filter === f ? 'bg-[#0052FF] text-white' : 'bg-transparent text-blue-200'}`}
              onClick={() => setFilter(f as any)}
            >
              {f} Rewards
            </button>
          ))}
        </div>
        {/* Campaign Cards - Stacked for mobile */}
        <div className="flex flex-col gap-4 w-full">
          {filteredCampaigns.map((c, i) => (
            <motion.div
              key={c.id}
              whileHover={{ scale: 1.02 }}
              className="card glassmorphic px-4 py-3 rounded-xl shadow-lg text-left backdrop-blur-md border border-blue-400/20 transition-all duration-300 cursor-pointer"
              onClick={() => setSelected(c.id)}
            >
              <div className="text-lg font-bold mb-1 text-[#7F5FFF]">{c.title}</div>
              <div className="text-sm mb-2 text-blue-100">{c.description}</div>
              <div className="text-xs px-3 py-1 rounded-full bg-blue-900/40 inline-block">{c.type} Reward</div>
            </motion.div>
          ))}
        </div>
        {/* Wallet Widget */}
        <div className="mt-6">
          <div className="bg-gradient-to-r from-[#0052FF] to-[#7F5FFF] px-5 py-3 rounded-xl shadow-xl glassmorphic text-base font-bold border border-blue-400/30 text-center w-[90vw] max-w-xs">
            Wallet Balance: <span className="text-[#00FFD0]">0 TVR</span>
            <div className="mt-1 text-xs text-blue-200">Quick NFT View</div>
          </div>
        </div>
      </div>
      {/* Modal for Campaign Details */}
      {selected !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="glassmorphic p-6 rounded-2xl max-w-xs w-full border border-blue-400/30 shadow-2xl"
          >
            <div className="mb-4 bg-gray-800 h-32 rounded-xl" />
            <h3 className="text-lg font-bold mb-2 text-[#7F5FFF]">{campaigns.find(c => c.id === selected)?.title}</h3>
            <p className="mb-3 text-sm">{campaigns.find(c => c.id === selected)?.description}</p>
            <button className="px-4 py-2 bg-gradient-to-r from-[#0052FF] to-[#7F5FFF] rounded-xl shadow-lg font-semibold text-xs" onClick={() => setSelected(null)}>
              Join Mission
            </button>
            <div className="mt-4 text-green-400 text-xs">Mission Details Here</div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MissionDashboard;
