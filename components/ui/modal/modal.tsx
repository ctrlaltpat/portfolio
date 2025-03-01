import { MediaItem } from "@/lib/strapi/types";
import { useEffect } from "react";
import "./modal.scss";
import Snippet from "@/components/media/snippet";
import Note from "@/components/media/note";
import Img from "@/components/media/img";
import Video from "@/components/media/video";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MediaItem;
}

export function Modal({ isOpen, onClose, item }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div className={`modal ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="container" onClick={onClose}>
        <div className="wrapper">
          {!item ? (
            ""
          ) : (
            <div className="inner" onClick={(e) => e.stopPropagation()}>
              <h4>{item.title}</h4>
              <h5>{item.description}</h5>
              <div className="content">
                {item.type === "snippet" && <Snippet content={item.content!} />}
                {item.type === "note" && <Note content={item.content!} />}
                {item.type === "image" && <Img item={item} />}
                {item.type === "video" && <Video item={item} />}
              </div>
              <button onClick={onClose} className="cap-btn">
                Esc
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
