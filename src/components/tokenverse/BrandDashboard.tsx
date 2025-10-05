
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BrandDashboard = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    media: null as File | null,
    type: 'ERC20',
    quantity: 0,
    expires: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D111C] to-[#0052FF] text-white p-8">
      <h2 className="text-4xl font-bold mb-8 neon-text drop-shadow-[0_0_10px_#0052FF]">Brand Dashboard</h2>
      {/* Create Campaign Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="glassmorphic p-8 rounded-2xl mb-10 max-w-xl mx-auto border border-blue-400/30 shadow-xl"
      >
        <input name="title" type="text" placeholder="Campaign Title" className="glassmorphic bg-blue-900/40 border border-blue-400/30 text-white placeholder-blue-200 mb-4 w-full px-4 py-2 rounded-xl" value={form.title} onChange={handleChange} />
        <textarea name="description" placeholder="Description" className="glassmorphic bg-blue-900/40 border border-blue-400/30 text-white placeholder-blue-200 mb-4 w-full px-4 py-2 rounded-xl" value={form.description} onChange={handleChange} />
        <input name="media" type="file" className="glassmorphic bg-blue-900/40 border border-blue-400/30 text-white placeholder-blue-200 mb-4 w-full px-4 py-2 rounded-xl" />
        <select name="type" className="glassmorphic bg-blue-900/40 border border-blue-400/30 text-white mb-4 w-full px-4 py-2 rounded-xl" value={form.type} onChange={handleChange}>
          <option value="ERC20">ERC20</option>
          <option value="ERC721">ERC721</option>
        </select>
        <input name="quantity" type="number" placeholder="Reward Quantity" className="glassmorphic bg-blue-900/40 border border-blue-400/30 text-white placeholder-blue-200 mb-4 w-full px-4 py-2 rounded-xl" value={form.quantity} onChange={handleChange} />
        <input name="expires" type="date" className="glassmorphic bg-blue-900/40 border border-blue-400/30 text-white placeholder-blue-200 mb-4 w-full px-4 py-2 rounded-xl" value={form.expires} onChange={handleChange} />
        <button type="submit" className="w-full px-8 py-3 bg-gradient-to-r from-[#0052FF] to-[#7F5FFF] rounded-xl shadow-lg font-semibold transition-transform hover:scale-105">Create Campaign</button>
      </motion.form>
      {/* My Campaigns Tab */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="glassmorphic p-8 rounded-2xl max-w-xl mx-auto border border-blue-400/30 shadow-xl"
      >
        <div className="text-xl font-bold mb-4 text-[#7F5FFF]">My Campaigns</div>
        <div className="text-blue-200">No campaigns yet.</div>
      </motion.div>
    </div>
  );
};

export default BrandDashboard;
