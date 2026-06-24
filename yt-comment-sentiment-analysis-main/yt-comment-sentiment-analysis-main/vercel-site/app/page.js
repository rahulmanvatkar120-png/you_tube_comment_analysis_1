'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const features = [
  {
    icon: '😊',
    title: 'Sentiment Analysis',
    desc: 'AI-powered analysis of YouTube comments with Positive, Neutral, and Negative classification.',
    color: 'pos',
  },
  {
    icon: '📊',
    title: 'Distribution Charts',
    desc: 'Beautiful pie charts showing the sentiment breakdown of all comments.',
    color: 'cyan',
  },
  {
    icon: '☁️',
    title: 'Word Cloud',
    desc: 'Visual word cloud generated from comment text to identify trending topics.',
    color: 'purple',
  },
  {
    icon: '❓',
    title: 'Question Extractor',
    desc: 'Automatically finds and categorizes all questions asked by your audience.',
    color: 'neu',
  },
  {
    icon: '🔥',
    title: 'Controversy Score',
    desc: 'Measures how divided your audience is on a scale of 0-10.',
    color: 'orange',
  },
  {
    icon: '⭐',
    title: 'Top Fan Detector',
    desc: 'Ranks your most engaged commenters by positivity and activity.',
    color: 'pos',
  },
  {
    icon: '⏱️',
    title: 'Hype Moment Finder',
    desc: 'Identifies the most-mentioned timestamps in your video.',
    color: 'cyan',
  },
  {
    icon: '💬',
    title: 'Smart Replies',
    desc: 'AI-generated reply drafts for negative comments and questions.',
    color: 'purple',
  },
]

const steps = [
  { num: '01', title: 'Download', desc: 'Click the download button to get the extension ZIP file.' },
  { num: '02', title: 'Extract', desc: 'Extract the ZIP file to any folder on your computer.' },
  { num: '03', title: 'Open Extensions', desc: 'Go to chrome://extensions in your Chrome browser.' },
  { num: '04', title: 'Developer Mode', desc: 'Toggle Developer Mode in the top-right corner.' },
  { num: '05', title: 'Load Unpacked', desc: 'Click "Load unpacked" and select the extracted extension folder.' },
  { num: '06', title: 'Open YouTube', desc: 'Navigate to any YouTube video with comments.' },
  { num: '07', title: 'Analyze', desc: 'Click the extension icon to analyze all comments instantly.' },
]

export default function Home() {
  const [apiStatus, setApiStatus] = useState('checking')

  useEffect(() => {
    fetch('https://yt-sentiment-api.up.railway.app/health')
      .then(r => r.ok ? setApiStatus('online') : setApiStatus('offline'))
      .catch(() => setApiStatus('offline'))
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-36 text-center relative">
          <div className="inline-flex items-center gap-2 bg-surface2 border border-[#2a2a32] rounded-full px-4 py-1.5 mb-6 text-sm">
            <span className={`w-2 h-2 rounded-full ${apiStatus === 'online' ? 'bg-pos' : apiStatus === 'offline' ? 'bg-neg' : 'bg-orange animate-pulse'}`}></span>
            <span className="text-[#9090a0]">
              API {apiStatus === 'online' ? 'Online' : apiStatus === 'offline' ? 'Offline' : 'Checking...'}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            YouTube Comment
            <br />
            <span className="text-accent">Sentiment Analyzer</span>
          </h1>

          <p className="text-[#9090a0] text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Free Chrome extension that analyzes YouTube video comments with AI.
            Get sentiment charts, word clouds, and creator analytics — no API key needed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/vercel-site/extension.zip"
              download
              className="bg-accent text-black font-bold text-lg px-8 py-3 rounded-xl hover:bg-[#d4eb3f] transition shadow-lg shadow-accent/20"
            >
              Download Extension
            </a>
            <Link
              href="/features"
              className="border border-[#2a2a32] text-white font-semibold text-lg px-8 py-3 rounded-xl hover:bg-surface2 transition"
            >
              View Features
            </Link>
          </div>

          <p className="text-xs text-[#5a5a68] mt-4">
            Works with any YouTube video. No sign-up required. 100% free.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Powerful <span className="text-accent">Features</span>
        </h2>
        <p className="text-[#9090a0] text-center mb-12">
          Everything you need to understand your YouTube audience
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-surface border border-[#2a2a32] rounded-xl p-5 hover:border-[#3a3a45] hover:-translate-y-0.5 transition-all"
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#9090a0] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          See It In <span className="text-accent">Action</span>
        </h2>
        <p className="text-[#9090a0] text-center mb-12">
          Beautiful analytics dashboard right in your browser
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface2 border border-[#2a2a32] rounded-xl p-8 flex items-center justify-center h-64">
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-[#5a5a68] text-sm">Sentiment Distribution Chart</p>
            </div>
          </div>
          <div className="bg-surface2 border border-[#2a2a32] rounded-xl p-8 flex items-center justify-center h-64">
            <div className="text-center">
              <div className="text-4xl mb-2">☁️</div>
              <p className="text-[#5a5a68] text-sm">Word Cloud Visualization</p>
            </div>
          </div>
          <div className="bg-surface2 border border-[#2a2a32] rounded-xl p-8 flex items-center justify-center h-64">
            <div className="text-center">
              <div className="text-4xl mb-2">📈</div>
              <p className="text-[#5a5a68] text-sm">Sentiment Trend Over Time</p>
            </div>
          </div>
          <div className="bg-surface2 border border-[#2a2a32] rounded-xl p-8 flex items-center justify-center h-64">
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <p className="text-[#5a5a68] text-sm">Creator Analytics Dashboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Install Steps */}
      <section id="install" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Install in <span className="text-accent">7 Steps</span>
        </h2>
        <p className="text-[#9090a0] text-center mb-12">
          No Python, no Flask, no command line needed
        </p>

        <div className="flex flex-col gap-3">
          {steps.map((s) => (
            <div
              key={s.num}
              className="flex items-start gap-4 bg-surface border border-[#2a2a32] rounded-xl p-4 hover:border-[#3a3a45] transition"
            >
              <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center font-bold text-sm shrink-0">
                {s.num}
              </div>
              <div>
                <h3 className="font-semibold mb-0.5">{s.title}</h3>
                <p className="text-sm text-[#9090a0]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-gradient-to-br from-accent/10 to-purple/5 border border-accent/20 rounded-2xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to analyze your comments?
          </h2>
          <p className="text-[#9090a0] mb-6 max-w-lg mx-auto">
            Download the extension, load it in Chrome, and get instant AI-powered
            sentiment analysis for any YouTube video.
          </p>
          <a
            href="/vercel-site/extension.zip"
            download
            className="inline-block bg-accent text-black font-bold text-lg px-10 py-3 rounded-xl hover:bg-[#d4eb3f] transition shadow-lg shadow-accent/20"
          >
            Download Extension Free
          </a>
          <p className="text-xs text-[#5a5a68] mt-3">
            ZIP file · ~15KB · Works on any OS with Chrome
          </p>
        </div>
      </section>
    </>
  )
}
