// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useCommunity } from "../../contexts/CommunityContext";

export default function LeftSidebar() {
  const { communities, trendingTopics, setActiveCommunity } = useCommunity();

  return (
    <motion.aside
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className='flex flex-col gap-6'
    >
      {/* Communities */}
      <div>
        <p className='text-xs font-bold uppercase tracking-widest mb-3'>Communities</p>
        <div className='flex flex-col gap-1'>
          {communities.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCommunity(c.id)}
              className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                c.active ? "bg-[#f3e8ff] text-[var(--primary-colour)]" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span>{c.name}</span>
              {c.active && (
                <span className='w-5 h-5 rounded-full bg-[var(--primary-colour)] text-white text-[10px] flex items-center justify-center font-bold'>
                  {c.members}
                </span>
              )}
            </button>
          ))}
        </div>
        <button className='mt-2 w-full text-center text-xs text-[var(--primary-colour)] font-semibold border border-[#e9d5ff] rounded-xl py-2 hover:bg-purple-50 transition-colors md:hidden lg:block'>
          Explore more
        </button>
      </div>

      {/* Trending Topics */}
      <div className='bg-white p-4 rounded-xl border border-gray-100 sm:hidden lg:block'>
        <p className='text-xs font-bold uppercase tracking-widest mb-3'>Trending Topics</p>
        <div className='flex flex-wrap gap-2'>
          {trendingTopics.map((t) => (
            <span
              key={t}
              className='px-3 py-1 bg-gray-100 hover:bg-purple-100 hover:text-[var(--primary-colour)] text-gray-600 text-xs font-semibold rounded-full cursor-pointer transition-colors'
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
