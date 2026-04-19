import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "../../contexts/AppContext";
import { useLogout } from "../../hooks/useLogout";
import { LogOut, Settings, User, ChevronRight, X } from "lucide-react";


export default function Topbar() {
  const { searchQuery, setSearchQuery } = useApp();
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const handleLogout = useLogout();

  const storedUser = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("truemind_user") || "null");
    } catch {
      return null;
    }
  }, []);

  const currentUser = storedUser || {};

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fullName = currentUser?.name;
  const nameParts = fullName.trim().split(" ");
  const firstNameInitial = nameParts[0]?.[0] || "";
  const lastNameInitial = nameParts[1]?.[0] || "";

  const track =
    currentUser?.track ||
    currentUser?.role ||
    currentUser?.learningTrack ||
    "User";

  const email = currentUser?.email || "";
  const notifications = currentUser?.notifications || 0;

  return (
    <header className="z-20 bg-[#F5F5F7] px-2 pt-1 md:px-6 md:py-3">
      <div className="flex items-center justify-between gap-4">
        {/* SEARCH */}
        <div className="w-full flex-1 rounded-[14px] bg-white p-1 shadow-sm md:rounded-[20px] md:p-1.5">
          <div className="flex items-center gap-2 rounded-[10px] bg-[#F5F5F7] mt-6 md:mt-0 px-2.5 py-2 md:rounded-[16px] md:px-3">
            <img
              src="/images/Search.png"
              alt="search"
              className="h-4 w-4 object-contain opacity-70 md:h-5 md:w-5"
            />

            <input
              type="text"
              placeholder="Search modules, courses, or documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-[10px] text-gray-600 outline-none placeholder:text-gray-400 md:text-sm"
            />

            <button className="flex h-6 w-6 items-center justify-center rounded-full transition hover:bg-white md:h-8 md:w-8">
              <img
                src="/images/sl.png"
                alt="filter"
                className="h-3.5 w-3.5 object-contain md:h-5 md:w-5"
              />
            </button>
          </div>
        </div>

        {/* DESKTOP ONLY */}
        <div className="hidden flex-shrink-0 items-center gap-3 md:flex">
          <button className="relative rounded-full p-2 transition hover:bg-white">
            <img
              src="/images/nt.png"
              alt="notification"
              className="h-5 w-5"
            />

            {notifications > 0 && (
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                {notifications}
              </span>
            )}
          </button>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="flex items-center gap-2 rounded-full px-2 py-1 transition hover:bg-white"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600 text-sm font-semibold text-white">
                {firstNameInitial}
                {lastNameInitial}
              </div>

              <div className="hidden flex-col leading-[1.1] md:flex">
                <span className="text-[12px] font-semibold text-gray-800">
                  {fullName}
                </span>
                <span className="text-[10px] capitalize text-gray-400">
                  {track}
                </span>
              </div>

              <span className="hidden text-sm text-gray-500 md:block">⌄</span>
            </button>

           <AnimatePresence>
  {openMenu && (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute right-0 top-full z-[100] mt-3 w-[320px] overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl"
    >
      {/* Top section */}
      <div className="relative border-b border-gray-100 bg-gradient-to-br from-purple-50 via-white to-white p-5">
        <button
          onClick={() => setOpenMenu(false)}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-black/5 hover:text-gray-700"
        >
          <X size={16} />
        </button>

        <div className="flex items-start gap-4 pr-8">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 text-base font-semibold tracking-wide text-white shadow-md">
            {firstNameInitial}
            {lastNameInitial}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-[15px] font-semibold text-gray-900">
              {fullName}
            </p>
            <p className="truncate text-sm text-gray-500">{email}</p>

            <span className="mt-2 inline-flex rounded-full bg-purple-100 px-2.5 py-1 text-xs font-medium capitalize text-purple-700">
              {track}
            </span>

            <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-purple-600 transition hover:text-purple-700">
              View Profile
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div className="p-2">
        <button className="group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition hover:bg-gray-50">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition group-hover:bg-purple-100 group-hover:text-purple-600">
            <User size={18} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-800">My Account</p>
            <p className="text-xs text-gray-500">Manage your personal profile</p>
          </div>
        </button>

        <button className="group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition hover:bg-gray-50">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition group-hover:bg-purple-100 group-hover:text-purple-600">
            <Settings size={18} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-800">Account Settings</p>
            <p className="text-xs text-gray-500">Preferences and security</p>
          </div>
        </button>

        <div className="my-2 border-t border-gray-100" />

        <button
          onClick={handleLogout}
          className="group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition hover:bg-red-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500 transition group-hover:bg-red-100">
            <LogOut size={18} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-red-600">Logout</p>
            <p className="text-xs text-red-400">Sign out of your account</p>
          </div>
        </button>
      </div>
    </motion.div>
  )}
</AnimatePresence>

          </div>
        </div>
      </div>
    </header>
  );
}