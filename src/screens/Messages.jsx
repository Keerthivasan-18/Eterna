import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft, Search, Mic, ImageIcon, Smile, Send, Sparkles, Check, CheckCheck,
} from "lucide-react";
import ScreenShell from "../components/ScreenShell";
import { GlassPanel, Eyebrow, IconButton } from "../components/UI";
import EmptyState from "../components/EmptyState";
import { conversations, icebreakers } from "../lib/data";
import { MessageCircle } from "lucide-react";

export default function Messages() {
  const [activeId, setActiveId] = useState(null);
  const active = conversations.find((c) => c.id === activeId);

  if (conversations.length === 0) {
    return (
      <ScreenShell>
        <EmptyState icon={MessageCircle} title="No messages" body="Start a conversation with one of your matches — the first line is always the hardest." />
      </ScreenShell>
    );
  }

  if (active) return <ChatView conversation={active} onBack={() => setActiveId(null)} />;

  return (
    <ScreenShell>
      <Eyebrow>Messages</Eyebrow>
      <h1 className="mt-2 font-display text-3xl text-white">Conversations</h1>

      <div className="glass mt-6 flex items-center gap-3 rounded-full px-5 py-3">
        <Search size={16} className="text-lavender/50" />
        <input placeholder="Search messages" className="w-full bg-transparent text-sm text-white placeholder:text-lavender/40 focus:outline-none" />
      </div>

      <div className="mt-6 space-y-3">
        {conversations.map((c) => (
          <button key={c.id} onClick={() => setActiveId(c.id)} className="block w-full text-left">
            <GlassPanel className="flex items-center gap-4 p-4">
              <div className="relative shrink-0">
                <img src={c.photo} className="h-14 w-14 rounded-full object-cover" alt={c.name} />
                {c.online && <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-ink bg-emerald-400" />}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-display text-base text-white">{c.name}</p>
                  <span className="text-[11px] text-lavender/45">{c.time}</span>
                </div>
                <p className={`mt-0.5 truncate text-sm ${c.typing ? "italic text-neon-rose" : "text-lavender/60"}`}>
                  {c.lastMessage}
                </p>
              </div>
              {c.unread > 0 && (
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-eterna-gradient text-[10px] font-semibold text-white">
                  {c.unread}
                </span>
              )}
            </GlassPanel>
          </button>
        ))}
      </div>
    </ScreenShell>
  );
}

function ChatView({ conversation, onBack }) {
  const [messages, setMessages] = useState(conversation.messages);
  const [text, setText] = useState("");
  const [showIce, setShowIce] = useState(false);

  const send = (t) => {
    const val = t ?? text;
    if (!val.trim()) return;
    setMessages((m) => [...m, { id: m.length + 1, from: "me", text: val, time: "now" }]);
    setText("");
    setShowIce(false);
  };

  return (
    <div className="relative flex h-screen w-full flex-col pt-6 lg:pt-24">
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-4 pb-4 lg:px-0">
        <GlassPanel strong className="mb-3 flex items-center gap-3 rounded-4xl px-4 py-3">
          <button onClick={onBack} className="flex h-9 w-9 items-center justify-center rounded-full glass">
            <ArrowLeft size={16} />
          </button>
          <img src={conversation.photo} className="h-10 w-10 rounded-full object-cover" alt={conversation.name} />
          <div className="flex-1">
            <p className="font-display text-base text-white">{conversation.name}</p>
            <p className="text-[11px] text-emerald-300">{conversation.online ? "Online now" : "Offline"}</p>
          </div>
        </GlassPanel>

        <GlassPanel className="flex-1 space-y-4 overflow-y-auto rounded-4xl p-5">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[75%] rounded-3xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.from === "me"
                    ? "rounded-br-md bg-eterna-gradient text-white shadow-glow-sm"
                    : "glass rounded-bl-md text-pearl/90"
                }`}
              >
                {m.text}
                <div className={`mt-1 flex items-center gap-1 text-[10px] ${m.from === "me" ? "text-white/70 justify-end" : "text-lavender/40"}`}>
                  {m.time}
                  {m.from === "me" && <CheckCheck size={12} />}
                </div>
              </div>
            </div>
          ))}
          {conversation.typing && (
            <div className="flex justify-start">
              <div className="glass flex items-center gap-1 rounded-3xl rounded-bl-md px-4 py-3">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-lavender/70"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 0.9, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </div>
          )}
        </GlassPanel>

        {showIce && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 space-y-2">
            {icebreakers.map((ib, i) => (
              <button
                key={i}
                onClick={() => send(ib)}
                className="glass flex w-full items-start gap-2 rounded-2xl px-4 py-3 text-left text-xs text-lavender/80 hover:text-white"
              >
                <Sparkles size={13} className="mt-0.5 shrink-0 text-neon-rose" /> {ib}
              </button>
            ))}
          </motion.div>
        )}

        <div className="mt-3 flex items-center gap-2">
          <IconButton icon={Sparkles} onClick={() => setShowIce((s) => !s)} active={showIce} className="h-11 w-11" size={16} />
          <GlassPanel className="flex flex-1 items-center gap-2 rounded-full px-4 py-2.5">
            <button className="text-lavender/50"><Smile size={18} /></button>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Write something worth reading…"
              className="w-full bg-transparent text-sm text-white placeholder:text-lavender/40 focus:outline-none"
            />
            <button className="text-lavender/50"><ImageIcon size={18} /></button>
            <button className="text-lavender/50"><Mic size={18} /></button>
          </GlassPanel>
          <button onClick={() => send()} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-eterna-gradient text-white shadow-glow-sm">
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
