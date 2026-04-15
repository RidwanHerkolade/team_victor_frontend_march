// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function CommunityBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className='relative flex items-center justify-between gap-4 bg-linear-to-r from-[#7c3aed/20] to-[#d7aeff] rounded-2xl px-5 py-4 mb-6 overflow-hidden shadow-sm border border-gray-100'
    >
      {/* Background decoration */}
      <div className='absolute right-24 top-0 bottom-0 w-32 opacity-10 pointer-events-none'>
        <div className='w-full h-full bg-white rounded-full blur-2xl' />
      </div>

      <div className='flex items-center gap-4 min-w-0'>
        <div className='hidden sm:flex shrink-0 w-40 h-24 relative rounded-xl bg-white/20 items-center justify-center text-2xl'>
          <img src='/images/cbanr.png' alt='community banner' className='w-full h-full object-cover rounded-sm' />
        </div>
        <div className='min-w-0'>
          <p className='font-bold text-sm sm:text-base leading-tight'>Feedback Session in Progress</p>
          <p className='text-xs sm:text-sm mt-0.5 truncate'>Live Portfolio review, Join the discussion!</p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className='shrink-0 bg-white text-(--primary-colour) font-bold text-sm px-4 py-2 rounded-xl shadow-md hover:bg-purple-50 transition-colors'
      >
        Join Now
      </motion.button>
    </motion.div>
  );
}
