export default function BoardHeader() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-2xl font-semibold text-white">Tender Tasks</h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Tenders"
              className="bg-[#13151c] text-white text-sm px-4 py-2.5 pr-10 rounded-lg border border-gray-800 focus:outline-none focus:border-gray-700 w-80 placeholder:text-gray-500"
            />
            <svg className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Notification icon */}
          <button className="text-gray-400 hover:text-white transition-colors p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          {/* Profile */}
          <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center ring-2 ring-gray-800">
            <span className="text-white font-medium text-sm">U</span>
          </div>
        </div>
      </div>

      {/* View toggle and actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm bg-[#13151c] text-white rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-200">
            List View
          </button>
          <button className="px-4 py-2 text-sm bg-transparent text-white rounded-lg border border-orange-500 hover:bg-orange-500/10 transition-all duration-200">
            Board View
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm bg-transparent text-white rounded-lg border border-gray-800 hover:border-gray-700 hover:bg-gray-800/30 transition-all duration-200">
            View Tender Details
          </button>
          <button className="px-4 py-2 text-sm bg-transparent text-white rounded-lg border border-gray-800 hover:border-gray-700 hover:bg-gray-800/30 transition-all duration-200 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Columns
          </button>
        </div>
      </div>
    </div>
  );
}
