'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-[#2a2a32]">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-black font-bold text-sm">
            YT
          </div>
          <span className="font-bold text-lg">
            Comment<span className="text-accent">Lens</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="text-[#9090a0] hover:text-white transition">Home</Link>
          <Link href="/features" className="text-[#9090a0] hover:text-white transition">Features</Link>
          <Link href="/install" className="text-[#9090a0] hover:text-white transition">Install</Link>
          <Link href="/privacy" className="text-[#9090a0] hover:text-white transition">Privacy</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#download"
            className="bg-accent text-black font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#d4eb3f] transition"
          >
            Download Free
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-[#2a2a32] px-4 py-4 flex flex-col gap-3">
          <Link href="/" className="text-[#9090a0] hover:text-white" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/features" className="text-[#9090a0] hover:text-white" onClick={() => setMobileOpen(false)}>Features</Link>
          <Link href="/install" className="text-[#9090a0] hover:text-white" onClick={() => setMobileOpen(false)}>Install</Link>
          <Link href="/privacy" className="text-[#9090a0] hover:text-white" onClick={() => setMobileOpen(false)}>Privacy</Link>
        </div>
      )}
    </header>
  )
}
