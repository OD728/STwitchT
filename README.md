# Twitch Title Shortener

A lightweight userscript that automatically shortens long Twitch stream titles and displays the full title on hover.

![Version](https://img.shields.io/badge/version-1.0.3-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Tampermonkey](https://img.shields.io/badge/Tampermonkey-compatible-brightgreen.svg)
![Greasemonkey](https://img.shields.io/badge/Greasemonkey-compatible-brightgreen.svg)

## 📋 Description

Ever been frustrated by impossibly long Twitch stream titles that break layouts or make the interface cluttered? This userscript solves that problem by:

- ✂️ Automatically shortens stream titles to a reasonable length
- 👁️ Showing the full title when you hover over it
- 🎨 Maintaining Twitch's styling
- ⚡ Zero performance impact - pure CSS solution
- 🔧 Works on all Twitch pages

<div align="center">
  <img src="example.gif" alt="Demo">
</div>

## 🚀 Installation

### Prerequisites
You'll need a userscript manager installed in your browser:
- [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Safari, Edge)
- [Greasemonkey](https://www.greasespot.net/) (Firefox)
- [Violentmonkey](https://violentmonkey.github.io/) (Chrome, Firefox, Edge)

### Install the Script

#### Direct Installation
1. **[Click here to install](https://github.com/OD728/STwitchT/raw/refs/heads/main/twitch-title-truncator.user.js)**
2. Your userscript manager will automatically detect and prompt you to install
3. Click "Install" in the popup
4. Navigate to [Twitch.tv](https://www.twitch.tv) - the script will activate automatically!

## 📝 Usage

Once installed, the script works automatically:
- Long stream titles will be truncated with "..." at the end
- Hover over any truncated title to see the full text
- The full title appears in a styled tooltip that matches Twitch's theme

## ⚙️ Customization

You can customize the script by modifying these values:

```css
/* Change the maximum width before truncation */
max-width: 400px !important;  /* Default: 400px */

/* Adjust hover tooltip styling */
background: #18181b !important;  /* Twitch dark background */
padding: 5px !important;
border-radius: 4px !important;
```

## 🐛 Known Issues

- Titles containing user mentions (@username) may have special styling that needs additional handling
- Very long single words without spaces might overflow

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Thanks to the Twitch community for inspiration
- Built for streamers with creative (and lengthy) title game

---

**Enjoy cleaner Twitch browsing! 🎮**
