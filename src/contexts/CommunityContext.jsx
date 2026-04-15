import { createContext, useContext, useState } from "react";

const mockCommunities = [
  { id: 1, name: "African Designers", members: 4, active: true },
  { id: 2, name: "Adobe Creative", members: 12, active: false },
  { id: 3, name: "Interaction Design", members: 7, active: false },
  { id: 4, name: "Figma Design", members: 9, active: false },
];

const mockTrendingTopics = ["#Typography", "#Branding", "#UX/UI"];

const mockForYouPosts = [
  {
    id: 1,
    author: "Sarah K",
    tag: "Frontend Dev",
    tagColor: "bg-red-100 text-red-500",
    avatar: "https://picsum.photos/seed/sarah/40/40",
    title: "Struggling with color Palettes for branding",
    body: "I'm working on a fintech app and can't decide on color schemes.",
    likes: 4,
    comments: 2,
    time: "2h ago",
    image: null,
  },
  {
    id: 2,
    author: "Emma Davis",
    tag: "UX Designer",
    tagColor: "bg-purple-100 text-purple-500",
    avatar: "https://picsum.photos/seed/emma/40/40",
    title: "Logo Review : Need your thoughts!",
    body: "Which version do you think works best for a modern brand?",
    likes: 12,
    comments: 7,
    time: "4h ago",
    image: "https://picsum.photos/seed/logo/80/60",
  },
  {
    id: 3,
    author: "Daniel J.",
    tag: "Product Designer",
    tagColor: "bg-blue-100 text-blue-500",
    avatar: "https://picsum.photos/seed/daniel/40/40",
    title: "What I Wish I Knew Before Learning Design",
    body: "Design is communication, structure, and problem-solving, not just aesthetics.",
    likes: 9,
    comments: 3,
    time: "6h ago",
    image: null,
  },
  {
    id: 4,
    author: "Michael Chen",
    tag: "Mobile Designer",
    tagColor: "bg-green-100 text-green-500",
    avatar: "https://picsum.photos/seed/michael/40/40",
    title: "Struggling with my mobile UI layout",
    body: "Would appreciate any tips on how to make it look cleaner.",
    likes: 6,
    comments: 4,
    time: "8h ago",
    image: "https://picsum.photos/seed/mobile/80/60",
  },
];

const mockRecentActivityPosts = [
  {
    id: 5,
    author: "Yemi Adeyemi",
    tag: "Graphic Designer",
    tagColor: "bg-orange-100 text-orange-500",
    avatar: "https://picsum.photos/seed/yemi/40/40",
    title: "Anyone using AI tools for mockups?",
    body: "Trying to speed up my workflow. Would love recommendations.",
    likes: 3,
    comments: 5,
    time: "1h ago",
    image: null,
  },
  {
    id: 6,
    author: "Fatima A.",
    tag: "Brand Designer",
    tagColor: "bg-pink-100 text-pink-500",
    avatar: "https://picsum.photos/seed/fatima/40/40",
    title: "My first brand identity project — feedback welcome",
    body: "Just wrapped up a full brand identity project. Open to all critiques!",
    likes: 18,
    comments: 11,
    time: "3h ago",
    image: "https://picsum.photos/seed/brand/80/60",
  },
  {
    id: 7,
    author: "Kwame O.",
    tag: "UI Engineer",
    tagColor: "bg-teal-100 text-teal-600",
    avatar: "https://picsum.photos/seed/kwame/40/40",
    title: "Thoughts on Tailwind vs CSS Modules in 2025?",
    body: "Been going back and forth. What's your team's take?",
    likes: 22,
    comments: 14,
    time: "5h ago",
    image: null,
  },
];

const mockTopDesigners = [
  { id: 1, avatar: "images/Ellipse 43.png" },
  { id: 2, avatar: "images/Ellipse 44.png" },
  { id: 3, avatar: "images/Ellipse 45.png" },
  { id: 4, avatar: "images/Ellipse 46.png" },
];

const mockCommunityEvents = [
  { id: 1, title: "Live Feedback Session", date: "March (1-2 hours)", color: "bg-purple-500" },
  { id: 2, title: "Weekly Design Challenge", date: "March (1-4 days)", color: "bg-orange-400" },
];

const CommunityContext = createContext(null);

export function CommunityProvider({ children }) {
  const [communities, setCommunities] = useState(mockCommunities);
  const [activeTab, setActiveTab] = useState("For You");

  // Toggle active community
  const setActiveCommunity = (id) => {
    setCommunities((prev) => prev.map((c) => ({ ...c, active: c.id === id })));
  };

  const posts = activeTab === "For You" ? mockForYouPosts : mockRecentActivityPosts;

  return (
    <CommunityContext.Provider
      value={{
        communities,
        trendingTopics: mockTrendingTopics,
        posts,
        topDesigners: mockTopDesigners,
        communityEvents: mockCommunityEvents,
        activeTab,
        setActiveTab,
        setActiveCommunity,
      }}
    >
      {children}
    </CommunityContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCommunity = () => {
  const context = useContext(CommunityContext);
  if (!context) {
    throw new Error("useCommunity must be used within a CommunityProvider");
  }
  return context;
};
