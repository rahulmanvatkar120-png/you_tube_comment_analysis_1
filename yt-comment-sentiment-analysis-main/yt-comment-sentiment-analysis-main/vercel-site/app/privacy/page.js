export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Privacy <span className="text-accent">Policy</span>
      </h1>
      <p className="text-[#9090a0] text-center mb-12">
        Last updated: June 24, 2026
      </p>

      <div className="prose prose-invert max-w-none space-y-6">
        <div className="bg-surface border border-[#2a2a32] rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">1. Information We Collect</h2>
          <p className="text-[#9090a0] text-sm leading-relaxed">
            This Chrome extension does NOT collect, store, or transmit any personal data.
            All data processing happens locally in your browser and on our secure backend server.
          </p>
        </div>

        <div className="bg-surface border border-[#2a2a32] rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">2. How It Works</h2>
          <p className="text-[#9090a0] text-sm leading-relaxed">
            The extension scrapes YouTube comments directly from the page you are viewing
            using DOM manipulation. These comments are sent to our hosted API for sentiment
            analysis. We do not store any comment data on our servers after processing.
          </p>
        </div>

        <div className="bg-surface border border-[#2a2a32] rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">3. No Account Required</h2>
          <p className="text-[#9090a0] text-sm leading-relaxed">
            You do not need to create an account or provide any personal information to use
            this extension. No YouTube API key is required. No sign-up needed.
          </p>
        </div>

        <div className="bg-surface border border-[#2a2a32] rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">4. Third-Party Services</h2>
          <p className="text-[#9090a0] text-sm leading-relaxed">
            This extension connects to:
          </p>
          <ul className="list-disc list-inside text-sm text-[#9090a0] mt-2 space-y-1">
            <li>YouTube (youtube.com) — to scrape comments from video pages</li>
            <li>Railway (our backend API) — to analyze sentiment</li>
            <li>Google Gemini API — optional, for AI-powered features (if API key configured)</li>
          </ul>
        </div>

        <div className="bg-surface border border-[#2a2a32] rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">5. Data Security</h2>
          <p className="text-[#9090a0] text-sm leading-relaxed">
            All data transmission happens over HTTPS. Comments are processed in real-time
            and are not stored in any database or log after analysis is complete.
          </p>
        </div>

        <div className="bg-surface border border-[#2a2a32] rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">6. Changes to This Policy</h2>
          <p className="text-[#9090a0] text-sm leading-relaxed">
            We may update this privacy policy from time to time. Any changes will be
            reflected on this page with an updated revision date.
          </p>
        </div>

        <div className="bg-surface border border-[#2a2a32] rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">7. Contact</h2>
          <p className="text-[#9090a0] text-sm leading-relaxed">
            If you have questions about this privacy policy, please open an issue on
            the GitHub repository.
          </p>
        </div>
      </div>
    </div>
  )
}
