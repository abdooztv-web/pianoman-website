export default function AuthorCard() {
  return (
    <div className="flex items-center gap-4 p-4 border border-gray-100 bg-[#FAF8F5] mb-10">
      {/* Avatar icon */}
      <div className="w-12 h-12 rounded-full flex-shrink-0 bg-gray-200 flex items-center justify-center">
        <svg className="w-7 h-7 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
        </svg>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-bold text-gray-900">Abdelrhman Abdalla</span>
          <span className="text-gray-300 text-xs">·</span>
          <span className="text-xs text-gray-400">Co-Founder, Pianoman Egypt</span>
        </div>
        <p className="text-xs text-gray-400 mt-0.5 leading-snug">
          Piano specialist in Cairo. I run Pianoman Egypt — rental, tuning, and restoration.
        </p>
      </div>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/abdelrhman-abdallah-59a230184/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 text-gray-300 hover:text-[#0A66C2] transition-colors"
        aria-label="Abdelrhman Abdalla on LinkedIn"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
    </div>
  );
}
