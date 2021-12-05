import ReactGA from "react-ga4";

export const openNewTab = (url: string) => {
  if (!url.includes("http")) {
    return;
  }

  ReactGA.event({
    category: "user action",
    action: "open new tab",
    label: `${url}`,
  });

  window.open(url, "_blank");
};

export const copyText = (text: string) => navigator.clipboard.writeText(text);
