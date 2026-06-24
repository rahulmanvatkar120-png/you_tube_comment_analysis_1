export default function InstallPage() {
  const steps = [
    {
      num: 1,
      title: 'Download the Extension',
      desc: 'Click the download button to get the extension ZIP file.',
      detail: 'The file is ~15KB and works on Windows, Mac, and Linux.',
    },
    {
      num: 2,
      title: 'Extract the ZIP',
      desc: 'Right-click the ZIP file and select "Extract All" (Windows) or double-click (Mac).',
      detail: 'Extract to any folder — Desktop is fine.',
    },
    {
      num: 3,
      title: 'Open Chrome Extensions',
      desc: 'Type chrome://extensions in your Chrome address bar and press Enter.',
      detail: 'Alternatively: Menu → More Tools → Extensions.',
    },
    {
      num: 4,
      title: 'Enable Developer Mode',
      desc: 'Toggle the "Developer Mode" switch in the top-right corner of the page.',
      detail: 'This allows loading unpacked extensions from local files.',
    },
    {
      num: 5,
      title: 'Click "Load Unpacked"',
      desc: 'Click the "Load unpacked" button that appears after enabling Developer Mode.',
      detail: 'A file picker window will open.',
    },
    {
      num: 6,
      title: 'Select the Extension Folder',
      desc: 'Navigate to the extracted folder and select it. The folder must contain manifest.json directly inside it.',
      detail: 'Select the folder named "frontend-prod" or "frontend" — NOT the parent folder.',
    },
    {
      num: 7,
      title: 'Open YouTube & Analyze',
      desc: 'Go to any YouTube video, wait for comments to load, then click the extension icon.',
      detail: 'The extension will scrape comments and send them to the API for analysis.',
    },
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Installation <span className="text-accent">Guide</span>
      </h1>
      <p className="text-[#9090a0] text-center mb-12">
        Get up and running in under 2 minutes
      </p>

      <div className="space-y-4">
        {steps.map((s) => (
          <div
            key={s.num}
            className="bg-surface border border-[#2a2a32] rounded-xl p-5 hover:border-[#3a3a45] transition"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent text-black rounded-lg flex items-center justify-center font-bold text-sm shrink-0">
                {s.num}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                <p className="text-[#f0f0f2] mb-1">{s.desc}</p>
                <p className="text-xs text-[#5a5a68]">{s.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-surface2 border border-[#2a2a32] rounded-xl p-6">
        <h3 className="font-bold mb-2 text-orange">Common Issues</h3>
        <ul className="space-y-2 text-sm text-[#9090a0]">
          <li className="flex items-start gap-2">
            <span className="text-neg">&#x2717;</span>
            <div>
              <strong className="text-white">"Manifest file is missing"</strong> — You selected the wrong folder.
              Select the folder that directly contains manifest.json (the <code className="bg-bg px-1 rounded">frontend</code> or <code className="bg-bg px-1 rounded">frontend-prod</code> folder).
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neg">&#x2717;</span>
            <div>
              <strong className="text-white">"Could not connect to page"</strong> — Make sure you are on a YouTube video page (youtube.com/watch?v=...) and not on the YouTube homepage.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neg">&#x2717;</span>
            <div>
              <strong className="text-white">"Error connecting to analysis server"</strong> — The backend API may be down. Check the API status on the home page.
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <a
          href="/vercel-site/extension.zip"
          download
          className="inline-block bg-accent text-black font-bold px-8 py-3 rounded-xl hover:bg-[#d4eb3f] transition"
        >
          Download Extension ZIP
        </a>
      </div>
    </div>
  )
}
