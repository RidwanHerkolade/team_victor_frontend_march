import CommunityBanner from "../../components/Community/CommunityBanner";
import FeedTabs from "../../components/Community/FeedTabs";
import LeftSidebar from "../../components/Community/LeftSidebar";
import RightSidebar from "../../components/Community/RightSidebar";

export default function Community() {
  return (
    <div className='min-h-screen w-full bg-gray-50 px-4 py-6 md:px-8'>
      <div className='max-w-6xl mx-auto'>
        <CommunityBanner />

        <div className='flex flex-col lg:grid lg:grid-cols-[220px_1fr_200px] gap-6'>
          {/* left section */}
          <div className='hidden lg:block'>
            <LeftSidebar />
          </div>

          {/* mobile left sidebar */}
          <div className='lg:hidden'>
            <LeftSidebar />
          </div>

          {/* feeds */}
          <main className='bg-white rounded-2xl px-4 py-4 shadow-sm border border-gray-100'>
            <FeedTabs />
          </main>

          {/* right section */}
          <div className='hidden lg:block'>
            <RightSidebar />
          </div>

          {/* mobile sidebars below feed */}
          <div className='lg:hidden grid grid-cols-1 gap-4'>
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
