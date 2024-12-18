import { StandardMediaItem } from '@/app/media/types';
import Image from 'next/image';
import { BaseModal } from './base-modal';

interface MediaModalProps {
  item: StandardMediaItem;
  isOpen: boolean;
  onClose: () => void;
}

export function MediaModal({ item, isOpen, onClose }: MediaModalProps) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="mb-4">
        <h2 className="text-xl font-bold">{item.title}</h2>
        <p className="text-sm text-gray-400">{item.description}</p>
      </div>

      <div className="relative aspect-video rounded-lg overflow-hidden">
        {item.type === 'video' ? (
          <video
            src={item.url}
            controls
            className="w-full h-full object-contain"
          />
        ) : (
          <Image
            src={item.url}
            alt={item.title}
            fill
            className="object-contain"
          />
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </BaseModal>
  );
}
