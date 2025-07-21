/// <reference types="chrome" />

console.log("EchoAssist background script loaded.");

chrome.runtime.onInstalled.addListener(() => {
  console.log("EchoAssist extension installed.");
}); 