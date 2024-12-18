import { useState } from 'react';
import { SnippetMediaItem } from '@/app/media/types';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { BaseModal } from './base-modal';

interface SnippetModalProps {
  snippet: SnippetMediaItem;
  isOpen: boolean;
  onClose: () => void;
}

export function SnippetModal({ snippet, isOpen, onClose }: SnippetModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">{snippet.title}</h2>
          <p className="text-sm text-gray-400">{snippet.description}</p>
        </div>
        <button
          onClick={handleCopy}
          className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/20 hover:bg-white/10 transition-colors"
        >
          {copied ? (
            <FiCheck className="h-4 w-4 text-green-500" />
          ) : (
            <FiCopy className="h-4 w-4" />
          )}
        </button>
      </div>
      
      <div className="relative rounded-lg bg-zinc-900 p-4">
        <div className="absolute right-2 top-2 flex gap-2">
          <span className="rounded bg-zinc-800 px-2 py-1 text-xs">
            {snippet.language}
          </span>
        </div>
        <SyntaxHighlighter
          language={snippet.language}
          style={coldarkDark}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent',
            fontFamily: 'Ubuntu Mono',
          }}
        >
          {snippet.code}
        </SyntaxHighlighter>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {snippet.tags.map((tag) => (
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
