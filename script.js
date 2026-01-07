//   CONFIDENTIAL PAGE PROTECTION

const confidential = document.getElementById("confidential-content");

/* 1 Disable Right Click */
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

/* 2 Block common shortcut keys */
document.addEventListener("keydown", (e) => {
  // Print Screen
  if (e.key === "PrintScreen") {
    e.preventDefault();
    alert("Screenshots are disabled on this page.");
  }

  // Ctrl / Cmd combinations
  if (
    (e.ctrlKey || e.metaKey) &&
    ["c", "x", "v", "u", "s", "p", "i", "j"].includes(e.key.toLowerCase())
  ) {
    e.preventDefault();
    alert("This action is restricted.");
  }

  // F12 (DevTools)
  if (e.key === "F12") {
    e.preventDefault();
    alert("Developer tools are disabled.");
  }
});

/* 3 Blur content when tab/app loses focus */
window.addEventListener("blur", () => {
  confidential.style.filter = "blur(18px)";
  confidential.style.pointerEvents = "none";
});

window.addEventListener("focus", () => {    
  confidential.style.filter = "blur(0)";
  confidential.style.pointerEvents = "auto";
});

/* 4 Dynamic moving watermark (hard to crop) */
const watermark = document.createElement("div");
watermark.innerText = `CONFIDENTIAL • ${new Date().toLocaleString()}`;

Object.assign(watermark.style, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) rotate(-30deg)",
  fontSize: "3rem",
  color: "rgba(0,0,0,0.12)",
  pointerEvents: "none",
  zIndex: "9999",
  whiteSpace: "nowrap",
  userSelect: "none"
});

document.body.appendChild(watermark);

/* Move watermark slightly every few seconds */
setInterval(() => {
  watermark.style.top = `${40 + Math.random() * 20}%`;
  watermark.style.left = `${40 + Math.random() * 20}%`;
}, 3000);

