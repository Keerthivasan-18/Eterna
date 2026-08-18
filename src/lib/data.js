// Mock data for the Eterna prototype. Photos via pravatar/picsum for placeholder purposes.

export const profiles = [
  {
    id: 1,
    name: "Amara",
    age: 27,
    location: "2 miles away · Chennai",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    ],
    verified: true,
    compatibility: 96,
    about: "Architect by day, jazz-vinyl collector by night. Looking for someone who finds beauty in unfinished sentences and long walks with no destination.",
    interests: ["Jazz", "Architecture", "Slow mornings", "Vintage film", "Hiking"],
    lifestyle: { drinking: "Socially", smoking: "Never", workout: "Often", diet: "Omnivore" },
    goals: "Long-term relationship",
    languages: ["English", "Tamil", "French"],
    education: "M.Arch, Anna University",
    profession: "Architect",
    traits: ["Introspective", "Warm", "Curious", "Grounded"],
    breakdown: { personality: 96, interests: 94, lifestyle: 91, communication: 97, goals: 98 },
  },
  {
    id: 2,
    name: "Rohan",
    age: 30,
    location: "5 miles away · Chennai",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1200&auto=format&fit=crop",
    ],
    verified: true,
    compatibility: 91,
    about: "Product designer who thinks in grids and dreams in gradients. Currently training for a half-marathon and losing.",
    interests: ["Running", "Design", "Coffee", "Sci-fi", "Cooking"],
    lifestyle: { drinking: "Rarely", smoking: "Never", workout: "Everyday", diet: "Vegetarian" },
    goals: "Long-term, open to short",
    languages: ["English", "Hindi"],
    education: "B.Des, NID",
    profession: "Product Designer",
    traits: ["Driven", "Playful", "Loyal", "Direct"],
    breakdown: { personality: 88, interests: 90, lifestyle: 93, communication: 91, goals: 92 },
  },
  {
    id: 3,
    name: "Meera",
    age: 26,
    location: "1 mile away · Chennai",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1200&auto=format&fit=crop",
    ],
    verified: false,
    compatibility: 88,
    about: "Marine biologist. I talk to fish more than people, which should tell you something about my patience levels.",
    interests: ["Diving", "Astronomy", "Pottery", "Indie music"],
    lifestyle: { drinking: "Socially", smoking: "Never", workout: "Sometimes", diet: "Pescatarian" },
    goals: "Figuring it out",
    languages: ["English", "Malayalam"],
    education: "PhD Marine Biology",
    profession: "Researcher",
    traits: ["Calm", "Observant", "Dry humor"],
    breakdown: { personality: 85, interests: 82, lifestyle: 89, communication: 86, goals: 80 },
  },
];

export const matches = [
  { id: 1, name: "Amara", photo: profiles[0].photo, online: true, compatibility: 96, lastActive: "Online now" },
  { id: 2, name: "Rohan", photo: profiles[1].photo, online: false, compatibility: 91, lastActive: "Active 2h ago" },
  { id: 3, name: "Meera", photo: profiles[2].photo, online: true, compatibility: 88, lastActive: "Online now" },
  { id: 4, name: "Zara", photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=800&auto=format&fit=crop", online: false, compatibility: 84, lastActive: "Active yesterday" },
];

export const newMatches = matches.slice(0, 3);

export const conversations = [
  {
    id: 1,
    name: "Amara",
    photo: profiles[0].photo,
    online: true,
    typing: false,
    lastMessage: "That gallery opening sounds perfect, I'm in ✨",
    time: "2m",
    unread: 2,
    messages: [
      { id: 1, from: "them", text: "I did not expect someone else who's read Pessoa unprompted", time: "10:02" },
      { id: 2, from: "me", text: "He ruined 'restlessness' for me in the best way", time: "10:05" },
      { id: 3, from: "them", text: "There's a small gallery opening near Besant Nagar this weekend, thought of you", time: "10:12" },
      { id: 4, from: "me", text: "That gallery opening sounds perfect, I'm in ✨", time: "10:14" },
    ],
  },
  {
    id: 2,
    name: "Rohan",
    photo: profiles[1].photo,
    online: false,
    typing: true,
    lastMessage: "Typing…",
    time: "18m",
    unread: 0,
    messages: [
      { id: 1, from: "them", text: "Okay but half marathon training playlist recs, go", time: "09:20" },
      { id: 2, from: "me", text: "Anything with a BPM over 160 and no lyrics", time: "09:22" },
    ],
  },
  {
    id: 3,
    name: "Meera",
    photo: profiles[2].photo,
    online: true,
    typing: false,
    lastMessage: "You have to see this reef footage",
    time: "1h",
    unread: 0,
    messages: [
      { id: 1, from: "them", text: "You have to see this reef footage", time: "08:41" },
    ],
  },
];

export const icebreakers = [
  "Ask about the last thing that made them lose track of time.",
  "Bring up their favorite unfinished project — everyone has one.",
  "Ask what song they'd play to describe their week.",
];

export const notifications = [
  { id: 1, type: "match", title: "New match with Amara", body: "You both liked each other — say hello.", time: "5m" },
  { id: 2, type: "like", title: "Someone likes your profile", body: "Unlock Eterna Plus to see who.", time: "40m" },
  { id: 3, type: "message", title: "Rohan sent a message", body: "\"Okay but half marathon training…\"", time: "1h" },
  { id: 4, type: "ai", title: "Eterna AI found a strong match", body: "97% communication compatibility with a new profile.", time: "3h" },
  { id: 5, type: "view", title: "Your profile was viewed 12 times", body: "Your photos are performing above average this week.", time: "1d" },
];

export const likesYou = [
  { id: 1, photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop", blurred: true },
  { id: 2, photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop", blurred: true },
  { id: 3, photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop", blurred: true },
  { id: 4, photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop", blurred: true },
  { id: 5, photo: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop", blurred: true },
  { id: 6, photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=800&auto=format&fit=crop", blurred: true },
];

export const currentUser = {
  name: "Vikram",
  age: 29,
  photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1200&auto=format&fit=crop",
  gallery: [
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  ],
  completion: 82,
  bio: "Building things by day, chasing sunsets on East Coast Road by evening.",
  stats: { likes: 148, matches: 32, superLikes: 6, views: 412 },
};
