// We are going to replace this with the Database, pls change this its cringe I know, mock content mostly ai generated here...
export const initialVerses = [
  {
    id: "v1",
    title: "Is it time to finally make the 4-day work week a thing?",
    type: "petition",
    creatorName: "Alex - Burnout Is Real",
    description:
      "We've been doing the 9-to-5 since forever, but the world has changed. Most of us get our work done in half the time anyway. Who's with me on pushing for a 32-hour standard?",
    options: [
      { id: "o1", text: "YES, sign me up right now", votes: 24500 },
      { id: "o2", text: "Nah, it'll just mess with the economy", votes: 8200 },
    ],
    likes: 1240,
    createdAt: Date.now() - 3600000 * 2,
    comments: [
      {
        id: "c1",
        userName: "Sarah J.",
        text: "I tried this at my new company and I've never been more focused. 5 days is legacy code.",
        likes: 142,
      },
    ],
    isTakenDown: false,
    isFeatured: true,
  },
  {
    id: "v_poll_1",
    title: "Are we ready to go 100% cashless, or is that a nightmare?",
    type: "poll",
    creatorName: "Tech Nomad",
    description:
      "I haven't used a physical coin in months, but sometimes the tech fails. Do you think we should officially retire physical bills in the next 10 years?",
    options: [
      { id: "p1", text: "Fully Digital 📲", votes: 12500 },
      { id: "p2", text: "Keep the Cash 💵", votes: 14200 },
    ],
    likes: 850,
    createdAt: Date.now() - 3600000 * 1,
    comments: [],
    isTakenDown: false,
  },
  {
    id: "v2",
    title: "Can we still call AI 'art' or is it just efficient theft?",
    type: "debate",
    creatorName: "Digital Canvas",
    description:
      "The lines are getting blurry. Some say it's just a new brush, others say it's stealing from millions of real artists. What's the verdict for the future of the industry?",
    options: [
      { id: "o3", text: "It's not real art", votes: 4890 },
      { id: "o4", text: "It's just a new tool", votes: 5120 },
    ],
    likes: 910,
    createdAt: Date.now() - 3600000 * 5,
    comments: [],
    isTakenDown: false,
  },
  {
    id: "v3",
    title: "Living in the city vs. Moving to the suburbs?",
    type: "comparison",
    creatorName: "The Modern Life",
    description:
      "Everyone is remote now. Is staying in the high-rent city still worth the 'vibe', or is that yard and quiet life in the burbs the move for 2026?",
    options: [
      { id: "o5", text: "City Life (Never Sleep)", votes: 3100 },
      { id: "o6", text: "Suburban Yard (Safe Bet)", votes: 3850 },
    ],
    likes: 720,
    createdAt: Date.now() - 3600000 * 12,
    comments: [],
    isTakenDown: false,
  },
  {
    id: "v8",
    title: "Ultimate Debate: Gojo (JJK) vs. Helios Payne (LH&S)",
    type: "comparison",
    description:
      "Let's be real here—Helios Payne with Once True or Gojo with the Six Eyes? Who actually walks away from this fight?",
    creatorName: "AnimeScaler_99",
    options: [
      { id: "o16", text: "The Honoured One (Gojo)", votes: 4934 },
      { id: "o17", text: "The Disgraced (Helios)", votes: 2912 },
    ],
    likes: 13222,
    createdAt: Date.now() - 3600000 * 48,
    comments: [
      {
        id: "o23",
        userName: "IdleScaler",
        text: "Infinite Void is just too much of a hack for Helios to handle.",
        likes: 67,
      },
    ],
    isTakenDown: false,
  },
  {
    id: "v7",
    title: "Bloodstrike: Who's the actual mobility GOAT right now?",
    type: "comparison",
    creatorName: "Pro_Striker_17",
    description:
      "If you're playing for movement speed and verticality, who are you locking in? Zero, Katya, or Emma?",
    options: [
      { id: "o13", text: "Zero (The OG)", votes: 2676 },
      { id: "o14", text: "Katya (Underrated)", votes: 930 },
      { id: "o15", text: "Emma (The Dash Mastery)", votes: 2641 },
    ],
    likes: 420,
    createdAt: Date.now() - 3600000 * 6,
    comments: [],
    isTakenDown: false,
  },
  {
    id: "v9",
    title: "Is it actually time to dump Windows 11 for Linux?",
    type: "comparison",
    creatorName: "Kernel_Panic",
    description:
      "Windows 11 feels like it's becoming 50% ads and 50% tracking. Linux Mint and Pop!_OS are looking cleaner every day. Is 2026 finally 'The Year of Linux' or are we just coping?",
    options: [
      { id: "o18", text: "Switched & never looking back", votes: 4200 },
      { id: "o19", text: "Gaming is still better on Windows", votes: 3800 },
      { id: "o20", text: "Linux is too much work", votes: 1500 },
    ],
    likes: 890,
    createdAt: Date.now() - 3600000 * 3,
    comments: [
      {
        id: "c2",
        userName: "TuxFan",
        text: "Steam Deck basically proved Linux gaming is ready. Just do it.",
        likes: 45,
      },
    ],
    isTakenDown: false,
  },
  {
    id: "v10",
    title: "Can we please stop putting subscriptions in everything?",
    type: "petition",
    creatorName: "Wallet_Dry",
    description:
      "I have a subscription for my car's heated seats, my Photoshop, my music, and now my fridge? Let's push back against the 'rent everything, own nothing' economy.",
    options: [
      { id: "o21", text: "SIGN: I want to own my stuff", votes: 35000 },
      { id: "o22", text: "Subscriptions are convenient tho", votes: 2100 },
    ],
    likes: 5600,
    createdAt: Date.now() - 3600000 * 10,
    comments: [],
    isTakenDown: false,
  },
  {
    id: "v11",
    title: "Physical Media: Are you still buying Blu-rays and Vinyl?",
    type: "poll",
    creatorName: "Collector_Soul",
    description:
      "Streaming services keep deleting shows I like. Am I crazy for starting a physical collection again in 2026?",
    options: [
      { id: "p3", text: "Yes, keep the discs! 💿", votes: 8900 },
      { id: "p4", text: "Streaming is all I need ☁️", votes: 7200 },
    ],
    likes: 1200,
    createdAt: Date.now() - 3600000 * 20,
    comments: [],
    isTakenDown: false,
  },
];
