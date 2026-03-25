"use client";

import { useEffect } from "react";

const SIGNAL_CHAT_URL =
  "https://signal.group/#CjQKIIB7-NMkrv7nuNEr8P82F9-70Ckj0rEAWmrK_urPnT9zEhCijiRpEbVJWMYpolQR1u-d";

export default function ChatRedirectPage() {
  useEffect(() => {
    window.location.replace(SIGNAL_CHAT_URL);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="mx-auto max-w-xl p-6 text-center">
        <meta httpEquiv="refresh" content={`0;url=${SIGNAL_CHAT_URL}`} />
        <h1 className="text-2xl font-semibold mb-2">Redirecting…</h1>
        <p className="text-zinc-600">
          Opening the Signal group. If nothing happens,{" "}
          <a href={SIGNAL_CHAT_URL} className="underline">
            continue here
          </a>
          .
        </p>
      </div>
    </main>
  );
}
