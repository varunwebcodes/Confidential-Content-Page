# Confidential-Content-Page

A simple HTML/CSS/JS page with highly confidential content UI that tries to **prevent screenshots and copying**.

---

## 🧩 Project Goal

Websites often display sensitive information that developers want to protect from unauthorized copying or screenshots. On **mobile apps** this is possible using OS-level flags (e.g., Android `FLAG_SECURE`) but **on the web true screenshot blocking is not possible** because browsers don’t have access to OS screenshot APIs.

This project demonstrates **a set of techniques to make screenshots harder to capture and to discourage users from sharing confidential content**.

---

## ❗ Problem: Screenshot Blocking on Web

On the web, **there is no native API** that allows JavaScript or CSS to *completely block screenshots*, because screenshot functionality is controlled by the **operating system** and not by browsers. :contentReference[oaicite:1]{index=1}

Even if you intercept keys like `PrintScreen`, the OS may capture the screen before your script runs.

💡 Common misunderstandings:
- `e.preventDefault()` on keyboard events will **not block OS level screenshots**.
- `alert()` on `PrintScreen` key is just a warning, not a block.
- Browsers don’t expose secure flags like native apps do.

---

## ✅ What Techniques This Project Uses

To deter unauthorized screenshots or copying, the page implements:

### 
🛡️ 1. Disable Right-Click
Prevents context menu and casual right-click saving or copying.

⌨️2. Block Common Keys (Limited)
Attempts to block keys like PrintScreen, Ctrl+C, Ctrl+U, etc., with alerts. This is only a user deterrent (not real blocking).

👁️‍🗨️ 3. Blur Content on Tab Losing Focus
If the user switches tabs, minimizes, or moves away, the content is blurred so screenshots taken off focus or in the background show unreadable content.

💧 4. Dynamic Watermark
A translucent watermark moves periodically to make cropping or sharing cleaner screenshots harder.

Why Complete Screenshot Blocking Cannot Work
Native apps (like banking apps) can prevent screenshots by using OS-level flags. On Android, launching a screen with FLAG_SECURE ensures screenshots and recordings are blocked. Web browsers do not provide such APIs to web pages. 
How-To Geek

Additionally:
Browser extensions can bypass key blocks
Users can take pictures of the screen with another device
Specialized screen capture tools ignore JS key listeners

🧾 Conclusion
Although true screenshot blocking is impossible on the web, this project showcases best-effort deterrent techniques. It illustrates what can and cannot be done — helping developers understand web security limits.
If you need real screenshot blocking, consider building a native app or using platform-specific video/DRM systems instead.
