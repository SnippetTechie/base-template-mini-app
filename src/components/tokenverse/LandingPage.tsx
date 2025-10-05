
import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending, error } = useConnect();
  const { disconnect } = useDisconnect();
  const metaMaskConnector = connectors.find(c => c.name === 'MetaMask');
  const [showError, setShowError] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D111C] to-[#0052FF] text-white flex flex-col items-center justify-start relative overflow-hidden w-full p-4">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl font-extrabold mb-4 text-center neon-text drop-shadow-[0_0_10px_#0052FF]"
        >
          Tokenverse on Base
        </motion.h1>

        {!isConnected ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-4 py-3 bg-gradient-to-r from-[#0052FF] to-[#7F5FFF] rounded-xl shadow-lg text-base font-semibold border-none transition-transform"
            onClick={() => {
              setShowError(false);
              if (metaMaskConnector) connect({ connector: metaMaskConnector });
              else setShowError(true);
            }}
            disabled={isPending || !metaMaskConnector}
          >
            {isPending ? `Connecting...` : 'Connect Wallet'}
          </motion.button>
        ) : (
          <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-xs mx-auto px-4 py-3 rounded-xl bg-gradient-to-r from-[#0052FF] to-[#7F5FFF] text-base font-semibold text-white shadow-lg text-center">
              Connected: <span className="font-mono">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
            </div>
            <button className="text-blue-200 underline text-xs mt-2" onClick={() => disconnect()}>
              Disconnect
            </button>
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 mt-6 w-full">
          <div className="card glassmorphic px-4 py-3 rounded-xl shadow-lg text-center backdrop-blur-md border border-blue-400/20">
            <div className="text-lg font-bold text-[#7F5FFF]">Brands</div>
            <div className="text-sm text-blue-100">12</div>
          </div>
          <div className="card glassmorphic px-4 py-3 rounded-xl shadow-lg text-center backdrop-blur-md border border-blue-400/20">
            <div className="text-lg font-bold text-[#7F5FFF]">Users</div>
            <div className="text-sm text-blue-100">1,024</div>
          </div>
          <div className="card glassmorphic px-4 py-3 rounded-xl shadow-lg text-center backdrop-blur-md border border-blue-400/20">
            <div className="text-lg font-bold text-[#7F5FFF]">Rewards</div>
            <div className="text-sm text-blue-100">3,456</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
