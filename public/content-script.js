document.addEventListener('DOMContentLoaded', function() {
    const app = document.createElement('div');
    app.id = 'chrome-extension-app-root';
    document.body.appendChild(app);
  
    const script = document.createElement('script');
    // script.src = chrome.runtime.getURL('static/js/main.js');
    document.head.appendChild(script);
  });
  