"use client";
import { useState } from "react";

export function CopyButton({ text, label, success }: { text: string; label: string; success: string }) {
  const [copied, setCopied] = useState(false);
  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }
  return (
    <button
      onClick={onCopy}
      className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-base font-medium text-zinc-900 shadow-sm transition hover:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
    >
      {copied ? success : label}
    </button>
  );
}
