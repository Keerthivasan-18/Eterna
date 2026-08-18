import { Heart, MessageCircle, Sparkles, Eye, Bell } from "lucide-react";
import ScreenShell from "../components/ScreenShell";
import { GlassPanel, Eyebrow } from "../components/UI";
import EmptyState from "../components/EmptyState";
import { notifications } from "../lib/data";

const iconMap = { match: Sparkles, like: Heart, message: MessageCircle, ai: Sparkles, view: Eye };
const colorMap = {
  match: "text-neon-pink",
  like: "text-neon-pink",
  message: "text-sky-300",
  ai: "text-orchid",
  view: "text-lavender/70",
};

export default function Notifications() {
  if (notifications.length === 0) {
    return (
      <ScreenShell>
        <EmptyState icon={Bell} title="No notifications" body="Likes, matches, and messages will show up here the moment they happen." />
      </ScreenShell>
    );
  }
  return (
    <ScreenShell>
      <Eyebrow>Activity</Eyebrow>
      <h1 className="mt-2 font-display text-3xl text-white">Notifications</h1>

      <div className="mt-8 space-y-3">
        {notifications.map((n) => {
          const Icon = iconMap[n.type] || Bell;
          return (
            <GlassPanel key={n.id} className="flex items-start gap-4 p-5">
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl glass ${colorMap[n.type]}`}>
                <Icon size={17} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-medium text-white">{n.title}</p>
                  <span className="shrink-0 text-[11px] text-lavender/40">{n.time}</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-lavender/60">{n.body}</p>
              </div>
            </GlassPanel>
          );
        })}
      </div>
    </ScreenShell>
  );
}
