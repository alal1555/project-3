document.addEventListener("DOMContentLoaded", function () {
  const copyButtons = document.querySelectorAll('.btn-copy');

  copyButtons.forEach(btn => {
    const tooltip = new bootstrap.Tooltip(btn);

    btn.addEventListener("click", function () {
      const originalTitle = "Tooltip on right";
      const copiedTitle = "تم النسخ";
      const textToCopy = btn.getAttribute("data-text");
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).catch(err => console.error('Copy failed', err));
      }
      btn.setAttribute("title", copiedTitle);
      tooltip._config.title = copiedTitle;
      tooltip.setContent({ '.tooltip-inner': copiedTitle });
      tooltip.show();

      setTimeout(() => {
        alert("تم نسخ النص...");

        tooltip.hide();
        btn.setAttribute("title", originalTitle);
        tooltip._config.title = originalTitle;
        tooltip.setContent({ '.tooltip-inner': originalTitle });
      }, 100);
    });
  });
});
