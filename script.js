const copyButtons = document.querySelectorAll("[data-copy]");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const text = button.dataset.copy;

    if (!text) {
      return;
    }

    await navigator.clipboard.writeText(text);
    button.textContent = "已复制";
    window.setTimeout(() => {
      button.textContent = "复制示例链接";
    }, 1600);
  });
});
