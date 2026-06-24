// content.js — Scrapes YouTube comments from the active page (no API key needed)
// Runs on youtube.com/watch pages

(function() {
  'use strict';

  let allComments = [];
  let scrollInterval = null;

  function scrapeComments() {
    const comments = [];
    const commentElements = document.querySelectorAll('ytd-comment-thread-renderer');

    commentElements.forEach(el => {
      try {
        const textEl = el.querySelector('#content-text');
        const authorEl = el.querySelector('#author-text span');
        const timeEl = el.querySelector('#published-time-text a');
        const text = textEl ? textEl.innerText.trim() : '';
        const author = authorEl ? authorEl.innerText.trim() : 'Anonymous';
        const time = timeEl ? timeEl.innerText.trim() : '';

        if (text && text.length > 0) {
          comments.push({
            text: text,
            timestamp: time || new Date().toISOString(),
            authorId: author,
            authorName: author
          });
        }
      } catch(e) {}
    });

    return comments;
  }

  async function scrollToLoadComments() {
    return new Promise((resolve) => {
      let lastCount = 0;
      let sameCount = 0;
      const maxSame = 5;

      scrollInterval = setInterval(() => {
        window.scrollBy(0, 800);
        const current = scrapeComments();

        const seen = new Set(allComments.map(c => c.text));
        current.forEach(c => {
          if (!seen.has(c.text)) {
            allComments.push(c);
            seen.add(c.text);
          }
        });

        if (allComments.length === lastCount) {
          sameCount++;
        } else {
          sameCount = 0;
          lastCount = allComments.length;
        }

        if (sameCount >= maxSame) {
          clearInterval(scrollInterval);
          resolve();
        }
      }, 600);

      setTimeout(() => {
        clearInterval(scrollInterval);
        resolve();
      }, 60000);
    });
  }

  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'scrape') {
      allComments = [];
      scrollToLoadComments().then(() => {
        sendResponse({ comments: allComments, count: allComments.length });
      });
      return true;
    }

    if (msg.action === 'getComments') {
      const fresh = scrapeComments();
      const seen = new Set(allComments.map(c => c.text));
      fresh.forEach(c => {
        if (!seen.has(c.text)) {
          allComments.push(c);
          seen.add(c.text);
        }
      });
      sendResponse({ comments: allComments, count: allComments.length });
      return true;
    }
  });

  setTimeout(() => {
    const initial = scrapeComments();
    allComments = initial;
  }, 2000);
})();
