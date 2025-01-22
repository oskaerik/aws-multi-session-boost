const match = window.location.href.match(/https:\/\/([^/]+?)-/);
const accountId = match ? match[1] : null;

if (accountId) {
  const updateTitle = () => {
    const title = document.querySelector("title");
    if (title && !title.textContent.startsWith(`${accountId} | `)) {
      title.textContent = `${accountId} | ${title.textContent}`;
      console.log(
        `[aws-multi-session-boost] updated title: ${title.textContent}`
      );
    }
  };

  const title = document.querySelector("title");
  if (title) {
    const observer = new MutationObserver(updateTitle);
    observer.observe(title, {
      characterData: true,
      childList: true,
      subtree: true,
    });
    updateTitle();
  }
}
