import { useEffect, ReactNode } from 'react';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function BaseModal({ isOpen, onClose, children }: BaseModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center animate-in fade-in duration-300">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 overflow-y-auto" onClick={onClose}>
        <div className="flex min-h-full items-center justify-center p-4">
          <div 
            className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-black p-6 text-white shadow-xl animate-in slide-in-from-bottom-1 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
            <button
              onClick={onClose}
              className="relative mt-6 mx-auto block px-[1.2rem] pt-[0.4rem] pb-0 text-[1rem] font-bold uppercase cursor-pointer overflow-hidden rounded-[10px] border-[1.5px] border-[#3b83f6] hover:opacity-90 active:translate-y-[2px]"
              style={{
                background: 'radial-gradient(at top right, #141515, #000)',
                color: '#3b83f6',
                boxShadow: '0 4px 0 6px #060606, -1px 6px 6px 6px rgba(0, 0, 0, 0.9)',
              }}
            >
              Esc
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
