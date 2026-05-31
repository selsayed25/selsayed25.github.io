"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";

interface MdxCodeBlockProps {
  className?: string;
  children: ReactNode;
}

function extractText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node && typeof node === "object" && "props" in node)
    return extractText((node as { props: { children: ReactNode } }).props.children);
  return "";
}

export function MdxCodeBlock({ className, children }: MdxCodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const lang = className?.replace("language-", "") || "text";

  const copy = async () => {
    const text = extractText(children);
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative mb-4 mt-6">
      <div className="flex items-center justify-between rounded-t-xl border border-b-0 border-border/50 bg-surface-950 px-4 py-2">
        <span className="text-xs font-medium uppercase text-surface-400">
          {lang}
        </span>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-surface-500 opacity-0 transition-all hover:bg-surface-800 hover:text-surface-200 group-hover:opacity-100"
        >
          {copied ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3.5">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3.5">
                <path d="M7 3.5A1.5 1.5 0 0 1 8.5 2h3.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12A1.5 1.5 0 0 1 17 6.622V12.5a1.5 1.5 0 0 1-1.5 1.5h-1v-3.379a3 3 0 0 0-.879-2.121L10.5 5.379A3 3 0 0 0 8.379 4.5H7v-1Z" />
                <path d="M4.5 6A1.5 1.5 0 0 0 3 7.5v9A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.879a1.5 1.5 0 0 0-.44-1.06L9.44 6.439A1.5 1.5 0 0 0 8.378 6H4.5Z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre
        className="overflow-x-auto rounded-b-xl rounded-t-none border border-border/50 bg-surface-950 py-4 text-sm"
      >
        <code className={className}>{children}</code>
      </pre>
    </div>
  );
}
