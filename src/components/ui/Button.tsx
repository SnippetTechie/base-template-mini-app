interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

    export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
      return (
        <button
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0052FF] to-[#7F5FFF] text-white font-semibold shadow-lg glassmorphic hover:scale-105 transition-all border border-blue-400/30 drop-shadow-[0_0_10px_#0052FF]"
          {...props}
        >
          {children}
        </button>
      );
    }
