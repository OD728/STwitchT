// ==UserScript==
// @name         Twitch Title Shortener
// @namespace    https://github.com/OD728
// @version      2.04
// @description  Automatically shortens long Twitch stream titles with hover preview
// @author       OD728
// @license      MIT
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitch.tv
// @match        https://www.twitch.tv/*
// @grant        none
// @homepageURL  https://github.com/OD728/STwitchT
// @supportURL   https://github.com/OD728/STwitchT/issues
// @downloadURL  https://github.com/OD728/STwitchT/raw/refs/heads/main/twitch-title-shortener.user.js
// @updateURL    https://github.com/OD728/STwitchT/raw/refs/heads/main/twitch-title-shortener.user.js
// ==/UserScript==

(function() {
  'use strict';

  const style = document.createElement('style');
  // The attribute is written twice on purpose: it doubles the selector's
  // weight, so it beats Twitch's own "white-space: normal !important" rules
  // (single auto-generated classes like .cmSQVt) no matter which loads last.
  const TITLE = '[data-a-target="stream-title"][data-a-target="stream-title"]';

  style.textContent = `
    ${TITLE} {
      max-width: 400px !important;
      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      display: inline-block !important;
      /* Padding is always there (cancelled out by the negative margin),
         so the text doesn't shift when you hover over it */
      padding: 5px !important;
      margin: -5px !important;
      border-radius: 4px !important;
    }

    ${TITLE}:hover {
      overflow: visible !important;
      white-space: normal !important;
      max-width: none !important;
      position: relative !important;
      z-index: 9999 !important;
      /* Twitch's own background color, so it matches both dark and light theme */
      background: var(--color-background-base, #18181b) !important;
      box-shadow: 0 4px 12px rgba(0,0,0,0.5) !important;
    }
  `;
  (document.head || document.documentElement).appendChild(style);
})();
