import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a32] bg-surface mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-accent rounded flex items-center justify-center text-black font-bold text-xs">
            YT
          </div>
          <span className="font-semibold text-sm">
            Comment<span className="text-accent">Lens</span>
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs text-[#5a5a68]">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/features" className="hover:text-white transition">Features</Link>
          <Link href="/install" className="hover:text-white transition">Install</Link>
          <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
        </div>
        <p className="text-xs text-[#5a5a68]">
          &copy; 2026 CommentLens. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
