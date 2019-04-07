
browser.webRequest.onBeforeSendHeaders.addListener(function(details) {
  console.log("onBeforeSendHeaders " + details.url);
},
  {urls: ["<all_urls>"]},
  ["blocking", "requestHeaders"]
);

browser.webRequest.onHeadersReceived.addListener(function(details) {
  console.log("onHeadersReceived " + details.url);
},
  {urls: ["<all_urls>"]},
  ["blocking", "responseHeaders"]
);
