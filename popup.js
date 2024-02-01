document.getElementById('githubButton').addEventListener('click', function () {
    chrome.tabs.create({ url: "https://github.com/20Studs/SecretTabbing" });
  });
  
  document.getElementById('rateButton').addEventListener('click', function () {
    chrome.tabs.create({ url: "https://example.com/rate-page-not-set-up-yet" });
  });
  
  document.getElementById('warningButton').addEventListener('click', function () {
    var noticeContainer = document.getElementById('noticeContainer');
    noticeContainer.style.display = 'block';
  });
  
  document.getElementById('secretTabberMode').addEventListener('click', function () {
    chrome.tabs.query({}, function (tabs) {
      for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.remove(tabs[i].id);
      }
      chrome.tabs.create({ url: "https://www.roblox.com/" });
    });
  });
  
  document.getElementById('settingsButton').addEventListener('click', function () {
    var settingsContainer = document.getElementById('settingsContainer');
    settingsContainer.style.display = (settingsContainer.style.display === 'none') ? 'block' : 'none';
  });
  
  document.getElementById('addWebsite').addEventListener('click', function () {
    var websiteInput = document.getElementById('websiteInput');
    var websiteUrl = websiteInput.value.trim();
    if (websiteUrl !== '') {
      chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
          chrome.tabs.remove(tabs[i].id);
        }
        chrome.tabs.create({ url: websiteUrl });
      });
    }
  });
  
