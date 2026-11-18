// ==UserScript==
// @name         Twitch Title Shortener
// @namespace    https://github.com/OD728
// @version      2.01
// @description  Automatically shortens long Twitch stream titles with hover preview
// @author       RM
// @match        https://www.twitch.tv/*
// @grant        none
// @license      MIT
// @downloadURL  https://github.com/OD728/STwitchT/raw/refs/heads/main/twitch-title-shortener.user.js
// @updateURL    https://github.com/OD728/STwitchT/raw/refs/heads/main/twitch-title-shortener.user.js
// @supportURL   https://github.com/OD728/STwitchT/issues
// @homepageURL  https://github.com/OD728/STwitchT
// ==/UserScript==

(function() {
  'use strict';

  const style = document.createElement('style');
  style.textContent = `
    [data-a-target="stream-title"] {
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

    [data-a-target="stream-title"]:hover {
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
