export const openNewTab = (url: string) => {
  if (!url.includes("http")) {
    return;
  }

  window.open(url, "_blank");
};

export const copyText = (text: string) => navigator.clipboard.writeText(text);
