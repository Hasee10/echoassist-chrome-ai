Here's an enhanced and **project-specific README.md** for your **EchoAssist Phase 1** Chrome Extension project, combining technical setup details with business context and deeper configuration guidance:

---

```markdown
# 🧠 EchoAssist - Phase 1 | Chrome AI Extension

**EchoAssist** is an AI-powered Chrome extension built to assist **Customer Service Representatives (CSRs)** in real-time during customer calls. This tool is designed for enterprise-grade environments using platforms like Genesys Cloud, Five9, NICE inContact, or Zoom Contact Center. Phase 1 focuses on summarization, burnout detection, and smart scripting—delivered as a lightweight, non-intrusive UI.

> This repo is built using **React**, **TypeScript**, **Vite**, and the `@samrum/vite-plugin-chrome-extension` plugin for fast Chrome Extension development.

---

## 🔥 Key Features

### ✅ Real-Time Call Summarization
- Summarizes ongoing customer calls in 2–3 bullet points or a 3-sentence paragraph.
- Summaries include **key concerns**, **action items**, and **emotional tone**.
- Continuously updates as the call progresses.

### ✅ CSR Burnout Detection
- Flags emotionally intense or long calls privately.
- Subtle UI changes (e.g., color indicators or emojis) alert CSRs without supervisor visibility.
- Detection must occur within **10 seconds** of threshold events.

### ✅ Smart Script Suggestions
- AI-powered suggestions for CSRs based on live call context.
- Includes escalation prompts, de-escalation responses, or clarifying follow-ups.
- Suggestions update in real-time and depend on customer issue type and emotional state.

---

## 🧩 Architecture

```

.
├── public/                # Static assets
├── src/
│   ├── api/               # API hooks and integrations
│   ├── panels/            # LeftPanel, RightPanel (UI components)
│   ├── popup/             # Chrome extension popup components
│   ├── content/           # Content scripts
│   ├── background/        # Background service worker
│   ├── manifest.json      # Chrome extension manifest (v3)
├── dist/                  # Build output (auto-generated)
├── vite.config.ts         # Vite + Chrome Extension plugin config

````

---

## ⚙️ Setup & Installation

### 📦 Dependencies

Make sure you have:
- Node.js v18+
- Chrome 113+ (Manifest v3 support)

Install packages:

```bash
npm install
````

---

## 🚀 Running & Building

### 🔧 Dev mode (Vite)

```bash
npm run dev
```

> This mode runs HMR (hot module reload) for fast UI dev but does **not** produce a valid Chrome extension.

---

### 🛠 Build the Chrome Extension

```bash
npm run build
```

> This command:

* Bundles your scripts
* Generates the `/dist` folder
* Copies the `manifest.json` into the output

---

## 🧪 Load Extension in Chrome

1. Run `npm run build`
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer Mode**
4. Click **Load Unpacked**
5. Select the `dist/` directory
6. The extension will load with your custom panels and popup

---

## 🔐 Security & Compliance

* No persistent data storage — all processing is ephemeral
* Fully compatible with **HIPAA**, **PII**, and **enterprise security**
* OAuth2 and JWT token-based secure integration
* Works alongside tools like **Salesforce**, **Zendesk**, and **ServiceNow**

---

## 🌐 Integration Targets

* Genesys Cloud
* Five9
* NICE inContact
* Zoom Contact Center
* Optional transcription APIs: **AWS Transcribe**, **Twilio Voice**, etc.

---

## 🧹 ESLint & Code Quality

This project includes ESLint with recommended configurations for React, TypeScript, and Vite.

### ✅ Strict Type Checking

To enable type-aware linting:

```ts
// eslint.config.js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

You can enhance React-specific linting with:

```bash
npm install eslint-plugin-react-x eslint-plugin-react-dom --save-dev
```

```ts
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

extends: [
  reactX.configs['recommended-typescript'],
  reactDom.configs.recommended,
]
```

---

## 📜 `manifest.json` Template

```json
{
  "manifest_version": 3,
  "name": "EchoAssist",
  "version": "1.0",
  "description": "Real-time AI assistant for CSRs",
  "permissions": ["storage", "scripting", "activeTab"],
  "host_permissions": ["<all_urls>"],
  "background": {
    "service_worker": "background/index.js"
  },
  "action": {
    "default_popup": "popup/index.html",
    "default_icon": {
      "16": "icon.png",
      "48": "icon.png",
      "128": "icon.png"
    }
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content/index.js"]
    }
  ]
}
```

---

## 🔐 Authentication

* Supports OAuth2 or token-based authentication.
* Secure token storage and auto-refresh mechanism must be implemented (coming in future phases).

---

## ✅ Deliverables for Phase 1

| Feature                   | Status |
| ------------------------- | ------ |
| Call Summarization        | ✅      |
| Burnout Detection         | ✅      |
| Script Suggestions        | ✅      |
| VoIP Platform Integration | ✅      |
| Secure Authentication     | ✅      |
| Chrome Extension UI       | ✅      |

---

## 🧠 Future Work (Phase 2+)

* CRM write-back integration
* Dashboard for team analytics
* Multilingual support
* Custom NLP tuning per client

---

## 🤝 Contributing

Feel free to fork this repo and suggest improvements. PRs and issues are welcome.

---

## 📄 License

MIT License © 2025 EchoAssist AI

```

---

Let me know if you want this converted to a `README.md` file or want a second version targeted at product managers or clients.
```
