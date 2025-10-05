import { useState, useEffect } from 'react';

export default function WalletConnect() {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    setIsConnecting(true);
    setError(null);
    try {
      if (!window.ethereum) {
        setError('Please install MetaMask!');
        setIsConnecting(false);
        return;
      }
      // Request accounts
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      // Switch to Base
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x2105' }],
        });
      } catch (switchError) {
        // If Base is not added, add it
        if ((switchError as any).code === 4902) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: '0x2105',
              chainName: 'Base',
              nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
              rpcUrls: ['https://mainnet.base.org'],
              blockExplorerUrls: ['https://basescan.org']
            }]
          });
        } else {
          setError('Failed to switch to Base network.');
        }
      }
      setAddress(accounts[0]);
    } catch (err: any) {
      setError(err.message || 'Connection error');
    } finally {
      setIsConnecting(false);
    }
  };

  useEffect(() => {
    // Check if already connected
    const checkConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAddress(accounts[0]);
        }
      }
    };
    checkConnection();
    // Listen for account/chain changes
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        setAddress(accounts[0] || null);
      });
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
    }
    // Cleanup listeners
    return () => {
      if (window.ethereum?.removeListener) {
        window.ethereum.removeListener('accountsChanged', () => {});
        window.ethereum.removeListener('chainChanged', () => {});
      }
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[300px]">
      <div className="relative w-full max-w-sm">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0052FF] via-[#7F5FFF] to-[#FFD700] opacity-40 blur-2xl animate-pulse" />
        <div className="absolute inset-0 rounded-3xl border-2 border-[#00FFD0]/40 shadow-[0_0_40px_#0052FF] pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center justify-center p-8 rounded-3xl glassmorphic backdrop-blur-2xl shadow-2xl border border-[#7F5FFF]/30">
          <div className="mb-6 flex flex-col items-center">
            <svg width="64" height="64" viewBox="0 0 64 64" className="mb-2 animate-spin-slow">
              <defs>
                <radialGradient id="globeGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="60%" stopColor="#0052FF" />
                  <stop offset="100%" stopColor="#7F5FFF" />
                </radialGradient>
              </defs>
              <circle cx="32" cy="32" r="28" fill="url(#globeGradient)" opacity="0.7" />
              <circle cx="32" cy="32" r="20" fill="none" stroke="#00FFD0" strokeWidth="2" opacity="0.5" />
              <circle cx="32" cy="32" r="12" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.3" />
            </svg>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFD0] via-[#0052FF] to-[#FFD700] animate-gradient">TokenVerse Network</span>
          </div>
          {!address ? (
            <button
              onClick={connectWallet}
              disabled={isConnecting}
              className={`w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-[#0052FF] via-[#7F5FFF] to-[#FFD700] text-white font-bold shadow-[0_0_30px_#00FFD0] border border-[#FFD700]/40 transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95 ${isConnecting ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              {isConnecting ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin h-5 w-5 border-2 border-[#FFD700] border-t-transparent rounded-full"></span>
                  Connecting...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <span className="material-icons text-[#FFD700] text-2xl">bolt</span>
                  Connect MetaMask
                </span>
              )}
            </button>
          ) : (
            <div className="w-full flex flex-col items-center mb-2">
              <div className="px-6 py-4 rounded-2xl bg-gradient-to-r from-[#0052FF] via-[#7F5FFF] to-[#FFD700] text-lg font-bold shadow-[0_0_20px_#FFD700] border border-[#00FFD0]/30 text-center glassmorphic">
                <span className="material-icons text-[#FFD700] text-2xl align-middle mr-2">verified_user</span>
                Connected: <span className="font-mono text-[#FFD700]">{address.slice(0, 6)}...{address.slice(-4)}</span>
              </div>
            </div>
          )}
          {error && (
            <div className="w-full text-center text-[#FFD700] bg-[#0D111C]/80 rounded-xl py-2 mt-2 border border-[#FFD700]/30 shadow-[0_0_10px_#FFD700]">
              <span className="material-icons align-middle mr-1">error_outline</span>
              {error}
            </div>
          )}
        </div>
      </div>
      {/* Futuristic bottom pulse bar */}
      <div className="w-full max-w-sm mt-8 flex items-center justify-between px-4 py-2 rounded-xl bg-gradient-to-r from-[#0052FF]/60 via-[#7F5FFF]/60 to-[#FFD700]/60 shadow-[0_0_20px_#00FFD0] border border-[#FFD700]/20 animate-pulse">
        <span className="flex items-center gap-1 text-[#00FFD0] font-bold text-xs"><span className="material-icons text-base">pulse</span> Blockchain Pulse</span>
        <span className="flex items-center gap-1 text-[#FFD700] font-bold text-xs"><span className="material-icons text-base">smart_toy</span> AI Status: Online</span>
      </div>
    </div>
  );
}
