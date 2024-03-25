
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('getTitleButton').addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var currentTab = tabs[0];
            var tabTitle = currentTab.title;
            document.getElementById('tabTitle').textContent = alert(tabTitle)
        });
    });
});


