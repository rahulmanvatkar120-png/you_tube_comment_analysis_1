# YT Comment Sentiment Analyzer - Chrome Extension

## Installation

1. Download `extension.zip` from the website
2. Extract the ZIP file
3. Open Chrome and go to `chrome://extensions/`
4. Enable **Developer mode** (top-right toggle)
5. Click **"Load unpacked"**
6. Select the extracted folder (the one containing `manifest.json`)
7. Open any YouTube video and click the extension icon

## Files

- `manifest.json` - Chrome Extension Manifest V3
- `popup.html` - Extension popup UI
- `popup.js` - Popup logic and API calls
- `content.js` - YouTube page comment scraper

## API

The extension connects to a hosted Flask backend for sentiment analysis.
No API key or sign-up required.
