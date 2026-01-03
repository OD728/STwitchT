# ✂️ Twitch Title Shortener Userscript

A lightweight userscript that automatically shortens overly long Twitch stream titles, preventing layout issues, and displays the full text on hover.

![Version](https://img.shields.io/badge/version-2.00-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Compatibility](https://img.shields.io/badge/Userscript%20Managers-Compatible-brightgreen.svg)

---

## Why Use It?

Long stream titles can clutter the Twitch interface. This script provides a simple, pure CSS solution to enhance focus:

* **Concise Titles**: Titles are truncated to a maximum width (`400px` by default) and end with an ellipsis (`...`).
* **Hover Preview**: Simply hover over the truncated title to instantly view the full, original text in a clean, Twitch-styled tooltip.
* **Zero Performance Impact**: Achieved using only CSS, ensuring fast and seamless browsing.

![](https://raw.githubusercontent.com/OD728/STwitchT/refs/heads/main/example.gif)
---

## Installation

You need a userscript manager installed in your browser: **Tampermonkey**, **Violentmonkey**, **Greasemonkey**, or **Scriptcat**.

### Important MV3 Compatibility Note (Chrome/Edge)
Google's Manifest V3 (MV3) update introduces restrictions that affect some older userscript managers. If you are using a Chromium-based browser (Chrome, Edge) and encounter issues:
1.  Ensure you have the latest version of your chosen manager.
2.  Be aware that some managers (like **Tampermonkey** and **Violentmonkey**) offer **MV3-compatible beta versions** or may require the user to manually enable **Developer Mode** to function correctly.
3.  **Scriptcat** is known for its strong MV3 support.

The script is active immediately upon installation on all `twitch.tv` pages.

---

## Customization

The truncation width and hover styling are easily adjusted by editing the CSS within the userscript file:

```css
[data-a-target="stream-title"] {
  /* Set the max width before truncation occurs */
  max-width: 400px !important; /* Default: 400px */
}

[data-a-target="stream-title"]:hover {
  /* Customize the appearance of the hover tooltip */
  background: #18181b !important; /* Twitch dark background */
  padding: 5px !important;
  border-radius: 4px !important;
  z-index: 9999 !important;
}
🐛 Known Issues
Titles with special styling (e.g., user mentions @username) might require minor adjustments.

Extremely long words without spaces may cause minor overflow.
