

function script(text) {
  console.log("%cScript Injection", "color: cyan; font-weight: 600; background: black; padding: 0 5px; border-radius: 5px", text);
}

// ====================================
// SCRIPT INJECTION
// ====================================

var gaenabled = window.localStorage.getItem("ga");
if (gaenabled == "false") {
  script("Skipped GA injection because it is disabled by the user.");
} else {
  const gascript = document.createElement("script");
  gascript.setAttribute("async", "");
  gascript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-ZMN4BHJKYZ");
  const inlinegascript = document.createElement("script");
  inlinegascript.innerHTML = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZMN4BHJKYZ');`;
  document.head.append(gascript, inlinegascript);
  script("Injected script 1/2");
}

// const tabCloak = document.createElement("script");
// tabCloak.setAttribute("src", "/js/tab_cloak.js");
// document.head.append(tabCloak);
// script("Injected script 2/3");

// const notify = document.createElement("script");
// notify.setAttribute("src", "/js/notify.js");
// document.head.append(notify);
// script("Injected script 3/3");

const adblock = document.createElement("script");
adblock.setAttribute("src", "https://fundingchoicesmessages.google.com/i/pub-5756835229788588?ers=1");
adblock.setAttribute("nonce", "yibq-w_TR5NOCRWsU-VL0Q");
adblock.setAttribute("async", "");
document.head.append(adblock);
script("Injected script 2/2");
