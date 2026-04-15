// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { useCommunity } from "../../contexts/CommunityContext";

export default function RightSidebar() {
  const { topDesigners, communityEvents } = useCommunity();

  return (
    <motion.aside
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className='flex flex-col gap-6'
    >
      {/* Top Designers */}
      <div className='bg-white p-4 rounded-xl border border-gray-100'>
        <p className='text-xs font-bold uppercase tracking-widest mb-3'>Top Designers</p>
        <div className='flex items-center gap-4'>
          <div className='flex -space-x-2'>
            {topDesigners.map((d) => (
              <img
                key={d.id}
                src={d.avatar}
                alt='designer'
                className='w-8 h-8 rounded-full border-2 border-white object-cover'
              />
            ))}
          </div>
          <button className='ml-2 px-3 py-1.5 bg-[var(--primary-colour)] text-white text-xs font-bold rounded-lg hover:bg-[var(--hover-color)] transition-colors'>
            Follow
          </button>
        </div>
      </div>

      {/* Community Events */}
      <div className='bg-white p-4 rounded-xl border border-gray-100'>
        <p className='text-xs font-bold uppercase tracking-widest mb-3 '>Community Events</p>
        <div className='flex flex-col gap-3'>
          {communityEvents.map((event) => (
            <div key={event.id} className='flex items-start gap-3'>
              <div className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${event.color}`} />
              <div>
                <p className='text-sm font-semibold text-gray-800 leading-tight'>{event.title}</p>
                <p className='text-xs text-gray-400 mt-0.5 flex items-center gap-1'>
                  <CalendarDays size={11} />
                  {event.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
