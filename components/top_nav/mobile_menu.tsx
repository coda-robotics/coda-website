interface MobileMenuProps {
  is_open: boolean;
  on_close: () => void;
  children: React.ReactNode;
}

export const MobileMenu = ({ is_open, on_close, children }: MobileMenuProps) => {
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center z-40 transition-opacity duration-300 ease-in-out ${
        is_open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } bg-white/30 backdrop-blur-md`}
    >
      <button
        onClick={on_close}
        className="absolute top-6 right-6 text-black text-xl font-bold"
      >
        ×
      </button>
      {children}
    </div>
  );
}; 