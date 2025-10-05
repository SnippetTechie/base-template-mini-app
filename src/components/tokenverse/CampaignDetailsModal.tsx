
import React from 'react';
import { motion } from 'framer-motion';

const CampaignDetailsModal = ({ title, description, onClose }: { title: string; description: string; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="glassmorphic p-8 rounded-2xl max-w-lg w-full border border-blue-400/30 shadow-2xl"
      >
        {/* Campaign Media Placeholder */}
        <div className="mb-6 bg-gray-800 h-40 rounded-xl" />
        {/* Task Details & Progress */}
        <h3 className="text-2xl font-bold mb-2 text-[#7F5FFF]">{title}</h3>
        <p className="mb-4">{description}</p>
        {/* Start Mission Button */}
        <button className="px-6 py-3 bg-gradient-to-r from-[#0052FF] to-[#7F5FFF] rounded-xl shadow-lg font-semibold" onClick={onClose}>
          Start Mission
        </button>
        {/* Success Animation Placeholder */}
        <div className="mt-6 text-green-400">Mission Complete!</div>
      </motion.div>
    </div>
  );
};

export default CampaignDetailsModal;
