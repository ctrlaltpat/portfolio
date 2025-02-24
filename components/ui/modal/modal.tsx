import { MediaItem } from "@/app/media/types";
import { useEffect } from "react";
import './modal.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: ModalItem | MediaItem | null;
}

export function Modal({ isOpen, onClose, content }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  if (!content) {alert('....hello?'); return null;}

  return (
    <div className="modal" onClick={onClose}>
      <div className="container" onClick={onClose}>
        <div className="wrapper">
          <div className="inner" onClick={(e) => e.stopPropagation()}>
            <h4>{content.title}</h4>
            <h5>{content.description}</h5>
            <button onClick={onClose} className="cap-btn">
              Esc
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
