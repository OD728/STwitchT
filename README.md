# Twitch Title Shortener Userscript

This lightweight userscript automatically shortens long Twitch stream titles to prevent layout issues and displays the full text on hover.

## Key Features

* **Concise Titles**: Titles are truncated to a maximum width (400px by default) with an ellipsis.
* **Hover Preview**: Hover over a title to view the full text in a Twitch-styled tooltip.
* **High Performance**: Pure CSS implementation ensures zero impact on browsing speed.

![](https://raw.githubusercontent.com/OD728/STwitchT/refs/heads/main/example.gif)

## Installation

A userscript manager such as Tampermonkey, Violentmonkey, or Scriptcat is required.

1. Open your manager and create a new script.
2. Copy the code from [this link](https://raw.githubusercontent.com/OD728/STwitchT/main/twitch-title-shortener.user.js).
3. Paste the code into the editor and save (Ctrl+S).

### Chrome and Edge Compatibility
Due to Manifest V3 restrictions, Chromium-based browser users should:
1. Use the latest version of their manager.
2. Enable **Developer Mode** in the browser's extension settings if issues occur.
3. Note that Scriptcat provides strong support for these requirements.

## Customization

Adjust truncation width and hover styling by editing the CSS within the script:

```css
[data-a-target="stream-title"] {
  max-width: 400px !important; /* Default truncation width */
}

[data-a-target="stream-title"]:hover {
  background: #18181b !important;
  padding: 5px !important;
  border-radius: 4px !important;
  z-index: 9999 !important;
}
