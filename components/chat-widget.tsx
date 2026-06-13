"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Bonjour, je suis l'assistant de TimeTravel Agency. Posez-moi vos questions sur nos voyages temporels.",
    },
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const updatedMessages: Message[] = [
      ...messages,
      { role: "user", content: input },
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data = await res.json();

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            data.reply || "Je n'ai pas pu répondre pour le moment.",
        },
      ]);
    } catch (error) {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "Une erreur est survenue. Veuillez réessayer dans un instant.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-amber-500 px-5 py-4 text-sm font-semibold text-black shadow-lg transition hover:scale-105 hover:bg-amber-400"
      >
        Chat
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-amber-400/20 bg-zinc-950 text-white shadow-2xl">
          <div className="border-b border-amber-400/20 px-4 py-3">
            <h3 className="font-semibold text-amber-400">
              TimeTravel Assistant
            </h3>
            <p className="text-xs text-zinc-400">
              Votre concierge IA de voyage temporel
            </p>
          </div>

          <div className="h-80 space-y-3 overflow-y-auto px-4 py-4 text-sm">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl bg-amber-500 px-3 py-2 text-black"
                    : "max-w-[85%] rounded-2xl bg-zinc-800 px-3 py-2 text-white"
                }
              >
                {message.content}
              </div>
            ))}

            {loading && (
              <div className="max-w-[85%] rounded-2xl bg-zinc-800 px-3 py-2 text-white">
                Réflexion en cours...
              </div>
            )}
          </div>

          <div className="flex gap-2 border-t border-amber-400/20 p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Posez-moi vos questions sur les voyages temporels..."
              className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-500"
            />
            <button
              onClick={sendMessage}
              className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-amber-400"
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </>
  );
}