// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";

export default function PostCard({ post, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      className='flex gap-3 py-4 border-b border-gray-100 last:border-0'
    >
      {/* Avatar */}
      <img src={post.avatar} alt={post.author} className='w-10 h-10 rounded-full object-cover shrink-0 mt-0.5' />

      <div className='flex-1 min-w-0'>
        <div className='flex items-center gap-2 flex-wrap mb-1'>
          <span className='font-semibold text-gray-900 text-sm'>{post.author}</span>
          <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${post.tagColor}`}>{post.tag}</span>
        </div>

        {/* Content */}
        <div className='flex items-start justify-between gap-3'>
          <div className='min-w-0'>
            <p className='text-gray-900 font-semibold text-sm leading-snug'>{post.title}</p>
            <p className='text-gray-500 text-xs mt-1 leading-relaxed line-clamp-2'>{post.body}</p>
          </div>

          {/* Thumbnail */}
          {post.image && <img src={post.image} alt='post' className='w-16 h-12 rounded-lg object-cover shrink-0' />}
        </div>

        {/* Footer */}
        <div className='flex items-center gap-4 mt-2'>
          <button className='flex items-center gap-1 text-gray-400 hover:text-red-400 transition-colors'>
            <Heart size={13} />
            <span className='text-xs'>{post.likes}</span>
          </button>
          <button className='flex items-center gap-1 text-gray-400 hover:text-purple-500 transition-colors'>
            <MessageCircle size={13} />
            <span className='text-xs'>{post.comments}</span>
          </button>
          <span className='text-xs text-gray-400 ml-auto'>{post.time}</span>
        </div>
      </div>
    </motion.div>
  );
}
