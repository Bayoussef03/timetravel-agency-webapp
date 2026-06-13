"use client"

import { useState } from "react"
import { MessageCircle, X, Send, Clock } from "lucide-react"

type Message = { role: "bot" | "user"; text: string }

const initialMessages: Message[] = [
  {
    role: "bot",
    text: "Welcome to TimeTravel Agency. Where — and when — would you like to go?",
  },
]

export function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")

  function handleSend(e: React.FormEvent) {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      {
        role: "bot",
        text: "A magnificent choice. Our concierge will curate a private journey for you — shall I begin tailoring the details?",
      },
    ])
    setInput("")
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[28rem] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-gold/30 bg-card shadow-2xl">
          <div className="flex items-center gap-3 border-b border-border/50 bg-background/60 px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10">
              <Clock className="h-5 w-5 text-gold" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <p className="font-serif text-sm font-semibold text-foreground">
                Temporal Concierge
              </p>
              <p className="text-xs text-gold">Online</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user" ? "flex justify-end" : "flex justify-start"
                }
              >
                <p
                  className={
                    m.role === "user"
                      ? "max-w-[80%] rounded-2xl rounded-br-sm bg-gold px-3 py-2 text-sm text-primary-foreground"
                      : "max-w-[80%] rounded-2xl rounded-bl-sm bg-secondary px-3 py-2 text-sm text-secondary-foreground"
                  }
                >
                  {m.text}
                </p>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 border-t border-border/50 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about time travel destinations..."
              aria-label="Message"
              className="flex-1 rounded-full bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold/50"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-primary-foreground transition-colors hover:bg-gold/90"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-xl transition-transform hover:scale-105"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  )
}
