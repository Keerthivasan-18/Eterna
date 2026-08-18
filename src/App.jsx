import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bell } from "lucide-react";

import Splash from "./screens/Splash";
import Landing from "./screens/Landing";
import Auth from "./screens/Auth";
import Onboarding from "./screens/Onboarding";
import Discover from "./screens/Discover";
import Filters from "./screens/Filters";
import MatchExplanation from "./screens/MatchExplanation";
import ProfileDetail from "./screens/ProfileDetail";
import MatchCelebration from "./screens/MatchCelebration";
import Matches from "./screens/Matches";
import Messages from "./screens/Messages";
import Notifications from "./screens/Notifications";
import LikesYou from "./screens/LikesYou";
import MyProfile from "./screens/MyProfile";
import EditProfile from "./screens/EditProfile";
import EternaAI from "./screens/EternaAI";
import Premium from "./screens/Premium";
import Settings from "./screens/Settings";

import { DesktopNav, MobileNav } from "./components/Navigation";
import { IconButton } from "./components/UI";

export default function App() {
  const [flow, setFlow] = useState("splash"); // splash | landing | auth | onboarding | app
  const [tab, setTab] = useState("discover"); // discover | likes | matches | messages | ai | profile
  const [overlay, setOverlay] = useState(null); // { type, data }
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [celebrating, setCelebrating] = useState(null);

  useEffect(() => {
    if (flow === "splash") {
      const t = setTimeout(() => setFlow("landing"), 2600);
      return () => clearTimeout(t);
    }
  }, [flow]);

  const goTab = (key) => {
    setOverlay(null);
    setTab(key);
  };

  const openProfile = (p) => setOverlay({ type: "profile", data: p });
  const openExplanation = (p) => setOverlay({ type: "explain", data: p });
  const openEdit = () => setOverlay({ type: "edit" });
  const openSettings = () => setOverlay({ type: "settings" });
  const openPremium = () => setOverlay({ type: "premium" });
  const openNotifications = () => setOverlay({ type: "notifications" });
  const closeOverlay = () => setOverlay(null);

  if (flow === "splash") return <Splash />;
  if (flow === "landing")
    return <Landing onGetStarted={() => setFlow("onboarding")} onSignIn={() => setFlow("auth")} />;
  if (flow === "auth") return <Auth onAuthenticated={() => setFlow("app")} />;
  if (flow === "onboarding") return <Onboarding onComplete={() => setFlow("app")} />;

  const badges = { likes: 6, messages: 2 };

  return (
    <div className="aurora-bg relative min-h-screen w-full">
      <div className="grain" />
      <DesktopNav current={tab} onNavigate={goTab} badges={badges} />
      <MobileNav current={tab} onNavigate={goTab} badges={badges} />

      <div className="fixed right-6 top-6 z-50 hidden lg:block">
        <IconButton icon={Bell} onClick={openNotifications} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={overlay ? overlay.type + (overlay.data?.id || "") : tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {overlay?.type === "profile" && (
            <ProfileDetail
              profile={overlay.data}
              onBack={closeOverlay}
              onSeeWhyClick={openExplanation}
              onMessage={() => goTab("messages")}
            />
          )}
          {overlay?.type === "explain" && (
            <MatchExplanation profile={overlay.data} onBack={closeOverlay} onViewProfile={openProfile} />
          )}
          {overlay?.type === "edit" && <EditProfile onBack={closeOverlay} />}
          {overlay?.type === "settings" && <Settings onBack={closeOverlay} onLogout={() => setFlow("landing")} />}
          {overlay?.type === "premium" && <Premium />}
          {overlay?.type === "notifications" && <Notifications />}

          {!overlay && tab === "discover" && (
            <Discover onOpenProfile={openProfile} onOpenFilters={() => setFiltersOpen(true)} onMatch={setCelebrating} />
          )}
          {!overlay && tab === "likes" && <LikesYou onUpgrade={openPremium} />}
          {!overlay && tab === "matches" && <Matches onOpenProfile={openProfile} />}
          {!overlay && tab === "messages" && <Messages />}
          {!overlay && tab === "ai" && <EternaAI onExplainMatch={openExplanation} />}
          {!overlay && tab === "profile" && <MyProfile onEdit={openEdit} onSettings={openSettings} />}
        </motion.div>
      </AnimatePresence>

      <Filters open={filtersOpen} onClose={() => setFiltersOpen(false)} />
      <MatchCelebration
        profile={celebrating}
        onClose={() => setCelebrating(null)}
        onSendMessage={() => {
          setCelebrating(null);
          goTab("messages");
        }}
      />
    </div>
  );
}
