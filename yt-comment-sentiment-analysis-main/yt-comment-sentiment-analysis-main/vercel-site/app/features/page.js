import Link from 'next/link'

const features = [
  {
    icon: '😊',
    title: 'Sentiment Analysis',
    desc: 'AI-powered classification of every comment as Positive, Neutral, or Negative using a trained LightGBM model.',
    color: 'bg-pos/10 text-pos',
    details: [
      'Trained on thousands of labeled YouTube comments',
      'LightGBM model with TF-IDF vectorization',
      'N-gram range (1,3) with 5000 max features',
      'Real-time prediction via MLflow model serving',
    ],
  },
  {
    icon: '📊',
    title: 'Distribution Charts',
    desc: 'Beautiful pie chart showing the exact percentage breakdown of sentiment across all comments.',
    color: 'bg-cyan/10 text-cyan',
    details: [
      'Generated server-side with matplotlib',
      'Positive / Neutral / Negative breakdown',
      'Percentage labels with color coding',
      'Transparent PNG for clean embedding',
    ],
  },
  {
    icon: '☁️',
    title: 'Word Cloud',
    desc: 'Visual representation of the most frequently used words in all comments.',
    color: 'bg-purple/10 text-purple',
    details: [
      'Generated from preprocessed comment text',
      'Stop words removed, words lemmatized',
      'Customizable colors and dimensions',
      'Identifies trending topics instantly',
    ],
  },
  {
    icon: '📈',
    title: 'Sentiment Trend Graph',
    desc: 'Track how sentiment changes over time with a monthly trend line chart.',
    color: 'bg-neu/10 text-neu',
    details: [
      'Monthly sentiment percentage tracking',
      'Separate lines for Positive, Neutral, Negative',
      'Time-series analysis of audience mood',
      'Identifies seasonal patterns in engagement',
    ],
  },
  {
    icon: '❓',
    title: 'Question Extractor',
    desc: 'Automatically finds all questions from comments and categorizes them by topic.',
    color: 'bg-neu/10 text-neu',
    details: [
      'Rule-based extraction with regex patterns',
      'Categories: Tutorial requests, Gear questions, Collab asks, General',
      'Helps identify what your audience wants to know',
      'Prioritizes questions needing creator response',
    ],
  },
  {
    icon: '🔥',
    title: 'Controversy Score',
    desc: 'A 0-10 score measuring how divided your audience is.',
    color: 'bg-orange/10 text-orange',
    details: [
      'Based on positive vs negative ratio balance',
      'Polarization factor (ignores neutral comments)',
      'Low (0-3), Moderate (3-6), High (6-10)',
      'Helps identify polarizing content',
    ],
  },
  {
    icon: '⭐',
    title: 'Top Fan Detector',
    desc: 'Ranks your most valuable community members by engagement and positivity.',
    color: 'bg-pos/10 text-pos',
    details: [
      'Tracks comment count per user',
      'Calculates positivity rate per user',
      'Composite scoring: count × positivity × 10',
      'Minimum 2 comments required to qualify',
    ],
  },
  {
    icon: '📋',
    title: 'Complaint Clusters',
    desc: 'Groups negative comments by topic to identify recurring issues.',
    color: 'bg-neg/10 text-neg',
    details: [
      'Audio issues, Too many ads, Video too long',
      'Content quality, Clickbait, Pacing issues',
      'Shows sample comments per cluster',
      'Helps prioritize content improvements',
    ],
  },
  {
    icon: '⏱️',
    title: 'Hype Moment Finder',
    desc: 'Finds the most-mentioned timestamps in your video.',
    color: 'bg-cyan/10 text-cyan',
    details: [
      'Regex extraction of timestamps from comments',
      'Counts mentions per timestamp',
      'Shows positivity ratio per moment',
      'Identifies your video\'s best moments',
    ],
  },
  {
    icon: '💬',
    title: 'Smart Reply Drafts',
    desc: 'AI-generated reply suggestions for negative comments and questions.',
    color: 'bg-purple/10 text-purple',
    details: [
      'Powered by Google Gemini 2.0 Flash',
      'Fallback to rule-based if no API key',
      'Targets negative comments and questions',
      'Warm, professional tone by default',
    ],
  },
  {
    icon: '💡',
    title: 'Content Idea Miner',
    desc: 'AI suggests your next video ideas based on audience comments.',
    color: 'bg-accent/10 text-accent',
    details: [
      'Analyzes top questions and frequent words',
      'Powered by Gemini for creative suggestions',
      'Fallback to keyword-based if no API key',
      '5 actionable video ideas per analysis',
    ],
  },
  {
    icon: '💊',
    title: 'Community Health Score',
    desc: 'A single 0-100 score summarizing your community\'s overall health.',
    color: 'bg-pos/10 text-pos',
    details: [
      '40% sentiment contribution',
      '30% toxicity penalty',
      '30% engagement bonus (depth + questions)',
      'Labels: Healthy, Moderate, Needs Attention, Concerning',
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
        All <span className="text-accent">Features</span>
      </h1>
      <p className="text-[#9090a0] text-center mb-12 max-w-xl mx-auto">
        12 powerful features to help you understand your YouTube audience and grow your channel.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-surface border border-[#2a2a32] rounded-xl p-6 hover:border-[#3a3a45] transition"
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${f.color}`}>
                {f.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{f.title}</h3>
                <p className="text-sm text-[#9090a0] mb-3">{f.desc}</p>
                <ul className="space-y-1">
                  {f.details.map((d, j) => (
                    <li key={j} className="text-xs text-[#5a5a68] flex items-start gap-2">
                      <span className="text-accent mt-0.5">&#x2022;</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/install"
          className="inline-block bg-accent text-black font-bold px-8 py-3 rounded-xl hover:bg-[#d4eb3f] transition"
        >
          Get Started Now
        </Link>
      </div>
    </div>
  )
}
