// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import PostCard from "./PostCard";
import { useCommunity } from "../../contexts/CommunityContext";


const tabs = ["For You", "Recent Activity"];

export default function FeedTabs() {
 const {posts, setActiveTab, activeTab} = useCommunity();

  return (
    <div>
      <div className='flex gap-1 border-b border-gray-100 mb-1 relative'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 py-2.5 text-sm font-semibold transition-colors ${
              activeTab === tab ? "text-[var(--primary-colour)]" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId='tab-underline'
                className='absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary-colour)] rounded-full'
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Feed */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: activeTab === "For You" ? -12 : 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: activeTab === "For You" ? 12 : -12 }}
          transition={{ duration: 0.25 }}
        >
          {posts.map((post, i) => (
            <PostCard key={post.id} post={post} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
